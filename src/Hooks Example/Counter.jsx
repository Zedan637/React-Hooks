import React from 'react'
import { useState } from 'react'

const Counter = () => {
    let [product, setProduct] = useState({
        prod_Name:"Apple Iphone 12",
        image:"https://m.media-amazon.com/images/I/71ZOtNdaZCL._SX679_.jpg",
        price:"45000",
        qty:"1"
    });
    let incrHandler = () => {
        setProduct({...product, qty: product.qty + 1})
    }
    let decrHandler = () => {
        setProduct({...product, qty: product.qty - 1})
    }
  return (
    <div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <table className='table table-hover'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th>Product Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>QTY</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.prod_Name}</td>
                                <td><img src={product.image} height="85px"/></td>
                                <td>{product.price}</td>
                                <td><button onClick={decrHandler}><i className="fa fa-minus-circle">-</i></button>{product.qty}<button onClick={incrHandler}><i className="fa fa-plus-circle">+</i></button></td>
                                <td>{product.qty * product.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter