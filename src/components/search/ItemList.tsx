import React, { FC } from 'react';
import { ApolloError } from '@apollo/client';
import { DataRockets, DataShips, EFilterCategoriesAll, Rocket, Ship } from '../../types/types';

import LoadingSpinner from '../LoadingSpinner';
import ErrorMessage from '../ErrorMessage';
import Item from './Item';

type ItemListProps = {
  data: DataRockets & DataShips;
  error: ApolloError;
  loading: boolean;
  category: EFilterCategoriesAll;
};

const ItemList: FC<ItemListProps> = ({ data, error, loading, category }) => {
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage />;

  return (
    <div className="item-list">
      {data[category]?.map((item: Ship | Rocket) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
