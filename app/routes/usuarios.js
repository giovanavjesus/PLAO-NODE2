module.exports = (application) => {
    application.get('/usuarios', (req, res) => {
      application.app.controllers.usuarioscontrollers.usuarios(application, req, res);
    });
    application.get('/usuario/noticias', (req, res) => {
        application.app.controllers.usuarioscontrollers.getUserNoticias(application, req, res);
      });
      application.get('/usuario/login', (req, res) => {
        application.app.controllers.usuarioscontrollers.form_login(application, req, res);
      });
      application.get('/usuario/login', (req, res) => {
        application.app.controllers.authcontrollers.login(application, req, res);
      });
      application.get('/usuario/home', (req, res) => {
        application.app.controllers.usuarioscontrollers.home(application, req, res);
      });
  }