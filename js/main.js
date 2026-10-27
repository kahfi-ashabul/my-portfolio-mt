/* ==========================================================================
   main.js  -  animasi dan perilaku website
   Kamu TIDAK perlu mengedit file ini. Teks, link, dan foto diatur di js/content.js
   ========================================================================== */
(function () {
  'use strict';

  var S = window.SITE;
  if (!S) { return; }

  var doc = document.documentElement;
  var P = S.person;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var params = new URLSearchParams(location.search);
  var DEBUG = params.get('debug') === '1';
  if (DEBUG) { doc.classList.add('debug'); }
  if (reduce) { doc.classList.add('reduced'); }

  var current = S.defaultFokus;
  var busy = false;
  var rvObserver = null;

  /* ------------------------------------------------------------------ util */
  function safe(fn) { try { return fn(); } catch (e) { return null; } }
  function pad(n) { return ('0' + n).slice(-2); }
  function fmt(n, dec) {
    return n.toLocaleString('id-ID', { minimumFractionDigits: dec, maximumFractionDigits: dec });
  }
  function splitWords(t) {
    return t.split(' ').map(function (w, i) {
      return '<span class="w"><span style="--i:' + i + '">' + w + '</span></span>';
    }).join('');
  }

  /* --------------------------------------------------------------- render */
  function renderHero(f) {
    var d = S.fokus[f];
    $('#h-eyebrow').textContent = d.eyebrow;
    var h = $('#h-headline');
    h.innerHTML = splitWords(d.headline);
    h.setAttribute('aria-label', d.headline);
    $('#h-sub').textContent = d.sub;

    $('#h-cta').innerHTML =
      '<a class="btn btn-p" href="mailto:' + P.email + '"><span>Kirim Email</span></a>' +
      '<a class="btn btn-g" href="' + S.cv[f] + '" target="_blank" rel="noopener">Unduh CV</a>' +
      '<a class="btn btn-g" href="' + P.linkedin + '" target="_blank" rel="noopener">LinkedIn</a>';

    $('#h-stats').innerHTML = d.stats.map(function (s) {
      return '<div class="stat"><div class="num" data-count="' + s.v + '" data-dec="' + (s.dec || 0) +
        '" data-suf="' + (s.s || '') + '">0' + (s.s || '') + '</div><div class="lbl">' + s.l + '</div></div>';
    }).join('');
  }

  function runCounts() {
    $$('#h-stats .num').forEach(function (el) {
      var end = parseFloat(el.getAttribute('data-count'));
      var dec = parseInt(el.getAttribute('data-dec') || '0', 10);
      var suf = el.getAttribute('data-suf') || '';
      if (reduce) { el.textContent = fmt(end, dec) + suf; return; }
      var start = null, dur = 1500;
      function step(ts) {
        if (start === null) { start = ts; }
        var p = Math.min((ts - start) / dur, 1);
        var e = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(end * e, dec) + suf;
        if (p < 1) { requestAnimationFrame(step); }
      }
      requestAnimationFrame(step);
    });
  }

  function restartHero() {
    var c = $('#hero-copy');
    c.classList.remove('go');
    c.classList.add('reset');
    void c.offsetWidth;
    c.classList.remove('reset');
    c.classList.add('go');
    runCounts();
  }

  function renderTicker() {
    var words = ['Build', 'Grow', 'Serve', 'Operations', 'People', 'Systems'];
    var half = '';
    for (var r = 0; r < 3; r++) {
      words.forEach(function (w, i) {
        half += '<span class="' + (i < 3 ? 'hi' : '') + '">' + w + '</span>';
      });
    }
    $('#ticker').innerHTML = half + half;
  }

  function renderProfil(f) {
    $('#profil-text').innerHTML = S.fokus[f].profil;
  }

  function renderStatic() {
    $('#tools').innerHTML = S.tools.map(function (t) { return '<span>' + t + '</span>'; }).join('');
    $('#fakta').innerHTML = S.fakta.map(function (x) {
      return '<li><span class="k">' + x.k + '</span><span>' + x.v + '</span></li>';
    }).join('');

    var icons = {
      Build: '<svg class="ic" viewBox="0 0 64 64" aria-hidden="true"><g class="b"><rect style="--i:0" x="8" y="38" width="12" height="18"/><rect style="--i:1" x="26" y="26" width="12" height="30"/><rect style="--i:2" x="44" y="12" width="12" height="44"/></g></svg>',
      Grow: '<svg class="ic" viewBox="0 0 64 64" aria-hidden="true"><g class="g"><path d="M6 56 H22 V42 H38 V28 H54 V14"/><circle cx="54" cy="10" r="4"/></g></svg>',
      Serve: '<svg class="ic" viewBox="0 0 64 64" aria-hidden="true"><g class="s"><circle style="--i:0" cx="32" cy="32" r="28"/><circle style="--i:1" cx="32" cy="32" r="28"/><circle style="--i:2" cx="32" cy="32" r="28"/><circle class="core" cx="32" cy="32" r="5"/></g></svg>'
    };
    $('#pr-intro').textContent = S.prinsip.intro;
    $('#bgs').innerHTML = S.prinsip.kolom.map(function (k) {
      return '<div class="bg">' + (icons[k.kata] || '') +
        '<div class="word">' + k.kata + '</div><p class="tag">' + k.tagline + '</p><ul>' +
        k.poin.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul></div>';
    }).join('');

    $('#stairs').innerHTML = S.tangga.map(function (s, i) {
      return '<div class="st" style="--i:' + i + '"><div class="y">' + s.y + '</div><div class="t">' + s.t + '</div></div>';
    }).join('');

    $('#edu').innerHTML = S.pendidikan.map(function (e, i) {
      return '<article class="card rv" style="--d:' + (i * 0.1) + 's"><div class="top"><div><h4>' + e.title +
        '</h4><div class="org">' + e.org + '</div></div><span class="per">' + e.period + '</span></div>' +
        (e.badge ? '<span class="badge">' + e.badge + '</span>' : '') +
        (e.note ? '<p class="note">' + e.note + '</p>' : '') +
        (e.photo ? '<figure class="org-photo opt" data-photo-wrap data-file="' + e.photo + '"><img src="' + e.photo +
          '" alt="' + (e.photoAlt || '') + '" decoding="async"></figure>' : '') + '</article>';
    }).join('');

    $('#org').innerHTML = S.organisasi.map(function (e, i) {
      return '<article class="card rv" style="--d:' + (i * 0.1) + 's"><div class="top"><div><h4>' + e.title +
        '</h4><div class="org">' + e.org + '</div></div><span class="per">' + e.period + '</span></div>' +
        (e.note ? '<p class="note">' + e.note + '</p>' : '') +
        (e.photo ? '<figure class="org-photo opt" data-photo-wrap data-file="' + e.photo + '"><img src="' + e.photo +
          '" alt="' + (e.photoAlt || '') + '" decoding="async"></figure>' : '') + '</article>';
    }).join('');

    $('#gal').innerHTML = S.galeri.map(function (g) {
      return '<figure class="opt" data-photo-wrap data-file="' + g.src + '" tabindex="0"><img src="' + g.src +
        '" alt="' + g.cap + '" decoding="async"><figcaption>' + g.cap + '</figcaption></figure>';
    }).join('');

    $('#foot-copy').textContent = '© ' + new Date().getFullYear() + ' ' + P.name;
  }

  function renderKomp(f) {
    $('#cgrid').innerHTML = S.fokus[f].kompetensi.map(function (c, i) {
      var n = pad(i + 1);
      return '<article class="cc rv" style="--d:' + (i * 0.08) + 's"><span class="no">' + n + '</span><h3>' + c.t +
        '</h3><p>' + c.x + '</p><span class="bgn" aria-hidden="true">' + n + '</span></article>';
    }).join('');
  }

  function renderExp(f) {
    $('#tl').innerHTML = S.pengalaman.map(function (e, i) {
      var b = Array.isArray(e.bullets) ? e.bullets : (e.bullets[f] || e.bullets.hr);
      var special = (e.special || []).map(function (s) {
        return '<div class="sp"><span class="l">Penugasan khusus · ' + s.period + '</span><b>' + s.label +
          '</b><p>' + s.text + '</p></div>';
      }).join('');
      var photo = e.photo ? '<figure class="tl-photo opt" data-photo-wrap data-file="' + e.photo +
        '"><img src="' + e.photo + '" alt="' + (e.photoAlt || '') + '" decoding="async"></figure>' : '';
      return '<article class="tl-item rv' + (e.current ? ' cur' : '') + '" style="--d:' + (i * 0.05) + 's">' +
        '<div class="tl-when">' + e.period + '</div>' +
        '<div class="tl-card"><div><h3>' + e.role + '</h3><div class="co">' + e.org + ' · ' + e.place + '</div><ul>' +
        b.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' +
        (e.tools ? '<div class="tl-tools">Tools: ' + e.tools + '</div>' : '') + special + '</div>' + photo + '</div></article>';
    }).join('');
  }

  function renderContact(f) {
    $('#k-judul').textContent = S.fokus[f].kontakJudul;
    $('#k-cta').innerHTML =
      '<a class="btn btn-p" href="mailto:' + P.email + '"><span>Kirim Email</span></a>' +
      '<a class="btn btn-g" href="https://wa.me/' + P.phoneHref.replace('+', '') + '" target="_blank" rel="noopener">WhatsApp</a>' +
      '<a class="btn btn-g" href="' + P.linkedin + '" target="_blank" rel="noopener">LinkedIn</a>';
    $('#cgr').innerHTML =
      '<div><div class="lbl">Email</div><a href="mailto:' + P.email + '">' + P.email + '</a></div>' +
      '<div><div class="lbl">Telepon</div><a href="tel:' + P.phoneHref + '">' + P.phone + '</a></div>' +
      '<div><div class="lbl">Lokasi</div><span class="v">' + P.location + '</span></div>' +
      '<div><div class="lbl">LinkedIn</div><a href="' + P.linkedin + '" target="_blank" rel="noopener">linkedin.com/in/kahfi-ashabul</a></div>' +
      '<div><div class="lbl">CV</div><div class="cvs">' +
      '<a href="' + S.cv[f] + '" target="_blank" rel="noopener">Unduh CV (PDF)</a></div></div>';
  }

  /* ----------------------------------------------------------------- foto */
  var galTimer = null;
  function photosChanged() {
    clearTimeout(galTimer);
    galTimer = setTimeout(refreshGallery, 60);
  }

  function refreshGallery() {
    var items = $$('#gal figure.ok');
    var show = items.length > 0 || DEBUG;
    $('#galeri').classList.toggle('hidden', !show);
    $('#nav-galeri').classList.toggle('gone', !show);
    var gal = $('#gal'), n = items.length;
    ['g1', 'g2', 'g3'].forEach(function (c) { gal.classList.remove(c); });
    $$('#gal figure').forEach(function (f) { f.classList.remove('feature', 'w2'); });
    if (n === 6) {
      gal.classList.add('g3');                    // 6 foto: 3 kolom x 2 baris, rapi tanpa sisa
    } else if (n >= 5) {
      items[0].classList.add('feature');          // foto pertama besar, sisanya mengisi 4 kolom
      var r = (n - 5) % 4;                        // baris terakhir tidak penuh: lebarkan agar tidak bolong
      if (r === 1) { items[n - 1].classList.add('w2'); }
      if (r === 2) { items[n - 1].classList.add('w2'); items[n - 2].classList.add('w2'); }
      if (r === 3) { items[n - 3].classList.add('w2'); }
    } else if (n >= 1) {
      gal.classList.add('g' + Math.min(n, 3));
    }
    items.forEach(function (f, i) { f.style.setProperty('--d', (i * 0.12) + 's'); });
    if (rvObserver) { observeReveals(document); }
  }

  function wirePhotos(root) {
    $$('[data-photo-wrap]', root).forEach(function (w) {
      if (w.__wired) { return; }
      w.__wired = true;
      var img = $('img', w);
      if (!img) { return; }
      var ok = function () {
        w.classList.remove('missing');
        w.classList.add('ok');
        img.classList.add('loaded');
        var c = w.closest('.tl-card');
        if (c) { c.classList.add('has-photo'); }
        photosChanged();
      };
      var bad = function () { w.classList.add('missing'); photosChanged(); };
      img.addEventListener('load', ok);
      img.addEventListener('error', bad);
      if (img.complete && img.getAttribute('src')) {
        if (img.naturalWidth > 0) { ok(); } else { bad(); }
      }
    });
  }

  function wireStaticImages() {
    var hi = $('#hero-img');
    hi.addEventListener('load', function () { hi.classList.add('loaded'); });
    hi.addEventListener('error', function () { hi.style.display = 'none'; });
    hi.src = S.foto.hero;

    var av = $('#avatar-img');
    av.addEventListener('load', function () { av.classList.add('loaded'); });
    av.addEventListener('error', function () { av.style.display = 'none'; });
    av.src = S.foto.profil;

    var wp = $('#work-photo');
    wp.setAttribute('data-file', S.foto.profilKerja);
    $('#work-img').src = S.foto.profilKerja;
  }

  /* --------------------------------------------------------------- reveals */
  function observeReveals(root) {
    $$('.rv', root || document).forEach(function (el) {
      if (el.classList.contains('in')) { return; }
      if (rvObserver) { rvObserver.observe(el); } else { el.classList.add('in'); }
    });
  }

  function initObserver() {
    if (!('IntersectionObserver' in window)) { return; }
    rvObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          rvObserver.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

    // animasi nomor bagian (01-07) berjalan terus selama bagiannya terlihat, berhenti saat di luar layar
    var live = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { en.target.classList.toggle('live', en.isIntersecting); });
    }, { threshold: 0 });
    $$('.sh').forEach(function (s, i) { s.style.setProperty('--k', i); live.observe(s); });
  }

  /* ---------------------------------------------------------------- scroll */
  var nav = $('#nav');
  var heroPhoto = $('#hero-photo');
  var arcs = $('#arcs');
  var ticking = false;
  var linkMap = {};

  function updateTL() {
    var tl = $('#tl');
    if (!tl) { return; }
    var r = tl.getBoundingClientRect();
    var p = (window.innerHeight * 0.62 - r.top) / (r.height || 1);
    tl.style.setProperty('--p', Math.max(0, Math.min(1, p)).toFixed(4));
  }

  function setActive() {
    var mid = window.innerHeight * 0.4, cur = null;
    $$('main .sec').forEach(function (s) {
      if (s.classList.contains('hidden')) { return; }
      var r = s.getBoundingClientRect();
      if (r.top <= mid && r.bottom > mid) { cur = s.id; }
    });
    Object.keys(linkMap).forEach(function (id) {
      linkMap[id].classList.toggle('active', id === cur);
    });
  }

  function update() {
    ticking = false;
    var y = window.pageYOffset || 0;
    var max = doc.scrollHeight - window.innerHeight;
    $('#progress').style.transform = 'scaleX(' + (max > 0 ? y / max : 0) + ')';
    nav.classList.toggle('scrolled', y > 30);
    if (!reduce && y < window.innerHeight * 1.3) {
      heroPhoto.style.transform = 'translate3d(0,' + (y * 0.22).toFixed(1) + 'px,0)';
      arcs.style.transform = 'translate3d(0,calc(-50% + ' + (y * 0.1).toFixed(1) + 'px),0)';
    }
    updateTL();
    setActive();
  }

  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }

  /* ------------------------------------------------------------ navigation */
  var shutter = $('#shutter');

  function setHash(id) {
    safe(function () { history.replaceState(null, '', location.pathname + location.search + '#' + id); });
  }

  function closeMenu() {
    document.body.classList.remove('menu-open');
    $('#burger').setAttribute('aria-expanded', 'false');
  }

  function topOf(el) { return el.getBoundingClientRect().top + (window.pageYOffset || 0); }

  function go(target) {
    if (!target || busy) { return; }
    closeMenu();
    if (reduce || S.transition === 'smooth') {
      window.scrollTo({ top: topOf(target), behavior: reduce ? 'auto' : 'smooth' });
      setHash(target.id);
      return;
    }
    busy = true;
    $('#sh-num').textContent = target.getAttribute('data-num') || '';
    $('#sh-name').textContent = target.getAttribute('data-name') || '';
    shutter.classList.remove('leave', 'noanim');
    shutter.classList.add('cover');
    setTimeout(function () {
      window.scrollTo(0, topOf(target));
      setHash(target.id);
      update();
      shutter.classList.remove('cover');
      shutter.classList.add('leave');
      target.setAttribute('tabindex', '-1');
      safe(function () { target.focus({ preventScroll: true }); });
      setTimeout(function () {
        shutter.classList.add('noanim');
        shutter.classList.remove('leave');
        void shutter.offsetWidth;
        shutter.classList.remove('noanim');
        busy = false;
      }, 820);
    }, 780);
  }

  function initNav() {
    $$('.links a').forEach(function (a) { linkMap[a.getAttribute('href').slice(1)] = a; });
    $$('a[data-nav]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var t = $(a.getAttribute('href'));
        if (!t) { return; }
        e.preventDefault();
        go(t);
      });
    });
    $('#burger').addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      $('#burger').setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ----------------------------------------------------------------- fokus */
  function setFokus(f) {
    if (!S.fokus[f]) { f = S.defaultFokus; }
    current = f;
    doc.setAttribute('data-fokus', f);
    renderHero(f);
    renderProfil(f);
    renderKomp(f);
    renderExp(f);
    renderContact(f);
    document.title = S.fokus[f].pageTitle;
    var md = $('meta[name="description"]');
    if (md) { md.setAttribute('content', S.fokus[f].description); }
    observeReveals(document);
    wirePhotos(document);
  }

  /* -------------------------------------------------------------- lightbox */
  var lb = $('#lb'), lbIdx = 0, lbItems = [];

  function lbShow(i) {
    lbItems = $$('#gal figure.ok');
    if (!lbItems.length) { return; }
    lbIdx = (i + lbItems.length) % lbItems.length;
    var f = lbItems[lbIdx];
    $('#lb-img').src = $('img', f).src;
    $('#lb-img').alt = $('figcaption', f).textContent;
    $('#lb-cap').textContent = $('figcaption', f).textContent;
  }
  function lbOpen(i) { lbShow(i); lb.classList.add('open'); }
  function lbClose() { lb.classList.remove('open'); }

  function initLightbox() {
    $('#gal').addEventListener('click', function (e) {
      var f = e.target.closest('figure.ok');
      if (!f) { return; }
      lbOpen($$('#gal figure.ok').indexOf(f));
    });
    $('#gal').addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        var f = e.target.closest('figure.ok');
        if (f) { e.preventDefault(); lbOpen($$('#gal figure.ok').indexOf(f)); }
      }
    });
    $('.x', lb).addEventListener('click', lbClose);
    $('.p', lb).addEventListener('click', function () { lbShow(lbIdx - 1); });
    $('.n', lb).addEventListener('click', function () { lbShow(lbIdx + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) { lbClose(); } });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { lbClose(); closeMenu(); }
      if (lb.classList.contains('open')) {
        if (e.key === 'ArrowLeft') { lbShow(lbIdx - 1); }
        if (e.key === 'ArrowRight') { lbShow(lbIdx + 1); }
      }
    });
  }

  /* ------------------------------------------------------------------ init */
  function begin() {
    doc.classList.add('ready');
    restartHero();
    var h = location.hash && $(location.hash);
    if (h && h.id !== 'beranda') {
      window.scrollTo(0, topOf(h));
    }
    update();
  }

  function init() {
    var f = S.defaultFokus;

    renderStatic();
    renderTicker();
    wireStaticImages();
    initObserver();
    initNav();
    initLightbox();
    setFokus(f);
    observeReveals(document);
    wirePhotos(document);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    var intro = $('#intro');
    var seen = safe(function () { return sessionStorage.getItem('ak-intro'); });
    if (S.intro !== false && !reduce && !seen && !DEBUG) {
      safe(function () { sessionStorage.setItem('ak-intro', '1'); });
      setTimeout(function () { intro.classList.add('out'); begin(); }, 1900);
      setTimeout(function () { intro.parentNode && intro.parentNode.removeChild(intro); }, 2900);
    } else {
      intro.parentNode.removeChild(intro);
      begin();
    }
    window.__akReady = true;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
