const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

// Cards
cards.forEach((card) => {
  card.addEventListener('dragstart', dragstart);
  card.addEventListener('drag', drag);
  card.addEventListener('dragend', dragend);
});

function dragstart() {
  dropzones.forEach((zone) => zone.classList.add('destaque'));
  this.classList.add('is-dragging');
}

function drag() {}

function dragend() {
  dropzones.forEach((zone) => zone.classList.remove('destaque'));
  this.classList.remove('is-dragging');
}

// Zona de soltar cartões
dropzones.forEach((zone) => {
  zone.addEventListener('dragenter', dragenter);
  zone.addEventListener('dragover', dragover);
  zone.addEventListener('dragleave', dragleave);
  zone.addEventListener('dragdrop', dragdrop);
});

function dragenter() {}
function dragover() {
  this.classList.add('over');

  const cardDrag = document.querySelector('.is-dragging');
  this.appendChild(cardDrag);
}
function dragleave() {
  this.classList.remove('over');
}
function dragdrop() {}
