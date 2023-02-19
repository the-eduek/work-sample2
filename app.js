  // confetti, from the js confetti package
confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
});

  // close modal
function closeModal(modal, className) {
  modal.classList.add(className);
};

const profileBtn = document.querySelector('[data-profile-btn]');
const profileModal = document.querySelector('[data-success-modal]');

profileBtn.addEventListener('click', () => {
  console.log("hello")
  closeModal(profileModal, 'success-message--fade')
});


  // show / close order status modals
const cleaningModal = document.querySelector('[data-cleaning-modal]');
const cleaningModalCloseBtn = document.querySelector('[data-close-cleaning]');
const cleaningModalBtn = document.querySelector('[data-cleaning-btn]');
const foodModal = document.querySelector('[data-food-modal]');
const foodModalCloseBtn = document.querySelector('[data-close-food]');
const foodModalBtn = document.querySelector('[data-food-btn]');
const contentArea = document.querySelector('main');


cleaningModalBtn.addEventListener('click', () => {
  cleaningModal.classList.add('modal--visible');
  contentArea.classList.add('modal-active');
});

cleaningModalCloseBtn.addEventListener('click', () => {
  cleaningModal.classList.remove('modal--visible');
  contentArea.classList.remove('modal-active');
});

foodModalBtn.addEventListener('click', () => {
  foodModal.classList.add('modal--visible');
  contentArea.classList.add('modal-active');
});

foodModalCloseBtn.addEventListener('click', () => {
  foodModal.classList.remove('modal--visible');
  contentArea.classList.remove('modal-active');
});