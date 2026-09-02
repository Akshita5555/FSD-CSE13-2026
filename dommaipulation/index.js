const root=document.getElementById('root');
const button=document.getElementById('btn');
//console.log(button);
//console.log(root);
const h2=document.createElement('h2');
const h1=document.createElement('h1');
const img=document.createElement('img');
const dic=document.createElement('div');
function  getData(){
    try{
    img.src='';
    img.setAttribute('height','200');
    img.setAttribute('width','2000');
    h2.innerText="ABES ENGINEERING COLLEGE";
    h2.style.color='red';
    h2.style.backgroundColor='cyan';
    h1.innerHTML='<h2 style=color:green>WELCOME TO DOM</h2>'
    dic.style.border='2px solid red';

    dic.appendChild(img);
    dic.appendChild(h2);
    dic.appendChild(h1);
    root.appendChild(dic);
 }catch(e){
    console.log(e);
}
finally{
    button.remove()
 }
}
button.addEventListener('click',getData);
