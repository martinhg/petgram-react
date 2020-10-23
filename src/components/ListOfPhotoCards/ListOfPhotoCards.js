import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import PhotoCard from '../PhotoCard/PhotoCard';
import { getPhotos } from '../../hoc/getPhotos';



const ListOfPhotoCards = ({ categoryId }) => {
    const { loading, error, data = { photos: [] } } = useQuery(getPhotos, { variables: { categoryId: categoryId }})
    if (loading) return '';

    return (
        <ul>
            {
                data.photos.map( photo => <PhotoCard key={ photo.id } { ...photo } />)
            }
        </ul>
    );
};

export default ListOfPhotoCards;
