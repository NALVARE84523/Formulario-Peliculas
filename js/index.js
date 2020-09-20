const form = document.getElementById('form');

let listaDePeliculas = [];

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const nombres = document.getElementById('nombres').value;
    const años = document.getElementById('años').value;
    const nombresDirector = document.getElementById('nombresDirector').value;
    const calificacion = document.getElementById('calificacion').value;

    const pelicula = {
        nombre: nombres,
        año: años,
        nombreDir: nombresDirector,
        cali: calificacion
    }
    
    guardarEnStorage(pelicula);
});

const guardarEnStorage = (pelicula)=>{
    if (localStorage.getItem('peliculas') == null) {
        listaDePeliculas.push(pelicula);
        const peliculasString = JSON.stringify(listaDePeliculas);
        localStorage.setItem('peliculas', peliculasString);
    }else{
        listaEnStorage = JSON.parse(localStorage.getItem('peliculas'));
        listaEnStorage.push(pelicula);
        const peliculasString = JSON.stringify(listaEnStorage);
        localStorage.setItem('peliculas', peliculasString);
    }
}


