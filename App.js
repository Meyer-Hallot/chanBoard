import React, {Fragment, Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar,} from 'react-native';
import {Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import ThreadsScreen from "./Screens/ThreadsScreen";
import PostScreen from "./Screens/PostScreen";
import BoardSelectScreen from "./Screens/BoardSelectScreen";


const AppNavigator = createStackNavigator(
  {
    Threads: ThreadsScreen,
    PostScreen: PostScreen,
    Boards: BoardSelectScreen,
    },
  {
    initialRouteName:"Boards"
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{

  constructor(props){
    super(props);
    console.log("App constructor run")
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



  requestThread(threadNumber){
    console.log("thread: " + threadNumber + " clicked")
    fetch("https://a.4cdn.org/lgbt/thread/"+threadNumber+".json")
        .then((responce) => responce.json())
        .then((responceJson) =>
        {
          console.log(responceJson);
          /*this.setState({
            inactiveView:this.state.threads,
            threads:[responceJson]});*/
        }).catch((error) => {
      console.error(error);
    });
  }
  render(){
    return(
        <AppContainer/>
    )
  }

};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  MainContainer: {

        flex: 1,


// Set hex color code here.
    backgroundColor: '#695d69',

  },
});