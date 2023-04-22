import {useState} from 'react';
import axios from 'axios';
import {TProduct, formatDataArray} from '../utils';

const useAxios = () => {
  const [data, setData] = useState<TProduct[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://6222994f666291106a29f999.mockapi.io/api/v1/products',
      );
      const formattedData = formatDataArray(response.data);
      setData(formattedData);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return {data, fetchData};
};

export default useAxios;
