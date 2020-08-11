//
let maincolors=localStorage.getItem("color-option");
if(maincolors!== null){
// console.log("localstoarge is not Empty")
document.documentElement.style.setProperty("--main--color",maincolors)
//
document.querySelectorAll(".colors-test li").forEach(Element=>{
    Element.classList.remove("active");
    if(Element.dataset.color===maincolors){
       Element.classList.add("active")
    }
     });
//

}
//

//
//Start

let backgroundoption=true;

let thebackgroundinterval;

let backgroundlocalitem=localStorage.getItem("background-option");
if(backgroundlocalitem!==null){
if(backgroundlocalitem===true){
    backgroundoption=true
    document.querySelector(".random-backgrounds .yes").classList.add("active");

}else{
    backgroundoption=false
    document.querySelector(".random-backgrounds .no").classList.add("active");
}

document.querySelectorAll(".random-backgrounds span").forEach(elment=>{
    elment.classList.remove("active")
});

}

document.querySelector(".toogle-settings .fa-gear").onclick=function(){
    this.classList.toggle("fa-spin");

    document.querySelector(".settings-box").classList.toggle("open");
}
//End 
//switch colors
const colorsli=document.querySelectorAll(".colors-test li");
colorsli.forEach(li =>{
li.addEventListener("click",(e)=>{
 document.documentElement.style.setProperty("--main--color",e.target.dataset.color)
 localStorage.setItem("color-option",e.target.dataset.color);

 handleactive(e);

 //
});
});
// end colors

//switch backgrounds
const randombackEl=document.querySelectorAll(".random-backgrounds span");
randombackEl.forEach(span =>{
span.addEventListener("click",(e)=>{
 
    handleactive(e);
 if(e.target.dataset.background==="yes"){
   backgroundoption= true
randomizeimage();
localStorage.setItem("background-option",true);
 }else{
   backgroundoption=false
   clearInterval(thebackgroundinterval)
   localStorage.setItem("background-option",false);

 }
 //
});
});
// end backgrounds

let landingpage=document.querySelector(".landing-page");

let imgsarray=["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg",];


function randomizeimage(){
    if(backgroundoption===true){
      thebackgroundinterval= setInterval(()=>{
 let randomnumber=Math.floor(Math.random()*imgsarray.length);
 landingpage.style.backgroundImage= 'url("imgs/'+imgsarray[randomnumber] +'")';
        },10000)
    }
}
randomizeimage();

//select start progress


let ourskills=document.querySelector(".skills");

window.onscroll=function(){
    let skillsoffsettop=ourskills.offsetTop;

     let skillsouterheight=ourskills.offsetHeight;

     let windowheight=this.innerHeight

     let windowscrolltop=this.pageYOffset

     if(windowscrolltop>(skillsoffsettop+skillsouterheight-windowheight)){
         let allskills=document.querySelectorAll(".skills-box .skill-progress span");
    
         allskills.forEach(skill => {
        skill.style.width = skill.dataset.progress;

    });
        }
}

//select End progress


//start gallery 

let ourgallery=document.querySelectorAll(".gallery img");

ourgallery.forEach(img=>{
img.addEventListener('click',(e) => {

let overlay=document.createElement('div');

overlay.className="popup-overlay";

document.body.appendChild(overlay)

let popupbox=document.createElement("div");

popupbox.className="popup-box"

if(img.alt !== null){
    let imgheading=document.createElement("h3");
   
    let imgtext=document.createTextNode(img.alt)
   
    imgheading.appendChild(imgtext);
   
    popupbox.appendChild(imgheading)
   }

let popupImage=document.createElement("img");

popupImage.src = img.src

popupbox.appendChild(popupImage);

document.body.appendChild(popupbox);


let closeButton=document.createElement("span");

let closebuttontext=document.createTextNode("x");

closeButton.appendChild(closebuttontext);

closeButton.className="close-button"

popupbox.appendChild(closeButton)

});
});
 //End gallery 

 // close popup

 document.addEventListener("click",function(e){
    if(e.target.className == 'close-button'){
     e.target.parentNode.remove()

     document.querySelector('.popup-overlay').remove();
    }

 });

 //select all Bullets

 const allbullets=document.querySelectorAll(".nav-bullets .bullet");

const alllinks=document.querySelectorAll(".links a");

function hamza (elment){
    elment.forEach(ele =>{

        ele.addEventListener("click",(e)=>{
       
            e.preventDefault();
       
         document.querySelector(e.target.dataset.section).scrollIntoView({
       
         behavior:'smooth'
         });
        });
       });
};

hamza(allbullets);
hamza(alllinks);


// Handle Active Stat

function handleactive(ev){
     //
 ev.target.parentElement.querySelectorAll(".active").forEach(Element=>{
    Element.classList.remove("active");
     });
     //
     //
     ev.target.classList.add("active")

}

let bulletsspan = document.querySelectorAll(".bullets-option span");

let bulletscontainer = document.querySelector(".nav-bullets");

let bulletlocal=localStorage.getItem("bullets-option");

if(bulletlocal !== null){

 bulletsspan.forEach(span =>{
 span.classList.remove("active");
 });

 if(bulletlocal === 'block'){
    bulletscontainer.style.display='block';
    document.querySelector(".bullets-option .yes").classList.add("active")

 }else{
    bulletscontainer.style.display='none';
    document.querySelector(".bullets-option .no").classList.add("active")

 }

}

bulletsspan.forEach(span => {
 span.addEventListener("click", (e) =>{

     if(span.dataset.display === 'show'){
      bulletscontainer.style.display='block';

      localStorage.setItem("bullets-option",'block')
     }else{
        bulletscontainer.style.display='none';
        localStorage.setItem("bullets-option",'none')

     }
     handleactive(e);
 });
});

// Reset Button
document.querySelector(".reset-options").onclick=function()
{
//   localStorage.clear();
 localStorage.removeItem("bullets-option");
 localStorage.removeItem("color-option");
 localStorage.removeItem("background-option");
 window.location.reload();
}


let tooglebutton=document.querySelector(".toogle-menu");

let tlinks=document.querySelector(".links");

tooglebutton.onclick=function(e)
{

    e.stopPropagation();

    this.classList.toggle("menu-active");

    tlinks.classList.toggle("open");

}

document.addEventListener("click",(e)=>
{
    if(e.target!== tooglebutton && e.target!==tlinks){

        if(tlinks.classList.contains("open")){
            tooglebutton.classList.toggle("menu-active");

            tlinks.classList.toggle("open");
                }
    }
});

tlinks.onclick=function(e){
    e.stopPropagation();
};