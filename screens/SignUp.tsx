import { StatusBar } from "expo-status-bar";
import { FunctionComponent } from "react";
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

const SignUp: FunctionComponent = ({navigation}) => {
    const initialValues: MyFormValues = { fullName:'', email: '', password:'', confirmPassword:'' };
    return(
        <>
            <StatusBar style="light"/>
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={backGround}/>
                </TopSection>
                <BottomSection>
                    <BigText>
                    Join to MeetMe
                    </BigText>                
                    <Formik
                    initialValues={{ fullName:'', email: '',password: '',confirmPassword: '' }}
                    onSubmit={(values) => {
                        console.log(values)
                        navigation.navigate('Welcome')
                        }}>
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <StyledForm>
                                <StyledInputLabel>Full Name </StyledInputLabel>
                                <TextInput
                                style={styles.input}
                                onChangeText={handleChange('fullName')}
                                onBlur={handleBlur('fullName')}
                                value={values.fullName}
                                />
                                <StyledInputLabel>Email </StyledInputLabel>
                                <TextInput
                                style={styles.input}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                />
                                <StyledInputLabel>Password </StyledInputLabel>
                                <TextInput
                                style={styles.input}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                />
                                <StyledInputLabel>Confirm Password </StyledInputLabel>
                                <TextInput
                                style={styles.input}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value={values.confirmPassword}
                                />
                                <StyledButton onPress={()=>navigation.navigate('Welcome')}>
                                    <ButtonText>
                                        Sign Up
                                    </ButtonText>
                                </StyledButton>
                                <MsgBox>...</MsgBox>
                                <Line/>
                                <ExtraText>already have an account?</ExtraText>
                                <StyledButton signup={true} onPress={()=>navigation.navigate('SignIn')}>
                                    <ButtonText signup={true}>
                                        Sign in
                                    </ButtonText>
                                </StyledButton>
                               </StyledForm>
                                )}
                                
                                </Formik>             
                </BottomSection>
            </WelcomeContainer>
        </>
    );

}

export default SignUp;