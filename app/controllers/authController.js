module.exports.login= (application, req, res)=>{
    const objUsuario = req.body;
    console.log(objUsuario);

    const connection = application.config.dbConnection;
    const usuariosDAO = new application.app.models.UsuariosDAO(connection);
    usuariosDao.login(objUsuario,(error, result)=> {
    // res.render("usuarios/home", { usuarios: result})
    res.redirect('/usuario/home');
    });
}