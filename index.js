//https://hp-api.onrender.com/api/characters
import Juego from "./models/juego.js";
(()=>{

   
let CANTIDAD_CARTAS=4; 
const tiempo=document.getElementById("tiempo")
const movimientos=document.getElementById("movimientos")
const cartasDiv=document.getElementById("cartas")
let columnas=Math.ceil(Math.sqrt(CANTIDAD_CARTAS*2));
 

    
    const main=()=>{
        const juego=new Juego(CANTIDAD_CARTAS,tiempo,movimientos);
        juego.inicializarCartas().then(()=>{
            crearDivsRows2()
        
          
            for(let k=0;k<juego.getCartas().length; k++){
                    const fila=document.getElementById("row-1")
                    fila.appendChild(juego.getCartas()[k])
                   
                }
                
                
            }
            
        
        )
        
 
           
          cartasDiv.addEventListener('click',juego.getEvento())
        function crearDivsRows(){
            cartasDiv.parentNode.style.width=`${165*columnas}`
        cartasDiv.parentNode.style.height=`${165*columnas}`
            let str="";
            for(let i=0 ; i<columnas;i++)
                str+=`<div class="row  d-flex flex-wrap " id="row-${i}">
                     </div>`
            cartasDiv.innerHTML=str;
        }

        function crearDivsRows2(){
            cartasDiv.parentNode.style.width=`${165*columnas}`
        cartasDiv.parentNode.style.height=`${165*columnas}`
            let str="";
           
                str+=`<div class="row row-cols-${columnas} " id="row-1">
                     </div>`
            cartasDiv.innerHTML=str;
        }
        
    }





 const boton=document.querySelector("button")   ;
 boton.addEventListener('click',(e)=>{
    e.preventDefault();
    CANTIDAD_CARTAS= document.getElementById('ops').value/2;
    columnas=Math.ceil(Math.sqrt(CANTIDAD_CARTAS*2));
    console.log(columnas);

    main();

 })



})();


/*
<div class="container fluid text-center">
   <div class="row ">
       <div class="col col-md-auto">
      </div>
   </div>

</div>

*/