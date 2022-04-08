import { Text, Image, View } from "react-native";
import { estilos } from '../Style/index';


export default function Title() {
    return (
        <View>
            <Text style={estilos.titulo} >Verifica Vazamento</Text>
        </View>
    );
}
