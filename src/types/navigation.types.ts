import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TProduct} from './utils.types';

export type TRootStackParamList = {
  Home: undefined;
  Details: {item: TProduct};
};

export type TDetailsNavigationProps = NativeStackScreenProps<
  TRootStackParamList,
  'Details'
>;
