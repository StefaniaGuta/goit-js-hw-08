import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form');
const key = 'feedback-form-state';



const saveDataToLocalStorage = () => {
  const email = form.querySelector('input[name="email"]').value;
  const message = form.querySelector('textarea[name="message"]').value;
    localStorage.setItem(key, JSON.stringify({email, message}));
};

form.addEventListener('input', throttle(saveDataToLocalStorage, 500));

const populateFormFields = () => {
 const savedState = localStorage.getItem(key);
  if (savedState) {
    const { email, message } = JSON.parse(savedState);
    form.querySelector('input[name="email"]').value = email; 
    form.querySelector('textarea[name="message"]').value = message; 
  }
};

window.addEventListener('load', populateFormFields);

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const email = form.querySelector('input[name="email"]').value;
  const message = form.querySelector('textarea[name="message"]').value;
  console.log(`Email: ${email}`, `Message: ${message}`);
  localStorage.removeItem(key);
});
