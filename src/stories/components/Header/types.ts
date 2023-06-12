import { InputSearchElasticProps } from '../ElasticSearch/InputSearchElastic/types';
import { MenuProps } from '../Menu/types';

export interface HeaderProps {
  urlImgLogo?: string;
  links?: Array<{ name: string; url: string }>;
  button: { name: string; onClick: () => void };
  menu?: MenuProps;
  username?: string;
  search?: InputSearchElasticProps;
}
