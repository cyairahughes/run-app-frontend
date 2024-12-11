import { Text, View, StyleSheet, } from 'react-native';
 import { Link } from 'expo-router'; 

export default function Index() {
  return (
    <View style={styles.container}>
        <View style={styles.title_container}>
            <Text style={styles.title}>Run App</Text>
        </View>
        <View style={styles.button_container}>
            <Link replace href={'/login'} style={styles.button}>
                <Text style={styles.button_text}>LOGIN</Text>
            </Link>
            <Link replace href={'/signup'} style={styles.button}>
                <Text style={styles.button_text}>SIGN UP</Text>
            </Link>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  button_container: {
    flex: 1,
    alignItems: 'center',
    gap: 40,
    paddingTop: 20
  },
  title: {
    fontSize: 100,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 300,
    borderWidth: 3,
    textAlign: 'center',
    textAlignVertical: 'center'
    
  },
  button_text: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});
