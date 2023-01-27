import React, {useState} from 'react';
import {Button, Form, Grid, Header, Segment, Icon} from 'semantic-ui-react';
import {Error} from './index';
import {getAirQualityData} from '../utils/fetchData';

const InputForm = ({setData}) => {
  const [cityOneName, setCityOneName] = useState('');
  const [cityTwoName, setCityTwoName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onSuccess = (cityOneData, cityTwoData) => {
    setData(cityOneData, cityTwoData, cityOneName, cityTwoName);
  };

  const onError = (message) => {
    setErrorMessage(message);
  };

  const onLoadingChange = (value = false) => {
    setLoading(value);
  };

  const onChangeText = (text, setText) => {
    if (text) {
      setText(text);
    } else {
      setText('');
    }
  };

  const onFormSubmit = () => {
    if (!cityOneName || !cityTwoName) {
      setErrorMessage('City name fields must not be empty');
      return;
    }
    onLoadingChange(true);
    getAirQualityData(
      cityOneName,
      cityTwoName,
      onSuccess,
      onError,
      onLoadingChange
    );
  };
  return (
    <Grid textAlign='center' verticalAlign='middle'>
      <Grid.Column style={{maxWidth: 450}}>
        <Header as='h2' color='teal' textAlign='center'>
          Air Quality Assessment Tool
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              placeholder='Enter city one'
              label='City One Name (Example - Albany)'
              type='text'
              onChange={(e) => onChangeText(e.target.value, setCityOneName)}
            />
            <Form.Input
              fluid
              placeholder='Enter city two'
              label='City Two Name (Expmple - Akron)'
              type='text'
              onChange={(e) => onChangeText(e.target.value, setCityTwoName)}
            />

            <Button
              color='teal'
              fluid
              size='large'
              onClick={onFormSubmit}
              disabled={loading}>
              {loading ? <Icon name='circle notched' loading /> : 'Compare'}
            </Button>
          </Segment>
        </Form>
        {errorMessage && <Error message={errorMessage} />}
      </Grid.Column>
    </Grid>
  );
};

export default InputForm;
