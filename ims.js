let image=document.getElementById("bg")
let a=document.getElementById("heightpx")
let b=document.getElementById("height%")
let c=document.getElementById("widthpx")
let d=document.getElementById("width%")
function heightPix(){
    image.height=a.value
 }function heightpercentage(){
    image.height=b.value
 }function widthpix(){
image.height=c.value
 }function widthpercentage(){
    image.height=d.value
 }
 function resize(){
   let e=document.getElementById("resize").value
document.getElementById("id2").setAttribute("href",e)
   
 }