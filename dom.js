const $ = function (selector) {
  const nodeList = document.querySelectorAll(selector);

  const text = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerText = content;
    }
  }
  
  const html = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML = content;
    }
  }

  const addClass = function(className){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.add(className);
    }
  }

  const removeClass = function(className){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.remove(className);
    }
  }

  const toggleClass = function(className){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.toggle(className);
    }
  }

  const empty = function(){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML = '';
    }
  }

  const append = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML += content;
    }
  }

  const prepend = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML = content + nodeList[i].innerHTML;
    }
  }

  const val = function (content) {
      if(content === undefined){
        return nodeList[0].value; 
      } else {
        nodeList[0].value = content;
      }     
  }

  const on = function (action, cb) {
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].addEventListener(action, cb);
    }
  }

  return {
    text: text,
    html: html,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    empty: empty,
    append: append,
    prepend: prepend,
    on: on,
    val: val
  };
}

function makeBox(object){
  let employee= 
  `<div class='box'>
    <p>Name: ${object.name}</p>
    <p>Office #: ${object.officeNum}</p>
    <p>Phone #: ${object.phoneNum}</p>
  </div>`
  return employee;
  }

  let myAdd=document.getElementById('addBar');
  // console.log(myAdd);
  let myUp=document.getElementById('upBar');
  let myVerify=document.getElementById('verifyBar');
  let myDel=document.getElementById('deleteBar');

  function view(){
    // console.log("clicked");
    myAdd.style.display='none';
    myVerify.style.display='none';
    myUp.style.display='none';
    myDel.style.display='none';
  }
  function add(){
    // console.log("clicked");
    myAdd.style.display='block';
    myVerify.style.display='none';
    myUp.style.display='none';
    myDel.style.display='none';
  }
  function verify(){
    // console.log("clicked");
    myAdd.style.display='none';
    myVerify.style.display='block';
    myUp.style.display='none';
    myDel.style.display='none';
  }
  function update(){
    // console.log("clicked");
    myAdd.style.display='none';
    myVerify.style.display='none';
    myUp.style.display='block';
    myDel.style.display='none';
  }
  function deleteIt(){
    // console.log("clicked");
    myAdd.style.display='none';
    myVerify.style.display='none';
    myUp.style.display='none';
    myDel.style.display='block';
  }

function dataGrab(inputId){
  const info=$(inputId).val();
  return info;
}

function updateList(){
  for(i=0;i<employeeList.length;i++){
      // console.log(employeeList[i]);
      $('#content').append(makeBox(employeeList[i]));
  }
}
