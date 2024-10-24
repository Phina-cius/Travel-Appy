//mobile phone navigation

let navMenu=document.getElementById('nav-menu'),
    toggleMenu=document.getElementById('toggle-btn'),
    closingBtn=document.getElementById('closing-btn')


//getting the navigation menu for the button
if(toggleMenu){
    toggleMenu.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

//removing the nav-menu

if(closingBtn){
    closingBtn.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })

}

//closing the nav menu by clicking the link
const link=document.querySelectorAll('.nav-link')

const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu')
    if(navMenu){
        navMenu.classList.remove('show-menu')
    }

}

//removing the menu by clicking any link
link.forEach(a=>a.addEventListener('click',linkAction))