import crearDivCarta from "./carta.js";


let manejadorDiv;
let manejadorContainer;

export default class Juego {
  /*    nuroIntentos;
     #url;
     #tiempo;
     #posiciones=[]; */

  constructor(nuroCartas) {
    this.manejadorContainer=this.getEvento();
    this.click = 0;
    this.imgs = [];
    this.divClickeado = null;
    this.nuroCartas = nuroCartas;
    this.cartas = [];
    this.posiciones = [];
    this.tiempo = new Date();
    this.url = "https://hp-api.onrender.com/api/characters";
    this.nuroIntentos = 0;
    /*  for(let i=0;i<(nuroCartas*2);i++)
         this.posiciones.push(i); */
    this.posiciones.sort();


  }

   inicializarCartas=async(cb, cb2)=> {
   
    try {
      let rta = await fetch(this.url)
      rta = await rta.json();
      this.getEventoDiv();
      for (let i = 0; i < (this.nuroCartas); i++) {

        this.cartas.push(crearDivCarta(`posicion-${i}`, manejadorDiv));
        this.cartas.push(crearDivCarta(`posicion-${i}`, manejadorDiv));
        this.imgs.push(rta[i].image);

      }
      //TODO:mezclaer
      this.mezclarCartas();
    }

    catch (e) {
    }


  }




  getCartas() {
    return this.cartas;
  }

  getImgs() {
    return this.imgs;
  }

  darVueltaCarta(div) {
    const [, b] = div.classList[0].split('-');
    
    div.querySelector("img").src = (div.querySelector("img").src !== this.imgs[b]) ? this.imgs[b] : "./imgs/reverso.jpg";

  }

  sacarEventoAdivs(){
    this.cartas.forEach(element=>{ element.removeEventListener('click', manejadorDiv)})
  }

  ponerEventoAdivs(){
    this.cartas.forEach(element=>{ element.addEventListener('click', manejadorDiv)})
}

  getEventoDiv(){
    const guardo=this;
     manejadorDiv=(e)=>{
      manejadorContainer(e)
    } 
   
         
  }

  ganar(){
    return(this.cartas.length===0)
  }

  getEvento() {
    var click=0;
   
    manejadorContainer= (e)=>{
      if(click>1)return;
    if(e.target.tagName==="IMG") { 
          switch(click){
                 case 0:
                      this.darVueltaCarta(e.target.parentNode);
                      e.target.parentNode.removeEventListener('click', manejadorDiv);
                      this.divClickeado=e.target.parentNode;
                      click++;
                 break;
                 case 1:click++;
                      this.darVueltaCarta(e.target.parentNode);   
                      this.sacarEventoAdivs();
                      if (e.target.parentNode.classList[0] === this.divClickeado.classList[0]){
                        this.cartas=this.cartas.filter((elements)=>elements.classList[0]!==e.target.parentNode.classList[0]) 
                        click=0 
                        if(this.cartas.length===0){
                          const tiempoFinal=new Date();
                          const milisegundos = tiempoFinal- this.tiempo;

                          // Calcula las diferencias en horas, minutos, segundos y milisegundos
                          const horas = Math.floor(milisegundos / (1000 * 60 * 60));
                          const minutos = Math.floor((milisegundos % (1000 * 60 * 60)) / (1000 * 60));
                          const segundos = Math.floor((milisegundos % (1000 * 60)) / 1000);
                          this.tiempo={horas,minutos,segundos,milisegundos}
                        }
                      }
                      else{
                        this.nuroIntentos++;
                        setTimeout(() => { 
                          this.darVueltaCarta(this.divClickeado);
                          this.darVueltaCarta(e.target.parentNode);
                          click=0
                        }, 1000);
                      }
                      this.ponerEventoAdivs(); 
                break;       
                  default: click=0;
                 break;  
      }}


         
    }
  }



  mezclarCartas() {
    for (let i = this.cartas.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
        [this.cartas[i], this.cartas[j]] = [this.cartas[j], this.cartas[i]];
    }
    
}
}