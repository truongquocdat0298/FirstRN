import React from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native'

export default function CategoryListItem(props) {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={(event => {
            Alert.alert( "Alert Title",
            "My Alert Msg",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false });
        })}>
            <View style={style.container}>
                <Text style={style.title}>{props.title}</Text>
                <Image source={props.imageUri} style={style.categoryImage}></Image>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
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


