import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View, TouchableNativeFeedback, TouchableHighlight} from 'react-native';

export default class BoardListElement extends Component{
    constructor(props){
        super(props);
        this.handleOnPress = this.handleOnPress.bind(this);
    }

    handleOnPress(){
        let boardName=this.props.boardName;
        console.log(boardName);
        this.props.onPress(boardName);
    }


    render(){
        return(
            <TouchableNativeFeedback
                onPress={() => this.handleOnPress()}
                background={TouchableNativeFeedback.SelectableBackground()}
            >
            <View>
                <Text>{this.props.boardName}</Text>
                <Text>{this.props.boardDescription}</Text>
            </View>
            </TouchableNativeFeedback>
        );
    }

}