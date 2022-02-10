import moment from 'moment';
import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, Dimensions, ScrollView, KeyboardAvoidingView, Platform, TextInput, ColorPropType, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BottomSheet from '../Component/BottomSheet';
import Header from '../Component/Header';
import { color, font, horizontalLine, shadow } from '../Component/Styles';
const RN =
    Platform.OS === 'ios'
        ? require('react-native')
        : require('react-native-safe-area-context');
const { SafeAreaView } = RN;

const { height, width } = Dimensions.get('window');

const Data = [{ id: 1, items: 38, name: 'Illustration' }, { id: 1, items: 38, name: 'UI Design' }, { id: 1, items: 45, name: 'UI Design' }, { id: 1, items: 40, name: 'Photos' }]
const Data2 = [{ id: 1, name: 'Google Drive', img: require('../assets/img/Google_Drive_logo.png') }, { id: 2, name: 'Dropbox', img: require('../assets/img/dropbox.png') }]
export default class FileSaved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            folders: Data,
            googleDrive: Data2
        };
    }

    render() {
        const { folders, googleDrive } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: color.white }}>
                <StatusBar translucent barStyle="light-content" backgroundColor='#0000' />
                <SafeAreaView style={{ backgroundColor: color.primeColor }} />
                <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: color.primeColor, }} bounces={false}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10, marginTop: 12, alignItems: 'center', justifyContent: 'space-between', }}>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{ height: 20, width: 20 }}>
                            <Image source={require('../assets/img/menu1.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain', tintColor: color.white }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 18, width: 18 }}>
                            <Image source={require('../assets/img/search.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain', tintColor: color.white }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ alignSelf: 'center', marginVertical: 45, fontSize: 19, color: color.white, fontFamily: font.mid }}>All your files saved here</Text>
                    <View style={{ paddingHorizontal: 10 }}>
                        <FlatList
                            horizontal
                            data={googleDrive}
                            keyExtractor={(item, index) => index + ''}
                            style={{ paddingBottom: 20 }}
                            renderItem={(item, index) =>
                                <View style={{ backgroundColor: color.primeColor_op, borderRadius: 15, marginLeft: 15, paddingHorizontal: 15, width: width * .70, paddingTop: 15, paddingVertical: 20 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <View style={{ height: 45, width: 45, backgroundColor: color.primeColor, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 }}>
                                            <Image source={item.item.img} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                                        </View>
                                        <TouchableOpacity style={{ height: 20, width: 20 }}>
                                            <Image source={require('../assets/img/more.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain', tintColor: color.primeColor2 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{ marginTop: 20, fontSize: 18, color: color.white, fontFamily: font.reg }}>{item.item.name}</Text>
                                    <View style={{ height: 4, backgroundColor: color.primeColor, borderRadius: 5, overflow: 'hidden', marginTop: 10 }}>
                                        <View style={{ position: 'absolute', height: '100%', width: '55%', backgroundColor: '#FBA900', borderRadius: 5 }} />
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                                        <Text style={{ fontFamily: font.reg, color: color.primeColor2, fontSize: 12 }}>Storage</Text>
                                        <Text style={{ fontFamily: font.reg, color: color.primeColor2, fontSize: 12 }}>12/16 Gb</Text>
                                    </View>
                                </View>}
                        />
                    </View>

                    <View style={{ flex: 1, backgroundColor: '#FEFEFE', marginTop: 15, borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: 'hidden', paddingHorizontal: 20, paddingBottom: 70 }}>
                        <Text style={{ fontFamily: font.mid, textAlign: 'center', paddingVertical: 15, fontSize: 16 }}>Folders</Text>

                        {
                            folders.map((item, index) =>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('PhotoGallery')}
                                    activeOpacity={1} key={index + ''} style={{ flexDirection: 'row', marginBottom: 20 }}>
                                    <View style={{ height: 80, width: 80, ...shadow, borderRadius: 15, borderTopRightRadius: 8, borderBottomRightRadius: 8, justifyContent: 'center', alignItems: 'center', marginRight: 15 }}>
                                        <Image source={require('../assets/img/folder.png')} style={{ height: 28, width: 28, resizeMode: 'contain' }} />
                                        <Text style={{ fontSize: 11, color: color.primeColor2, marginTop: 2, textAlign: 'center', fontFamily: font.reg }}>{item.items} Items</Text>
                                    </View>
                                    <View style={{ flex: 1, ...shadow, borderRadius: 8, borderTopRightRadius: 15, borderBottomRightRadius: 15, flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingLeft: 15 }}>
                                        <View style={{ flex: 1, }}>
                                            <Text style={{ color: color.black, fontFamily: font.reg, fontSize: 15 }}>{item.name}</Text>
                                            <Text style={{ fontSize: 12, color: color.lableColor, fontFamily: font.reg }}>Created {moment().format('DD MMM YYYY')}</Text>
                                        </View>
                                        <TouchableOpacity style={{ height: 28, width: 28, }}>
                                            <Image source={require('../assets/img/more.png')} style={{ height: '70%', width: '70%', resizeMode: 'contain' }} />
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                </ScrollView >

                <TouchableOpacity onPress={() => this.BottomSheet.show()} style={{ position: 'absolute', alignSelf: 'flex-end', height: 50, width: 50, bottom: 20, right: 20 }}>
                    <Image source={require('../assets/img/Button.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />

                </TouchableOpacity>
                <BottomSheet ref={ref => this.BottomSheet = ref} />
            </View >
        );
    }
}
