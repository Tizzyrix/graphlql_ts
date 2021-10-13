import React, { FC } from 'react';

import Filter from '../../components/search/Filter';
import ItemListContainer from '../../containers/search/ItemListContainer';

const Search: FC = () => {
  return (
    <div className="Search">
      <Filter />
      <ItemListContainer />
    </div>
  );
};

export default Search;
