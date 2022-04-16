import tweetsController from './main.js';

const signUpContainer = document.querySelector('.signup-main');
const formContainerSignUp = document.querySelector('.form-container__signUp');
const formContainerLogIn = document.querySelector('.form-container__logIn');
const logInContainer = document.querySelector('.login-main');

signUpContainer.addEventListener('click', (event) => {
    switch (true) {
        case event.target.classList.contains('link-container__link-home'): {
            window.location.href = './index.html';
            break;
        }

        case event.target.classList.contains('link-login'): {
            const card = event.path[4];

            card.classList.toggle('is-flipped');
            break;
        }
    }
});

formContainerSignUp.addEventListener('submit', (event) => {
    event.preventDefault();

    const userInput = formContainerSignUp.querySelector('#user');
    const passwordInput = formContainerSignUp.querySelector('#password');
    const confirmPasswordInput = formContainerSignUp.querySelector('#confirm-password');

    if (tweetsController.isValidUser(userInput) && tweetsController.isValidPassword(passwordInput) && tweetsController.isEqualPassword(passwordInput, confirmPasswordInput)) {
        tweetsController.dataApiService.postRegistration(userInput.value, passwordInput.value, event);
    }
});

logInContainer.addEventListener('click', (event) => {
    switch (true) {
        case event.target.classList.contains('link-container__link-home'): {
            window.location.href = './index.html';
            break;
        }

        case event.target.classList.contains('button__signup'): {
            const card = event.path[5];

            card.classList.remove('is-flipped');
            break;
        }
    }
});

formContainerLogIn.addEventListener('submit', (event) => {
    event.preventDefault();

    const error = logInContainer.querySelector('.form-container__error');
    const loginInput = formContainerLogIn.querySelector('#login');
    const passwordInput = formContainerLogIn.querySelector('#login-password');

    if (loginInput.value !== '' && passwordInput.value !== '') {
        tweetsController.dataApiService.postLogin(loginInput, passwordInput, error);
    } else {
        passwordInput.value = '';

        error.classList.add('show');
        loginInput.classList.add('error-input');
        passwordInput.classList.add('error-input');
    }
});
