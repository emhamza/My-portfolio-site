const contactForm = document.querySelector('.contactForm');
const emailInput = document.querySelector('#lowerCase');
const isValid = (emailInput) => !/([A-Z])/g.test(emailInput);
const error = document.querySelector('.error');

contactForm.addEventListener ('submit', (event) => {
  if (!isValid(emailInput.value)){
    event.preventDefault();
    error.textContent = 'Email must be in lower case, darling!';
    error.className = 'error active';
  }else {
    form.submit();
    emailInput.className= 'valid';
    error.textContent = '';
    error.className = 'error';
    save();
  }
})
