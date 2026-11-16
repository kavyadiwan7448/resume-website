/* A brief jewellery-inspired opening. All content remains available without JS. */
(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const layer = document.createElement('div');
  layer.className = 'jewel-intro';
  layer.setAttribute('aria-label', 'Jewellery opening animation');
  layer.innerHTML = '<div class="intro-message"><span>A LITTLE SPARKLE, A LITTLE STORY</span><strong>Kavya’s world</strong><small>Made of little things, imagined with love.</small></div><button type="button" class="skip-intro">Skip animation</button><div class="jewel-stage" aria-hidden="true"></div>';
  document.body.append(layer);
  const stage = layer.querySelector('.jewel-stage');
  const types = ['pearl','pearl','bead rose','pearl','bead blue','star-charm','bead moss','ring-charm','heart-charm'];
  for (let i=0; i<43; i++) {
    const jewel = document.createElement('i');
    jewel.className = 'jewel ' + types[i % types.length];
    const angle = i * 2.399963;
    const radius = 28 + Math.sqrt(i / 43) * 185;
    const x = Math.cos(angle) * radius, y = Math.sin(angle) * radius * .78;
    const distance = Math.max(window.innerWidth, window.innerHeight) * .85 + 220;
    jewel.style.setProperty('--x', x + 'px');
    jewel.style.setProperty('--y', y + 'px');
    jewel.style.setProperty('--out-x', Math.cos(angle) * distance + 'px');
    jewel.style.setProperty('--out-y', Math.sin(angle) * distance + 'px');
    jewel.style.setProperty('--turn', ((i % 2 ? 1 : -1) * (120 + i * 17)) + 'deg');
    jewel.style.setProperty('--delay', (i % 7) * 23 + 'ms');
    jewel.style.setProperty('--size', (16 + i % 5 * 5) + 'px');
    stage.append(jewel);
  }
  let done = false;
  const finish = () => {
    if(done) return; done=true;
    const focused = layer.contains(document.activeElement);
    layer.remove();
    if (focused) { const heading = document.querySelector('h1'); heading.tabIndex=-1; heading.focus({preventScroll:true}); }
  };
  layer.querySelector('button').addEventListener('click', finish);
  const onKey = event => { if(event.key === 'Escape') finish(); };
  document.addEventListener('keydown', onKey);
  setTimeout(() => { layer.classList.add('scatter'); }, 650);
  setTimeout(() => { finish(); document.removeEventListener('keydown', onKey); }, 2450);
})();
