import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";

export const SearchButton = () => {
    return (
        <Pressable onPress={()=>{console.log("Pressed")}} style={styles.button}>
            <Text>Buscar</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button:{
        height: 45,
        width: 65,
        backgroundColor: "yellow",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    }
});