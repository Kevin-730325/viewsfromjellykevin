const viewer = document.getElementById('image-viewer');
const links = [...document.querySelectorAll('.zoom-image')];
let active = 0;
function showImage(index) {
  active = (index + links.length) % links.length;
  const link = links[active];
  const image = document.getElementById('viewer-image');
  image.src = link.href;
  image.alt = link.dataset.caption;
  document.getElementById('viewer-caption').textContent = link.dataset.caption;
  document.getElementById('image-count').textContent = `${active + 1} / ${links.length}`;
  document.getElementById('original-image').href = link.href;
  if (!viewer.open) viewer.showModal();
}
links.forEach((link, index) => link.addEventListener('click', event => {
  event.preventDefault();
  showImage(index);
}));
document.getElementById('close-image').addEventListener('click', () => viewer.close());
document.getElementById('previous-image').addEventListener('click', () => showImage(active - 1));
document.getElementById('next-image').addEventListener('click', () => showImage(active + 1));
viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
viewer.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); showImage(active - 1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); showImage(active + 1); }
});
