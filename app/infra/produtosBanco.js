
module.exports = function(connection){
	var lista = function(connection,callback){
		connection.query('select * from livros', callback);
	}
	return this;
}