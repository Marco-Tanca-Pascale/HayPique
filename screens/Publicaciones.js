import { useContext, useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../constants/Styles';
import { UsuariosContext } from '../store/usuarios-context';
import { PublicacionesContext } from "../store/publicaciones-context";
import { fetchPublicaciones, fetchUsuarios } from '../util/http';


import PublicacionesSalida from '../components/Publicaciones/PublicacionesSalida';
import LoadingOverlay from "../components/ui/LoadingOverlay";
import ErrorOverlay from "../components/ui/ErrorOverlay";


function Publicaciones(){
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();

    const publicacionesCtx = useContext(PublicacionesContext);
    const usuariosCtx = useContext(UsuariosContext);

    useEffect(() => {
        async function getPublicaciones() {
            setIsFetching(true);
            try{
                const usuarios = await fetchUsuarios();
                const publicaciones = await fetchPublicaciones();
                publicacionesCtx.setPublicaciones(publicaciones);
                usuariosCtx.setUsuarios(usuarios);
            } catch (error) {
                setError('Could not fetch publicaciones!');
            }
            setIsFetching(false);
        }

        getPublicaciones();
    }, []);

    async function errorHandler(){
        setError(null);
        setIsFetching(true);
        try{
            const usuarios = await fetchUsuarios();
            const publicaciones = await fetchPublicaciones();
            publicacionesCtx.setPublicaciones(publicaciones);
            usuariosCtx.setUsuarios(usuarios);
        } catch (error) {
            setError('Could not fetch publicaciones!');
        }
        setIsFetching(false);
    }

    if (error && !isFetching) {
        return <ErrorOverlay message={error} onConfirm={errorHandler} />
    }

    if (isFetching) {
        return <LoadingOverlay />
    }

    const Publicaciones = publicacionesCtx.publicaciones;


    return <View style={styles.root}><PublicacionesSalida publicaciones={Publicaciones} fallbackText="No hay publicaciones hoy aún."/></View>;
}

export default Publicaciones;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary800,
    }
});