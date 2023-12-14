let mdCollapse = document.querySelectorAll(".use-custom-nav .nav-part.md-collapse") ;
let dropdownLi = document.querySelectorAll(".use-custom-nav .nav-part li.dropdown");


for (const elm of mdCollapse) {
    toogleButton = elm.querySelector("button.nav-toggler") ;
    toogleButton.addEventListener("click", () => {
        elm.querySelector("ul.nav-toggle-target").classList.toggle("active");
    });

}

for (let elm of dropdownLi) {
    let dropdownBut = elm.querySelector(".dropdown-but");
    let elmToDropdown = elm.querySelector("ul");
    console.log(elmToDropdown);

    dropdownBut.addEventListener("click", ()=>{
        // Désactiver tous les autres éléments actifs
        for (let iter of dropdownLi) {
            if(iter.querySelector(".dropdown-but")!=dropdownBut) {
                iter.querySelector("ul.active")?.classList.remove("active");
                iter.classList.contains("active-dropdown-within") ? iter.classList.remove("active-dropdown-within"):false;
            }
        }
        // Activer ou désactiver l'élément cliqué
        elmToDropdown.classList.toggle("active");
        elm.classList.toggle("active-dropdown-within");
    });
}