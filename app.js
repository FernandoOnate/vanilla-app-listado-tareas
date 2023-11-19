const input = document.getElementById('nueva-tarea');
const boton = document.querySelector('button');
const listaTareas = document.querySelector('.lista_tareas'); 

const copletarTarea = (event) => {
    let tarea = event.target.parentNode.parentNode;

    // si no tiene la clase se agrega y si la tiene se elimina - toggle
    tarea.classList.toggle('completada');
}

const eliminarTarea = (event) => {
    let tarea = event.target.parentNode.parentNode;
    // tarea.remove(tarea);
    listaTareas.removeChild(tarea);
}
const agregarTarea = () => {
    if(input.value){
        // crear tarea
        let nuevaTarea = document.createElement('div');
        nuevaTarea.classList.add('tarea');

        // texto por el usuario
        let texto = document.createElement('p');
        texto.innerText = input.value;
        nuevaTarea.appendChild(texto);

        // iconos 
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        nuevaTarea.appendChild(iconos);

        let iconoCompletar = document.createElement('i');
        iconoCompletar.classList.add('bi', 'bi-check-circle','icono_completar');
        // iconoCompletar.classList.add('bi', 'bi-check-circle-fill','icono_completar');
        iconoCompletar.addEventListener('click',copletarTarea);

        let iconoEliminar = document.createElement('i');
        iconoEliminar.classList.add('bi', 'bi-trash-fill','icono_eliminar');
        iconoEliminar.addEventListener('click',eliminarTarea);

        iconos.append(iconoCompletar,iconoEliminar);
        
        // agregar la tarea a la lista
        listaTareas.appendChild(nuevaTarea);

    }else{
        alert('No has ingresado una tarea');
    }
}

boton.addEventListener('click',agregarTarea);

input.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
        agregarTarea();
        // boton.click();
    }
});