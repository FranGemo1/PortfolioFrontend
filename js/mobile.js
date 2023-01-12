const menu =document.querySelector(".menu");
const Abrirmenu =document.querySelector(".abrir-menu");
const Cerrarmenu =document.querySelector(".cerrar-menu");

var contador=0;

function AbriroCerrarmenu (){
    if(contador==0){
    menu.classList.add("menu_abierto");
    contador=1;
}
    else{
        menu.classList.remove("menu_abierto");
        contador=0;
    }

}

Abrirmenu.addEventListener("click",AbriroCerrarmenu);
Cerrarmenu.addEventListener("click",AbriroCerrarmenu);


const menuLinks=document.querySelectorAll('.menu a[href^="#"] ');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        const id= entry.target.getAttribute("id");
        const menuLink=document.querySelector(` .menu a[href="#${id}"]`);

        if(entry.isIntersecting){
            document.querySelector(".menu a.seleccionado").classList.remove("seleccionado");
            menuLink.classList.add("seleccionado");
        }
        

    });
       
    
},{rootMargin: "-30% 0px -70% 0px"});

menuLinks.forEach(menuLink =>{
    menuLink.addEventListener("click",function(){
        menu.classList.remove("menu_abierto");
    });

    const numeral=menuLink.getAttribute("href");
    const target=document.querySelector(numeral);
    if(target){
        observer.observe(target);
    }
})




