import React from 'react';

const ItemHoc =
    (Component) =>
    ({ ...props }) => {
        const { item, index, navigation } = props;
        return (
            <Component
                {...props}
                smallImg={item.urls.small}
                title={item.alt_description}
                author={item.user.name}
                index={index}
                navigation={navigation}
                fullImg={item.urls.full}
                regularImg={item.urls.regular}
            />
        );
    };

export default ItemHoc;
