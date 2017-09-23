import React, { Component } from 'react';
import ProductNavLeft from './ProductNavLeft';
import ProductNavRight from './ProductNavRight';
import RoomListDiv from './RoomListDiv';




class ProductNav extends Component {
    render() {
        return (
            <div className="ProductNav">
                <ProductNavLeft />
                <ProductNavRight />
            </div>
        );
    }
}

export default ProductNav;