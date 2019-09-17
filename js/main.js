let nav = document.querySelector('nav');
// const skillSec = document.querySelector('#skills');
const sections = document.querySelectorAll('section');
const sectionsNameArray = ['welcome', 'skills', 'progetti', 'resumé', 'contatti'];
window.addEventListener('scroll', (e) => {
  sections.forEach(section => {
    
    if (section.getBoundingClientRect().top <= 0) {

      if (nav.querySelector('.active')) {
        nav.querySelector('.active').classList.remove('active');
      }
      // todo: add a parameter [i] to count the element position and take the name from
      // todo: the array with all the sections.names
      document.querySelector('.name-section').textContent = section.id;
      document.querySelector('.nav-button[href="#' + section.id + '"]').classList.add('active');
    }
  });
});


const btnSubmit = document.querySelector('#submit');
const formElement = document.querySelectorAll('.form_element');

window.onload = ()=>{
  formElement.forEach(element =>{
    element.attributes
  });
}
// todo: implement check for nome, oggetto, messaggio > 2 and check for the email to be xxxx@xx.xx
btnSubmit.addEventListener('click', () => {
  formElement.forEach((element)=>{
  
    element.oninvalid = function(){
      element.style.borderColor = '#FD6C52';
    }
  });
});