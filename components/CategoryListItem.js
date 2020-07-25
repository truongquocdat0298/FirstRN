import React from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native'

export default function CategoryListItem(props) {
    return (
        <View style={style.container}> 
           <Text style={style.title}>{props.title}</Text>
           <Image source={props.imageUri} style={style.categoryImage}></Image> 
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        alignItems: "center",
        backgroundColor: '#FFF',

        padding: 16,
        borderRadius: 4,
        marginBottom: 16,

        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        },
        elevation: 2,
       
    },
    categoryImage: {
        width: 64,
        height: 64,
    },
    title: {
        textTransform: "uppercase",
        fontSize: 18,
        fontWeight: "700",

        marginBottom: 2
    }
})


