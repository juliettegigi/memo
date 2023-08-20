export default function crearDivCarta(classtr,f){   
     
       const div=document.createElement("div");
       div.classList.add(classtr,"carta",'col', 'col-md-auto');
        div.innerHTML=`<img src="./imgs/reverso.jpg" class="c" alt="characterHP">`;
        div.addEventListener('click',f)
      
        return div;
       }
    

  




