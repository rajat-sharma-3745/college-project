const body = document.getElementById("body")
const header = document.getElementById("header")
const dark = document.getElementById("dark")
const togglebutton=document.getElementById("nav-toggle")
const navlinks=document.getElementById("navlinks")
const clginfo=document.getElementById("clginfo")
const clginfotoggle=document.getElementById("clginfo-toggle")
const mail=document.getElementById("mail")
const phone=document.getElementById("phone")
const inverted= document.getElementsByClassName("inverted")

//sticky navbar
window.addEventListener('scroll',()=>{
      header.classList.toggle('sticky',window.scrollY>0)
})



dark.addEventListener("click", (e) => {
      if (!body.classList.contains("dark")) {
            body.classList.add("dark")
            e.preventDefault();
            // mail.classList.add("inverttt")
            // phone.classList.add("inverttt")
            // dark.classList.add("fa-regular fa-moon")
            // dark.classList.remove("fa-solid fa-moon")
            for (var i = 0, len = inverted.length; i < len; i++) {
                  // elements[i].style ...
                  inverted[i].style.filter="invert(100%)"
              }
             
      }
      else {
            body.classList.remove("dark")
            e.preventDefault();
            // dark.classList.remove("fa-regular fa-moon")
            // dark.classList.add("fa-solid fa-moon")
            for (var i = 0, len = inverted.length; i < len; i++) {
                  // elements[i].style ...
                  inverted[i].style.filter="invert(0%)"
              }
      }
})

// menu
togglebutton.addEventListener('click', () =>{
     if(! navlinks.classList.contains('active'))
     {
        
      navlinks.classList.add('active');
     }
      else
      {
      navlinks.classList.remove('active');
      }
})
// clg email,phone menu
   clginfotoggle.addEventListener('click', () =>{
     if(!clginfo.classList.contains('active1'))
     {
      clginfo.classList.add('active1');
      header.style.marginTop="49px"
      
     }
      else
      {
      clginfo.classList.remove('active1');
      header.style.marginTop="0px"
      }

})


const formreset =()=>{
      document.getElementById("mycontactform").reset()
}