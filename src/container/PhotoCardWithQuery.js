import React from 'react';

import PhotoCard from '../components/PhotoCard/PhotoCard';

import { gql } from '@apollo/client';
import { Query } from "react-apollo"

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

const renderProp = ({ loading, error, data }) => {
    if (loading) return <p>Cargando..</p>;
    if (error) return <p>Error..</p>;
    
    const { photo = {} } = data
    return <PhotoCard {...photo} />
  }

const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    { renderProp }
  </Query>
);

export default PhotoCardWithQuery;
