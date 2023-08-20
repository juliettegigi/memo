export default function crearDivCarta(classtr,f){   
     
       const div=document.createElement("div");
      // div.classList.add(classtr,"carta",'col', 'col-md-auto');
      div.classList.add(classtr,'col');
        div.innerHTML=`<img src="./imgs/reverso.jpg" class="c img-fluid img-thumbnail" alt="characterHP">`;
        div.addEventListener('click',f)
      
        return div;
       }
    

  




