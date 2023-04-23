import {useState} from 'react';
import axios from 'axios';
import {formatDataArray} from '../utils';
import {TProduct} from '../types/utils.types';
import {Alert} from 'react-native';

const useAxios = () => {
  const [data, setData] = useState<TProduct[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://6222994f666291106a29f999.mockapi.o/api/v1/products',
      );
      const formattedData = formatDataArray(response.data);
      setData(formattedData);
      setIsError(false);
    } catch (err: any) {
      console.log(err.message);

      Alert.alert(
        'Oh no!',
        'Algo salio mal, intentelo de nuevo o trata mas tarde.',
        [
          {text: 'Try again', onPress: () => fetchData()},
          {text: 'Cancel', onPress: () => setIsError(true)},
        ],
        {cancelable: false},
      );
    }
  };

  return {data, fetchData, isError};
};

export default useAxios;
