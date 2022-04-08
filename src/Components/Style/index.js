import { StyleSheet } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export const estilos = StyleSheet.create({

    topo:{
        width: "100%",
        height: 100
    },
    form:{
        padding: 40,
        borderRadius: 10,
        backgroundColor:"gray",
 
        height:"85%",
        marginLeft: "15%",
        marginTop: 45,
        width: "75%"     
    },
    titulo: {
        marginTop: 20,
       fontSize: 23,
       textAlign: "center",
       color: "black"
        
    },
    input:{
        backgroundColor: "#FFF",
        borderRadius: 9,
        height: 35
    },
    
    input2:{
        backgroundColor: "#FFF",
        borderRadius: 9,
    },
    label:{
        fontSize: 18,
        lineHeight: 40,
    },
    botao:{
        marginTop: 30,
        backgroundColor: "aquamarine",
        borderRadius: 9,
        height: 40
    },
    botaoTexto:{
      marginTop:6,
      marginLeft:"35%",
      fontSize: 18

    },
    result:{
        alignItems: "center"
    }

 
})