import {TProduct} from './utils.types';

export type TFilter = 'Todos' | 'Ganados' | 'Canjeados';

export type DetailScreenParams = {
  item: TProduct;
};

export type DetailScreenRouteProp = {
  route: {
    params: {
      item: TProduct;
    };
  };
};

export type Props = {
  route: DetailScreenRouteProp;
};
