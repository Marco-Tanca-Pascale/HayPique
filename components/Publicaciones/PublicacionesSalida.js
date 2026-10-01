import { View, StyleSheet, Text } from "react-native";
import PublicacionesLista from "./PublicacionesLista";
import { GlobalStyles } from "../../constants/Styles";
import { PUBLICACIONES } from "../../data/Prueba";
import Button from "../ui/button";


function PublicacionesSalida({publicaciones, fallbackText}) {
    let content = <Text>{fallbackText}</Text>;

    content = <PublicacionesLista publicaciones={publicaciones}/>;

    return (
        <View style={styles.container}>
            {content}
        </View>
    );
}

export default PublicacionesSalida;

const styles = StyleSheet.create({
    container:{
        backgroundColor: GlobalStyles.colors.primary800
    }
});