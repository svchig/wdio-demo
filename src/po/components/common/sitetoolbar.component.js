class SiteToolBarComponent {

    get languageSwitcherBtn() {
        return $('.sitetoolbar__lang-switcher .sitetoolbar__dropdown-button');
    }

    get rootListElement() {
        return $('.sitetoolbar__sections-list');
    }

    get loginSitetoolBar() {
        return $('button.sitetoolbar__login');
    }

    item(param) {
        const selectors = {
            textbook: '[href="/"]',
            courses: '[href="/courses"]',
            forum: '[href="https://javascript.ru/forum/"]',
            quiz: '[href="/quiz"]'
        };
        return this.rootListElement.$(selectors[param.toLowerCase()]);

    }

}

module.exports = SiteToolBarComponent;