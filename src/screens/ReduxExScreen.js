import { Text, View, Button } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from "../redux/slices/counterslice";

const ReduxExScreen = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Redux Example</Text>
            <Text>COUNTER: {count}</Text>
            <Button title="Increment" onPress={() => dispatch(increment())} />
            <Button title="Decrement" onPress={() => dispatch(decrement())} />
        </View>
    )
}

export default ReduxExScreen;

