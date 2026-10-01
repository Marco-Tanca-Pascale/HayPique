import { createContext, useReducer } from "react";

export const UsuariosContext = createContext({
    usuarios: [],
    addUsuario: ({Email, Nombre, Imagen, Departamento_Id, Descripcion, Password,}) => {},
    setUsuarios: (usuarios) => {},
    deleteUsuario: (Email) => {},
    updateUsuario: (Email, {Imagen, Descripcion, Password, Departamento_Id}) => {},
});

function usuariosReducer(state, action){
    switch (action.type) {
        case 'ADD':
            return [action.payload,...state]
        case 'SET':
            const inverted = action.payload.reverse();
            return inverted;
        case 'UPDATE':
            const updatableUsuariosIndex = state.findIndex(
                (usuarios) => usuarios.Email === action.payload.Email
            );
            const updatableUsuario = state[updatableUsuariosIndex];
            const updatedItem = {...updatableUsuario, ...action.payload.data};
            const updatedUsuarios = [...state];
            updatedUsuarios[updatableUsuariosIndex] = updatedItem
            return updatedUsuarios;
         case 'DELETE':
            return state.filter((usuario) => usuario.Email !== action.payload)
        default:
            return state;
    }
}

function UsuariosContextProvider({children}) {
    const [usuariosState, dispatch] = useReducer(usuariosReducer, []);

    function addUsuario (usuarioData) {
        dispatch({ type: 'ADD', payload: usuarioData});
    }

    function setUsuarios(usuarios) {
        dispatch({type: 'SET', payload: usuarios})
    }

    function deleteUsuario (Email) {
        dispatch({ type: 'DELETE', payload: Email});
    }

    function updateUsuario (Email, usuarioData) {
        dispatch({type: 'UPDATE', payload: {Email: Email, data: usuarioData}})
    }

    const value = {
        usuarios: usuariosState,
        addUsuario: addUsuario,
        setUsuarios: setUsuarios,
        deleteUsuario: deleteUsuario,
        updateUsuario: updateUsuario
    };

    return <UsuariosContext.Provider value={value}>{children}</UsuariosContext.Provider>
}

export default UsuariosContextProvider