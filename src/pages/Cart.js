import React from 'react'
import { useSelector } from 'react-redux'
import{useDispatch} from 'react-redux'
function Cart(){
  const dispatch =useDispatch()
  const cartobj = useSelector(store => store.cartReducer)
  const tablebody = cartobj.cartitems.map((item)=>{
    return <tr>
      <td>{item.itemName}</td>
      <td>{item.itemPrice}</td>
      <td><button className='-danger' onClick={()=>{dispatch({type:'DELETE_ITEM_TO_CART',payload:item})}}>DELETE</button></td>
    </tr>
  })
  return (
    <div className='container'>
      <div className='row-justify-content-center'>
        <h1>cart component cartlength :{cartobj.cartitems.length}</h1>
        <table className='table table-dark-table-borded col-md-6 mt-5'>
          <thead>
            <tr>
              <th>ItemName</th>
              <th>ItemPrice</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tablebody}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Cart