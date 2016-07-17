module.exports = function(content){
	var docContent = content;

	docContent = docContent.replace(/\'\'\'([^\']*)\'\'\'/g,
	'<strong class=\"content_strong\">$1</strong>');	//'''$1'''
	docContent = docContent.replace(/=======([^=]*)=======/g,
		"<h6 class=\"outline\">$1</h6>");	//===$1===
	docContent = docContent.replace(/======([^=]*)======/g,
		"<h5 class=\"outline\">$1</h5>");	//===$1===
	docContent = docContent.replace(/=====([^=]*)=====/g,
		"<h4 class=\"outline\">$1</h4>");	//===$1===
	docContent = docContent.replace(/====([^=]*)====/g,
		"<h3 class=\"outline\">$1</h3>");	//===$1===
	docContent = docContent.replace(/===([^=]*)===/g,
		"<h2 class=\"outline\">$1</h2>");	//===$1===
	docContent = docContent.replace(/==([^=]*)==/g,
		"<h1 class=\"outline\">$1</h1>");	//==$1==
	docContent = docContent.replace(/\[\[(((?!\[\[).)*)\]\]/g,
		"<a href=\"/view/$1\">$1</a>");		//[[$1]]
	return docContent;
};
