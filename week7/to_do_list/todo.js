
loadList();
function loadList(){
  document.querySelector('form').addEventListener('submit',submit);
}

function submit(a){
  a.preventDefault();
  let input = document.querySelector('input');
  if(input.value != '')
    addToDo(input.value);
  input.value = '';
}


function addToDo(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<label>${task}</label>`;
  ul.appendChild(li);
  document.querySelector('.errandList').style.display = 'block';
}



loadList();
function loadList(){
  document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('clear').addEventListener('click',clearList);
}

function clearList(a){
  let ul = document.querySelector('ul').innerHTML = '';
}


loadList();
function loadList(){
  document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('clear').addEventListener('click',clearList);
}







