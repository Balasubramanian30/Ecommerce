import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'
function Items() {
    const itemsobj = useSelector(store => store.itemsReducer)
    const [itemslist, setitemslist] = useState(itemsobj.items)
    const [searchkey, setserchkey] = useState('')
    function filteritems() {
        const duplicatelist = itemsobj.items
        const filteredlist = duplicatelist.filter(item => item.itemName.toLowerCase().includes(searchkey.toLowerCase()))
        setitemslist(filteredlist)
    }
    const itemsdata = itemslist.map((item) => {
        return <div className="col-md-3">
            <Item item={item} />
        </div>
    })
    return (
        <div className="container">
            <input className='form-control mb-5' type="text" placeholder='Search Item'
                value={searchkey} onChange={(e) => { setserchkey(e.target.value) }}
                onKeyUp={filteritems}
            ></input>
            <div className="row">
                <h1>totalitem : {itemsobj.items.length}</h1>
                {itemsdata}
            </div>
        </div>
    )
}
export default Items
