import React, { useLayoutEffect, useState, useContext } from "react";
import { View, StyleSheet, Text, TextInput, ToastAndroid,Image } from "react-native";
import { Button } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import { AuthContext } from "../../auth/Context/AuthContext";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Verify({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Verify Email",
      headerShown: true,
    });
  }, []);
  const { sendEmailVerification , linkSent } = useContext(AuthContext);

  const [email, setEmail] = useState("");

  const verifyEmail = () => {
      if(email.length >=6){
          sendEmailVerification();
          setEmail("")

      }else{
          

        ToastAndroid.show('Invalid Email',ToastAndroid.LONG)
      }
  };
  return (
    <LinearGradient
      colors={["#ffffff", "#003e95"]}
      style={styles.linearGradient}
      start={{ x: 1, y: 0.35 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.container}>
        <View>
          <View style={{ alignItems: "center" }}>
            {/* <Image style={styles.logo} source={require("../../img/logo.png")} /> */}
            {linkSent ?
            (
<MaterialCommunityIcons name="email-check" size={100} color='#003e95' />

            )
:
<MaterialCommunityIcons name="email-send" size={100} color='#003e95' />
            }
            {linkSent ? 
<Text style={{fontSize:20}}>A verification link has been sent to your email {email}</Text>
            
            :
            
<Text style={{fontSize:20}}>We need to verify your email.</Text>
            }
          </View>
          <View style={styles.input_group}>
            <Text style={styles.label}>Email address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter email"
              placeholderTextColor="white"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles.input_group}>
            <Button
              mode="contained"
              color="#003E95"
              style={styles.button}
              onPress={verifyEmail}
            >
            VERIFY EMAIL
            </Button>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginTop: 5,
              }}
            >
              {/* <Text style={{ color: "white", fontWeight: "bold" }}>
                Forgot password
              </Text> */}
            </View>
          </View>
        </View>

        <View style={styles.btnSection}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 5,
              fontWeight: "bold",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Don`t have account?{" "}
            </Text>
            <Text
              style={{ color: "#3EB3E8", fontWeight: "bold" }}
              onPress={() => navigation.navigate("CreateAccount")}
            >
              Create Account
            </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingRight: 25,
    paddingLeft: 25,
    flex: 1,
    justifyContent: "space-evenly",
    height: "100%",
  },
  input_group: {
    marginTop: 25,
  },
  label: {
    color: "#003E95",
    paddingBottom: 7,
    fontWeight: "600",
  },
  input: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    height: 50,
    backgroundColor: "#001B40",
    color: "white",
    borderRadius: 5,
  },
  passwordInput: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    height: 50,
    width: 343,
    backgroundColor: "#001B40",
    color: "white",
    borderRadius: 5,
  },
  passwordIcon: {
    marginTop: 13,
    position: "absolute",
    marginLeft: 300,
  },
  social_btns: {
    marginTop: 50,
    height: 50,
  },
  btn: {
    marginTop: 16,
    justifyContent: "center",
    height: 50,
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: "100%",
    width: "100%",
  },
  btnSection: {
    marginTop: 50,
  },
  button: {
    marginBottom: 10,
    justifyContent: "center",
    width: "100%",
    height: 50,
    color: "#003E95",
  },
  social_btn: {
    marginTop: 10,
  },
  logo: {
    width: 160,
    height: 95,
    marginBottom: 30,
  },
});