import React, { FC } from 'react';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { useGetAllRockets } from '../../graphql/hooks/use-get-all-rockets';
import { useGetAllShips } from '../../graphql/hooks/use-get-all-ships';
import { EFilterCategoriesAll } from '../../types/types';

import ItemList from '../../components/search/ItemList';


const ItemListContainer: FC = () => {
  const category: EFilterCategoriesAll = useTypedSelector((state) => state.filter.category);

  const getItems = (category: string, useGetAllShips: any, useGetAllRockets: any) => {
    switch (category) {
      case 'ships': {
        return useGetAllShips();
      }
      case 'rockets': {
        return useGetAllRockets();
      }
      default:
        console.log('error in ItemListContainer');
    }
  };

  const { data, error, loading } = getItems(category, useGetAllShips, useGetAllRockets);

  return <ItemList data={data} error={error} loading={loading} category={category} />;
};
export default ItemListContainer;
