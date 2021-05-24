import React, { useLayoutEffect, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ToastAndroid
} from "react-native";
import { Button } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "../Context/AuthContext";
export default function CreateAccount({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Create Account",
      headerShown: true,
    });
  }, []);
  const [showPassword, setShowPassword] = useState(true);
  const {createAccount} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {

if(email.length  !== 0 && userName.length  !== 0 && password.length !== 0){
createAccount(email, password, userName);
setEmail('');
setPassword('');
setUserName('')
}else{
  ToastAndroid.showWithGravity("Field in all the fields.", ToastAndroid.LONG,ToastAndroid.CENTER)
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
      <View style={{ alignItems: "center" }}>
            <Image style={styles.logo} source={require("../../img/logo.png")} />

            {/* <img src={logo} width="100" height="50" /> */}
          </View>
        <View style={styles.input_group}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            type="text"
            style={styles.input}
            placeholder="Name Surname"
            placeholderTextColor="white"
            value={userName}
            onChangeText={(text) => {
              setUserName(text);
            }}
          />
        </View>

        <View style={styles.input_group}>
          <Text style={styles.label}>Email address</Text>
          <TextInput
            style={styles.input}
            placeholder="namesurname@gmail.com"
            placeholderTextColor="white"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.input_group}>
          <Text style={styles.label}>Password</Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TextInput
              secureTextEntry={showPassword}
              style={styles.passwordInput}
              placeholder="Password"
              placeholderTextColor="white"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
         

            <MaterialCommunityIcons
              style={styles.passwordIcon}
              name={!showPassword ? "eye-outline" : "eye-off-outline"}
              size={25}
              color="white"
              onPress={() => setShowPassword(!showPassword)}
            />
         
          </View>
        </View>

        <View style={styles.input_group}>
          <Button
            mode="contained"
            color="#003E95"
            style={styles.button}
            onPress={
              createUser

            }
          >
            Create An Account
          </Button>
        </View>

        <View style={styles.btnSection}>
          {/* <Button
            mode="contained"
            color="#C04D3B"
            style={(styles.button, styles.btn)}
            onPress={googleSign}
          >
            CONTINUE WITH GOOGLE
          </Button>
          <Button
            mode="contained"
            color="#4467BE"
            style={(styles.button, styles.btn)}
          >
            CONTINUE WITH FACEBOOK
          </Button> */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 15,
              color: "white",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Already have account?{" "}
            </Text>
            <Text
              style={{ color: "#3EB3E8", fontWeight: "bold" }}
              onPress={() => navigation.navigate("SignIn")}
            >
              Sign In
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
    justifyContent: "center",

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
    justifyContent: "center",
    width: "100%",
    height: 50,
    color: "#003E95",
  },
  social_btn: {
    marginTop: 10,
  },
});
