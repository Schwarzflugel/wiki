module.exports = function(content/*, rend*/, res){
	var docContent = content;

	docContent = docContent.replace(/\'\'\'([^\']*)\'\'\'/g, '<strong class="content_strong">$1</strong>');	//'''$1'''
	docContent = docContent.replace(/==([^=]*)==/g, "<h1 class=\"paragraph_1\">$1</h1>");

	console.log(docContent);
	//rend(content);
};
