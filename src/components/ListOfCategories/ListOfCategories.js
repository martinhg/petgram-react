import React, { useState, useEffect, Fragment } from 'react';

import { List, Item } from './styles';
import Category from '../Category/Category';
// import { categories as mockCategories } from '../../api/db.json';

const useCategoriesData = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(function () {
        setLoading(true);
        window.fetch('https://petgram-server-24iykciv5.now.sh/categories')
            .then(res => res.json())
            .then( response => {
                setCategories(response)
                setLoading(false)
            });
    }, []);

    return { categories, loading };
}


const ListOfCategories = () => {
    const { categories, loading } = useCategoriesData();
    const [showFixed, setShowFixed] = useState(false);

    

    useEffect(function () {
        const onScroll= ( event ) => {
            const newShowFixed= window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed);
        }

        document.addEventListener('scroll', onScroll);

        return () => document.removeEventListener('scroll', onScroll);
    }, [showFixed]);

    const renderList = (fixed) => (
        <List fixed = {fixed}>
            {
                loading ? 
                <Item key='loading'><Category /></Item>
                :
                categories.map( category =>
                    <Item key={ category.id }>
                        <Category {...category}/>
                    </Item>
                )
            }
        </List>
    );

    return (
        <Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    );
};

export default ListOfCategories;
