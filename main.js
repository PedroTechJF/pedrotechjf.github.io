function loader(){
    function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("container").style.display = "block";
        document.getElementById("background").style.display = "block";
        isMobile();
    }
    document.getElementById("body").addEventListener('loadeddata', showPage());
}
var addEffect = function(button_id) {
    var x = window.matchMedia("(max-width: 800px)");
    if (x.matches) {
        document.getElementById(button_id).setAttribute("style", "background-color: rgba(209, 209, 209, 0.15); transform: scale(1.05);");
        setTimeout(function () {
            document.getElementById(button_id).setAttribute("style", "background-color: transparent; transform: scale(1.0);");
        }, 1000);
    }
}

function isMobile(){
    var x = window.matchMedia("(max-width: 800px)")
    let contain = document.getElementsByClassName("contain");
    let height = window.innerHeight;
    let width = window.innerWidth;
    if(x.matches){
        contain[2].style.width = (width) - (width * 15 / 100) + "px";
        document.getElementById("menu").style.height = height + "px";
        return true;
    }
}
function hideMenu(){
    if(isMobile() ==  true){
        let checkbox = document.getElementById("checkbox");
        checkbox.checked = false;
    }
}




