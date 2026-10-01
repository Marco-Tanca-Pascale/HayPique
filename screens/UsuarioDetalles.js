import { useContext } from "react";
import Usuario from "../components/Usuarios/Usuario";
import { UsuariosContext } from "../store/usuarios-context";

function UsuarioDetalles({route, navigation}) {
    const usuariosCtx = useContext(UsuariosContext);

    const usuarioEmail = route.params?.usuarioEmail;

    const usuario = usuariosCtx.usuarios.find(usuario => usuario.Email === usuarioEmail);

    return(
        <Usuario usuarioData={usuario}/>
    );
}

export default UsuarioDetalles