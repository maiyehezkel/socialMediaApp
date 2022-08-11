import { StatusBar } from "expo-status-bar";
import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { container } from "../components/shared";
import { Text, StyleSheet } from "react-native";
import { Entypo} from "@expo/vector-icons"
import * as ImagePicker from 'expo-image-picker';
import  { useState, useEffect } from 'react';



const WelcomeContainer = styled(container)`
  background-color:#2c365a;
  justify-content:space-between;
  height: 100%
  width: 100%
`;
const Avatar = styled.Image`
    width:100px;
    height:100px;
    margin:auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: black;
    margin-bottom: 20px;
    margin-top:20px;
    background-color:white;
`;
const WelcomeImage = styled.Image`
    height: 50%;
    min-width:100%;
`;
const TopSection = styled.View`
    width:100%;
    flex:1;
    max-height: 32%;
    ${(props) => props.welcome == true && `
    align-items:center;
    `}
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
    margin-top:-15px;
    font-family: Lato-Bold;
    ${(props) => props.welcome == true && `
    font-size:30px;




  `}
`;
const SmallText = styled.Text`
    font-size: 15px;
    color: grey;
    text-align: left;
    width: 70%;
    margin-bottom: 25px;
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
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 45px;


    ${(props) => props.google == true && `
        flex-direction: row;
    `}
    ${(props) => props.signup == true && `
      margin-top:-13px;
      background-color:transparent;  
    `}
    ${(props) => props.upload == true && `
     padding:5px;
      width:37%;
      align-self:center;
      align-items: center;
      justify-content: center;
      height: 30px;
      margin-top:-10px;

  `}
    ${(props) => props.edit == true && `
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
    ${(props) => props.upload == true && `
    font-size:12px;
    font-family: Lato-Regular;

    `}
`;
const Row = styled.View`
    flex-direction: row;
    justify-content:center;
    align-items:center;
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
    ${(props) => props.welcome == true && `
    margin-bottom:10px;
    margin-top:5px;
    font-size:18px;
    color: #ef835d;
    font-weight:bold;
    flex-direction: row;
    `}

`;


const styles = StyleSheet.create({
    input: {
        padding: 1,
        borderBottomColor: 'black',
        height: 25,
        borderBottomWidth: 2,
        marginBottom:10
    },
  });





import backGround from "./../assets/background_v1.png";
import { processFontFamily } from "expo-font";


interface MyFormValues {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

const Welcome: FunctionComponent = ({navigation}:any) => {
    const [hasGalleryPermission, setHasGalleryPremission] = useState<any | null>(null);
    const [image, setImage] = useState<any | null>(null);

    useEffect(()=>{
        (async () =>{
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPremission(galleryStatus.status === 'granted')
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality:1,
        });

        console.log(result);

        if(!result.cancelled){
            setImage(result.uri)
        }

        if(hasGalleryPermission === false){
            return <Text> No access</Text>
        }
    }

    const editName = async () => {
        return<> <StyledInputLabel>Full Name </StyledInputLabel>
        </>
    }
    return(
        <>
            <StatusBar style="light"/>
            <WelcomeContainer>
                <TopSection welcome={true}>
                    <TopImage source={backGround}/>
                    <BigText welcome={true}>Welcome to MeetMe</BigText>
                </TopSection>
                
                <BottomSection>
                    <Row>
                    <ExtraText welcome={true}>Mai Yehezkel</ExtraText>
                    <StyledButton edit={true} onPress={()=>editName()}>
                    <Entypo name="edit" color={'white'}size={15}/></StyledButton>
                    </Row>
                    <ExtraText>MaiYehezkel@gmail.com</ExtraText>

                    <Avatar resizeMode="cover" source={{uri:image}}></Avatar>
                    <StyledButton upload={true}><ButtonText onPress={()=>pickImage()} upload={true}>Choose profile picture</ButtonText></StyledButton>
                    <Line/>
                    <StyledButton onPress={()=>navigation.navigate('SignIn')}>
                        <ButtonText>
                            Logout
                        </ButtonText>
                    </StyledButton>
                </BottomSection>
            </WelcomeContainer>
        </>
    );

}

export default Welcome;