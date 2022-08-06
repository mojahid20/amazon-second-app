import { useEffect, useState } from "react";

const Useproduct=()=>{
    const [products,setProduct]=useState([]);
    useEffect(()=>{
        fetch('product.json')
        .then(res=> res.json())
        .then(data=> setProduct(data))
    },[])
    return[products,setProduct]
}
export default Useproduct;