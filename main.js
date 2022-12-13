function loader(){
    var load;
    load = setTimeout(showPage, 1500);
    function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("projects").style.display = "flex";
    document.getElementById("button").style.display = "flex";
    }
}
