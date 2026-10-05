module.exports = app => {
  app.listen(app.get('port'), () => {
    console.log(`NTask API - Porta: ${app.get('port')}`);
  })
}