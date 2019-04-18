
var a = document.getElementsByTagName("a");
for (var i = 0; i < a.length; i++) {
    a[i].onclick = function () {
        showPic(this);
        return false;
    }
}

function showPic(whichPic) {
    var source = whichPic.getAttribute("href");
    //var source = whichPic.href;
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    //placeholder.src = source;
    //老办法，不具备通用性
    //DOM是一种适用于多种环境和多种程序设计语言的通用性API
    var text = whichPic.getAttribute("title");
    var description = document.getElementById("description");
    description.childNodes[0].nodeValue = text;
}

