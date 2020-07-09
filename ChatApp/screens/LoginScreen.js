import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


export default class LoginScreen extends React.Component {
    state = {
        name: ""
    };

    continue = () => {
        this.props.navigation.navigate("Chat", { name: this.state.name});
    };
    
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circle} />
                <View style={{marginTop: 64 }}>
                    <Image 
                        source={require("../assets/chat.png")} 
                        style={{ width: 100, height: 100, alignSelf: "center" }}
                    />
                </View>
                <View style={{marginHorizontal: 32}}>
                    <Text style={styles.header}>Username</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Username" 
                        onChangeText={name => {
                            this.setState({name});
                        }} 
                        value={this.state.name}
                    /> 
                    <View style={{alignItems: "flex-end", marginTop: 64}}>
                        <TouchableOpacity style={styles.continue} onPress={this.continue}>                           
                            <Icon name="arrow-forward-circle" size={70} color="#4b0082"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4b0082"
    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 500 / 2,
        backgroundColor: "#fff",
        position: "absolute",
        left: -120,
        top: -20
    },
    header: {
        fontWeight: "800",
        fontSize: 30,
        color: "#000000",
        marginTop: 32
    },
    input: {
       marginTop: 32,
       height: 50,
       borderWidth: StyleSheet.hairlineWidth,
       borderColor: "#000000",
       borderRadius: 30,
       paddingHorizontal: 16,
       color: "#000000",
       fontWeight: "600" 
    },
    continue: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});