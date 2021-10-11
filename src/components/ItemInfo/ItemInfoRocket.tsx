import React, { FC } from 'react';
import { dataRocket } from '../../graphql/hooks/use-get-rocket';

type ItemInfoRocketProps = {
  data: dataRocket;
};

const ItemInfoRocket: FC<ItemInfoRocketProps> = ({ data }) => {
  return (
    <>
      <div className="item-info_country">
        <span>{data.rocket.country}</span>
      </div>
      <div className="item-info_description">
        <span>{data.rocket.description}</span>
      </div>
      <div className="item-info_id">
        <span>{data.rocket.id}</span>
      </div>
      <div className="item-info_name">
        <span>{data.rocket.name}</span>
      </div>
      <div className="item-info_type">
        <span>{data.rocket.type}</span>
      </div>
      <div className="item-info_active">
        <span>{data.rocket.active}</span>
      </div>
    </>
  );
};

export default ItemInfoRocket;
