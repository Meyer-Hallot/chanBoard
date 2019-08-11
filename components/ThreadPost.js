import React, {Component} from 'react';
import {Image, Text, View, TouchableHighlight, StyleSheet} from "react-native";
import { WebView } from 'react-native-webview';

//TODO: use TouchableNativeFeedback instead of TouchableHighlight because TouchableHighlight is ugly

export default class ThreadPost extends Component{
    constructor(props){
        super(props);
        this.handleOnPress = this.handleOnPress.bind(this);
    }

    handleOnPress(threadNumber){
        console.log(threadNumber);
        threadNumber=this.props.threadNumber;
        this.props.onPress(threadNumber);
    }

    render(){
        // <Text>{this.props.postbody}</Text>
        const tn_w = this.props.thumbnailWidth/1.85;
        const tn_h = this.props.thumbnailHeight/1.85;
        console.log(this.props.threadNumber);
        console.log("image: " + this.props.imageFileName);
        return(
            <TouchableHighlight onPress={() => this.handleOnPress()} underlayColor="white">
                <View style={{flex: 1,flexDirection: 'column',height:'auto'}}>
                <View style={style.threadContainer}>
                    {this.props.imageFileName &&
                        <Image style={style.threadPic} source={{uri: 'https://i.4cdn.org/'+this.props.board+'/'+this.props.imageFileName+'s.jpg'}} style={{width:tn_w, height:tn_h, backgroundColor:'#724f66'}}/>
                    }
                    <View style={style.textContainer}>
                        <Text style={style.screenNameAndPostNum} >{this.props.screenName }   {this.props.threadNumber}</Text>
                        <Text style={style.threadTittle} >{this.props.postTitle}</Text>
                        <WebView textZoom={300} style={style.postBody} originWhitelist={['*']} source={{html: `${this.props.postbody}`}}/>
                    </View>
                </View>
                <Text>Replies: {this.props.replies} Images: {this.props.images}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}



const style = StyleSheet.create({
    threadContainer:{
        flex: 1,
        flexDirection: 'row',
        borderRadius:8,
        backgroundColor:'#d8cad8',
        paddingBottom:20,
        height:'auto',
        marginBottom:5,
        marginTop:5,
        paddingLeft:2,
        paddingTop:2,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingBottom:60,
        height:'auto',
        marginBottom:20,
        marginLeft:4,
        //backgroundColor: '#f7f3f7',
    },
    threadTittle:{
        color:'#7b59c0',
        fontWeight: 'bold',
    },
    threadPic:{
        color:'black',
    },
    screenNameAndPostNum:{
        color:'#918b3b',
        fontWeight: 'bold',
    },
    postBody:{
        color:'#1b181b',
        fontSize:20,
        backgroundColor: '#d8cad8',
    }


});


const color00="#f7f3f7" //Base 00 - Black
const color01="#ca402b" //Base 08 - Red
const color02="#918b3b" //Base 0B - Green
const color03="#bb8a35" //Base 0A - Yellow
const color04="#516aec" //Base 0D - Blue
const color05="#7b59c0" //Base 0E - Magenta
const color06="#159393" //Base 0C - Cyan
const color07="#695d69" //Base 05 - White
const color08="#9e8f9e" //Base 03 - Bright Black
const color15="#1b181b" //Base 07 - Bright White
const color16="#a65926" //Base 09
const color17="#cc33cc" //Base 0F
const color18="#d8cad8" //Base 01
const color19="#ab9bab" //Base 02
const color20="#776977" //Base 04
const color21="#292329" //Base 06
const color_foreground="#695d69" //Base 05
const color_background="#f7f3f7" //Base 00


/* RGB */
/*
$color1: rgba(160, 166, 181, 1); //white #a0a6b5
$color2: rgba(114, 79, 102, 1); //red #724f66
$color3: rgba(76, 85, 112, 1); //blue #4c5570
$color4: rgba(92, 117, 27, 1); //green #5c751b
$color5: rgba(33, 32, 27, 1);*/ //black #21201b
