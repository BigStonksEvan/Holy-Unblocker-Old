/* -----------------------------------------------
/* Authors: OlyB
/* MIT license: http://opensource.org/licenses/MIT
/* prSet script
/* ----------------------------------------------- */

function prSet(type) {
    var prUrl = document.getElementById("pr-url"),
    prGo1 = document.getElementById("pr-go1"),
    prGo2 = document.getElementById("pr-go2");

    prUrl.addEventListener("keydown", function(e) {
        if (e.code == "Tab" && event.shiftKey && event.keyCode == 9 && prUrl.value) goProx[type](prUrl.value, true);
    }, false);

    prGo1.addEventListener("click", function() {
        if (prUrl.value) goProx[type](prUrl.value);
    }, false);

    prGo2.addEventListener("click", function() {
        if (prUrl.value) goProx[type](prUrl.value, true);
    }, false);
}
