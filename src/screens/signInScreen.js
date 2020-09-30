import * as Animatable from 'react-native-animatable';

import {
    Alert,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import React, { useState } from 'react';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const SignInScreen = ({ navigation }) => {
    const [data, setData] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    });

    const textInputChange = val => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
            })
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
            });
        }
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.text_header}>Welcome!</Text>
            </View>
            <View style={style.footer}>
                <Text style={style.text_footer}>Username</Text>
                <View style={style.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Email"
                        placeholderTextColor="#666666"
                        style={style.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                        : null}

                </View>
                <Text style={[style.text_footer, { marginTop: 35 }]}>Password</Text>
                <View style={style.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Password"
                        secureTextEntry={true}
                        style={style.textInput}
                        autoCapitalize="none"
                    />
                    <Feather
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                </View>
            </View>
        </View>
    );
}

export default SignInScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})