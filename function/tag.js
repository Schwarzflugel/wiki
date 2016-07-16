module.exports = function(content){
	var docContent = content;

	docContent = docContent.replace(/\'\'\'([^\']*)\'\'\'/g,
	'<strong class=\"content_strong\">$1</strong>');	//'''$1'''
	docContent = docContent.replace(/==([^=]*)==/g,
	"<h1 class=\"outline\">$1</h1>");	//==$1==

	return docContent;
};
