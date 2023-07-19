import { Modal, Portal, Button, PaperProvider, Text } from "react-native-paper";
import React from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { savedInfo } from "../data/savedInfo";
import SignUpForm from "./SignUpForm";

export default function ModalView({ visibleModel, setVisibleModel }) {
  const [useremail, setUserEmail] = React.useState(savedInfo.useremail);
  const [likedCreated, setLikedCreated] = React.useState(false);

  const showModal = () => setVisibleModel(true);
  const hideModal = () => setVisibleModel(false);
  const containerStyle = {
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  };

  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={visibleModel}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
          theme={{
            colors: {
              backdrop: "white",
            },
          }}
        >
          <View style={{ padding: 20 }}>
            {useremail === "" ? (
              <View>
                <Text style={styles.header}>
                  Tn ks¾kdñlj Tfí ks¾udKh m, lsÍug leu;so @
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setUserEmail("anonymous@gmail.com");
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "fm-gangani",
                      fontSize: 16,
                      textAlign: "center",
                      borderColor: "black",
                      borderRadius: 5,
                      marginLeft: 110,
                      marginRight: 110,
                      paddingTop: 10,
                      paddingBottom: 10,
                      backgroundColor: "#ffe6cc",
                    }}
                  >
                    leu;shs
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setUserEmail("justEmail.com");
                    setLikedCreated(true);
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "fm-gangani",
                      fontSize: 16,
                      textAlign: "center",
                      borderColor: "black",
                      borderRadius: 5,
                      marginLeft: 70,
                      marginRight: 70,
                      paddingTop: 10,
                      paddingBottom: 10,
                      marginTop: 10,
                      backgroundColor: "#ffe6cc",
                    }}
                  >
                    .skqula idokak
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                {!likedCreated ? (
                  <View>
                    <TextInput
                      style={{ fontFamily: "fm-abbaya", fontSize: 22 }}
                      placeholder="ud;Dldj"
                    />
                    <TextInput
                      style={{ fontFamily: "fm-abbaya", fontSize: 16 }}
                      multiline={true}
                      numberOfLines={4}
                      placeholder="Tfí ks¾udkh ghsma lrkak"
                    />
                    <Button onPress={hideModal}>Close</Button>
                  </View>
                ) : (
                  <View>
                    <SignUpForm setLikedCreated={setLikedCreated} />
                  </View>
                )}
              </View>
            )}
          </View>
        </Modal>
      </Portal>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontFamily: "fm-malithi",
    marginBottom: 10,
    fontSize: 18,
  },
});
