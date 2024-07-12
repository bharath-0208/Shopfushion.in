var sidedivm=document.querySelector(".sidediv")
function o()
{
  sidedivm.style.left="0px"
}
function c()
{
  sidedivm.style.left="-60%"
}
var letter = document.querySelector(".newsletter");
var newsletterconform=document.querySelector(".newsletterconform")
   function kk() {
        letter.style.display = "none";
        newsletterconform.style.display="flex"
        alert("registered")
       
    }
    
    var cover=document.querySelector(".scover")
    var addressbox=document.querySelector(".addressfill")
    function ado(){
      cover.style.display="inline-block"
      addressbox.style.display="inline-block"
    }
    function end(){
      cover.style.display="none"
      addressbox.style.display="none"
    }
    
    
    var namem=document.getElementById("namein")
    var phone=document.getElementById("phonein")
    var city=document.getElementById("cityin")
    var pincode=document.getElementById("pinin")
    var house=document.getElementById("housein")
    var container=document.getElementById("container")
    
    function newd(){
      cover.style.display="none"
      addressbox.style.display="none"
      
      var div=document.createElement("div")
      div.setAttribute("class","boxcontainer")
      div.innerHTML=`<h3>${namem.value}</h3>
      <p>${phone.value}</p>
      <p>${city.value}</p>
      <p>${pincode.value}</p>
      <p>${house.value}</p>
      <button onclick="cdd(event)">Delete</button>
      <button onclick="po(event)">Place order</button>`
      container.append(div)

    }
    function cdd(event){
      event.target.parentElement.remove()
    }
    function po(event){
      alert("Your order placed")
    }
    
     var overallcontainer =document.querySelector(".collectioncontainer")
    var containerinner=overallcontainer.querySelectorAll(".containercm")
    
      
      function findproduct(event) {
  var enteredvalue = event.target.value.toUpperCase();
    
    for(count=0;count<containerinner.length;count=count+1){
    var productc=containerinner[count].querySelector(".caption").textContent.toUpperCase()
    if(productc.indexOf(enteredvalue)<0)
    {
      containerinner[count].style.display="none"
      
    }
    else
    {
      containerinner[count].style.display="block"
    }
      }

      }
    
    
    
    
    