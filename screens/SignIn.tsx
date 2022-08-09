import { StatusBar } from "expo-status-bar";
import { FunctionComponent,useEffect, useState } from "react";
import styled from "styled-components/native";
import { Field, Form, Formik } from "formik";
import { container } from "../components/shared";
import { Button, TextInput, View, StyleSheet } from "react-native";
import { GoogleLoginButton } from 'ts-react-google-login-component';
import { Fontisto} from "@expo/vector-icons"


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
    input: {
        padding: 1,
        borderBottomColor: 'black',
        height: 25,
        borderBottomWidth: 2,
        marginBottom:10
    },
    activity_indicator:{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",      
        position: "absolute"
    }
  });





import backGround from "./../assets/background_v1.png";
import { ScrollView } from "react-native-gesture-handler";
import { User,loginUser} from "../models/user_Model";
import ActivityIndicator from "../components/custom_activity_indicator";



const SignIn: FunctionComponent = ({navigation}:any) => {
    const [email, setEmail] = useState<String>("")
    const [password, setpassword] = useState<String>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const onSave = async () => {
        setIsLoading(true)
        var user: User = {
            email: email,
            password: password
        }
        await loginUser(user)
        navigation.navigate('ProfilePage')
    }
    useEffect(() => {
        if (email&&password) {
            console.log(email,password)
            onSave()
        }
      }, [email,password])

    return(
        <>

            <StatusBar style="light"/>
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={backGround}/>
                </TopSection>

                <BottomSection>
                <ScrollView>
                    <BigText>
                    Welcome to MeetMe
                    </BigText>
                    <SmallText>
                    The best way to connect and share with the people in your life.
                    </SmallText>
                
                    <Formik
                    initialValues={{ email: '',password: '' }}
                    onSubmit={(values) => {
                        setEmail(values.email)
                        setpassword(values.password)
                    }}>
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <StyledForm>
                                <StyledInputLabel>Email </StyledInputLabel>
                                <TextInput
                                style={styles.input}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                />
                                <StyledInputLabel>Password</StyledInputLabel>
                                <TextInput
                                style={styles.input}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                secureTextEntry={true}
                                value={values.password}
                                />
                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>
                                        Login
                                    </ButtonText>
                                </StyledButton>
                                <View style={styles.activity_indicator}>
                                   <ActivityIndicator visible={isLoading}></ActivityIndicator>
                               </View>
                                <MsgBox>...</MsgBox>
                                
                                <Line/>
                                <StyledButton google={true} onPress={console.log("google")}>
                                    <Fontisto name="google" color={'#85c6d8'}size={25}/>
                                    <ButtonText google={true}>
                                        Sign in with Google
                                    </ButtonText>
                                </StyledButton>
                                <ExtraText>Don't have an account already?</ExtraText>
                                <StyledButton signup={true} onPress={()=>navigation.navigate('SignUp')}>
                                    <ButtonText signup={true}>
                                        Sign Up
                                    </ButtonText>
                                </StyledButton>
                               </StyledForm>
                                )}
                                
                                </Formik>     
                                </ScrollView>        
                </BottomSection>
                
            </WelcomeContainer>
        
        </>
    );

}

export default SignIn;

