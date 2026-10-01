import { Image, View, Text, StyleSheet, Platform, Pressable } from "react-native";
import { useNavigation} from '@react-navigation/native'
import { GlobalStyles } from "../../constants/Styles";
import {Ionicons} from '@expo/vector-icons';

function Publicacion({id, Titulo, Usuario_Email, UsuarioFoto, Likes, Pescados, Ubicacion, Imagen, onPressLike}) {
    const navigation = useNavigation();

    function selectPublicacionHandler(){
        navigation.navigate('PublicacionDetalles', {publicacionId: id, usuarioEmail: Usuario_Email});
    }

    return (
        <View style={styles.publicacion}>
            <View style={styles.usuarioContainer}>
                <Text style={styles.usuario}>{Usuario_Email}</Text>
            </View>
            <Pressable onPress={selectPublicacionHandler} style={({pressed}) => pressed && styles.boton}>
                <View style={styles.imagenContainer}>
                    <Image source={{uri: Imagen}} style={styles.imagen}/>
                </View>
                <View style={styles.tituloContainer}>
                    <Text style={styles.titulo}>{Titulo}</Text>
                </View>
            </Pressable>
                <View style={styles.infoContainer}>
                    <View style={styles.detailsContainer}>
                        <View style={styles.detailsInnerContainer}>
                            <Pressable onPress={onPressLike} style={({pressed}) => pressed && styles.boton}>
                                <View style={styles.detailsInnerContainer}>
                                    <Ionicons name={'heart-outline'} color={GlobalStyles.colors.accent600} size={20}/>
                                    <Text style={styles.detailItem}>22</Text>
                                </View>
                            </Pressable>
                            <Ionicons name={'fish'} color={GlobalStyles.colors.accent600} size={20}/>
                            <Text style={styles.detailItem}>5</Text>
                        </View>
                        <View style={styles.ubicacionContainer}>
                            <Text style={styles.ubicacion}>{Ubicacion}</Text>
                        </View>
                    </View>
                </View>
        </View>
    );
}


export default Publicacion;

const styles = StyleSheet.create({
    publicacion:{
        margin: 10,
        marginTop: 16,
        backgroundColor: GlobalStyles.colors.primary800,
        borderBottomWidth: 0.5,
        borderBottomColor: GlobalStyles.colors.primary10,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    usuarioContainer: {
        marginHorizontal: 6,
        marginVertical: 4,
    },
    usuario: {
        paddingBottom: 5,
        color: GlobalStyles.colors.primary10,
        fontSize: 14,
    },
    imagenContainer: {
        overflow: 'hidden',
        borderRadius: 8,
    },
    imagen: {
        width: '100%',
        height: 350,
    },
    infoContainer: {
        paddingHorizontal: 5,
        paddingBottom: 16
    },
    tituloContainer: {
        paddingHorizontal: 5,
    },
    titulo: {
        textAlign: 'Left',
        fontSize: 15,
        color: GlobalStyles.colors.primary10,
        marginHorizontal: 6,
        marginVertical: 4,
        fontWeight: 'bold',
    },
    detailsContainer: {
        flexDirection: 'row',
        padding: 8,
        marginHorizontal: 5,
    },
    detailsInnerContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    buttonPressed: {
        opacity: 1
    },
    detailItem: {
        paddingHorizontal: 6,
        marginRight: 10,
        color: GlobalStyles.colors.accent600
    },
    ubicacionContainer: {
        textAlign: 'right',
        alignItems: 'flex-end',
        paddingHorizontal: 5,
    },
    ubicacion: {
        color: GlobalStyles.colors.primary400,
    },
    boton: {
        opacity: 0.5,
    }
});