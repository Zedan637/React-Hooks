import React from 'react'
import { useState } from 'react'

const Counter = () => {
    let [product, setProduct] = useState({
        prod_Name:"",
        image:"",
        price:"45000",
        qty:"1"
    });
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
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter