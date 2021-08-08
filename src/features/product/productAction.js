import { REQUEST } from "../../app/store/actionType";
import { productAction } from "./productConstant";

export const getProductsAction = (params) => ({
  type: REQUEST(productAction.FETCH_LIST),
  payload: { params },
});
