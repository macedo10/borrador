let toggleNavStatus = false;

let toggle = function (){
    let getSidebar = document.querySelector(".nav.sidebar");
    let getSidebarUl = document.querySelector(".nav.sidebar ul");
    let getSidebarTitle = document.querySelector(".nav.sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav.sidebar a");


if (toggleNavStatus === false){
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "272px";
    getSidebarTitle.style.opacity = "0.5";


    let arrayLenght = getSidebarLinks.length;
    for (let i = 0; i < arrayLenght; i++){
        getSidebarLinks[i].style.opacity = "1"
    }

    toggleNavStatus = true;
}

}