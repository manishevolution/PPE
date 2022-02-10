import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Component/Header';
import { color, font, horizontalLine } from '../Component/Styles';
import SplashScreen from 'react-native-splash-screen';

const RN =
    Platform.OS === 'ios'
        ? require('react-native')
        : require('react-native-safe-area-context');
const { SafeAreaView } = RN;

export default class SelectUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        SplashScreen.hide()
    }

    render() {
        return (

            <LinearGradient colors={['#FFFFFF', '#F8FCFF', '#DEEEFF']} style={{ flex: 1 }}>
                <StatusBar barStyle="dark-content" backgroundColor='#0000' />
                <SafeAreaView style={{ backgroundColor: color.white }} />
                <Header Limg={require('../assets/img/back.png')}
                    Lpress={() => this.props.navigation.goBack()}
                    title={'Selcet User'} />

                <ScrollView style={{ flexGrow: 1, paddingBottom: 20 }}>
                    <View style={{ paddingHorizontal: 15, marginTop: 20 }}>

                        <View>
                            {/* ADMINISTRATOR */}
                            <TouchableOpacity style={{ borderWidth: 1, borderColor: color.borderColor, borderRadius: 20, overflow: 'hidden', }}>
                                <LinearGradient colors={['#FFFFFF', '#F8FCFF', '#DEEEFF']}
                                    style={{ width: '100%', height: 110, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                                    start={{ x: 1, y: 0.5 }}
                                    end={{ x: 0, y: 0.5 }}>
                                    <View>
                                        <Text style={{ fontSize: 13, fontFamily: font.mid, color: color.primeColor }}>ADMINISTRATOR</Text>
                                        <View style={{ height: 23, width: 23, marginTop: 25 }}>
                                            <Image source={require('../assets/img/backarrow.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain', tintColor: color.black }} />
                                        </View>
                                    </View>
                                    <View style={{ height: 90, width: 90, alignSelf: 'flex-end' }}>
                                        <Image source={require('../assets/img/user1.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>

                            {/* User-1 */}
                            <TouchableOpacity style={{ borderWidth: 1, borderColor: color.borderColor, borderRadius: 20, overflow: 'hidden', marginTop: 20 }}>
                                <View style={{ width: '100%', height: 110, paddingHorizontal: 10, flexDirection: 'row', backgroundColor: color.borderColor, justifyContent: 'space-between', alignItems: 'center' }} >
                                    <View>
                                        <Text style={{ fontSize: 13, fontFamily: font.mid, color: color.primeColor }}>USER - 1</Text>
                                        <View style={{ height: 23, width: 23, marginTop: 25 }}>
                                            <Image source={require('../assets/img/backarrow.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                                        </View>
                                    </View>
                                    <View style={{ height: 90, width: 90, alignSelf: 'flex-end' }}>
                                        <Image source={require('../assets/img/user1.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain', tintColor: color.white }} />
                                    </View>
                                </View>
                            </TouchableOpacity>

                            {/* ADMINISTRATOR */}
                            <TouchableOpacity style={{ borderWidth: 1, borderColor: color.borderColor, borderRadius: 20, overflow: 'hidden', marginTop: 20 }}>
                                <LinearGradient colors={['#FFFFFF', '#F8FCFF', '#DEEEFF']}
                                    style={{ width: '100%', height: 110, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                                    start={{ x: 1, y: 0.5 }}
                                    end={{ x: 0, y: 0.5 }}>
                                    <View>
                                        <Text style={{ fontSize: 13, fontFamily: font.mid, color: color.primeColor }}>USER - 2</Text>
                                        <View style={{ height: 23, width: 23, marginTop: 25 }}>
                                            <Image source={require('../assets/img/backarrow.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                                        </View>
                                    </View>
                                    <View style={{ height: 90, width: 90, alignSelf: 'flex-end' }}>
                                        <Image source={require('../assets/img/user1.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}
                                style={{ flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', marginTop: 15, backgroundColor: color.borderColor, borderRadius: 20, paddingHorizontal: 30, paddingVertical: 15 }}>
                                <Text style={{ color: color.white, fontFamily: font.light, fontSize: 14 }}>Sign In</Text>
                                <View style={{ height: 15, width: 15, marginLeft: 5 }}>
                                    <Image source={require('../assets/img/backarrow.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain', tintColor: color.white }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ borderBottomColor: '#a2a2a255', borderBottomWidth: 2, marginTop: 20, width: '70%', alignSelf: 'flex-end' }} />
                        <Text style={{ alignSelf: 'flex-end', marginTop: 15, fontSize: 14.5, color: '#64666D' }}>Don't have account? Sign Up</Text>
                    </View>
                </ScrollView>

                <View style={{ position: 'absolute', bottom: 0 }}>
                    <View style={{ height: 120, width: 120, }}>
                        <Image source={require('../assets/img/plant.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain', }} />
                    </View>
                </View>

            </LinearGradient>



        );
    }
}
