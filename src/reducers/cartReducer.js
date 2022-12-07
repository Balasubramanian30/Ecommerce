const initialData ={
    cartitems:[]
}

function cartReducer(state = initialData,action) {
  switch (action.type){
    case'ADD_ITEM_TO_CART':return{
      ...state,
      cartitems: [...state.cartitems,action.payload]
    }
    case'DELETE_ITEM_TO_CART':return{
      ...state,
      cartitems:state.cartitems.filter(item => item.itemName !==action.payload.itemName)
    }

  }
  
  
  
  
  return state
}

export default cartReducer