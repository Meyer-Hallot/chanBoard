import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View,TouchableNativeFeedback } from 'react-native';
import BoardListElement from "../components/BoardListElement";

export default class BoardSelectScreen extends Component{
    constructor(props){
        super(props);
        this.handleOnPress = this.handleOnPress.bind(this);
    }

    handleOnPress(boardName){
        console.log(`board name: ${boardName}`);
        this.props.navigation.navigate('Threads',{boardName});
    }

    renderRowItem({item}){
        return(<BoardListElement boardName={item.boardName} boardDescription={item.boardDescription} onPress={(boardName) => {this.handleOnPress(boardName)}}/>);
    }

    render(){
        return(
            <View>
            <FlatList
                data={[
                    {boardName:"/a/", boardDescription:"Anime and Manga",},
                    {boardName:"/c/", boardDescription:"Anime/Cute",},
                    {boardName:"/w/", boardDescription:"Anime/Wallpapers",},
                    {boardName:"/m/", boardDescription:"Mecha",},
                    {boardName:"/cgl/", boardDescription:"Cosplay and EGL",},
                    {boardName:"/cm/", boardDescription:"Cute/Male",},
                    {boardName:"/f/", boardDescription:"Flash",},
                    {boardName:"/n/", boardDescription:"Transportation",},
                    {boardName:"/jp/", boardDescription:"Otaku Culture",},
                    {boardName:"/vp/", boardDescription:"Pokemon",},
                    {boardName:"/v/", boardDescription:"Video Games",},
                    {boardName:"/vg/", boardDescription:"Video Game Generals",},
                    {boardName:"/vr/", boardDescription:"Retro Games",},
                    {boardName:"/co/", boardDescription:"Comics & Cartoons",},
                    {boardName:"/g/", boardDescription:"Technology",},
                    {boardName:"/tv/", boardDescription:"Television & Film",},
                    {boardName:"/k/", boardDescription:"Weapons",},
                    {boardName:"/o/", boardDescription:"Auto",},
                    {boardName:"/an/", boardDescription:"Animals & Nature",},
                    {boardName:"/tg/", boardDescription:"Traditional Games",},
                    {boardName:"/sp/", boardDescription:"Sports",},
                    {boardName:"/asp/", boardDescription:"Alternative Sports",},
                    {boardName:"/sci/", boardDescription:"Science & Math",},
                    {boardName:"/int/", boardDescription:"International",},
                    {boardName:"/out/", boardDescription:"Outdoors",},
                    {boardName:"/toy/", boardDescription:"Toys",},
                    {boardName:"/biz/", boardDescription:"Business & Finance",},
                    {boardName:"/i/", boardDescription:"Oekaki",},
                    {boardName:"/po/", boardDescription:"Papercraft & Origami",},
                    {boardName:"/p/", boardDescription:"Photography",},
                    {boardName:"/ck/", boardDescription:"Food & Cooking",},
                    {boardName:"/ic/", boardDescription:"Artwork/Critique",},
                    {boardName:"/wg/", boardDescription:"Wallpapers/General",},
                    {boardName:"/mu/", boardDescription:"Music",},
                    {boardName:"/fa/", boardDescription:"Fashion",},
                    {boardName:"/3/", boardDescription:"3DCG",},
                    {boardName:"/gd/", boardDescription:"Graphic Design",},
                    {boardName:"/diy/", boardDescription:"Do-It-Yourself",},
                    {boardName:"/wsg/", boardDescription:"Worksafe GIF",},
                    {boardName:"/s/", boardDescription:"Beautiful Women",},
                    {boardName:"/hc/", boardDescription:"Hardcore",},
                    {boardName:"/hm/", boardDescription:"Handsome Men",},
                    {boardName:"/h/", boardDescription:"Hentai",},
                    {boardName:"/e/", boardDescription:"Ecchi",},
                    {boardName:"/u/", boardDescription:"Yuri",},
                    {boardName:"/d/", boardDescription:"Hentai/Alternative",},
                    {boardName:"/y/", boardDescription:"Yaoi",},
                    {boardName:"/t/", boardDescription:"Torrents",},
                    {boardName:"/hr/", boardDescription:"High Resolution",},
                    {boardName:"/gif/", boardDescription:"Adult GIF",},
                    {boardName:"/trv/", boardDescription:"Travel",},
                    {boardName:"/fit/", boardDescription:"Fitness",},
                    {boardName:"/x/", boardDescription:"Paranormal",},
                    {boardName:"/lit/", boardDescription:"Literature",},
                    {boardName:"/adv/", boardDescription:"Advice",},
                    {boardName:"/lgbt/", boardDescription:"LGBT",},
                    {boardName:"/mlp/", boardDescription:"Pony",},
                    {boardName:"/b/", boardDescription:" Random",},
                    {boardName:"/r/", boardDescription:"Request",},
                    {boardName:"/r9k/", boardDescription:"ROBOT9001",},
                    {boardName:"/pol/", boardDescription:"Politically Incorrect",},
                    {boardName:"/soc/", boardDescription:"Cams & Meetups",},
                    {boardName:"/s4s/", boardDescription:"Shit 4chan Says",},
                ]}
                renderItem={this.renderRowItem.bind(this)}
            />
            </View>
        );
    }
}