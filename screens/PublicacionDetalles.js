import { useContext } from "react";
import { View, Text, Image, ScrollView, StyleSheet} from "react-native";
import { PublicacionesContext } from "../store/publicaciones-context";
import PublicacionDetallada from "../components/Publicaciones/PublicacionDetallada";
import { UsuariosContext } from "../store/usuarios-context";

function PublicacionDetalles({route, navigation}) {
    const publicacionesCtx = useContext(PublicacionesContext);
    const usuariosCtx = useContext(UsuariosContext);

    const publicacionId = route.params?.publicacionId;
    const usuarioEmail = route.params?.usuarioEmail;

    const selectedPublicacion = publicacionesCtx.publicaciones.find(publicacion => publicacion.id === publicacionId);
    const usuario = usuariosCtx.usuarios.find(usuario => usuario.Email === usuarioEmail);

    return(
        <PublicacionDetallada Data={selectedPublicacion} usuarioData={usuario}/>
    );
}

export default PublicacionDetalles;
