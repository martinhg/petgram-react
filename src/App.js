import React, { Fragment } from 'react';

import { GlobalStyle } from './assets/styles/GlobalStyles';
import ListOfCategories from './components/ListOfCategories/ListOfCategories';
import ListOfPhotoCards from './components/ListOfPhotoCards/ListOfPhotoCards';
import Logo from './components/Logo/Logo';
import PhotoCardWithQuery from './container/PhotoCardWithQuery';

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Fragment>
              <ListOfCategories />
              <ListOfPhotoCards categoryId={2}/>
            </Fragment> 
      }
    </div>
  );
};

export default App;
