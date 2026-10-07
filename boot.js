module.exports = app => {
  async function start(port) {
    try {
      await app.db.authenticate();
      await app.db.sync();
      if (process.env.NODE_ENV !== 'test') {
        app.listen(port, () => {
          console.log(`NTask API - porta ${port}`);
        });
      }
    } catch (error) {
      console.log('Erro de conexão com banco de dados.');
      console.log(error);
    };
  };

  start(app.get('port'));
};