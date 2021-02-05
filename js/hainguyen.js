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

// homeTool
function homeTool_Opendropdown(x) {
    var homeTool_menu_list = document.getElementsByClassName("homeTool-menu-item");
    for (var i = 0; i < homeTool_menu_list.length; i++) {
        homeTool_menu_list[i].classList.remove("show");
    }
    homeTool_menu_list[x].classList.add("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.homeTool-button')) {
        var homeTool_menu_list = document.getElementsByClassName("homeTool-menu-item");
        for (var i = 0; i < homeTool_menu_list.length; i++) {
            var openDropdown = homeTool_menu_list[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}