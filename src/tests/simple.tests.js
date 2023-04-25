describe('first tests', () => {
    beforeEach(async () => {
        await browser.url('https://learn.javascript.ru/');
    })

    it('Check page title', async () => {
        await expect(browser).toHaveTitleContaining('Современный учебник JavaScript');
    })

    it('Open module window for login',  async () => {
        //click on avatar on the header menu
        const loginSitetoolBar = await $('button.sitetoolbar__login')
        await loginSitetoolBar.click();
        //check that module window is displayed
        await expect($('.login-form_modal')).toBeDisplayed();
    })

    it('check login windows is not closed', async () => {
        //click on avatar on the header menu
        const loginSitetoolBar = await $('button.sitetoolbar__login')
        await loginSitetoolBar.click();
        //wait for visability of modal window
        await $('.login-form_modal').waitForDisplayed();
        //click in login btn
        await $('.login-form__submit').click();
        //check that module window is displayed
        await expect($('.login-form_modal')).toBeDisplayed();
        //check warrnig messages

    })

    it('close a modal window for login', async () => {
        //click on avatar on the header menu
        const loginSitetoolBar = await $('button.sitetoolbar__login')
        await loginSitetoolBar.click();
        //wait for visability of modal window
        await $('.login-form_modal').waitForDisplayed();
        //click on close button
        await $('.close-button').click();
        //check that window is not displayed
        await expect($('.login-form_modal')).not.toBeDisplayed();       
    })
})