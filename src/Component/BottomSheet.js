import React, { Component } from 'react';
import { View, Text, Modal, FlatList, TouchableOpacity, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { color, font, shadow } from './Styles';

const { height, width } = Dimensions.get('window');
const data = [{ id: 1, name: 'Folder', img: require('../assets/img/folder_2.png') }, { id: 2, name: 'Camera', img: require('../assets/img/camera.png') }, { id: 3, name: 'Photo', img: require('../assets/img/image.png') },
{ id: 4, name: 'Photo', img: require('../assets/img/document.png') }, { id: 5, name: 'Form', img: require('../assets/img/form.png') }, { id: 1, name: 'Other', img: require('../assets/img/other.png') }]
export default class BottomSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            data: data
        };
    }

    show() {
        this.setState({ visible: true });
    }

    render() {
        const { visible } = this.state;
        return (
            <View>
                <Modal
                    animationType='slide'
                    transparent
                    visible={visible}
                    onRequestClose={() => this.setState({ visible: false })}
                >
                    <TouchableOpacity activeOpacity={1} onPress={() => this.setState({ visible: false })} style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: '#0009' }}>

                        <TouchableWithoutFeedback>
                            <View style={{ backgroundColor: '#FEFEFE', borderTopLeftRadius: 15, borderTopRightRadius: 15, paddingVertical: 20, }}>
                                <Text style={{ alignSelf: 'center', fontFamily: font.mid, fontSize: 16, color: color.black }}>Upload</Text>
                                <View style={{ flexDirection: 'row', paddingHorizontal: 15, marginTop: 20 }}>
                                    <TouchableOpacity style={{ ...shadow, flex: 1, justifyContent: 'center', alignItems: 'center', padding: 15, borderRadius: 10 }}>
                                        <Image source={require('../assets/img/folder_2.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                                        <Text style={{ fontFamily: font.reg, marginTop: 10 }}>Folder</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ ...shadow, flex: 1, justifyContent: 'center', alignItems: 'center', padding: 15, borderRadius: 10, marginHorizontal: 15 }}>
                                        <Image source={require('../assets/img/camera.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                                        <Text style={{ fontFamily: font.reg, marginTop: 10 }}>Camera</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ ...shadow, flex: 1, justifyContent: 'center', alignItems: 'center', padding: 15, borderRadius: 10 }}>
                                        <Image source={require('../assets/img/image.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                                        <Text style={{ fontFamily: font.reg, marginTop: 10 }}>Photo</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flexDirection: 'row', paddingHorizontal: 15, marginTop: 20 }}>
                                    <TouchableOpacity style={{ ...shadow, flex: 1, justifyContent: 'center', alignItems: 'center', padding: 15, borderRadius: 10 }}>
                                        <Image source={require('../assets/img/document.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                                        <Text style={{ fontFamily: font.reg, marginTop: 10, fontSize: 12.5 }}>Document</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ ...shadow, flex: 1, justifyContent: 'center', alignItems: 'center', padding: 15, borderRadius: 10, marginHorizontal: 15 }}>
                                        <Image source={require('../assets/img/form.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                                        <Text style={{ fontFamily: font.reg, marginTop: 10 }}>Form</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ ...shadow, flex: 1, justifyContent: 'center', alignItems: 'center', padding: 15, borderRadius: 10 }}>
                                        <Image source={require('../assets/img/other.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                                        <Text style={{ fontFamily: font.reg, marginTop: 10 }}>Other</Text>
                                    </TouchableOpacity>
                                </View>

                                {/* <View>
                                <FlatList
                                    data={this.state.data}
                                    numColumns={3}
                                    style={{ paddingBottom: 20 }}
                                    keyExtractor={(item, index) => index + ''}
                                    renderItem={(item, index) =>
                                        <TouchableOpacity style={{ ...shadow, backgroundColor: color.white, alignItems: 'center', marginTop: 10, marginHorizontal: 2, width: width * .3, height: width * .18, justifyContent: 'center', borderRadius: 8 }}>
                                            <View style={{ height: 20, width: 20 }}>
                                                <Image source={item.item.img} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                                            </View>
                                            <Text>{item.item.name}</Text>

                                        </TouchableOpacity>} />
                            </View> */}
                            </View>
                        </TouchableWithoutFeedback>
                    </TouchableOpacity>
                </Modal>
            </View>
        );
    }
}
