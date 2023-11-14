import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

export const COLORS = {
    // primary: "#252c4a",
    // secondary: '#1E90FF',
    // accent: '#3498db',

    primary: "#00483C",
    secondary: '#10B981',
    accent: '#32B768',
    
    success: '#00C851',
    //error: '#ff4444',
    error: '#00C851',

    black: "#171717",
    white: "#FFFFFF",
    background: "#00483C"
}


export const SIZES = {
    base: 10,
    width,
    height
}