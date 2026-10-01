import { FlatList } from "react-native";

import Publicacion from "../Publicaciones/Publicacion";

function renderPublicacion(itemData) {
    return <Publicacion  {...itemData.item}/>
}

function PescadosLista({pescados}) {
    return (
        <FlatList data={pescados} renderItem={renderPublicacion} keyExtractor={(item) => item.id}/>
    );
}

export default PescadosLista;