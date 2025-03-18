const menu = document.querySelector(".hide")
const mobileNav = document.querySelector(".mobile-nav");
const closeIcon = document.querySelector(".closeIcon")
console.log(closeIcon.innerHTML)

menu.addEventListener("click",()=>{
    if(mobileNav.style.display === "none"){
        mobileNav.style.display = "block"
    }else{
        mobileNav.style.display = "none"
    }
})

closeIcon.addEventListener("click", ()=>{
    console.log("Hello");
    mobileNav.style.display = "none"
})