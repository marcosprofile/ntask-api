const bodyParser = require('body-parser');

module.exports = app => {
  app.set('port', 3000);
  app.set('json spaces', 4);
  app.use(bodyParser.json());
  app.use(app.auth.initialize());
  app.use((req, res, next) => {
    if (req.body != null) {
      delete req.body.id;
    }
    next();
  });
};
