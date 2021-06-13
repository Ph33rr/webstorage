const ul = document.querySelector('ul');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
let Ph33r = ["test1","test2","test3","test5"]
itemsArray.forEach(liMaker);
if(!localStorage.getItem('items')){localStorage.setItem('items', JSON.stringify(Ph33r))};
function liMaker(text){
  const li = document.createElement('li');
  li.innerHTML = text;
  ul.appendChild(li);
}
/*
function add(){
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = '';
}
*/
function del(){
  localStorage.clear();
  ul.innerHTML = '';
  itemsArray = [];
}
