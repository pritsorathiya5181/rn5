import * as React from 'react';

import { Button, Text, View } from 'react-native';

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go To Details Screen...again"
                onPress={() => navigation.push('Details')}
            />
            <Button
                title="Go To Home Screen"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Go To first Screen"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

export default DetailsScreen;