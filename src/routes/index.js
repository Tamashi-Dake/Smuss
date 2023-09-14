

// const newsRouter = require('./news');
// const meRouter = require('./me');
const songsRouter = require('./songs');
// const siteRouter = require('./site');

function route(app) {
    // app.use('/news', newsRouter);
    // app.use('/me', meRouter);
    app.use('/songs', songsRouter);

    // app.use('/', siteRouter);
}

module.exports = route;
