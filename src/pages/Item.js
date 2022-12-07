import React from 'react'
import{useDispatch} from 'react-redux'
function Item({item}) {
  const dispatch =useDispatch()
  return (
    <div class="shadow p-3 mb-5 bg-white rounded">
    <h1>{item.itemName}</h1>
    <img src={item.itemImage} className="img-fluid"></img>
    <h3>{item.itemPrice}</h3>
    <button className="btn btn-primary" onClick={()=>{dispatch({type:'ADD_ITEM_TO_CART',payload:item})}}>Add to card</button>
</div>
  )
}

export default Item