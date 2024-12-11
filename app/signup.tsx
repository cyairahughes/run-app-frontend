import { Link, router} from 'expo-router';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Alert} from 'react-native';

export default function Signup() {

const [username,setUsername] = useState('')
const [password,setPassword] = useState('')

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
      else{
        router.replace('/login')
      }
    })
    .catch(error => {
      console.error(error)
    });
  };


  return (
    <View style={styles.container}>
        <View style={styles.title_container}>
            <Text style={styles.title}>Create an Account</Text>
        </View>
        <View style={{flex:1, justifyContent:'flex-start'}}>
            <View style={styles.text_input_container}>
            <TextInput style={styles.text_input} placeholder="Username" onChangeText={text => setUsername(text)}/>
            <TextInput style={styles.text_input} placeholder="Password" onChangeText={text => setPassword(text)}/>
            </View>
            <View style={styles.button_container}>
                <Pressable style={styles.button} onPress = {onPressSignUp}>
                    <Text style={styles.button_text}>SIGN UP</Text>
                </Pressable>
                <Link style={styles.link} replace href='/login'>Already have an account?</Link>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text_input_container: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  button_container: {
    flex: 1,
    gap: 10,
    alignSelf: 'center',
  },
  text_input: {
    fontSize: 20,
    borderBottomWidth: 3,
    width: 300,
    height: 50,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 300,
    marginTop: 80,
    borderWidth: 3,
    textAlign: 'center',
    textAlignVertical: 'center'
    
  },
  button_text: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  link: {
    textDecorationLine: 'underline',
    alignSelf: 'flex-end'
  },
  title: {
    fontSize: 80,
    paddingBottom: 50
  },
  title_container: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    
  },
});
