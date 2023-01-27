import React from 'react';
import { Divider } from 'semantic-ui-react';
import {DataTable} from './index';

const ResultData = ({cityOneData, cityTwoData, cityOneName, cityTwoName}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        
      }}>
      <DataTable data={cityOneData} cityName={cityOneName} />
      <DataTable data={cityTwoData} cityName={cityTwoName} />
      <Divider />
    </div>
  );
};

export default ResultData;
