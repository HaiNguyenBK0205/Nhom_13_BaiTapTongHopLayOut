function open_side_panel() {
    document.getElementById("side-panel").style.width = "80%";
    document.getElementById("after-dn").style.display = "inline";
    document.getElementById("side-panel-bg").style.display = "block";
}

function close_side_panel() {
    document.getElementById("side-panel").style.width = "0px";
    document.getElementById("after-dn").style.display = "none";
    document.getElementById("side-panel-bg").style.display = "none";
}