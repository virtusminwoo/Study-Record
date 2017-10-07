import React from 'react';
import ReduxProductNavLeftTable from '../../containers/ReduxProductNavLeftTable'
import ProductNavRight from './ProductNavRight';

const ProductNav = () => {

        return (
            <div className="ProductNav">
                    <ReduxProductNavLeftTable />
                    <ProductNavRight />
                </div>
        )
    }


export default ProductNav;