//add the product details to data base

import React,{useState}from 'react'
import { myDatabase } from './Firebase'

function AddProduct() {
  const[value,setValue] = useState({
    productslno: '',
   productDescription: '',
    productImageurl: '',
   productTitle:'',
    productPrice:'',
    productAuthor:''
})
const onClick=(event)=>{
const data = event.target.value
setValue({...value,[event.target.name]:data})

}
const saveData = ()=>{
  myDatabase.collection('Products').add({
    author: value.productAuthor,
    description:value.productDescription,
    image:value.productImageurl,
    price:value.productPrice,
    title:value.productTitle,
    id: value.productslno
  })
window.location.pathname ='/home'
}
  return (
    <div style={{margin:'40px'}}>
 <div className='col-md-3'>
        <label>Productslno</label>
      <input type='text' className='form-control' name='productslno' onChange={onClick}/><br></br>
      <label>Productname</label>
      <input type='text' className='form-control' name='productname'/><br></br>
      <label>Description</label>
      <textarea rows='4' cols='40' className='form-control'></textarea><br></br>
      <label>Image</label>
      <input type='text' className='form-control' name='imageurl'/><br></br>
      <label>Title</label>
      <input type='text' className='form-control' name='title'/><br></br>
      <label>Price</label>
      <input type='text' className='form-control' name='price'/><br></br>
      <label>Author</label>
      <input type='text' className='form-control' name='author'/><br></br>
<button className='btn btn-dark' onClick={saveData}>Add</button>
    </div>
    </div>
   
  )
}

export default AddProduct;
