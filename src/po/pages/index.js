const TextbookPage = require('./textbook.page');
const CoursesPage = require('./courses.page');
const QuizPage = require('./quiz.page');
const ForumPage = require('./forum.page');

/**
 * @param name {'textbook' | 'courses' | 'quiz' | 'forum'} 
 * @returns {TextbookPage | CoursesPage | QuizPage | ForumPage} 
 */
function pages(name) {
    const items = {
        textbook: new TextbookPage(),
        courses: new CoursesPage(),
        quiz: new QuizPage(),
        forum: new ForumPage()
    }
    return items[name.toLowerCase()];
}

module.exports = {
    TextbookPage,
    CoursesPage,
    QuizPage,
    ForumPage,
    pages,
} 