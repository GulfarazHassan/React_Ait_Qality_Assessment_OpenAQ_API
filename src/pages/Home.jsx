import React, {useState} from 'react';
import {Divider} from 'semantic-ui-react';
import {InputForm, ResultData} from '../components';

const Home = () => {
  const [cityOneData, setCityOneData] = useState([]);
  const [cityTwoData, setCityTwoData] = useState([]);
  const [cityOneName, setCityOneName] = useState('');
  const [cityTwoname, setCityTwoName] = useState('');
  const [showData, setSHowData] = useState(false);

  const setData = (cityOneD, cityTwoD, cityOneN, cityTwoN) => {
    setCityOneData(cityOneD);
    setCityTwoData(cityTwoD);
    setCityOneName(cityOneN);
    setCityTwoName(cityTwoN);
    setSHowData(true);
  };

  return (
    <div style={{marginTop: '7rem'}}>
      <InputForm setData={setData} />
      <Divider />
      {showData && (
        <ResultData
          cityOneData={cityOneData}
          cityTwoData={cityTwoData}
          cityOneName={cityOneName}
          cityTwoName={cityTwoname}
        />
      )}
    </div>
  );
};

export default Home;
