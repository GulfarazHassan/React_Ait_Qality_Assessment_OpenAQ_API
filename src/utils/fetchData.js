import axios from 'axios';

export const getAirQualityData = async (
    cityOneName,
    cityTwoName,
    onSuccess,
    onError,
    onLoadingChange
) => {
    Promise.all([
        axios.get(
            `https://api.openaq.org/v1/measurements?city=${cityOneName}&parameter=pm25&date_from=2022-11-01&date_to=2022-11-14`
        ),
        axios.get(
            `https://api.openaq.org/v1/measurements?city=${cityTwoName}&parameter=pm25&date_from=2022-11-01&date_to=2022-11-14`
        ),
    ])
        .then((data) => {
            const [cityOneResponse, cityTwoResponse] = data;
            const cityOneData = cityOneResponse?.data?.results || [];
            const cityTwoeData = cityTwoResponse?.data?.results || [];
            onSuccess(cityOneData, cityTwoeData);
            onError('')
        })
        .catch((e) => onError(e.message))
        .finally(() => onLoadingChange(false));
};
