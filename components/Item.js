import React, { useRef, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Animated,
    TouchableOpacity
} from 'react-native';
import { SharedElement } from 'react-native-shared-element';
import { PADDING, SMALL_IMG } from '../theme';

const Item = ({
    title,
    smallImg,
    author,
    index,
    navigation,
    fullImg,
    regularImg
}) => {
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 300,
            delay: index * 150,
            useNativeDriver: true
        }).start();
    }, []);

    const opacity = {
        opacity: animatedValue
    };

    return (
        <Animated.View style={[styles.item, opacity]}>
            <TouchableOpacity
                onPress={() =>
                    navigation.push('Photo', {
                        index,
                        fullImg,
                        smallImg,
                        regularImg
                    })
                }>
                <SharedElement id={`photo.${index}`}>
                    <Image source={{ uri: smallImg }} style={styles.image} />
                </SharedElement>
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>
                    {author}
                </Text>
                <Text style={{ fontSize: 14 }}>{title}</Text>
            </View>
        </Animated.View>
    );
};
const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        padding: PADDING / 4,
        marginBottom: PADDING / 4,
        backgroundColor: '#ffd7ba', //#dee2e6
        borderRadius: 12,
        shadowColor: '#dee2e6',
        shadowOffset: {
            width: 3,
            height: 6
        },
        shadowOpacity: 0.6,
        shadowRadius: 20
    },
    title: {
        fontSize: 32
    },
    image: {
        width: SMALL_IMG,
        height: SMALL_IMG,
        borderRadius: SMALL_IMG / 3,
        marginRight: PADDING / 3
    },
    textContainer: {
        width: 230
    }
});

export default Item;
