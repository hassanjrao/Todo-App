
let ul=document.getElementById("list");
let li;
let p=document.createElement("p");
p.className="p";



function action1(){
    p.textContent="";
}

function addTodo(){

    const input=document.getElementById("input");
    let todo=input.value;
    
    if(todo!=''){

        const newLi=document.createElement("li");
        newLi.className="mycheck";
    
        const newInput=document.createElement("input");
        newInput.type="checkbox";
        newInput.className="check";

        const newLabel=document.createElement("label");
        newLabel.textContent=todo;

        ul.appendChild(newLi).appendChild(newInput);
        ul.appendChild(newLi).appendChild(newLabel);

        ul.insertBefore(newLi, ul.childNodes[0]);

        input.value="";

    }
    else{

        p.textContent="*Enter your TODO";
        
        let parentNode=document.getElementById("form");

        parentNode.insertBefore(p,parentNode.childNodes[1]);
    }
    
    
}


function removeTodo(){
    
    li =ul.children;
    
    for (let i = 0; i < li.length; i++) {
        
        while(li[i] && li[i].children[0].checked){
        
            ul.removeChild(li[i]);
        }
        
    }

}


function removeAllTodo(){
    ul.innerHTML="";    
}