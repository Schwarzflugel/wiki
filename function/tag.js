module.exports = function(content/*, rend*/, res){
	var docContent = content;

	docContent = docContent.replace(/\'\'\'([^\']*)\'\'\'/g, '<strong>$1</strong>');	//'''$1'''
	docContent = docContent.replace();

	console.log(docContent);
	//rend(content);
};
