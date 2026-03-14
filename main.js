// Cal.com embed init
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
  Cal("init", "discovery", {origin:"https://app.cal.com"});
  Cal.ns.discovery("ui", {"hideEventTypeDetails":false,"layout":"month_view"});

  Cal("init", "strategy", {origin:"https://app.cal.com"});
  Cal.ns.strategy("ui", {"hideEventTypeDetails":false,"layout":"month_view"});

// Site interactions
document.querySelectorAll('.fq').forEach(b=>{b.addEventListener('click',()=>{const i=b.parentElement,o=i.classList.contains('open');document.querySelectorAll('.fi').forEach(x=>x.classList.remove('open'));if(!o)i.classList.add('open')})});
const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')})},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// Scroll fade-in for problem cards
(function(){
  const cards = document.querySelectorAll('.prob-card');
  if(!cards.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, {threshold: 0.15});
  cards.forEach(card => io.observe(card));
})();