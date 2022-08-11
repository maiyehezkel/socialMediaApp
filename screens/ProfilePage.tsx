import { FC, useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableHighlight } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import {getAllPosts, Post} from "../models/post_Model";
import styled from "styled-components/native";


const StyledButton = styled.TouchableOpacity`
    padding:10px;
    background-color: white;
    justify-content: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 45px;
    align-items: center;
`;

const ButtonText = styled.Text`
    color: #2c365a;
    font-size: 16px;
    font-weight: bold; 
    font-family: Lato-Bold;
    
`;
const PostListRow: FC<{ post: Post, onItemClick: (id:String)=>void }> = ({ post, onItemClick }) => {
    return (
       
        <TouchableHighlight onPress={()=>{onItemClick(post.id)}}>
            <View style={styles.list_row_container}>
                { <Image source={require("../assets/avatar.png")} style={styles.list_row_image}></Image>}
                <View style={styles.list_row_text_container}>
                    <Text style={styles.list_row_id}>{post.id}</Text>
                    <Text style={styles.list_row_name}>{post.name}</Text>

                </View>
            </View>
        </TouchableHighlight>
    )
}


const Home: FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    const [data, setData] = useState<Array<Post>>()

    const openDetails = (id:String)=>{
        console.log("on press " + id)
    }

    useEffect(()=>{
        navigation.addListener('focus',()=>{
            reloadData()
        })
    },[navigation])

    const reloadData = async ()=>{
        const postData = await getAllPosts()
        setData(postData)
    }
    const newPost = ()=>{
        navigation.navigate('AddPost')
    }

    return (
        <View style={styles.home_container}>
      
            <StyledButton onPress={newPost}>
                <ButtonText >Add your Post</ButtonText>
            </StyledButton>
         
            <FlatList nestedScrollEnabled
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (<PostListRow post={item} 
                            onItemClick={openDetails} />)}
            ></FlatList>
    
        </View>
    )
}


const styles = StyleSheet.create({
    home_container: {
        marginTop:30,
        flex: 1
    },
    list_row_container: {
        height: 100,
        // width: "100%",
        // backgroundColor: "grey",
        flexDirection: "row",
        elevation: 4,
        borderRadius: 3,
        marginLeft: 8,
        marginRight: 8
    },
    list_row_image: {
        height: 50,
        width: 50,
        margin: 10,
        borderRadius: 15
    },
    list_row_text_container: {
        justifyContent: "center"
    },
    list_row_name: {
        fontSize: 20,
        marginBottom: 10
    },
    list_row_id: {
        fontSize: 25
    },
    activity_indicator:{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",      
        position: "absolute"
    }
})
export default Home


