/* ============================== typing animation ====================================*/ 
var typed = new  Typed(".typin",{
    strings:["Web Designer","Web Devoloper","Graphic Designer"],
    typeSpeed:100,
    BackSpeed:60,

})

/*dffshhsuhuiusedr*/ 
const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
     navTogglerBtn.addEventListener("click", () =>
     {
        asideSectionTogglerBtn();
     })
     function asideSectionTogglerBtn()
     {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++ )
        {
            allSection[i].classList.toggle("open");
        }
     }