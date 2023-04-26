const BasePage = require("./base.page");

class CoursesPage extends BasePage{
    constructor() {
        super('/courses');
    }

}

module.exports = CoursesPage;