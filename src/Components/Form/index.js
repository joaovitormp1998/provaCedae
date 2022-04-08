import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal, Alert, } from "react-native";
import { Picker } from "@react-native-picker/picker";
import TakePicture from '../Camera';
import { estilos } from '../Style/index';


export default function Form() {

    const [matricula, setMatricula] = useState(null);
    const [nome, setNome] = useState(null);
    const [rua, setRua] = useState(null);
    const [bairro, setBairro] = useState(null);
    const [numero, setNumero] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [comentario, setComentario] = useState(null);

    function validar() {
        if (matricula != null && selectedValue != "default" && nome != null) {
            setIsOpen(true)
        } else {
            Alert.alert('Todos os campos devem ser preenchidos!')
        }
    }
    function confirmarEnvio() {
        setIsOpen(false)
        setMatricula(null)
        setNome(null)
        setSelectedValue("default")
    }


    return (
        <View>
            <View style={estilos.form}>
                <Text style={estilos.label} >Informe a Cidade:</Text>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Por favor Selecione uma opcao:" value="default" />
                    <Picker.Item label="Barra do Piraí" value="barradopirai" />
                    <Picker.Item label="Mendes" value="mendes" />
                    <Picker.Item label="Miguel Pereira" value="miguelpereira" />
                    <Picker.Item label="Paraíba do Sul" value="paraibadosul" />
                    <Picker.Item label="Rio das Flores" value="riodasflores" />
                    <Picker.Item label="Três Rios" value="tresrios" />
                    <Picker.Item label="Valença" value="valença" />
                    <Picker.Item label="Vassouras" value="vassouras" />
                </Picker>
                <Text style={estilos.label} >Bairro</Text>
                <TextInput
                    style={estilos.input}
                    keyboardType="text"
                    onChangeText={setBairro}
                    value={bairro}
                />
                <Text style={estilos.label}>Informe a Rua</Text>
                <TextInput
                    onChangeText={setRua}
                    value={rua}
                    style={estilos.input} />
                
                <Text style={estilos.label} >Numero</Text>
                <TextInput
                    style={estilos.input}
                    keyboardType="numeric"
                    onChangeText={setNumero}
                    value={numero}
                />
                <label>Comentario</label>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    value={comentario} />
                <TouchableOpacity style={estilos.botao}
                    onPress={() => validar()} >
                    <Text style={estilos.botaoTexto}>
                        Notificar
                    </Text>
                </TouchableOpacity>

            </View>
            <Modal transparent={true} visible={isOpen}>
                <TakePicture
                    matricula={matricula}
                    cidade={selectedValue}
                    confirmarEnvio={confirmarEnvio}

                />

            </Modal>

        </View>
    );
}
