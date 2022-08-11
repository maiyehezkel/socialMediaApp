
import { StatusBar } from "expo-status-bar";
import { FunctionComponent,SetStateAction,useEffect, useState } from "react";
import styled from "styled-components/native";
import { container } from "../components/shared";
import { Button, TextInput,Text, View, StyleSheet, TouchableHighlight } from "react-native";





const WelcomeContainer = styled(container)`
  background-color:#2c365a;
  justify-content:space-between;
  height: 100%
  width: 100%
`;

const TopSection = styled.View`
    width:100%;
    flex:1;
    max-height: 32%;
`;

const TopImage = styled.Image`
    height: 100%;
    width: 100%; 
    resize-mode: stretch;   
`;

const BottomSection = styled.View`
    width:100%;
    flex: 1;
    padding:25px;
`;
const BigText = styled.Text`
    font-size: 37px;
    color: white;
    text-align: left;
    width: 70%;
    marginBottom: 15px;
    font-family: Lato-Bold;

`;
const SmallText = styled.Text`
    font-size: 15px;
    color: grey;
    text-align: left;
    width: 70%;
    marginBottom: 25px;
    font-family: Lato-Regular;

`;
const RegularText = styled.Text`
    font-size: 17px;
    color: white;
    text-align: left;
    font-family: Lato-Bold;
`;
const StyledForm = styled.View`
    width: 90%;
`;
const StyledInputLabel = styled.Text`
    color:white;
    font-size:13px;
    text-align:left;
    font-family: Lato-Regular;
`;
const StyledButton = styled.TouchableOpacity`
    padding:10px;
    background-color: white;
    justify-content: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 45px;
    align-items: center;

    ${(props) => props.google == true && `
        flex-direction: row;
        justify-content: center;
    `}
    ${(props) => props.signup == true && `
      margin-top:-13px;
      background-color:transparent;  
    `}
`;

const ButtonText = styled.Text`
    color: #2c365a;
    font-size: 16px;
    font-weight: bold; 
    font-family: Lato-Bold;

    ${(props) => props.google == true && `
    margin-left:10px;
    `}
    ${(props) => props.signup == true && `
    color:#85c6d8;
    font-family: Lato-Regular;
    

    `}
`;

const MsgBox = styled.Text`
    text-align: center;
    font-size: 12px;
    color: white;
    font-weight: bold;

`;
const Line = styled.View`
    height: 1px;
    width: 100%
    margin-vertical: 7px;
    background-color: grey;
`;
const ExtraText = styled.Text`
    font-family: Lato-Regular;
    font-size:13px;
    color:white;
    text-align: center;
`;
const Avatar = styled.Image`
    width:100px;
    height:100px;
    margin:auto;
    border-radios: 50px;
    border-width: 2px;
    border-color: black;
    margin-bottom: 10px;
    margin-top:10px;
`;
const WelcomeImage = styled.Image`
    height: 50%;
    min-width:100%;
`;
const styles = StyleSheet.create({
    inputMessage: {
        padding: 1,
        borderBottomColor: 'black',
        height: 30,
        borderBottomWidth: 3,
        marginBottom:10
    },
    inputName: {
        padding: 1,
        width:120,
        borderBottomColor: 'black',
        height: 30,
        borderBottomWidth: 3,
        marginBottom:40
    },
    activity_indicator:{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",      
        position: "absolute"
    },
    button: {
        margin: 12,
        borderRadius: 5
    },
    button_text: {
        fontSize: 30,
        color: 'white',
        textAlign: "center",
        marginTop: 3,
        marginBottom: 3,
    },
  });





import backGround from "./../assets/background_v1.png";
import { ScrollView } from "react-native-gesture-handler";
import { User,loginUser} from "../models/user_Model";
import ActivityIndicator from "../components/custom_activity_indicator";
import * as Google from 'expo-google-app-auth';

import {addPosts, Post} from "../models/post_Model";

const AddPost: FunctionComponent = ({navigation}:any) => {
    const [message, setMessage] = useState<String>("")
    const [name, setname] = useState<String>("")

    const onSave = async () => {
        var post: Post = {
            id: name,
            name: message
        }
        await addPosts(post)
        navigation.goBack()
    }
    return(
        <>

            <StatusBar style="light"/>

            <WelcomeContainer>
                <BottomSection>
                    <BigText>
                    Add new post
                    </BigText>
                    <SmallText>
                    MeetMe allows you to share with your friends
                    </SmallText>
                    <TextInput 
                    style={styles.inputName}
                    onChangeText={setname}
                    placeholder="Your Username"
                    >
                    </TextInput>
                    <TextInput 
                    style={styles.inputMessage}
                    onChangeText={setMessage}
                    placeholder="What are you think about..."
                    >
                    </TextInput>
                    <TouchableHighlight
                        onPress={onSave}
                        style={styles.button}>
                        <Text style={styles.button_text}>Post</Text>
                    </TouchableHighlight>
                         
                </BottomSection>
                
            </WelcomeContainer>
          
        </>
    );

}

export default AddPost;
