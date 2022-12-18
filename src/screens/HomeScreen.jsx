import React from 'react'
import {Row ,Col} from 'react-bootstrap'
import Products from '../Products'
import Product from '../components/Product'



const HomeScreen = () => {
  return (
    <div>
      <h1>Latest Products</h1>
    <Row>
        {Products.map(product =>(
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <h3>{product.name}</h3>
                    <Product product={product} ></Product>
            </Col>
        ))}
    </Row>
    </div>
  )
}

export default HomeScreen
