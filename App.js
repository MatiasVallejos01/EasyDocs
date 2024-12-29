import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="ligth" />
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image
            style={{ width: 60, height: 60 }} source={require('./assets/icono/icono.png')} />
          <Text style={{ color: "white", fontSize: 22 }}>Easy Docs</Text>
        </View>

        <View>
          <Text>Documentos</Text>
        </View>

        <View>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "blue" : "green",
                paddingHorizontal: 50,
                paddingVertical: 15,
                borderRadius: 25,
              },
              styles.wrapperCustom,
            ]}
          >
            {({ pressed }) => (
              <Text>{pressed ? "presionado" : "Precioname"}</Text>
            )}
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    backgroundColor: "slategray",
  },
  navBar: {
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});
