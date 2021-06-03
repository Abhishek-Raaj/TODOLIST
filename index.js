var form=document.querySelector('#form');
var input=document.querySelector('#input');
var list=document.querySelector("#list");
// var listitem=document.querySelectorAll('list-item');
// var   item=document.querySelector('.item');
show();
form.addEventListener('submit',function(e){
  e.preventDefault();
  addtodo(); 
});


function addtodo(){
    if(input.value)
    {
      var li= document.createElement('li');
          li.innerText=input.value;
          li.classList.add("item");
          li.addEventListener('click',()=>{
              li.classList.toggle('tggle');
              updates();
          });
          li.addEventListener("contextmenu",(e)=>{
            e.preventDefault();
             li.remove();
             updates();
          });
          list.appendChild(li);
          input.value="";
          updates();
         
    }
   
}

function updates(){
    let get=JSON.parse(localStorage.getItem('notes'));
    var noteEl=document.querySelectorAll('li');
    const note=[];
    noteEl.forEach(element=>{
      note.push({
          text:element.innerText,
          complete:element.classList.contains('tggle')
      });
    });
    localStorage.setItem('notes',JSON.stringify(note));
}
function show(){
    let get=JSON.parse(localStorage.getItem('notes'));
    for (x in get)
    {
        abc(get[x]);
    }
}

function abc(value){
   
    
        let li= document.createElement('li');
        li.classList.add("item");
        li.innerText=value.text; 
        li.addEventListener('click',()=>{
            li.classList.toggle('tggle');
            updates();
        });
        li.addEventListener("contextmenu",(e)=>{
          e.preventDefault();
           li.remove();
           updates();
        });
        list.appendChild(li);
    
}
