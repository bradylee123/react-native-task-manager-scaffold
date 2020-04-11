import React from 'react';
import { View, Button } from 'react-native';

const timerButton = props => {
    return (
        <View>
            <Button title={props.title} onPress={props.onPress}/>
        </View>
    )
}

export default timerButton;