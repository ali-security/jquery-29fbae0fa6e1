define([
	"../var/support"
], function( support ) {

// Support: Safari 8, IE<9
// Safari 8 collapses sibling forms in documents created via
// document.implementation.createHTMLDocument, IE<9 lacks the method entirely
support.createHTMLDocument = (function() {
	if ( !document.implementation || !document.implementation.createHTMLDocument ) {
		return false;
	}
	var doc = document.implementation.createHTMLDocument( "" );
	doc.body.innerHTML = "<form></form><form></form>";
	return doc.body.childNodes.length === 2;
})();

return support;
});
