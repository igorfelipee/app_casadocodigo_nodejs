module.exports = function(){
	var lista = function(connection,callback){
		connection.query('select * from livros', callback);
	}
	return this;
}