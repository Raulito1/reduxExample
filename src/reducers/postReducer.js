import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
   items: [],
   item: {}
};
// eslint-disable-next-line
export default function (state = initialState, action) {
   switch (action.type) {
      case FETCH_POSTS:
         return {
            ...state,
            items: action.payload
         };
      case NEW_POST:
         return {
            ...state,
            items: action.payload
         };
      default:
         return state;
   }
}