import React from 'react';

import { Anchor, Image } from './styles';

const defaultImage = 'https://i.imgur.com/dJa0Hpl.jpg';

const Category = ({ cover = defaultImage, path, emoji = '?' }) => {
    return (
        <Anchor href={ path }>
            <Image src= { cover } />
            { emoji }
        </Anchor>
    );
};

export default Category;
