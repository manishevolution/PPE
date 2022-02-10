import { Platform, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export function textPer(percent) {
    const heightPercent = (percent * width) / 100;
    // return Math.round(heightPercent);
    return heightPercent;
}

export const font = {
    reg: 'SFUIDisplay-Light',
    thin: 'SFUIDisplay-Thin',
    mid: 'SFUIDisplay-Medium',
    bold: 'SFUIDisplay-Bold',
    // bold: 'Futura-Medium',
}

export const shadow = {
    backgroundColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
}
export const horizontalLine = {
    borderBottomColor: '#a2a2a255',
    borderBottomWidth: 1
}
export const color = {
    primeColor: '#2B3960',
    primeColor_op: '#364672',
    primeColor2: '#93A3D1',
    primeColor_op_10: '#14203111',
    primeColor_op_20: '#14203122',
    primeColor_op_40: '#14203144',
    black: '#1F2023',
    grey: '#8C909B',
    secondColor: '#aad8d3',
    orenge: '#e8910d',
    orenge_op_11: '#e8910d11',
    orenge_light: '#e67016',
    orenge_light_op_05: '#e6701605',
    lableColor: '#a2a2a2',
    iconColor: '#CECECE',
    red: '#F25961',
    red_op_10: '#ed1c2411',
    green: '#31CE36',
    teal: '#00867a',
    hot: '#17a2b8',
    warm: '#6861CE',
    cold: '#FFAD46',
    white: '#FFFFFF',

    borderColor: '#1B7EE4',
}