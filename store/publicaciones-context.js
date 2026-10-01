import { createContext, useReducer } from "react";

export const PublicacionesContext = createContext({
    publicaciones: [],
    addPublicacion: ({Id, Imagen, Titulo, Departamento_Id, Descripcion, Ubicación, UbicaciónMaps, Usuario_Email, Estado, Hora,}) => {},
    setPublicaciones: (publicaciones) => {},
    deletePublicacion: (id) => {},
    updatePublicacion: (id, {Descripcion, Estado}) => {},
});

function publicacionesReducer(state, action){
    switch (action.type) {
        case 'ADD':
            return [action.payload,...state]
        case 'SET':
            const inverted = action.payload.reverse();
            return inverted;
        case 'UPDATE':
            const updatablePublicacionesIndex = state.findIndex(
                (publicaciones) => publicaciones.id === action.payload.id
            );
            const updatablePublicacion = state[updatablePublicacionesIndex];
            const updatedItem = {...updatablePublicacion, ...action.payload.data};
            const updatedPublicaciones = [...state];
            updatedPublicaciones[updatablePublicacionesIndex] = updatedItem
            return updatedPublicaciones;
         case 'DELETE':
            return state.filter((publicacion) => publicacion.id !== action.payload)
        default:
            return state;
    }
}

function PublicacionesContextProvider({children}) {
    const [publicacionesState, dispatch] = useReducer(publicacionesReducer, []);

    function addPublicacion (publicacionData) {
        dispatch({ type: 'ADD', payload: publicacionData});
    }

    function setPublicaciones(publicaciones) {
        dispatch({type: 'SET', payload: publicaciones})
    }

    function deletePublicacion (id) {
        dispatch({ type: 'DELETE', payload: id});
    }

    function updatePublicacion (id, publicacionData) {
        dispatch({type: 'UPDATE', payload: {id: id, data: publicacionData}})
    }

    const value = {
        publicaciones: publicacionesState,
        addPublicacion: addPublicacion,
        setPublicaciones: setPublicaciones,
        deletePublicacion: deletePublicacion,
        updatePublicacion: updatePublicacion
    };

    return <PublicacionesContext.Provider value={value}>{children}</PublicacionesContext.Provider>
}

export default PublicacionesContextProvider