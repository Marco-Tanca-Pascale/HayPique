import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/Styles";
import Button from "./button";

function ErrorOverlay({message, onConfirm}) {
    return <View style={styles.container}>
        <Text style={[styles.text, styles.title]}>Se ha producido un error!</Text>
        <Text style={styles.text}>{message}</Text>
        <Button onPress={onConfirm}>Volver a intentar</Button>
    </View>
}

export default ErrorOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 8
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
});