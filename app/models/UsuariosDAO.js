function UsuariosDAO (conection){
    this._connection = connection;
}

UsuariosDAO.prototype.getUsuarios= function (callback){
   this._connection.query('select * from usuarios', callback);
}

UsuariosDAO.prototype.getUserNoticia= function (ObjIdUsuario, callback){
    //this._connection.query('select * from noticias where id_usuario = ${objIdUsuario.id_usuario}', callback);
this._connection.query('select usuarios.*, noticias.* from noticias inner join usuarios on(noticias.id_usuarios = usuarios.id_usuarios) where usuarios.id_usuario = ${objIdUsuario.id_usuario}', callback );
 }

 UsuariosDAO.prototype.login= function (ObjUsuario, callback){
    //this._connection.query('select * from noticias where id_usuario = ${objIdUsuario.id_usuario}', callback);
this._connection.query('select * from usuarios where email_usuario = ${objusuario.email_usuario} and senha_usuario = ${objUsuario.senha_usuario}', callback);
 }

module.exports = function(){
    return UsuariosDAO;
}