var post = document.getElementById("yourtext")
var a = document.getElementById("all")

var postTime = document.getElementById("timepost")
var c = document.getElementById("comentcome")
var cc = document.getElementById("cc")
var s = document.getElementById("sendit")
var ss = document.getElementById("sendit2")
var urcom = document.getElementById("urcom")


function getDate (){
var time = new Date()

var h = time.getHours()

var sec = time.getSeconds()


postTime.innerText = sec+" sec" + " ago ";


if(sec==59){
    var sec = 1
    sec = sec++
    
postTime.innerText = sec+" min" + " ago ";
sec++
 }
 else{
    postTime.innerText = sec+" sec" + " ago ";
 }
}

// 2function in one

function myfunction(){
    getDate();
    showpost();
   
    delinside();
    all();
}

// ner
// area jahan mera saman aye ga
// box jhan saman hai

var area = document.getElementById("area")              
var div = document.getElementById("box")


var para = document.createElement("p")
function showpost(){
 area.innerHTML=`
 <div class="image">
 <p id='text2' class ="text1">${post.value}</p>
 </div>
 `


}
var down=document.getElementById("down")
function all(){
    a.style.display="inline-block"
    down.style.marginTop="470px"
}
var comm= document.getElementById("comee")
function send(){
    c.innerHTML=`<div class="display">
    <img class="user3" src="WhatsApp Image 2023-07-04 at 1.58.00 PM.jpeg" alt="">
    <p class="name">Hamza Asad</p>
    <p class="come">${s.value}</p>
    </div>`
    a.style.height="470px"
    urcom.style.marginTop="-8px"
    down.style.marginTop="530px"
    
   


   
}
function send2(){
    cc.innerHTML=`<div class="display2">
    <img class="user3" src="WhatsApp Image 2023-07-04 at 1.58.00 PM.jpeg" alt="">
    <p class="name">Hamza Asad</p>
    <p class="come">${ss.value}</p>
    </div>`

comm.style.marginTop="80px"
down.style.height="560px"
   
}
function delf(){
    // area.innerHTML=""
    // area.style.backgroundImage="none"
    a.style.display="none"
    s.value=""
    down.style.marginTop="-5px"
    c.innerText=""
    cc.innerText=""

}

function delinside(){
    // div.innerText=""
    post.value=""
    post.style.backgroundImage="none"
}

var del = document.getElementById("del")



var bg = document.getElementById("bgimg")

function bgchanger(){
   
   
    post.style.backgroundImage="url('https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80')"
    area.style.backgroundImage="url('https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80')"

}
function bgchanger2(){
   
   
    post.style.backgroundImage="url('https://img.freepik.com/premium-photo/abstract-3d-background-wallpaper-neon-texture-purple-blue-tint_856565-459.jpg?w=2000')"
    area.style.backgroundImage="url('https://img.freepik.com/premium-photo/abstract-3d-background-wallpaper-neon-texture-purple-blue-tint_856565-459.jpg?w=2000')"

}
function bgchanger3(){
   
   
    post.style.backgroundImage="url('https://wallpaperset.com/w/full/c/4/8/165457.jpg')"
    area.style.backgroundImage="url('https://wallpaperset.com/w/full/c/4/8/165457.jpg')"

}
function bgchanger4(){
   
   
    post.style.backgroundImage="url('https://cdn.trendhunterstatic.com/thumbs/cool-backgrounds.jpeg?auto=webp')"
    area.style.backgroundImage="url('https://cdn.trendhunterstatic.com/thumbs/cool-backgrounds.jpeg?auto=webp')"

}
function bgchanger5(){
       post.style.backgroundImage="url('https://st2.depositphotos.com/3894705/7745/i/450/depositphotos_77458360-stock-photo-grunge-background-of-dark-blue.jpg')"
    area.style.backgroundImage="url('https://st2.depositphotos.com/3894705/7745/i/450/depositphotos_77458360-stock-photo-grunge-background-of-dark-blue.jpg')"
}
function bgchanger6(){
       post.style.backgroundImage="url('https://e0.pxfuel.com/wallpapers/87/60/desktop-wallpaper-bright-background-bright-floral-bright-blue-and-bright-cool-bright.jpg')"
    area.style.backgroundImage="url('https://e0.pxfuel.com/wallpapers/87/60/desktop-wallpaper-bright-background-bright-floral-bright-blue-and-bright-cool-bright.jpg')"
}
function bgchanger7(){
       post.style.backgroundImage="url('https://cdn.wallpapersafari.com/14/60/VBu9Uz.jpg')"
    area.style.backgroundImage="url('https://cdn.wallpapersafari.com/14/60/VBu9Uz.jpg')"
}

var black = document.getElementById("black")
var blue = document.getElementById("blue")
var green = document.getElementById("green")
var white = document.getElementById("white")
var red = document.getElementById("red")
var purple = document.getElementById("purple")
var tex1 = document.getElementById("text2")






