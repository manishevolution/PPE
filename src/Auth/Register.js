import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, Dimensions, ScrollView, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Component/Header';
import { color, font, horizontalLine } from '../Component/Styles';
const RN =
    Platform.OS === 'ios'
        ? require('react-native')
        : require('react-native-safe-area-context');
const { SafeAreaView } = RN;

const { height, width } = Dimensions.get('window');

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        };
    }

    render() {
        const { checked } = this.state
        return (
            <KeyboardAvoidingView style={{ flex: 1, backgroundColor: color.white }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <StatusBar translucent barStyle="light-content" backgroundColor='#0000' />
                <SafeAreaView style={{ backgroundColor: color.primeColor }} />

                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
                    <View style={{ height: width * .8, backgroundColor: color.primeColor }}>
                        <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute', }}>
                            <Image source={require('../assets/img/pdf.png')} style={{ height: width, width: width, resizeMode: 'contain' }} />
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SelectUser')}
                            style={{ height: 15, width: 15, marginHorizontal: 10, marginTop: 20 }}>
                            <Image source={require('../assets/img/back.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain', tintColor: color.white }} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flex: 1, backgroundColor: color.borderColor, marginTop: -(width * .12), borderTopEndRadius: 25, borderTopStartRadius: 25, }}>
                        <Text style={{ marginTop: 25, marginBottom: 20, textAlign: 'center', letterSpacing: 5, color: color.white, fontFamily: font.thin, fontSize: 11 }}>SIGN UP TO GET STARTED.</Text>

                        <LinearGradient colors={['#FFFFFF', '#DEEEFF']}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 1, y: 0 }}
                            style={{ flex: 1, backgroundColor: color.primeColor, borderTopEndRadius: 25, borderTopStartRadius: 25, }}>

                            <View style={{ paddingHorizontal: 15, flex: 1 }}>
                                <Image source={require('../assets/img/map.png')} style={{ position: 'absolute', height: width * .57, width: width * .9, resizeMode: 'contain', alignSelf: 'center' }} />
                                <Text style={{ marginVertical: 25, fontSize: 18, color: color.black, fontFamily: font.bold }}>Create Account</Text>

                                <View style={{ backgroundColor: color.white, borderRadius: 15, }}>
                                    <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
                                        <TextInput style={{ paddingHorizontal: 20, flex: 1, color: color.black }} placeholder='Name' />
                                        <View style={{ height: 15, width: 18, alignSelf: 'center', marginRight: 8 }}>
                                            <Image source={require('../assets/img/user.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                                        </View>
                                    </View>
                                    <View style={{ borderBottomWidth: 1, borderBottomColor: color.grey + 88, }} />
                                    <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
                                        <TextInput style={{ paddingHorizontal: 20, flex: 1, color: color.black }} placeholder='Email Addresss' keyboardType='email-address' />
                                        <View style={{ height: 15, width: 18, alignSelf: 'center', marginRight: 8 }}>
                                            <Image source={require('../assets/img/email.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                                        </View>
                                    </View>
                                    <View style={{ borderBottomWidth: 1, borderBottomColor: color.grey + 88, marginTop: 2 }} />
                                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5 }}>
                                        <TextInput style={{ paddingHorizontal: 20, flex: 1, color: color.black }} placeholder='Password' secureTextEntry={true} />
                                        <TouchableOpacity style={{ height: 15, width: 18, alignSelf: 'center', marginRight: 8 }}>
                                            <Image source={require('../assets/img/eye.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={{ marginHorizontal: 15 }}>
                                <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => { this.setState({ checked: !checked }); }}
                                        style={{ height: 20, width: 20, backgroundColor: color.borderColor, borderRadius: 20, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: checked === 'true' ? color.white : color.primeColor }}>
                                        {checked && (
                                            <View style={{ height: 10, width: 10, }}>
                                                <Image source={require('../assets/img/check.png')} style={{ height: '100%', width: '100%', tintColor: color.white, resizeMode: 'contain', }} />
                                            </View>)}
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}></View>
                                    <Text style={{ marginLeft: 10, fontSize: 12, color: color.black, fontFamily: font.reg }}>I agree to the</Text>
                                    <Text style={{ fontSize: 12, color: color.black, fontFamily: font.reg, textDecorationLine: 'underline' }}> Terms of Service </Text>
                                    <Text style={{ fontSize: 12, color: color.black, fontFamily: font.reg }}>and</Text>
                                    <Text style={{ fontSize: 12, color: color.black, fontFamily: font.reg, textDecorationLine: 'underline' }}> Privacy Policy</Text>
                                </View>
                            </View>


                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}
                                style={{ marginRight: 15, flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', marginTop: 15, backgroundColor: color.borderColor, borderRadius: 20, paddingHorizontal: 30, paddingVertical: 15 }}>
                                <Text style={{ color: color.white, fontFamily: font.light, fontSize: 14 }}>Register</Text>
                                <View style={{ height: 15, width: 15, marginLeft: 15 }}>
                                    <Image source={require('../assets/img/backarrow.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain', tintColor: color.white }} />
                                </View>
                            </TouchableOpacity>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, paddingRight: 15 }}>
                                <View style={{ height: 120, width: 120, }}>
                                    <Image source={require('../assets/img/plant.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain', }} />
                                </View>
                                <View>
                                    <View style={{ borderBottomColor: color.grey, borderBottomWidth: 2, width: '80%', }} />
                                    <Text onPress={() => this.props.navigation.navigate('Login')} style={{ alignSelf: 'flex-end', fontSize: 12.5, color: color.grey, marginTop: 5, marginRight: 10 }}>Already have an account? Sign In</Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView >
        );
    }
}
