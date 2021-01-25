window.onload() = function() {

    var hilightables = document.getElementsByClassName("hilightable");
    for (var i = 0; i < hilightables.length; i++) {
        (function(i) {
            var element = hilightables[i];

            element.addEventListener("focus", function() {
                element.classList.toggle("highlight");
            });

            element.addEventListener("blur", function() {
                element.classList.toggle("highlight");
            });
        })(i);
    }

}