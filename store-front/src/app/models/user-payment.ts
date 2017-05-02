import {UserBilling} from './user-billing';

export class UserPayment {
  public id:number;
  public type:string;
  public cardName:string;
  public cardNumber :string;
  public expiryMonth:string;
  public cvc:number;
  public holderNumber:string;
  public defaultPayment:boolean;
  public userBilling :UserBilling


}
