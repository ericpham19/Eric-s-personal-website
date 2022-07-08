
 document.getElementById("menubtn").click(function() {
    var x = document.getElementById("menu")

    if (x.style.display === "block") {
       x.addClass(active)
    } else {
        x.removeClass(active)
    }
})
