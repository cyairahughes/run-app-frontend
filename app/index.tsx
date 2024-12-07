import React, { useState } from 'react';
import {
StyleSheet,
Text,
View,
TextInput,
TouchableOpacity,
} from 'react-native';


const App =  () => {
const onPressSignUp = () => {
  fetch('http://127.0.0.1:5000/signup', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    })
  })
  .then(response => response.status)
  .then(status => {
    if (status != 201) 
      console.log('Sign up failed')
  })
  .catch(error => {
    console.error(error)
  });
};
const onPressLogin = async () => {
  fetch('http://127.0.0.1:5000/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    })
  })
  .then(response => response.json())
  .then(json => {
    console.log(json.token)
    setAuthToken(json.token)
  })
  .catch(error => {
    console.error(error)
  });
};

const onPressUpdateUsername = () => {
  fetch('http://127.0.0.1:5000/changeUsername', {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + authToken
    },
    body: JSON.stringify({
      username: username
    })
  })
  .then(response => response.text())
  .then(json => {
    console.log(json)
  })
  .catch(error => {
    console.error(error)
  });
};

const onPressUpdatePassword = () => {
  fetch('http://127.0.0.1:5000/changePassword', {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + authToken
    },
    body: JSON.stringify({
      password: password
    })
  })
  .then(response => response.text())
  .then(json => {
    console.log(json)
  })
  .catch(error => {
    console.error(error)
  });
};

const onPressDeleteAccount = () => {
  fetch('http://127.0.0.1:5000/deleteAccount', {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + authToken
    }
  })
  .then(response => response.text())
  .then(json => {
    console.log(json)
  })
  .catch(error => {
    console.error(error)
  });
  };

const [username,setUsername] = useState('')
const [password,setPassword] = useState('')

const [authToken, setAuthToken] = useState('')
return (
<View style={styles.container}>
<Text style={styles.title}> Account Actions</Text>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
placeholder="Username"
placeholderTextColor="#003f5c"
onChangeText={text => setUsername(text)}/>
</View>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
secureTextEntry
placeholder="Password"
placeholderTextColor="#003f5c"
onChangeText={text => setPassword(text)}/>
</View>
<TouchableOpacity
onPress = {onPressSignUp}
style={styles.loginBtn}>
<Text>Sign Up</Text>
</TouchableOpacity>
<TouchableOpacity
onPress = {onPressLogin}
style={styles.loginBtn}>
<Text>Login</Text>
</TouchableOpacity>
<TouchableOpacity
onPress = {onPressUpdateUsername}
style={styles.loginBtn}>
<Text>Update Username</Text>
</TouchableOpacity>
<TouchableOpacity
onPress = {onPressUpdatePassword}
style={styles.loginBtn}>
<Text>Update Password</Text>
</TouchableOpacity>
<TouchableOpacity
onPress = {onPressDeleteAccount}
style={styles.loginBtn}>
<Text>Delete Account</Text>
</TouchableOpacity>
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#4FD3DA',
alignItems: 'center',
justifyContent: 'center',
},
title:{
fontWeight: "bold",
fontSize:50,
color:"#fb5b5a",
marginBottom: 40,
},
inputView:{
width:"80%",
backgroundColor:"#3AB4BA",
borderRadius:25,
height:50,
marginBottom:20,
justifyContent:"center",
padding:20
},
inputText:{
height:50,
color:"white"
},
forgotAndSignUpText:{
color:"white",
fontSize:11
},
loginBtn:{
width:"80%",
backgroundColor:"#fb5b5a",
borderRadius:25,
height:50,
alignItems:"center",
justifyContent:"center",
marginTop:40,
marginBottom:10
},
});
export default App;