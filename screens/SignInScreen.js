import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
// const [UserName, setUserName] = useState("UserName");
// const [Password, setPassword] = useState("Password");
const ValidationCheck = yup.object({
  UserName: yup.string().required().min(4),
  Password: yup.string().required().min(8),
});
const SignInScreen = ({ addData }) => {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("../assets/ishu.jpg")} /> */}
      <StatusBar style="auto" />
      <Formik
        initialValues={{ UserName: "", Password: "" }}
        validationSchema={ValidationCheck}
        onSubmit={(values) => {
          addData(values);
          console.log(values);
        }}
      >
        {(formikprops) => (
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="UserName"
              placeholderTextColor="#003f5c"
              autoCapitalize="none"
              onChangeText={formikprops.handleChange("UserName")}
              value={formikprops.values.UserName}
              onBlur={formikprops.handleBlur("UserName")}
            />
            <Text style={styles.errorText}>
              {formikprops.touched.UserName && formikprops.errors.UserName}
            </Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Password."
              placeholderTextColor="#003f5c"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={formikprops.handleChange("Password")}
              value={formikprops.values.Password}
              onBlur={formikprops.handleBlur("Password")}
            />
            <Text style={styles.errorText}>
              {formikprops.touched.Password && formikprops.errors.Password}
            </Text>
            <TouchableOpacity>
              <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            <Button
              style={styles.loginBtn}
              title="Submit"
              color="maroon"
              onPress={formikprops.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};
export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    width: 100,
    height: 100,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "100%",
    height: "100%",
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    alignItems: "center",
  },
});

{
  /* <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View> */
}

{
  /* <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View> */
}
{
  /* 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View> */
}
