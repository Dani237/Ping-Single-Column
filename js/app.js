let btnNotify = document.querySelector('.btn');
let emailInput = document.querySelector('.email-input');
let callSection = document.querySelector('.call-to-action');

let errorMessage = document.createElement('div');
errorMessage.textContent = 'Please provide a valid email address.';
errorMessage.classList.add('div-error');

exreg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

btnNotify.addEventListener('click', () => {
    console.log('Entrando al event click');
    if (!exreg.test(emailInput.value)) {
        emailInput.classList.add('error');
        callSection.insertBefore(errorMessage, btnNotify);
    } else {
        emailInput.classList.remove('error');
        callSection.removeChild(errorMessage);
    }
})