import { Base } from '../base/Base';

export interface JwtModel extends Base {
  iat?: number;
  exp?: number;
}
