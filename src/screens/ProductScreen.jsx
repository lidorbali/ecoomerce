import React, { useState,useEffect  } from "react";
import { Link ,useParams} from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../Products";
import axios from 'axios'


 const ProductScreen =  () => {
  const product_id= useParams();
  const product=products.find((p) =>p._id === product_id.id)
  
  
     return (<div>
        {product.name}
        
    </div>);
    
};

export default ProductScreen