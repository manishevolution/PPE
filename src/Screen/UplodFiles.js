import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, Dimensions, ScrollView, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Component/Header';
import { color, font, horizontalLine } from '../Component/Styles';
import ImagePicker from '../Component/ImagePicker'
import SplashScreen from 'react-native-splash-screen';

const RN =
    Platform.OS === 'ios'
        ? require('react-native')
        : require('react-native-safe-area-context');
const { SafeAreaView } = RN;

const { height, width } = Dimensions.get('window');

export default class UplodFiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ImageData: {}
        };
    }
    onSelectIMG(img, key) {
        const { ImageData } = this.state;
        this.setState({ ImageData: img });

        console.log('img---', img);
    }
    componentDidMount() {
        SplashScreen.hide()
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent barStyle="dark-content" backgroundColor='#0000' />
                <SafeAreaView style={{ backgroundColor: color.white }} />
                <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{ height: 20, width: 20 }}>
                        <Image source={require('../assets/img/menu1.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 20, width: 20 }}>
                        <Image source={require('../assets/img/search.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain', tintColor: color.primeColor }} />
                    </TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle={{ flexGrow: 1, }} bounces={false}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1, }}>
                        <Text style={{ fontSize: 19, color: color.primeColor, fontFamily: font.bold }}>Upload your files</Text>
                        <Text style={{ fontSize: 14, color: '#6175AE', fontFamily: font.reg, marginTop: 8 }}>Select your files to upload to your box</Text>
                        <View style={{ marginHorizontal: 15, marginTop: 20, }} >
                            <TouchableOpacity onPress={() => { this.refs.ImagePicker.show(); }}
                                style={{ backgroundColor: '#F0F3FD', height: width * .55, width: width * .80 }}>
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('FileSaved')}
                                    style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 45, backgroundColor: color.borderColor, width: width * .35, height: width * .12, borderRadius: 15 }}>
                                    <Text style={{ fontSize: 16, color: color.white, fontFamily: font.reg }}>Upload</Text>
                                    <View style={{ height: 20, width: 20 }}>
                                        <Image source={require('../assets/img/cloud.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain', marginLeft: 10 }} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView >
                <ImagePicker
                    ref="ImagePicker"
                    onSelect={(img) => this.onSelectIMG(img)}
                />
            </View >
        );
    }
}
