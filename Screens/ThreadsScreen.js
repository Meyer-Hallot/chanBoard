import ThreadPost from "../components/ThreadPost";
import {ScrollView} from "react-native";
import React, {Fragment, Component} from 'react';

export default class ThreadsScreen extends Component{

    constructor(props){
        super(props);
        console.log("App constructor run");
        this.state = {
            threads:[
                {"posts": [{
                        "no": 0,
                        "now": "date",
                        "name": "Anonymous",
                        "com": "post text",
                        "filename": "filename",
                        "ext": ".png",
                        "w": 600,
                        "h": 842,
                        "tn_w": 178,
                        "tn_h": 250,
                        "tim": 1564523482819,
                        "time": 156452348,
                        "md5": "md5 hash",
                        "fsize": 145362,
                        "resto": 0,
                        "bumplimit": 0,
                        "imagelimit": 0,
                        "semantic_url": "give-me-a-reason-not-to-end-it-all",
                        "replies": 11,
                        "images": 0,
                        "omitted_posts": 6,
                        "omitted_images": 0}]
                }
            ], inactiveView: []
        };
        this.handleOnPress = this.handleOnPress.bind(this);
        const {navigation} = this.props;
        this.boardName = navigation.getParam('boardName');
    }

    handleOnPress(threadNumber){
        this.props.navigation.navigate('PostScreen',{threadNumber});
    }

    componentDidMount(): void {
        console.log(`https://a.4cdn.org${this.boardName}1.json`);
        fetch(`https://a.4cdn.org${this.boardName}1.json`)
            .then((responce) => responce.json())
            .then((responceJson) =>
            {
                console.log(responceJson);
                this.setState({threads:responceJson.threads});
            }).catch((error) => {
            console.error(error);
        });
    }

    render(){
        let threadArray = (this.state.threads).map((el) => {
                    console.log(el);
                    return <ThreadPost
                        postbody={el.posts[0].com}
                        postTitle={el.posts[0].sub}
                        screenName={el.posts[0].name}
                        imageFileName={el.posts[0].tim}
                        thumbnailWidth={el.posts[0].tn_w}
                        thumbnailHeight={el.posts[0].tn_h}
                        threadNumber={el.posts[0].no}
                        replies={el.posts[0].replies}
                        images={el.posts[0].images}
                        board={this.boardName}
                        onPress={this.handleOnPress}
                    />
                }
            );
        return (
            //style={App.styles.MainContainer}
            <Fragment>
                <ScrollView style={{backgroundColor:"#f7f3f7"}}>
                    {threadArray}
                </ScrollView>
            </Fragment>
        );
    }
}