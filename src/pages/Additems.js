import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
function Additem() {
  const [itemname, setitemname] = useState('')
  const [itemprice, setitemprice] = useState('')
  const [itemimage, setitemimage] = useState('')
  const dispatch = useDispatch()
  function additem() {
    var item = {
      itemName: itemname,
      itemPrice: itemprice,
      itemImage: itemimage
    }
    dispatch({ type: 'ADD_ITEM', payload: item })
  }
  return (
    <div className='row mt-5 justify-content-center'>
      <div className='col-md-6'>
        <input type="" className='form-control' placeholder='Item Name'
          value={itemname} onChange={(e) => { setitemname(e.target.value) }}></input>
        <input type="" className='form-control' placeholder='Item Price'
          value={itemprice} onChange={(e) => { setitemprice(e.target.value) }}></input>
        <input type="" className='form-control' placeholder='Item Image'
          value={itemimage} onChange={(e) => { setitemimage(e.target.value) }}></input>
        <button onClick={additem} className="btn btn-success">Add Item</button>
      </div>
    </div>
  )
}
export default Additem