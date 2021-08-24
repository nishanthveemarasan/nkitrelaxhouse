import { createSlice } from "@reduxjs/toolkit";
import { cartStoreAction } from "./store";
const initialState = {
  storeData: [
    {
      id: 1,
      itemname: "Francois Bar Stool 74cm - Walnut",
      count: "12",
      price: "185",
    },
    {
      id: 2,
      itemname: "B9 Armchair - Light Grey(Warm Grey)",
      count: "126",
      price: "125",
    },
    { id: 3, itemname: "B9 Armchair - Natural", count: "0", price: "135" },
    { id: 4, itemname: "Linz Chair - Walnut", count: "18", price: "200" },
    { id: 5, itemname: "Paris Stool 68cm - Walnut", count: "0", price: "135" },
    { id: 6, itemname: "Paris Stool 68cm - Natural", count: "3", price: "100" },
  ],
  cartData: [
    {
      id: 2,
      count: 3,
      itemname: "B9 Armchair - Light Grey(Warm Grey)",
      totalPrice: 375,
      unitPrice: 125,
    },
  ],
  searchData: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const cartArray = state.cartData.slice();
      const data = action.payload.data;
      if (cartArray.length === 0) {
        cartArray.push({
          id: data.id,
          itemname: data.itemname,
          count: data.count,
          unitPrice: data.unitPrice,
          totalPrice: data.unitPrice,
        });
        state.cartData = [...cartArray];
        console.log(state.cartData);
      } else {
        const getItemId = cartArray.findIndex((el, i) => {
          return el.id === action.payload.data.id;
        });
        const existingCartItem = cartArray[getItemId];
        if (existingCartItem) {
          const updateData = {
            ...existingCartItem,
            count: action.payload.data.count,
            totalPrice:
              action.payload.data.count * action.payload.data.unitPrice,
          };
          // console.log(updateData);
          cartArray[getItemId] = updateData;
          state.cartData = [...cartArray];
          console.log(state.cartData);
        } else {
          cartArray.push({
            id: data.id,
            itemname: data.itemname,
            count: data.count,
            unitPrice: data.unitPrice,
            totalPrice: data.unitPrice,
          });
          state.cartData = [...cartArray];
        }
      }
    },

    reduceCartItem(state, action) {
      const data = action.payload.data;
      let cartItem;
      const copyCartArray = state.cartData.slice();
      //if it is in the array and count > 0
      const getIndex = copyCartArray.findIndex((el, index) => {
        return el.id === data.id;
      });

      const getCartItem = copyCartArray[getIndex];
      if (getCartItem) {
        if (data.count > 0) {
          cartItem = {
            ...getCartItem,
            count: data.count,
            totalPrice: data.count * data.unitPrice,
          };
          copyCartArray[getIndex] = cartItem;
          state.cartData = [...copyCartArray];
        } else {
          copyCartArray.splice(getIndex, 1);
          state.cartData = [...copyCartArray];
        }
      }
      console.log(state.cartData);
    },
    removeCartItem(state, action) {
      const id = action.payload.id;
      const copyArray = [...state.cartData];
      const getIndex = copyArray.findIndex((el) => el.id === id);
      copyArray.splice(getIndex, 1);
      state.cartData = [...copyArray];
    },
    getSearchData(state, action) {
      state.searchData = action.payload.data;
    },
  },
});

export default cartSlice;

export const getSuggestion = (id) => {
  return (dispatch) => {
    const data = [
      "Login Form inHTML & CSS",
      "How to work inHTML & CSS",
      "How to Learn inHTML & CSS",
      "How to become inHTML & CSS",
    ];
    // console.log(data);
    dispatch(cartStoreAction.getSearchData({ data: data }));
  };
};
export const clearSuggestion = () => {
  return (dispatch) => {
    const data = [];
    // console.log(data);
    dispatch(cartStoreAction.getSearchData({ data: data }));
  };
};
