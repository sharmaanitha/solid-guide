var nav =document.body.querySelector(".nav");
var display =document.body.querySelector(".display");
var title =document.createElement("h1");
var items =document.body.querySelector(".items").style.visibility="hidden";
var vdisplay =document.body.querySelector(".vdisplay");

function validate(){

  var messEle=document.body.querySelector(".valMess");
  var username=document.body.querySelector(".username").value;
  
  if(username==="coolStudent123"){
    messEle.innerHTML=""
      for(var i=0; i<pages.length; i++){
  createPage(pages[i]);
}
    
    document.body.querySelector(".username").style.visibility="hidden";
     document.body.querySelector(".validate").style.visibility="hidden";
   
  }else{
    messEle.innerHTML="The username was incorrect.";
  }
  
}

document.body.querySelector(".validate").addEventListener("click", function(){
  validate();
});


var pages = [
  
  {
    name:"Home",
    content:"Home"
  },
  {
    name:"About",
    content:"About"
  },
  {
    name:"View",
    content:"View Notes"
  }
];

function createPage(pg){
  var button =document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
 });
  button.innerHTML=pg.name;
  nav.appendChild(button);
}

function contentWrite(wd,pg){
  display.innerHTML="";
  
  if (pg == "Home"){
    homePage();
  }
  if(pg == "About"){
    aboutPage();
  }
  if(pg == "View"){
    viewPage();
    
  }

}

function aboutPage(){
  title.innerHTML="About";
  display.appendChild(title);
  var name = document.createElement("h3");
  name.innerHTML="Anitha S.";
  display.appendChild(name);
  document.body.querySelector(".vdisplay").innerHTML="";
  document.body.querySelector(".items").style.visibility="hidden";
  document.body.querySelector(".subMess").style.visibility="hidden";
}

function homePage(){
  title.innerHTML="Home";
  display.appendChild(title);
  document.body.querySelector(".vdisplay").innerHTML="";
  document.body.querySelector(".items").style.visibility="hidden";
  document.body.querySelector(".subMess").style.visibility="hidden";
  
}

function viewPage(){
  title.innerHTML="View Notes";
  display.appendChild(title);
  document.body.querySelector(".items").style.visibility="visible";
  document.body.querySelector(".subMess").style.visibility="visible";
  renderItems();

}

var list=[];

function renderItems(){
  for(var i=0; i<list.length; i++){
    var ele =document.createElement("div");
    ele.innerHTML=list[i];
    document.body.querySelector(".vdisplay").appendChild(ele);
  }
}

function submit(){
  var number=document.body.querySelector(".number").value;
  var text=document.body.querySelector(".text").value;
  if(text.length>1){
    document.body.querySelector(".subMess").innerHTML="";
    document.body.querySelector(".vdisplay").innerHTML="";
     list.push(number); 
     list.push(text);
  }else{
    document.body.querySelector(".subMess").innerHTML="Not enough letters";
    document.body.querySelector(".vdisplay").innerHTML="";
  }
 
  renderItems();
}

document.body.querySelector(".submit").addEventListener("click", function(){
  submit();
})