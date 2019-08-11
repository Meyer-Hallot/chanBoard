import React, {Component} from 'react';
import {Image, Text, View, TouchableHighlight, StyleSheet} from "react-native";
import {WebView} from "react-native-webview";
import PostBodyComponent from "./PostBodyComponent";

export default class ReplyPost extends Component{

    constructor(props){
        super(props);

    }


    render(){
        const tn_w = this.props.thumbnailWidth/2;
        const tn_h = this.props.thumbnailHeight/2;
        console.log(this.props.threadNumber);
        return(
                <View style={{flex: 1,flexDirection: 'column',height:'auto'}}>
                    <View style={style.threadContainer}>
                        {this.props.imageFileName &&
                            <Image style={style.threadPic} source={{uri: 'https://i.4cdn.org/'+this.props.board+'/'+this.props.imageFileName+'s.jpg'}} style={{width:tn_w, height:tn_h, backgroundColor:'#724f66'}}/>
                        }
                        <View style={style.textContainer}>
                            <Text style={style.screenNameAndPostNum} >{this.props.screenName }   {this.props.threadNumber}</Text>
                            <Text style={style.threadTittle} >{this.props.postTitle}</Text>
                            <WebView textZoom={300} style={style.postBody} originWhitelist={['*']} source={{html: `${this.props.postbody}`}}/>
                            <PostBodyComponent postbody={this.props.postbody}/>
                        </View>
                    </View>
                    <Text>Replies: {this.props.replies} Images: {this.props.images}</Text>
                </View>
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
