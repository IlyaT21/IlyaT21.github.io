document.addEventListener('DOMContentLoaded', function () {
  var contactModal = document.getElementById('contact-modal');
  var showContactModalBtn = document.getElementById('contact-modal-show');
  var closeContactModalBtn = document.getElementById('close-contact-modal');

  // Show modal on button click
  showContactModalBtn.addEventListener('click', function () {
    contactModal.style.display = 'flex';
    setTimeout(function () {
      contactModal.querySelector('.modal-content').style.left = '50%';
    }, 50);
  });

  // Close modal on close button click
  closeContactModalBtn.addEventListener('click', function () {
    contactModal.querySelector('.modal-content').style.left = '-100%';
    setTimeout(function () {
      contactModal.style.display = 'none';
    }, 500);
  });

  // Close modal on outside click
  window.addEventListener('click', function (event) {
    if (event.target === contactModal) {
      closeContactModalBtn.click();
    }
  });
});