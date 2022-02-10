import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, Dimensions, ScrollView, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Component/Header';
import { color, font, horizontalLine, shadow } from '../Component/Styles';
const RN =
    Platform.OS === 'ios'
        ? require('react-native')
        : require('react-native-safe-area-context');
const { SafeAreaView } = RN;

const { height, width } = Dimensions.get('window');

export default class PhotoGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
    }

    render() {
        const { visible } = this.state
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent barStyle="light-content" backgroundColor='#0000' />
                <SafeAreaView style={{ backgroundColor: color.primeColor }} />
                {/* HEader */}
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: color.primeColor, justifyContent: 'space-between', padding: 20 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}
                        style={{ height: 15, width: 15 }}>
                        <Image source={require('../assets/img/back.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain', tintColor: color.white }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, color: color.white, fontFamily: font.mid }}>Photo Gallery</Text>
                    <View style={{ height: 15, width: 15 }}>
                        <Image source={require('../assets/img/search.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain', tintColor: color.white }} />
                    </View>
                </View>

                <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: color.white, paddingBottom: 20, }} bounces={false}>
                    <View style={{ backgroundColor: color.primeColor }}>
                        <View style={{ backgroundColor: '#364672', borderTopLeftRadius: 20, borderTopRightRadius: 20, }}>
                            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', paddingVertical: 25, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 12, color: color.primeColor2, fontFamily: font.reg }}>Home</Text>
                                <Image source={require('../assets/img/back.png')} style={{ height: 13, width: 13, resizeMode: 'contain', marginHorizontal: 5, tintColor: color.primeColor2, rotation: 180 }} />
                                <Text style={{ fontSize: 12, color: color.primeColor2, fontFamily: font.reg }}>Family Photos</Text>
                                <Image source={require('../assets/img/back.png')} style={{ height: 13, width: 13, resizeMode: 'contain', marginHorizontal: 5, tintColor: color.primeColor2, rotation: 180 }} />
                                <Text style={{ fontSize: 12, color: color.primeColor2, fontFamily: font.reg }}>254 Photos</Text>
                            </View>

                            <View style={{ backgroundColor: color.white, borderTopLeftRadius: 35, borderTopRightRadius: 35, overflow: 'hidden', padding: 25, flex: 1 }}>
                                {visible == true ?
                                    <View>
                                        <View style={{ marginTop: 15 }}>
                                            <Text style={{ fontFamily: font.mid, color: '#333333', fontSize: 13, marginVertical: 4 }}>34 Minutes ago</Text>
                                            <Text style={{ fontFamily: font.mid, color: '#C9CFE2', fontSize: 11 }} >16 Photos</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                            <View style={{ height: 85, width: 85, borderRadius: 10, overflow: 'hidden' }}>
                                                <Image source={require('../assets/img/filip-mroz-oko_4WnoM98-unsplash.jpg')} style={{ height: '100%', width: '100%', resizeMode: 'cover' }} />
                                            </View>
                                            <View style={{ height: 80, width: 80, borderRadius: 10, overflow: 'hidden', marginHorizontal: 10 }}>
                                                <Image source={require('../assets/img/michal-bar-haim-NYvRaxVZ-_M-unsplash.jpg')} style={{ height: '100%', width: '100%', resizeMode: 'cover' }} />
                                            </View>
                                            <TouchableOpacity onPress={() => this.setState({ visible: !visible })}
                                                style={{ height: 85, width: 85, borderRadius: 10, overflow: 'hidden' }}>
                                                <Image source={require('../assets/img/nathan-dumlao-Wr3comVZJxU-unsplash.jpg')} style={{ height: '100%', width: '100%', resizeMode: 'cover' }} />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{ marginTop: 15 }}>
                                            <Text style={{ fontFamily: font.mid, color: '#333333', fontSize: 13, marginVertical: 4 }}>46 Minutes ago</Text>
                                            <Text style={{ fontFamily: font.mid, color: '#C9CFE2', fontSize: 11 }} >146 Photos</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                            <View style={{ height: 85, width: 85, borderRadius: 10, overflow: 'hidden' }}>
                                                <Image source={require('../assets/img/nathan-dumlao-Wr3comVZJxU-unsplash.jpg')} style={{ height: '100%', width: '100%', resizeMode: 'cover' }} />
                                            </View>
                                            <View style={{ height: 85, width: 85, borderRadius: 10, overflow: 'hidden', marginHorizontal: 10 }}>
                                                <Image source={require('../assets/img/natalya-zaritskaya-SIOdjcYotms-unsplash.jpg')} style={{ height: '100%', width: '100%', resizeMode: 'cover' }} />
                                            </View>
                                            <TouchableOpacity style={{ height: 85, width: 85, borderRadius: 10, overflow: 'hidden' }}>
                                                <Image source={require('../assets/img/nathan-dumlao-Wr3comVZJxU-unsplash.jpg')} style={{ height: '100%', width: '100%', resizeMode: 'cover' }} />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{ marginTop: 15 }}>
                                            <Text style={{ fontFamily: font.mid, color: '#333333', fontSize: 13, marginVertical: 4 }}>4 Hours ago</Text>
                                            <Text style={{ fontFamily: font.mid, color: '#C9CFE2', fontSize: 11 }} >146 Photos</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                            <View style={{ height: 85, width: 85, borderRadius: 10, overflow: 'hidden' }}>
                                                <Image source={require('../assets/img/natalya-zaritskaya-SIOdjcYotms-unsplash.jpg')} style={{ height: '100%', width: '100%', resizeMode: 'cover' }} />
                                            </View>
                                            <View style={{ height: 85, width: 85, borderRadius: 10, overflow: 'hidden', marginHorizontal: 10 }}>
                                                <Image source={require('../assets/img/quino-al-JFeOy62yjXk-unsplash.jpg')} style={{ height: '100%', width: '100%', resizeMode: 'cover' }} />
                                            </View>
                                            <TouchableOpacity style={{ height: 85, width: 85, borderRadius: 10, overflow: 'hidden' }}>
                                                <Image source={require('../assets/img/dawid-zawila--G3rw6Y02D0-unsplash.jpg')} style={{ opacity: 10, height: '100%', width: '100%', resizeMode: 'cover' }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    :
                                    // file uploaded
                                    <View>
                                        <TouchableOpacity onPress={() => this.setState({ visible: !visible })}
                                            style={{ backgroundColor: color.white, ...shadow, paddingHorizontal: 15, marginVertical: 20, borderRadius: 20, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                            <View style={{ height: 80, width: 80, borderRadius: 50, borderWidth: 5, backgroundColor: color.white, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text>100%</Text>
                                            </View>
                                            <View style={{ flex: 1, marginLeft: 10 }}>
                                                <Text style={{ fontSize: 14, color: color.black, fontFamily: font.mid }}>4 files uploaded</Text>
                                                <Text style={{ fontSize: 12, color: color.lableColor, fontFamily: font.mid }}>Completed</Text>
                                            </View>
                                            <View style={{ height: 30, width: 30, backgroundColor: '#6DD402', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
                                                <Image source={require('../assets/img/check.png')} style={{ height: 15, width: 15, resizeMode: 'contain', tintColor: color.white }} />
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => this.setState({ visible: !visible })}
                                            style={{ backgroundColor: color.white, ...shadow, paddingHorizontal: 15, borderRadius: 20, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                            <View style={{ height: 80, width: 80, borderRadius: 50, borderWidth: 5, backgroundColor: color.white, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text>100%</Text>
                                            </View>
                                            <View style={{ flex: 1, marginLeft: 10 }}>
                                                <Text style={{ fontSize: 14, color: color.black, fontFamily: font.mid }}>4 files uploaded</Text>
                                                <Text style={{ fontSize: 12, color: color.lableColor, fontFamily: font.mid }}>Completed</Text>
                                            </View>
                                            <View style={{ height: 30, width: 30, backgroundColor: '#6DD402', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
                                                <Image source={require('../assets/img/check.png')} style={{ height: 15, width: 15, resizeMode: 'contain', tintColor: color.white }} />
                                            </View>
                                        </TouchableOpacity>

                                        <View onPress={() => this.setState({ visible: !visible })}
                                            style={{ backgroundColor: color.white, ...shadow, paddingHorizontal: 15, borderRadius: 20, marginVertical: 20, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                                            <View style={{ height: 80, width: 80, borderRadius: 50, borderWidth: 5, backgroundColor: color.white, alignItems: 'center', justifyContent: 'center' }}>
                                                <View style={{ height: 80, width: 80, borderRadius: 50, borderWidth: 5, position: 'absolute', borderColor: color.primeColor2 }} />
                                                <Text>100%</Text>
                                            </View>
                                            <View style={{ flex: 1, marginLeft: 10 }}>
                                                <Text style={{ fontSize: 14, color: color.black, fontFamily: font.mid }}>4 files uploaded</Text>
                                                <Text style={{ fontSize: 12, color: color.lableColor, fontFamily: font.mid }}>Completed</Text>
                                            </View>
                                            <TouchableOpacity style={{ height: 30, width: 30, alignItems: 'center', justifyContent: 'center', }}>
                                                <Image source={require('../assets/img/cancle.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain', }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                }
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </View>
        );
    }
}
