const {pages} = require ('./../po')

describe('first tests', () => {
    beforeEach(async () => {
        await pages('textbook').open();
    })

    it('Check page title', async () => {
        await expect(browser).toHaveTitleContaining('Современный учебник JavaScript');
    })

    it('Open module window for login',  async () => {
        await pages('textbook').siteToolBarMenu.loginSitetoolBar.click();
        //check that module window is displayed
        await expect(pages('textbook').loginWindow.loginFormModal).toBeDisplayed();
    })

    it('check login windows is not closed', async () => {
        await pages('textbook').siteToolBarMenu.loginSitetoolBar.click();
        await pages('textbook').loginWindow.loginFormModal.waitForDisplayed();
        await pages('textbook').loginWindow.loginSubmitBtn.click();
        await expect(pages('textbook').loginWindow.loginFormModal).toBeDisplayed();
        //check warrnig messages

    })

    it('close a modal window for login', async () => {
        await pages('textbook').siteToolBarMenu.loginSitetoolBar.click();
        await pages('textbook').loginWindow.loginFormModal.waitForDisplayed();
        await pages('textbook').loginWindow.loginCloseBtn.click();
        await expect(pages('textbook').loginWindow.loginFormModal).not.toBeDisplayed();

        // //check that window is not displayed
        // await expect($('.login-form_modal')).not.toBeDisplayed();       
    })

    it('Navigation thought the menu', async() => {
        await pages('textbook').siteToolBarMenu.item('courses').click()
        await pages('courses').siteToolBarMenu.item('quiz').waitForDisplayed();
        await pages('courses').siteToolBarMenu.item('quiz').click();
        await pages('quiz').siteToolBarMenu.item('forum').waitForDisplayed();
        await pages('quiz').siteToolBarMenu.item('forum').click();

    }
    )
})