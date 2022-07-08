
 document.getElementByID("menubtn").click(function() {
    var x = document.getElementByID("menu")

    if (x.style.display === "block") {
       menubtn.addClass(active)
    } else {
        menubtn.removeClass(active)
    }
})
