import * as React from 'react';

import { Button, Text, View } from 'react-native';

const SupportScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Support Screen</Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    );
}

export default SupportScreen;