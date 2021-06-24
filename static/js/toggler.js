function toggle() {
    console.log('>>>>>>>')
    var x = document.getElementById("js-navbar-toggle");
    console.log(x.className)
    if (x.className === "main-nav align-self-center m-0") {
        x.className += " responsive";
    }
    else {
        x.className = "main-nav align-self-center m-0";
    }
}