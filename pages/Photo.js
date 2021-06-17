import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

function Photo({ navigation, route }) {
    const { fullImg, smallImg, regularImg } = route.params;
    let img;
    regularImg
        ? (img = regularImg)
        : smallImg
        ? (img = smallImg)
        : (img = fullImg); //if not all images have been gotten from api
    return (
        <View style={styles.container}>
            <Image source={{ uri: img }} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: 'cover'
    }
});

Photo.sharedElements = (route) => {
    const { index } = route.params;
    return [`photo.${index}`];
};

export default Photo;
