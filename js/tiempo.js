const fecha=document.getElementById("fecha");


const options2={
    hour:'numeric',
    minute:'numeric',
    second:'numeric',
    miliseconds:'numeric',
    hour12:true
  }

  function actualizarFecha(){
    const date=new Date();

const horaf=date.toLocaleTimeString('es-ES',options2);
let [hora2,amPm] = horaf.split(' ');
hora2=hora2.split(":");
hora.innerHTML=`La hora actual es ${Number(hora2[0])+12}:${hora2[1]}:${hora2[2]} ${amPm.replaceAll(".","").toUpperCase().replace(/\s+/g, '')}` 
}

setInterval(actualizarFecha, 1000);