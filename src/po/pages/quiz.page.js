const BasePage = require("./base.page");

class QuizPage extends BasePage {

    constructor() {
        super('/quiz');
    }

}

module.exports = QuizPage;