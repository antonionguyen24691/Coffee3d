(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.Wardrobe = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  var palette = [
    { name: 'Nguyên bản', color: null },
    { name: 'Kem', color: '#f3e6ce' },
    { name: 'Đỏ', color: '#d86b62' },
    { name: 'Xanh lá', color: '#82bd8d' },
    { name: 'Xanh biển', color: '#7daedf' },
    { name: 'Tím', color: '#bd9bd4' },
    { name: 'Hồng', color: '#e5a6bb' },
    { name: 'Đen', color: '#55545c' }
  ];
  var slots = ['outfit', 'accent', 'shoes', 'hair'];
  function clean(value) {
    return slots.map(function (_, i) {
      var n = Array.isArray(value) ? value[i] : 0;
      return Number.isInteger(n) && n >= 0 && n < palette.length ? n : 0;
    });
  }
  function targets(style, slot) {
    if (style !== 1 && style !== 2 && style !== 3 && style !== 4) return [];
    if (slot === 'hair') return ['Hair'];
    if (slot === 'shoes') return style >= 3 ? ['Shoes', 'Boot shafts'] : ['Shoes'];
    if (slot === 'outfit') return style === 3 ? ['Techwear jacket'] : style === 4 ? ['Tank top'] : ['Outfit'];
    if (slot === 'accent' && style === 3) return ['Techwear pants', 'Straps'];
    if (slot === 'accent' && style === 4) return ['Cargo shorts'];
    return [];
  }
  function cleanLook(value) {
    if (!value || !Number.isInteger(value.style) || value.style < 1 || value.style > 4) return null;
    return { style: value.style, colors: clean(value.colors) };
  }
  return { palette: palette, slots: slots, clean: clean, targets: targets, cleanLook: cleanLook };
});
