import React, { useState } from "react";
import {
  Button,
  NativeSyntheticEvent,
  NativeTouchEvent,
  Text,
  View,
} from "react-native";

export default () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Counter />
    </View>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <CounterDisplay count={count} />
      <CounterButtons
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
    </View>
  );
};

const CounterButtons: React.FC<{
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}> = ({
  increment,
  decrement,
  reset,
}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "80%",
      }}
    >
      <CounterButton title="decrement" onPress={decrement} />
      <CounterButton title="reset" onPress={reset} />
      <CounterButton title="increment" onPress={increment} />
    </View>
  );
};

const CounterDisplay: React.FC<{
  count: number;
}> = ({ count }) => (
  <View
    style={{
      flex: 2,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Text
      style={{
        fontSize: 200,
        textShadowColor: "#999",
        textShadowRadius: 4,
        textShadowOffset: { width: 2, height: 2 },
      }}
    >
      {count}
    </Text>
  </View>
);

const CounterButton: React.FC<{
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  title: string;
}> = ({ onPress, title }) => (
  <View style={{ flex: 1, maxWidth: "30%" }}>
    <Button title={title} onPress={onPress} />
  </View>
);
