module.exports  = function(app) {
	app.get('/formulario_inclusao_noticia', function(req, res){
		res.render('admin/form_add_noticia.ejs');
	});
	app.post('/noticias/salvar', function(req, res){
		var noticia = req.body;
		var connection = app.config.dbConnection();
        var noticiaModel = app.app.models.noticiasModel();

        noticiaModel.salvarNoticia(noticia, connection, function(error, result){
            res.redirect('/noticias');
        });


	});
};