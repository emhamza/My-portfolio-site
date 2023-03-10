const fullName = document.querySelector('#username');
const feedback = document.querySelector('#lowerCase');
const Messasge = document.querySelector('#message');

function visitorData() {
  const visitor = {
    Name: fullName.value,
    Email: feedback.value,
    Message: message.value,
  };
  localStorage.setItem('visitor', JSON.stringify(visitor));
}
[fullName, feedback, message].forEach((input) => input.addEventListener('focusout', visitorData));
const visitorDataExist = JSON.parse(localStorage.getItem('visitor'));
if (visitorDataExist) {
  fullName.value = visitorDataExist.Name;
  feedback.value = visitorDataExist.Email;
  message.value = visitorDataExist.Message;

}