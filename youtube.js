(function(root) {
  'use strict';
  function valid(id) { return typeof id === 'string' && /^[A-Za-z0-9_-]{11}$/.test(id); }
  function videoId(input) {
    var url;
    try { url = new URL(input); } catch (error) { return null; }
    if (url.protocol !== 'https:') return null;
    var host = url.hostname.toLowerCase(), parts = url.pathname.split('/').filter(Boolean), id = null;
    if (host === 'youtu.be') id = parts[0];
    else if (host === 'youtube.com' || host === 'www.youtube.com' || host === 'm.youtube.com') {
      if (url.pathname === '/watch') id = url.searchParams.get('v');
      else if (parts[0] === 'live' || parts[0] === 'embed' || parts[0] === 'shorts') id = parts[1];
    }
    return valid(id) ? id : null;
  }
  function embedUrl(media, now) {
    if (!media || !valid(media.id)) return null;
    var url = 'https://www.youtube.com/embed/' + media.id + '?playsinline=1';
    if (!media.live && Number.isFinite(media.at) && media.at > 0) {
      var start = Math.max(0, Math.floor((now - media.at) / 1000));
      if (start) url += '&start=' + start;
    }
    return url;
  }
  var api = {videoId:videoId, embedUrl:embedUrl};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.CoffeeYouTube = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
