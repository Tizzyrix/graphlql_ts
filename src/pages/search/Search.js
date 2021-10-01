import React from 'react'

import Filter from '../../components/search/Filter'
import ItemList from '../../components/search/ItemList'

const Search = () => {
    return(
        <div className='Search'>
            <Filter />
            <ItemList />
        </div>
    )
}

export default Search;