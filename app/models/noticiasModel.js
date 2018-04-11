module.exports = function(app) {
	this.getNoticias = function(connection, callback) {
		connection.query('SELECT * FROM noticias', callback);
	};

	this.getNoticia = function(connection, callback) {
		connection.query('SELECT * FROM noticias WHERE id_noticia = 2', callback);
	}

	return this;
};