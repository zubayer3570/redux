import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../slices/productsSlice';

const Products = () => {
    const dispatch = useDispatch()
    const { isLoading, products, error } = useSelector((state) => state.products)
    return (
        <>
            <div className='container text-primary'>
                <div className='row'>
                    {isLoading && <p>Loading products...</p>}
                    {products.products?.map(product => (
                        <div className='col-sm'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={product.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>
                                        {product.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={() => dispatch(fetchProducts())}>load products</button>
        </>
    );
};

export default Products;