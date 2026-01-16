import React, { useEffect, useState } from "react";
import {View,StyleSheet} from "react-native";
import {NavBar} from "../components/navBar";
import {ListDocuments} from "../components/listDocuments";
import {SelectDocument} from "../hook/selectDocument";
import {SafeAreaView} from "react-native-safe-area-context";
import {addDocument, getDocuments, setupDatabase} from "../service/database";



export const Home = () => {
    // inicializacion de database
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const init = async () => {
            try{
                await setupDatabase();
                console.log("base de datos inicializada");

                //test add document
                //prueba 1
                //const docAddID1= await addDocument("Documento de prueba","http://example.com/doc1.pdf", 1024);
                //console.log("Documento agregado correctamente con ID: ", docAddID1);
                //prueba 2
                //const docAddID2= await addDocument("Documento de prueba 2","http://example.com/doc2.pdf", 1024);
                //console.log("Documento agregado correctamente con ID: ", docAddID2);

                //test get documents
                const data = await getDocuments();
                setDocuments(data);
                console.log("Los documentos existentes son: ", data);
            }catch(e){
                console.error("Error al inicilizar la base de datos:", e);
            }
        };
        init();
    }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.home}>
            <NavBar />
            <SelectDocument />
            <ListDocuments data={documents}/>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    home:{
        flex: 1,
        backgroundColor: "black",
    }
});