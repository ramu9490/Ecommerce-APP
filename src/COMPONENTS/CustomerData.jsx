import React,{useEffect}from 'react'
import { myDatabase } from './Firebase'
function CustomerData() {
useEffect(()=>{
    //logic to read the customer data in the local storgae and save it db
    const name = localStorage.getItem("NAME")
    const pincode = Number(localStorage.getItem("PINCODE"))
    const city = localStorage.getItem("CITY")
    const country = localStorage.getItem("COUNTRY")
    const total = Number(localStorage.getItem("total"))
    //console.log(name,pincode,city,country,total)
    myDatabase.collection("customers").add({
        name:name,
        pincode:pincode,
        city:city,
        country:country,
        total:total
    })

}

)
  return (
    <div>
      
    </div>
  )
}

export default CustomerData
