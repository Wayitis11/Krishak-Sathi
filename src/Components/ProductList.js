import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../Context';
import Header from './Header';

export default class ProductList extends Component {

    render() {
      
        return (
            <div>
                <Header/>

                <React.Fragment>
                    <div className="ProductList" style={{backgroundColor:'whitesmoke'}}>
                    <div className="py-5">
                        <div className="container">
                            <Title name="our" title="products"/>
                            <div className="row">
                                <ProductConsumer>
                                    {value=>{
                                      return value.products.map( product =>{
                                          return <Product key={product.id} 
                                          product={product}/>;
                                      })

                                    }}
                                </ProductConsumer>

                            </div>
                        </div>
                    </div>
                    </div>
                </React.Fragment>
                {/* <Product/> */}
            </div>
            
        )
    }
}
