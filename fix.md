# Kế hoạch rà soát và sửa Coffee3D

Ngày rà soát: 07/11/2026
Phạm vi: mã nguồn trong repo; chưa xác minh rules đang chạy trên Firebase production.

## Tóm tắt

Các vấn đề cần ưu tiên là quyền đọc/ghi dữ liệu lưu và bảng xếp hạng, việc nối bộ tạo người thật mới vào game chưa xong, model vẫn chuyển về nhân vật cũ ở một số thao tác, và giới hạn hiệu năng khi nhiều người cùng vào. Danh sách dưới đây phân biệt lỗi còn thấy trong mã hiện tại với lỗi được Graph Memory ghi nhận cần tái kiểm tra.

## P0 — Rà soát bảo mật Firebase

### Sổ lưu và mã khôi phục có thể bị đọc hoặc ghi trái phép

- **Bằng chứng:** Graph Memory ghi nhận rules hiện cho tài khoản đã xác thực đọc/ghi `saves` bằng mã; mã save còn xuất hiện tại trường `k` trong leaderboard công khai.
- **Tác động:** người khác có thể đọc/ghi đè dữ liệu game hoặc dùng mã khôi phục của người chơi.
- **Cần làm:** đọc toàn bộ `database.rules.json`, lần theo mọi chỗ tạo/đọc `saves`, `lb`, `chat`, `rooms`; xác định chủ sở hữu dữ liệu và ranh giới quyền. Viết rules giới hạn quyền theo UID, bỏ bí mật khỏi dữ liệu công khai; kiểm chứng bằng emulator cho người lạ, chủ dữ liệu và người được phép.
- **Trạng thái:** rules trong repo hiện không khai báo `saves` hoặc `lb`, nên mặc định từ chối truy cập. Cần kiểm tra rules production và phương án khôi phục dữ liệu trước khi kết luận hoặc mở lại các đường dẫn này.

## P1 — Hoàn tất model người thật và thao tác trong game

### Bộ tạo Ara chưa được tích hợp vào flow của Coffee3D

- **Bằng chứng hiện tại:** `index.html` chỉ có style 0–4. `vendor/ara3dgen/src/cafe-generator.ts` và bản build trong `character/` đã có, nhưng chưa có nút mở editor, nhận cấu hình, lưu recipe, dựng model hay gửi recipe trong presence.
- **Tác động:** người chơi chưa thể dùng model tự tạo trong quán hoặc chia sẻ diện mạo đó cho người chơi khác.
- **Cần làm:** nối iframe editor qua `postMessage` cùng origin; xác thực payload và giới hạn kích thước; lưu recipe cục bộ; tạo GLB trong worker; đồng bộ recipe với presence; giới hạn số model custom tải đồng thời và cache theo recipe. Kiểm tra recipe cũ/sai/thiếu và model tải lỗi.
- **Lưu ý:** không đưa payload model lớn lên Firebase; recipe ngắn vẫn được các thành viên trong cùng phòng đọc.

### Model 3D bị thay bằng nhân vật hình khối ở một số trạng thái

- **Bằng chứng hiện tại:** `updateRealAvatar` nhận `fallback`; vòng lặp game bật fallback khi chiến đấu, hành động, cầm vũ khí, cần câu hoặc guitar (`index.html`, khoảng dòng 2124, 3090, 3104). Vì thế ảnh #1 có thể còn hiện nhân vật cũ khi chơi guitar.
- **Tác động:** nhân vật mất tính nhất quán; thao tác cầm, ngồi, tương tác trông sai giữa hai hệ model.
- **Cần làm:** lập bảng toàn bộ trạng thái và đạo cụ đang có; ánh xạ action/animation và điểm gắn vật cho rig người thật. Không bật fallback im lặng nếu model có rig tương ứng. Nếu thiếu animation, dùng tư thế an toàn trên rig thật.

### Tư thế ngồi có thể xuyên ghế/băng

- **Bằng chứng:** Graph Memory ghi nhận model phiêu lưu giao với băng tròn quanh cây dù đã thử chỉnh độ cao hông.
- **Tác động:** chân/hông lún hoặc ghế xuyên cơ thể.
- **Cần làm:** kiểm tra các loại ghế, mọi model và kích thước; căn pose, chiều cao ghế, điểm ngồi và hướng nhân vật. Đây là lỗi đã ghi nhận, cần tái hiện lại trước khi sửa.

### Độ chi tiết và khả năng tùy biến quần áo chưa tương xứng yêu cầu

- **Bằng chứng hiện tại:** style có sẵn 1–4 và `wardrobe.js` tô màu lên material có sẵn; chưa phải hệ chọn nhiều hình dáng trang phục/đồ cosplay riêng biệt.
- **Tác động:** đổi màu không tạo ra kiểu quần áo mới; cosplay và gương mặt phụ thuộc bộ asset hiện có.
- **Cần làm:** phân biệt thay màu vật liệu với thay asset/outfit; kiểm tra license của từng model/texture; thiết kế slot tóc, mặt, thân hình, áo, quần, giày, phụ kiện và cosplay. Chỉ bật tùy chọn mà asset thật sự hỗ trợ.

## P1 — Người chơi đồng thời và đồng bộ trạng thái

### Custom model làm tăng tải tải asset, dựng hình và bộ nhớ

- **Bằng chứng hiện tại:** game giới hạn số peer hiển thị model thật theo khoảng cách (2 ở QL=0, 3 cấu hình thấp, tối đa 8), nhưng `newEnt()` vẫn gọi `useRealAvatar()` khi tạo peer. Vì thế giới hạn hiển thị chưa chắc giới hạn số lần tải/dựng model.
- **Tác động:** khi nhiều người vào cùng lúc, tải GLB, giải nén recipe và tạo texture có thể làm khựng máy hoặc tăng RAM.
- **Cần làm:** trì hoãn dựng model peer xa; đặt hàng đợi và giới hạn đồng thời; giới hạn kích thước recipe/cache; huỷ kết quả nếu peer rời phòng; đo 1/10/25/50 người trong emulator và ghi p95 thời gian cập nhật, thời gian frame, số model/RAM.
- **Chưa biết:** quy mô tải production và giới hạn thực Firebase chưa được đo.

### State presence cần giới hạn và xác thực chặt chẽ

- **Bằng chứng hiện tại:** presence JSON được gửi qua `s`, rules giới hạn chuỗi dưới 8000 ký tự (`database.rules.json`). Custom recipe chưa có trong `myState()`; khi bổ sung phải tính cùng toàn bộ state, không chỉ riêng recipe.
- **Cần làm:** kiểm tra serialize/parse, độ dài từng trường, kiểu số, tọa độ, wardrobe, chat và recipe. Từ chối payload sai ở cả client lẫn rules; đo tần suất `push()` và dung lượng thực tế.

## P2 — Tác vụ cầm, mua, uống, ăn và đạo cụ

- **Bằng chứng cần lưu ý:** bộ test hiện có bao phủ một số lỗi đổi đồ uống/đồ ăn và mapping material, nhưng chưa chứng minh mọi món hàng, mọi tư thế cầm, tay trái/phải, ngồi/đứng, animation và model custom hoạt động chuẩn.
- **Cần làm:** kiểm kê ID món trong `ITEM` và luồng mua/trừ xu/tồn kho/trang bị; với từng loại đồ kiểm tra tay cầm, hướng, tỉ lệ, thay món khi đang cầm, uống/ăn hết, ngồi, đi bộ, rời phòng và đồng bộ sang peer. Ưu tiên các mục đang sai người dùng báo trước: guitar, cầm nắm, uống, mua nước/đồ.
- **Tiêu chí:** không mất xu hoặc vật phẩm sai; vật cũ được gỡ khi thay; model không xuyên vật; peer thấy trạng thái khớp.

## P2 — Ánh sáng, vật thể và cảnh quán

- Kiểm tra đèn ngày/đêm, vật liệu emissive, bóng đổ và model nhiều material; rà ánh sáng hồ Koi/thác nước ở mức sáng khác nhau.
- Kiểm tra hình dáng/tỉ lệ/điểm va chạm của ly, món ăn, guitar, đồ mua và vật trang trí; đảm bảo chúng không xuyên tay/bàn/ghế.
- Tối ưu số đèn đổ bóng, texture và vật thể động trên thiết bị cấu hình thấp; không đánh đổi độ rõ của nhân vật.

## P2 — Nhạc, TV và kết nối dữ liệu

- Rà `youtube.js`, flow chọn video/kênh và state `mu`/`tv` trong `index.html`.
- Kiểm tra allowlist URL, URL giả mạo, video tắt nhúng, livestream không khả dụng, autoplay bị chặn, timeout và lỗi mạng.
- Kiểm tra cả phòng nhận cùng nguồn/kênh, quyền thay đổi nguồn, trạng thái đang phát và hành vi khi người đặt nguồn rời quán. Chỉ hiển thị nội dung thật sự nhúng được; không giả báo đang phát.

## P3 — Chất lượng mã và khả năng vận hành

- [x] Đã bỏ `avatarProbe` khỏi vòng lặp frame trong `index.html`; 20 kiểm thử local hiện có đạt.
- Rà các `.catch()` rỗng trong adapter Firebase để đảm bảo lỗi lưu/nhắn tin không bị che mất; hiện mã có một số catch không thông báo lỗi.
- Rà route editor trong Firebase Hosting: MIME cho `.pack`, `.wasm`/worker, cache headers, fallback route, tải asset tương đối, CSP và kích thước tổng deploy. Bản `character/` có nhiều asset và bundle sinh ra; cần xác nhận deploy đủ và không chứa artifact build cũ.
- Kiểm tra Git diff/ignore trước khi commit: `vendor/` và `character/` chứa asset khá lớn; xác định cách lưu một bản nguồn chuẩn để tránh nhân đôi binary và vượt giới hạn GitHub/hosting.

## Thứ tự rà soát đề xuất

1. Chốt quyền đọc/ghi Firebase và kiểm tra rules trên emulator.
2. Kiểm kê luồng game và tái hiện lỗi model/đạo cụ/ngồi đang thấy.
3. Tích hợp trình tạo custom model, lưu recipe và đồng bộ peer.
4. Giới hạn tải model và đo nhiều người trên emulator.
5. Rà YouTube/TV, ánh sáng, vật thể và giao diện ở thiết bị yếu.
6. Kiểm tra build/deploy, kiểm tra rules đã phát hành và xác nhận production sau khi có đủ quyền truy cập.

## Điều kiện đóng từng lỗi

Mỗi mục chỉ đánh dấu xong khi có: bước tái hiện trước sửa, thay đổi nhỏ có căn cứ, kiểm tra phù hợp, và ghi rõ phần nào chỉ chạy local/emulator so với phần đã xác minh trên production. Chưa có bằng chứng production thì ghi “chưa xác minh production”.

## Bổ sung sau phản hồi người dùng — lỗi nhìn thấy trong game

### Tạo nhân vật vẫn cho ra model cũ

- **Triệu chứng người dùng báo:** chọn/tạo nhân vật theo model mới nhưng lúc tạo xong lại thấy kiểu cũ; nhiều lỗi xuất hiện cùng lúc.
- **Nguyên nhân có thể đọc thấy trong code:** mặc định chỉ áp dụng khi chưa có `cafe3d_avatar_style` trong localStorage. Người đã lưu style `0` vẫn dùng nhân vật cũ; `setMyRig()` dựng lại model dựa trên style đã lưu. Ngoài ra preview và nhân vật trong quán cùng gọi `useRealAvatar()` nhưng một số action/đạo cụ bật `fallback`, làm model thật bị ẩn.
- **Cách rà:** xóa cache không được xem là bản sửa. Kiểm tra người chơi mới, người đã lưu style 0, người đổi qua từng style, bấm “Vào quán”, tải lại trang và vào lại phòng; so preview với nhân vật ngoài quán và peer thứ hai. Ghi lỗi tải model từ Network/Console. Model đã chọn phải giữ nguyên xuyên suốt các bước này.
- **Tiêu chí hoàn tất:** model mới là model thực tế của người chơi sau khi tạo và khi vào quán; không tự rơi về model cũ khi cầm guitar, mua/cầm/uống đồ, ngồi, đi lại hoặc phát action. Nếu chưa hỗ trợ một hành động, cần báo rõ thay vì đổi model âm thầm.

### Cảnh quán, cửa, hàng hóa và đồ đạc còn thô

- **Triệu chứng người dùng báo:** sản phẩm, quán, cánh cửa và vật dụng trông đơn giản, chưa thật.
- **Phạm vi kiểm kê:** tường/sàn/mái, cửa và khung cửa, bàn/ghế/quầy, máy nhạc/TV, đèn, chậu cây, hồ và thác; toàn bộ món trong cửa hàng, ly/nước/thức ăn, guitar và đạo cụ cầm tay.
- **Cách rà:** chụp từng khu vực ở góc nhìn chơi thực tế; với từng nhóm ghi asset hiện dùng (mesh tạo từ hình cơ bản hay model/texture), vật liệu, UV/texture, tỉ lệ, bóng, điểm tương tác và va chạm. Ưu tiên thay các vật thể chính người chơi nhìn gần bằng model có hình khối đúng, bề mặt có chi tiết và vật liệu phù hợp. Cửa cần có khung/độ dày, tay nắm và chuyển động hoặc tương tác rõ; đồ mua cần có kích thước, điểm cầm và tư thế sử dụng đúng.
- **Tiêu chí hoàn tất:** không còn hình khối placeholder ở vật thể chính trong tầm nhìn; đồ vật không xuyên tay/bàn; cửa và lối đi có tương tác/va chạm nhất quán; cảnh vẫn chạy ổn trên cấu hình thấp. Không coi việc chỉ tăng độ sáng hoặc đổi màu là nâng cấp model.

### Đánh giá độ phủ lỗi trước khi triển khai

- Lập danh sách các luồng người dùng: tạo/đổi nhân vật, di chuyển, ngồi, cầm/nắm, mua, uống/ăn, guitar, nhạc/TV, cửa/lối đi, nhiều người cùng phòng.
- Mỗi lỗi ghi mức độ, bước tái hiện, model/trạng thái bị ảnh hưởng, ảnh hoặc log đối chiếu, và trạng thái sửa.
- Chỉ gộp lỗi khi đã chứng minh chung nguyên nhân; “nhiều lỗi” cần được tách thành các lỗi tái hiện được để tránh bỏ sót.

### Chuyển động và thao tác vật dụng phải tự nhiên

- **Yêu cầu người dùng:** rà lại cách cầm đồ/vật dụng, đánh nhau, uống, uống cạn và bỏ/cất đồ; chuyển động phải liền mạch, có trọng lượng và đúng với model người thật.
- **Kiểm tra cầm/nắm:** từng loại ly, chai, thức ăn, sách, guitar, cần câu, quà và đạo cụ chiến đấu. Kiểm tra đúng tay, ngón/tư thế nắm, hướng vật, điểm tựa, khoảng cách tới miệng/thân, vật không lơ lửng hoặc xuyên bàn/cơ thể; khi đổi tay hay đổi vật phải gỡ vật cũ.
- **Kiểm tra uống/ăn:** đưa đồ lên miệng theo animation, giữ đúng điểm cầm trong suốt động tác, có thời lượng và trạng thái dùng hợp lý. Uống/ăn đến lần cuối phải chuyển sang trạng thái rỗng/hết đúng một lần; không cho uống tiếp, không xóa nhầm món vừa mua thay thế và không làm lệch số lượng tồn kho.
- **Kiểm tra bỏ/cất:** bỏ xuống phải đặt vật lên mặt bàn/sàn theo đúng vị trí và hướng, không xuyên mặt phẳng hoặc biến mất bất ngờ. Cất vào túi phải gỡ model khỏi tay và đồng bộ inventory. Thử hủy thao tác, đổi món, ngồi/đứng, đi bộ, thoát phòng và vào lại.
- **Kiểm tra đánh nhau:** tư thế thủ, vung tay/vũ khí, trúng đòn, đẩy/lùi, ngã/đứng dậy và kết thúc trận. Tay phải giữ đúng vũ khí; animation đánh không làm vũ khí xuyên người; nhịp chuyển trạng thái và vị trí va chạm phải khớp giữa hai người chơi. Người ngoài trận phải thấy cùng diễn biến.
- **Độ phủ mạng:** chạy các ca với người đánh/đang dùng đồ và một peer quan sát; kiểm tra mất gói, cập nhật chậm, người rời phòng giữa animation và reconnect. Không để mỗi máy tự dựng kết quả đánh khác nhau.
- **Tiêu chí hoàn tất:** các animation nối nhau không giật hoặc đổi sang model khối; đạo cụ bám rig; trạng thái còn/hết/bỏ/cất nhất quán giữa hình ảnh, inventory, xu và peer. Ghi rõ lỗi theo từng loại vật dụng và từng model, không kết luận chung là “đã sửa thao tác”.

## Cập nhật rà soát rules

- [x] Rules trong repo yêu cầu mã người chơi bắt đầu bằng UID kèm dấu gạch dưới, tránh cho UID là tiền tố của mã người khác được ghi nhầm. Emulator đã kiểm tra chủ tab, UID tiền tố và người dùng khác.
- [ ] Kiểm tra rules đã triển khai production; chưa triển khai thay đổi rules trong lượt rà soát này.

## Tiến độ tích hợp trình tạo người thật

- [x] Bỏ giao diện và bộ chọn tạo nhân vật cũ khỏi màn hình chính. Người mới được mở thẳng trình tạo người thật; người đã vào quán giữ nhân vật đã lưu và chỉ thay sau khi bấm “Đổi nhân vật”, rồi chọn “Dùng nhân vật trong quán”. Đã rà lại đường lưu localStorage và cập nhật rig; chưa xác minh lại trên trình duyệt trong lượt này.
- [ ] Đã nối trình chỉnh sửa Ara vào lựa chọn nhân vật, lưu cấu hình và dựng model trong preview/quán. Kiểm tra bằng một phiên emulator đã thấy model tự tạo trong quán; còn phải xác minh hai người chơi, tải lại, ngồi, uống và các trạng thái khác trước khi đóng mục này.
- [ ] Chưa xác minh tải nhiều model khác nhau đồng thời hoặc giới hạn chi phí tính toán trên thiết bị yếu.

## Tiến độ tải nhân vật từ người chơi khác

- [ ] Đã trì hoãn dựng model của người chơi khác cho đến khi họ nằm trong nhóm gần được hiển thị. Hai tab emulator đã thấy model tự tạo sau thay đổi; chưa đo với nhiều người hoặc thiết bị yếu, và chưa xác minh mọi trường hợp đổi model/rời phòng.

## Tiến độ nhân vật khi đấu

- [x] Bỏ điều kiện ép model cũ chỉ vì đang đấu hoặc trang bị vũ khí; model thật có tư thế thủ và vươn tay đánh cơ bản. Nguồn vật cầm chuyển từ đồ ăn/nước sang vũ khí trong trận và khôi phục sau trận; có kiểm thử nguồn vật và biên độ vươn tay.
- [ ] Hoàn thiện animation và điểm nắm cho từng model/vũ khí, phản ứng trúng đòn, đỡ đòn, ngã và đứng dậy; trạng thái bị hạ vẫn chuyển về model cũ. Cần kiểm tra thêm góc nhìn gần, va chạm, người quan sát, mạng chậm và mọi model. Hai tab emulator đã vào trận và ghi nhận một đòn trúng, nhưng chưa chứng minh toàn bộ các tư thế hoặc production.

## Tiến độ tự điều chỉnh cấu hình

- [x] Bộ điều chỉnh chất lượng dùng thời gian thực của khung hình, giảm mức khi FPS thấp và có thể tăng lại sau nhiều chu kỳ ổn định; bỏ qua mẫu khi trang ẩn hoặc đang tạo nhân vật. Có kiểm thử mô phỏng hạ, phục hồi và khóa cấu hình.
- [x] Thiết bị được nhận diện yếu theo bộ nhớ, CPU hoặc loại màn hình khởi đầu ở mức thấp hơn; mức thấp nhất giảm độ phân giải và tắt bóng đổ. Đã mở thử mức thấp trên emulator.
- [x] Model người thật có bản texture tối đa 512/1024 px theo QL0/QL1; QL2 giữ bản gốc. Biến thể GLB giữ nguyên mesh, rig, animation, material và bufferView hình học qua kiểm tra chuyển đổi; tổng ảnh giải mã ước tính giảm 55–89% tùy model/tier. Kích thước gốc→512/1024 MB: người nam 6.84→4.32/6.11, người nữ 6.83→4.42/6.36, cyberpunk 7.64→6.17/7.70, phiêu lưu 8.20→6.56/8.06. Khi QL đổi, avatar đang hoạt động được thay tuần tự và cache tier cũ bị dọn khi không còn người dùng. Chưa đo VRAM/FPS thực trên thiết bị.
- [ ] Đo FPS/độ trễ thực tế trên máy yếu và điện thoại, trong khu đông người và khi dựng nhiều model; kiểm tra nhiệt, pin, mạng và điều chỉnh ngưỡng trước khi kết luận mượt trên mọi thiết bị.
- [x] Dừng vẽ cảnh quán và preview phía sau khi mở editor toàn màn hình; tự vẽ lại khi đóng. Thử cục bộ 2 lượt 5 giây, bộ đếm vẽ ở mỗi cảnh từ 193–207 lượt xuống 0; editor vẫn hiển thị và cảnh tiếp tục vẽ sau khi đóng. Số đo chỉ phản ánh số lượt vẽ, không chứng minh FPS hay thời lượng pin máy thật.

## Tiến độ tối ưu cập nhật phòng

- [x] Trạng thái không đổi của từng người được giữ bản đã phân tích; chỉ phân tích lại khi dữ liệu thay đổi và xóa cache khi người đó rời phòng. Trong mô phỏng adapter 50 người, 200 cập nhật vị trí, số lần JSON.parse giảm từ 11.275 xuống 50; có kiểm tra vị trí, thay diện mạo, lỗi dữ liệu và rời/vào lại.
- [x] Giới hạn tần suất đóng gói trạng thái ngay cả khi người chơi đứng yên. Mô phỏng 60 khung hình/giây giảm số lần tạo state từ 46 xuống không quá 9/giây; thay đổi cần gửi ngay vẫn vượt giới hạn chờ.
- [ ] Đo tải Firebase/network và FPS thực với nhiều người, bao gồm rời/vào liên tục và model khác nhau; số liệu trên là mô phỏng adapter trong máy, không phải độ trễ production. Kiểm tra hai tab emulator sau thay đổi đã thấy người chơi di chuyển.
- [x] Gộp các sự kiện chỉ đổi vị trí trong tối đa 50 ms trước khi xử lý danh sách phòng. Trong phép thử một đợt 200 sự kiện chuyển động của 50 người, số lượt xử lý danh sách giảm từ 200 còn 1; thay đổi state liên tiếp và người rời phòng vẫn được chuyển ngay. Hai tab emulator thấy chuyển động và cập nhật khi rời phòng. Chưa đo p95/FPS hay độ trễ thực tế trong phòng đông.
- [x] Các bản sao model của người chơi xa được gỡ sau 15 giây ngoài nhóm gần; khi quay lại sẽ dựng lại, và người ở tầng khuất không chiếm chỗ trong nhóm gần. Mô phỏng lần lượt đi qua 50 người đạt đỉnh không quá 17 bản sao với một người gần mỗi giây; đây không phải phép đo RAM/GPU thật.
- [ ] Đo bộ nhớ GPU, cache texture/geometry dùng chung và tải lại model trong phòng thật; việc gỡ bản sao không chứng minh toàn bộ bộ nhớ asset đã được giải phóng.
- [x] Dừng vòng cập nhật cảnh nền khi editor phủ kín hoặc tab ẩn, tiếp tục sau khi quay lại; vẫn giữ lắng nghe phòng/heartbeat. Hai lượt đo local 5 giây khi mở editor: vòng cập nhật cảnh từ 303–312 lượt xuống 0; hai tab emulator vẫn thấy người vào và di chuyển sau khi đóng editor. Đây là số lượt cập nhật, không phải phép đo FPS hay CPU trên máy thật.
- [x] Khi mất focus hoặc mở editor, nhả phím/joystick, camera và trạng thái đỡ đòn để tránh kẹt điều khiển khi quay lại; có kiểm thử logic và thử di chuyển sau khi đóng editor.
- [x] Cache model tự tạo theo số nhân vật đang dùng: khi vượt giới hạn, chỉ giải phóng geometry/material/texture của asset không còn được dùng; tải trùng được dùng chung và thử lại sau lỗi. Kiểm thử mô phỏng vòng đời cache và mở thử model trong quán.
- [ ] Đo bộ nhớ GPU trên trình duyệt thật và kiểm soát hàng đợi tạo model khi nhiều cấu hình thay đổi liên tục; kiểm thử cache không thay thế được đo tải thực.
- [x] Giới hạn hàng đợi dựng model tự tạo: chỉ dựng một model tại một thời điểm, tối đa 12 yêu cầu đang chờ; bỏ yêu cầu không còn ai cần, ưu tiên yêu cầu người dùng và cho người chơi khác thử lại khi hàng đợi đầy. Trong mô phỏng 100 yêu cầu thay liên tục, chỉ công việc đang chạy và yêu cầu mới nhất được thực thi. Model phiêu lưu đã tạo và hiển thị trong quán ở emulator.
- [ ] Đo thời gian tạo, bộ nhớ và độ trễ trên máy yếu khi nhiều người dùng model khác nhau; công việc đã bắt đầu trong worker không thể ngắt giữa chừng.
- [x] Bỏ tính tư thế và cập nhật thú cưng cho nhân vật nằm ngoài góc camera hoặc bị tầng khác che, dùng vùng đệm quanh nhân vật để hạn chế nhấp nháy; vị trí, thời gian hành động và sự kiện vẫn cập nhật. Đo 20 người giả lập ngoài khung hình: hai lượt 5 giây từ 5.100–5.320 lần tính tư thế xuống 0; khi đi tới gần, nhóm hiện lại. Đã kiểm thử nhánh hiển thị/khuất và dọn dữ liệu fixture trên emulator.
- [ ] Đo FPS, CPU và độ mượt chuyển góc trên máy yếu khi người chơi thực di chuyển, có thú cưng và các trạng thái hành động; số lần gọi hàm không phải thời gian thực thi hay FPS.
- [ ] Thiết bị tối đa 2 lõi hoặc 2 GB RAM khởi động mức đồ họa thấp nhất; hạ mức khi FPS trung bình 3 giây dưới 40 và tăng dần sau khi ổn định. Đã chặn tham số URL ngoài khoảng 0–2. Chưa đo trên thiết bị yếu; mức khởi tạo dựa vào thông tin trình duyệt và có thể không phản ánh GPU/nhiệt thực.
- [ ] Giảm tần suất cập nhật vị trí/bong bóng nhãn của peer xuống tối đa khoảng 8 lần/giây trên máy yếu và 15 lần/giây trên máy khác; cập nhật vị trí mô phỏng và hình 3D vẫn chạy mỗi khung hình. Cần đo độ mượt cảm nhận và thời gian frame với phòng đông trước khi đánh dấu hoàn thành.
- [ ] Peer câu cá ở xa không dựng phao/dây cho tới khi vào camera hoặc trong phạm vi 25m; khi khuất thì ẩn và bỏ tính dây mỗi khung hình. Vẫn giữ trạng thái câu để dựng lại khi peer hiện ra; cần kiểm tra peer bắt cá/rời phòng và đo trong cảnh đông.
- [ ] Tách nhịp hoạt ảnh trang trí và xử lý vườn khỏi nhịp khung hình: 20/30/60 Hz theo mức chất lượng cho vật thể cảnh; 10/15/30 Hz cho nhãn, giọt nước và cập nhật vườn. Điều khiển, render nhân vật và vòng câu cá vẫn chạy mỗi khung hình. Cần kiểm tra chuyển động/độ trễ tương tác trên thiết bị thật.
- [ ] Tái sử dụng hai vector camera thay vì tạo mới hai `Vector3` mỗi khung hình để giảm rác bộ nhớ và nguy cơ khựng do GC. Cần so trace GC và frame time trên thiết bị yếu.
- [ ] Không gắn shader dither/nhìn xuyên tự tạo lên MeshStandardMaterial trên máy yếu để giảm phép tính fragment. Tác động GPU và ảnh hưởng nhận biết nhân vật sau vật che cần đo trên máy thật.
- [ ] Shadow map động chỉ làm mới theo mức chất lượng (15/20/30 Hz) thay vì mọi lần render; khởi tạo/lúc đổi mức có làm mới ngay. Cần kiểm tra độ trễ bóng khi di chuyển và đo thời gian GPU trên máy yếu.
- [x] Mức thấp không tạo PMREM phản xạ môi trường; khi hạ từ mức cao, render target được giải phóng. Độ phân giải bóng đổi theo mức: 512 ở QL0/QL1, 1024 trên QL2 thiết bị thấp và 2048 trên QL2 thiết bị khác. Tương ứng số điểm ảnh bóng thấp hơn 4 lần so với 1024 và 16 lần so với 2048; đây là phép tính kích thước, chưa phải số đo thời gian GPU/FPS.
- [ ] Nội suy vị trí peer vẫn chạy mỗi khung hình; cập nhật skeleton, mixer người thật và thú cưng giới hạn 24/30/45 Hz theo mức đồ họa. Cần kiểm tra độ mượt và đồng bộ đòn đánh trên nhiều client, đặc biệt ở FPS biến động.
- [ ] Animation và mixer của barista cập nhật 20/30/45 Hz theo mức đồ họa, thay vì mỗi khung hình. Cần quan sát độ giật ở mức thấp và xác nhận trạng thái/đối thoại vẫn đồng bộ.
- [ ] Bộ tích lũy hoạt ảnh theo thời gian thực, giữ phần dư giữa các nhịp thay vì đặt lại 0; giữ được tần số mục tiêu trung bình ở FPS không chia hết cho nhịp (ví dụ 30 FPS với mục tiêu 20 Hz). Cần đo frame time và kiểm tra tốc độ animation trên các FPS thay đổi.
- [ ] Gộp cập nhật đạo cụ câu cá và thú cưng peer vào vòng lặp peer hiện có để tránh duyệt danh sách người chơi thêm một lượt mỗi khung hình. Cần đo với phòng đông và xác nhận tạo/xóa cần câu khi peer bắt đầu/dừng câu.
- [ ] Trì hoãn tải model barista (~6,8 MB GLB) đến khi người chơi cách quầy dưới 9 m; trước đó dùng mesh dự phòng. Kiểm tra lúc tới quầy, lỗi tải và máy yếu; việc hoãn tải giảm băng thông lúc vào quán nhưng chưa giảm tổng dung lượng khi người chơi tới quầy.
