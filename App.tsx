import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import { StatusBar } from 'expo-status-bar'

export default function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count -1)
  const reset = () => setCount(0)

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Text>{count}</Text>
      <Button title="increment" onPress={ increment }>Increment Count</Button>
      <Button title="decrement" onPress={ decrement }>Decrement Count</Button>
      <Button title="reset" onPress={ reset }>Reset Count</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigFont: {
    fontSize: 50
  }
});
