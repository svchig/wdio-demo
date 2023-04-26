class LoginWindowComponent {

    get loginFormModal() {
        return $('.login-form_modal');
    }

    get loginSubmitBtn() {
        return $('.login-form__submit');
    }

    get loginCloseBtn() {
        return $('.close-button');
    }
}

module.exports = LoginWindowComponent;