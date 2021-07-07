module.exports = (application) => {
  application.get('/noticias', (req, res) => {
    application.app.controllers.noticiascontrollers.noticias(application, req, res);
  });
  application.get('/noticia', (req, res) => {
    application.app.controllers.noticiascontrollers.noticia(application, req, res);
  });
  application.get('/formulario-inclusao-noticia', (req, res) => {
    application.app.controllers.noticiascontroller.formulario_inclusao_noticia(application, req, res);
  });
  application.get('/noticias/salvar', (req, res) => {
    application.app.controllers.noticiascontroller.noticias_salvar(application, req, res);
  });
}