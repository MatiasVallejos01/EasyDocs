import React from "react";
import {StyleSheet, View, Image, Text} from "react-native";

export const NavBar = () => {
    return (
        <View style={styles.navBar}>
            <View style={styles.container}>
                <Image source={require('../../assets/icono/icono.png')} style={styles.icon} />
                <Text style={styles.title}>EasyDocs</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    navBar:{
        height: 60,
        width: "100%",
        backgroundColor: "blue",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    icon:{
        width: 45,
        height: 45,
        resizeMode: "contain",
    },
    title:{
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
    },
    container:{
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
    }
});