import ThreadPost from "../components/ThreadPost";
import {ScrollView} from "react-native";
import React, {Fragment, Component} from 'react';
import ReplyPost from "../components/ReplyPost";

export default class PostScreen extends Component{

    constructor(props){
        super(props);
        console.log("Post constructor run");
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
    }

    handleOnPress(threadNumber){
        this.requestThread(threadNumber);
    }



    componentDidMount(){
        const {navigation} = this.props;
        threadNumber = navigation.getParam('threadNumber');
        console.log("thread: " + threadNumber + " clicked");
        fetch("https://a.4cdn.org/lgbt/thread/"+threadNumber+".json")
            .then((responce) => responce.json())
            .then((responceJson) =>
            {
                console.log(responceJson);
                this.setState({
                  inactiveView:this.state.threads,
                  threads:[responceJson]});
            }).catch((error) => {
            console.error(error);
        });
    }

    render(){
        const threadArray = (this.state.threads[0].posts).map((el) => {
            console.log(el);
            console.log(el.com);
            return <ReplyPost
                postbody={el.com}
                postTitle={el.sub}
                screenName={el.name}
                imageFileName={el.tim}
                thumbnailWidth={el.tn_w}
                thumbnailHeight={el.tn_h}
                threadNumber={el.no}
                board={'lgbt'}
            />
        });
        return (
            // style={styles.MainContainer}
            <Fragment>
                <ScrollView>
                    {threadArray}
                </ScrollView>
            </Fragment>
        );
    }
}