

 

function openMenu(){
        var menu = document.querySelector('nav.menu');
        var navbar = document.querySelector('nav.navbar1');
        var menu1 = document.querySelector('nav.menu1');
        var telalargura = window.innerWidth;

    navbar.style.display='block';
    menu1.style.display='block';
    menu.style.display='none';

   
}
  if(telalargura > 600){
    var menu1 = document.querySelector('nav.menu1');
        menu1.style.display='none';
    }
function closeMenu(){
   var menu = document.querySelector('nav.menu');
    var navbar = document.querySelector('nav.navbar1');
    var menu1 = document.querySelector('nav.menu1');
    navbar.style.display='none';
    menu1.style.display='none';
    menu.style.display='block';
}




function validarform(){
    var nome = document.getElementById('txtnome').value;
    var email = document.getElementById('txtemail').value;
    var senha = document.getElementById('txtsenha').value;
  
    if( nome ==='' || email==='' || senha===''){
        var p = document.getElementById('erro').textContent='Por favor, preenche todos os campos';
        setTimeout(function(){
        var p = document.getElementById('erro').textContent='';
     },4000);
    }
    else{
        alert('login bem sucedido')
        var p = document.getElementById('erro').textContent='';
   
    }
       
}