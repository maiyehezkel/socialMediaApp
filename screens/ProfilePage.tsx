import { FC, useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableHighlight, ScrollView } from "react-native";
import ActivityIndicator from "./../components/custom_activity_indicator"
import {getAllPosts, Post} from "../models/post_Model";

const PostListRow: FC<{ post: Post, onItemClick: (id:String)=>void }> = ({ post, onItemClick }) => {
    return (
        <ScrollView>
        <TouchableHighlight onPress={()=>{onItemClick(post.id)}}>
            <View style={styles.list_row_container}>
                { <Image source={require("../assets/avatar.png")} style={styles.list_row_image}></Image>}
                <View style={styles.list_row_text_container}>
                    <Text style={styles.list_row_id}>{post.id}</Text>
                    <Text style={styles.list_row_name}>{post.name}</Text>

                </View>
            </View>
        </TouchableHighlight>
        </ScrollView>
    )
}


const Home: FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    const [data, setData] = useState<Array<Post>>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const openDetails = (id:String)=>{
        console.log("on press " + id)
    }

    useEffect(()=>{
        navigation.addListener('focus',()=>{
            reloadData()
        })
    },[navigation])

    const reloadData = async ()=>{
        setIsLoading(true)
        const postData = await getAllPosts()
        setData(postData)
        setIsLoading(false)
    }

    return (
        <View style={styles.home_container}>
            <FlatList
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

function onItemClick(id: any) {
    throw new Error("Function not implemented.")
}
