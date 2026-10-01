import { FlatList } from "react-native";

import Publicacion from "./Publicacion";
import { USUARIOS } from "../../data/Prueba";



function renderPublicacion(itemData) {
    return <Publicacion  {...itemData.item}/>
}

function PublicacionesLista({publicaciones}) {
    return (
        <FlatList data={publicaciones} renderItem={renderPublicacion} keyExtractor={(item) => item.id}/>
    );
}

export default PublicacionesLista;