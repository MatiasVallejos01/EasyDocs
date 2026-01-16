import React from "react";
import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";

const DATA = [
  { id: '1', title: 'Primer elemento' },
  { id: '2', title: 'Segundo elemento' },
  { id: '3', title: 'Tercer elemento' },
];

interface ListDocumentsProps {
    data: any[];
};

export const ListDocuments = ({data}: ListDocumentsProps) => {

    return (
        <FlatList 
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item})=>(
            <View style={styles.list}>
                <Text>{item.name}</Text>
                <Text>{item.url}</Text>
                <Text>{item.size.toString()}</Text>
                <Text>{item.is_favorite.toString()}</Text>
                <View style={styles.buttonView}>
                    <Pressable onPress={()=>{console.log("Ver")}} style={({pressed})=>[styles.button,{backgroundColor: "lightgreen"},{opacity: pressed ? 0.6 : 1}]}>
                        <Text>Buscar</Text>
                    </Pressable>
                    <Pressable onPress={()=>{console.log("Markar")}} style={({pressed})=>[styles.button,{backgroundColor: "orange"},{opacity: pressed ? 0.6 : 1}]}>
                        <Text>Favorito</Text>
                    </Pressable>
                </View>
            </View>
        )}>

        </FlatList>
    );
}

const styles = StyleSheet.create({
    list:{
        backgroundColor: "white",
        borderRadius: 8,
        gap: 10,
        margin: 10,
        padding: 10,
    },
    buttonView:{
        flexDirection: "row",
        gap: 60,
        justifyContent: "center",
    },
    button:{
        paddingVertical: 7,
        paddingHorizontal: 6,
        backgroundColor: "orange",
        borderRadius: 5,
        alignItems: "center",
    }
});