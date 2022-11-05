const galleryDialog = document.getElementById('galleryDialog');
const outputBox = document.querySelector('output');
const galleryImgs = document.querySelectorAll('.gallery-img');
let gDialogFigCaption = document.getElementById('gDialogFigCaption');
let gDialogImg = document.getElementById('gDialogImg');

// If a browser doesn't support the dialog, then hide the
// dialog contents by default.
if (typeof galleryDialog.showModal !== 'function') {
  galleryDialog.hidden = true;
  /* a fallback script to allow this dialog/form to function
     for legacy browsers that do not support <dialog>
     could be provided here.
  */
}

// Each img waits for a click to open the <dialog> modally
galleryImgs.forEach(galleryImg => galleryImg.addEventListener('click', () => {
  if (typeof galleryDialog.showModal === "function") {
    gDialogImg.src = galleryImg.src;
    gDialogFigCaption.innerText = galleryImg.id;
    galleryDialog.showModal();
  } else {
    alert("Sorry, the <dialog> API is not supported by this browser.");
  }
}));