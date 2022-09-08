import { OPENNAV, OPENMODAL,CLOSEMODAL, CLOSENAV, GET_TOTALS, INCREASE, DECREASE, OPENCART, CLOSECART, OPEN_ORDER_MODAL, CLOSE_ORDER_MODAL, GO_TO_CART, SUBMITORDER, CLOSE_SUBMIT } from "./Action";


export const Actions = (state, action) => {
    switch (action.type) {
      case OPENMODAL:
        return { ...state, modal: true };
        break;
      case CLOSEMODAL:
        return { ...state, modal: false };
        break;
      case OPENNAV:
        return { ...state, nav: true };
        break;
      case CLOSENAV:
        return { ...state, nav: false };
        break;
      case INCREASE:
        let tempCart = state.data.map((item) => {
          if (item.id === action.payload.id) {
            item = { ...item, amount: item.amount + 1 };
          }
          return item;
        });
        return { ...state, data: tempCart, goToCart: true };
        break;
      case GET_TOTALS:
        let { total, amount } = state.data.reduce(
          (cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            cartTotal.amount += amount;
            const itemTotal = price * amount;
            cartTotal.total += itemTotal;
            return cartTotal;
          },
          {
            total: 0,
            amount: 0,
          }
        );
        total = parseFloat(total.toFixed(2));
        return { ...state, total, amount };
        break;
      case OPENCART:
        return { ...state, cart: true, nav: false };
        break;
      case CLOSECART:
        return { ...state, cart: false };
        break;
      case OPEN_ORDER_MODAL:
        let newAmount = state.data.map((item) => {
          return { ...item, amount: 0 };
        })
        return {...state, orderModal: true, total: 0, data: newAmount };
        break;
      case CLOSE_ORDER_MODAL:
        return { ...state, orderModal: false };
        break;
      case SUBMITORDER:
        return {...state, submitOrder: true, orderModal: false};
        break;
      case CLOSE_SUBMIT:
        return {...state, submitOrder: false}
        break;
      default:
    }
    return state;
}