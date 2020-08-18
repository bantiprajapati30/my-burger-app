// document.querySelectorAll("li");
// //document.querySelector("li").getAttribute("random")
// document.getElementsByClassName("second")
// //document.querySelector("h1").style.background = "blue";
 var button = document.getElementById("enter");
 var input = document.getElementById("userinput");
 var ul = document.querySelector("ul");

 function inputLength()
 { 
     return input.value.length;
 }
 function createList()
 {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value ="";
 }
 function addAfterClick() {
    if(inputLength()>0) {
     createList();
      } 
 }
 function addPressKey(event) {
    if(inputLength()>0 && event.which===13)
    {
       createList();
    }
 }

  button.addEventListener("click", addAfterClick);
  input.addEventListener("keypress", addPressKey);