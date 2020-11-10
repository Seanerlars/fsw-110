
loadList();
// load every event in the page
function loadList(){
  document.querySelector('form').addEventListener('submit',submit);
}
// subit data function
function submit(a){
  a.preventDefault();
  let input = document.querySelector('input');
  if(input.value != '')
    addToDo(input.value);
  input.value = '';
}

// add tasks
function addToDo(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<label>${task}</label>`;
  ul.appendChild(li);
  document.querySelector('.errandList').style.display = 'block';
}



loadList();
// load every event in the page
function loadList(){
  document.querySelector('form').addEventListener('submit',submit);
  // recently added
  document.getElementById('clear').addEventListener('click',clearList);

}

function clearList(a){
  // setting the ul innerHML to an empty string
  let ul = document.querySelector('ul').innerHTML = '';
}


loadList();
// load every event in the page
function loadList(){
  document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('clear').addEventListener('click',clearList);
  // recently added
  document.querySelector('ul').addEventListener('click',deleteOrTick);

}







