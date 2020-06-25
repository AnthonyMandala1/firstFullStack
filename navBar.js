function navBarMenu() {
    var id = document.getElementById("navBarElements");
    if(id.className === "top-nav") {
        id.className += " click";
    } else {
        id.className = "top-nav";
    }
}