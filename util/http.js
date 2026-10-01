import axios from 'axios';

const url = 'https://haypiqueuy-default-rtdb.firebaseio.com';

/*export async function storePublicacion(publicacionData) {
    const response = await axios.post(url + '/publicaciones.json', publicacionData);
    const id = response.data.name;
    return id;
}*/

export async function fetchPublicaciones() {
    const response = await axios.get(url + '/Publicaciones.json');

    const publicaciones = [];
    
    
    for (const key in response.data) {
        const publicacionObj = {
            id: response.data[key].Id,
            Imagen: response.data[key].Imagen,
            Titulo: response.data[key].Titulo,
            Descripcion: response.data[key].Descripción,
            Ubicacion: response.data[key].Ubicación,
            Usuario_Email: response.data[key].Usuario_Email,
            Departamento_Id: response.data[key].Departamento_Id,
        };
        publicaciones.push(publicacionObj);
    }

    return publicaciones;
}/*

export function updateExpense(id, expenseData) {
    return axios.put(url + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
    return axios.delete(url + `/expenses/${id}.json`);
}*/

//////////////////////////////////////////////USUARIOS///////////////////////////////////////////////////////


export async function fetchUsuarios() {
    const response = await axios.get(url + '/Usuarios.json');

    const usuarios = [];
    
    
    for (const key in response.data) {
        const usuarioObj = {
            Email: response.data[key].Email,
            Imagen: response.data[key].Imagen,
            Nombre: response.data[key].Nombre,
            Descripcion: response.data[key].Descripción,
            Departamento_Id: response.data[key].Departamento_Id,
            Password: response.data[key].Password
        };
        usuarios.push(usuarioObj);
    }

    return usuarios;
}