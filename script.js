function customTag(tagName, func){
    document.createElement(tagName);
    var tagInstances = document.getElementsByTagName(tagName);
        for ( var i = 0; i < tagInstances.length; i++) {
            func(tagInstances[i]);
        }
}

function maximeFooter(element) {
    if (element.attributes.text) {
        element.innerHTML = '<footer>\n<div class="container">\n<p>' + element.attributes.text.value +'</p>\n</div>\n</footer>';
    } else {
        console.error("Attribut 'text' manquant sur la balise: <maxime-footer>");
    }
}

customTag("maxime-footer", maximeFooter);