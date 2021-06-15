const ul = document.querySelector('ul');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
itemsArray.forEach(liMaker);

let Ph33r = ["test1","test2","test3","test5"]
if(!localStorage.getItem('items')){localStorage.setItem('items', JSON.stringify(Ph33r))};

function liMaker(text){
  const li = document.createElement('li');
  li.innerHTML = text;
  ul.appendChild(li);
}

function del(){
  localStorage.clear();
  ul.innerHTML = '';
  itemsArray = [];
  document.getElementById("reflected").innerHTML = ''
}
 let xss = decodeURI(location.search.slice(5));
 document.getElementById("reflected").innerHTML = xss
