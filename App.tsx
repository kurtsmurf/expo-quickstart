import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const Counter = () => (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <CounterDisplay />
      <CounterButtons />
    </View>
  );

  const CounterDisplay = () => (
    <View
      style={{
        flex: 2,
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 200 }}>
        {count}
      </Text>
    </View>
  );

  const CounterButtons = () => {
    const Spacer = () => <View style={{ width: 10, height: 10 }}></View>;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View>
          <Button title="decrement" onPress={decrement} />
        </View>
        <Spacer />
        <View>
          <Button title="reset" onPress={reset} />
        </View>
        <Spacer />
        <View>
          <Button title="increment" onPress={increment} />
        </View>
      </View>
    );
  };

  return <Counter />;
};
