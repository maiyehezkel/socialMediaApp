import { StatusBar } from "expo-status-bar";
import { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Formik } from "formik";
import { container } from "../components/shared";
import { TextInput, View, StyleSheet } from "react-native";
import { User, addUser } from "../models/user_Model"



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
    activity_indicator:{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",      
        position: "absolute"
    }
  });





import backGround from "./../assets/background_v1.png";
import ActivityIndicator from "../components/custom_activity_indicator";

const SignUp: FunctionComponent = ({navigation}:any) => {
    const [email, setEmail] = useState<String>("")
    const [password, setpassword] = useState<String>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [fullName,setFullname] = useState<String>("")
    const [message, setMessage] = useState<String>("")
    const onSave = async () => {
        setIsLoading(true)
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex)&&email.length>11) {
            if(password.length>8){
                var user: User = {
                    email: email,
                    password: password,
                    fullName: fullName
                }
                await addUser(user)
                console.log()
                navigation.navigate('Welcome')
            } else {setMessage('Password must be longer than 8 charcters')}
        } else {setMessage('Invalid email')}
        setIsLoading(false)
    }
    useEffect(() => {
        if (email&&password&&fullName) {
            console.log(email,password,fullName)
            onSave()
        }
      }, [email,password,fullName])

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
                        setFullname(values.fullName)
                        setEmail(values.email)
                        setpassword(values.password)
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
                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>
                                        Sign Up
                                    </ButtonText>
                                </StyledButton>
                                <View style={styles.activity_indicator}>
                                   <ActivityIndicator visible={isLoading}></ActivityIndicator>
                               </View>
                               <MsgBox>{message}</MsgBox>
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