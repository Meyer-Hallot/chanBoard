//Post bodies are complicated so we have to put a good bit of effort into rendering them
/*
    Possible items to parse
    single >  quote
    >> post reply
    spoiler
    link
    <br> line break
    *text* italics
    **text** bold
    list
        * item
        * item
        * item
    Lines starting with 4 spaces are code
    super^script makes text after ^ look like exponent
    [flip] [/flip] flips text

*/


import React, {Component} from 'react'
import {Text, View, TouchableHighlight, StyleSheet} from "react-native";

export default class PostBodyComponent extends Component{

    constructor(props){
        super(props);
        this.formatedPostBody = [];
    }

    parsePostBody(postBody){
        quoteRegex=RegExp();
        quoteLinkRegex=RegExp();
        linkRegex=RegExp();
        results = [];
        while((results = quoteRegex.exec(postBody)) !==null){
            console.log(`Found ${results[0]}. Next starts at ${quoteRegex.lastIndex}.`);
            <Text>`Found ${results[0]}. Next starts at ${quoteRegex.lastIndex}.`</Text>
        }

    }


    oldparsePostBody(postBody){
        console.log('pee');
        let specialCharacters =
            [
                "<span class=\"quote\">",
                "<span class=\"quotelink\">",
               "http//",
               "https",
               "    ",
               "[spoiler]"
            ];
        let keyWordsRemain = true;
        let i = 0;
        let intrestArea = postBody || "";
        while(keyWordsRemain===true){
            let start=intrestArea.search('<span class=\"quote\">');
            console.log("start of intrest text" + start);
            let end = intrestArea.substring(start).search('</span>');
            console.log(end);
            this.formatedPostBody.push(<Text style={{color:'green'}}>{intrestArea.substring(start+20,start+end).replace('&gt;','>')}</Text>);
            keyWordsRemain = start!==-1 || end!==-1;
            console.log(keyWordsRemain);
            if(start!==-1){
                console.log("fug");
                console.log(intrestArea.substring(end+7));
            }else {
                intrestArea = intrestArea.substring(end+7);
            }
            i++;
            if(i===5){
                keyWordsRemain=false;
            }
        }
        console.log(this.formatedPostBody);
    }
    render(){
        this.parsePostBody(this.props.postbody);
        return(
            this.formatedPostBody
        )
    }

}

