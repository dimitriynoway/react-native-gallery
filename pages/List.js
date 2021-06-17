import React from 'react';
import { FlatList, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import Item from '../components/Item';
import useFetching from '../functions/useFetching';
import fetch from '../store/actions/fetchThunk';
import { PADDING } from '../theme';

import ItemHoc from '../HOC/itemhoc';

const Test = ItemHoc(Item);

export default function List({ navigation }) {
    const store = useSelector((state) => state.data.store);
    useFetching(fetch);

    return (
        <FlatList
            data={store}
            contentContainerStyle={{
                paddingTop: StatusBar.currentHeight || 42,
                padding: PADDING / 2
            }}
            renderItem={({ item, index }) => (
                <Test item={item} index={index} navigation={navigation} />
            )}
            keyExtractor={(item) => item.user.id}
        />
    );
}
