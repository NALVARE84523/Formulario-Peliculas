const tabla = document.getElementById('tablaPelicula');


const peliculasGuardadasEnStorage = ()=>{
    const peliculasEnStorage = JSON.parse(localStorage.getItem('peliculas'));
    console.log(peliculasEnStorage);
    for(let i = 0; i < peliculasEnStorage.length; i++){
        tabla.innerHTML +=`
        <tr>
            <th>${i+1}</th>
            <td>${peliculasEnStorage[i].nombre}</td>
            <td>${peliculasEnStorage[i].año}</td>
            <td>${peliculasEnStorage[i].nombreDir}</td>
            <td>${peliculasEnStorage[i].cali}</td>
        `
        console.log(peliculasEnStorage[i]);
    }
}
peliculasGuardadasEnStorage();

document.getElementById('limpiar').addEventListener('click', ()=>{
    localStorage.clear();
    tabla.innerHTML=""
})