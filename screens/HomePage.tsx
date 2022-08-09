import { StatusBar } from "expo-status-bar";
import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Field, Form, Formik } from "formik";
import { container } from "../components/shared";
import { Button, TextInput, View, StyleSheet } from "react-native";
import { GoogleLoginButton } from 'ts-react-google-login-component';
import { Entypo} from "@expo/vector-icons"


const WelcomeContainer = styled(container)`
  background-color:black;
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
`;
const WelcomeImage = styled.Image`
    height: 50%;
    min-width:100%;
`;
const TopSection = styled.View`
    width:100%;
    flex:1;
    max-height: 100%;
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
      width: 50%;
      height: 30px;
      margin-top:-15px;
      margin-left:90px;
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





import backGround from "./../assets/background_transparent.png";


interface MyFormValues {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

const HomePage: FunctionComponent = ({navigation}:any) => {
    const initialValues: MyFormValues = { fullName:'', email: '', password:'', confirmPassword:'' };
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
                    <StyledButton edit={true}>
                    <Entypo name="edit" color={'white'}size={15}/></StyledButton>
                    </Row>
                    <ExtraText>MaiYehezkel@gmail.com</ExtraText>

                    <Avatar resizeMode="cover" source={require('./../assets/pawel-czerwinski-OG44d93iNJk-unsplash.jpg')}></Avatar>
                    <StyledButton upload={true}><ButtonText upload={true}>Choose profile picture</ButtonText></StyledButton>
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

export default HomePage;