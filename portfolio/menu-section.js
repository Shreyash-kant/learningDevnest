document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("Menu").addEventListener("click",showMenu);
    function showMenu(){
        const menu = document.querySelector(".menu-sec");
        menu.style.height = "100%";
    }
    document.getElementById("close").addEventListener("click",closeMenu);
    function closeMenu(){
        const menu = document.querySelector(".menu-sec");
        menu.style.height= "0";

    }
})