
const body = document.body;

// Function to open the modal
export function openModal() {
  body.classList.add('no-scroll'); 
}

// Function to close the modal
export function closeModal() {
  body.classList.remove('no-scroll'); 
}
