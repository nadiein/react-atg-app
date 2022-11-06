import React, { Fragment, FunctionComponent, ReactElement, useEffect, useState } from 'react';
import { ProductType } from '../../models/product/ProductModel';
import ProductsService from '../../services/products/ProductsService';
import { REQUEST_OPTIONS, SearchUrlBuilder } from '../../utils/http/HttpHelpers';
import OptionsFormControl from '../form-controls/OptionsFormControl';
import Table from '../table/Table';


const productOptions = [
    { id: 0, name: ProductType.V75 },
    { id: 1, name: ProductType.GS75 },
    { id: 2, name: ProductType.V86 }
]

const BaseComponent:FunctionComponent = ():ReactElement => {
    const [products, setProducts] = useState([]);
    const [productType, setProductType] = useState(ProductType.V75);
    const productRequest:string = SearchUrlBuilder.forProduct(productType).build();

    REQUEST_OPTIONS.method = 'GET';
    REQUEST_OPTIONS.url = productRequest;

    const handleOnChange = (e:any):void => {
        setProductType(e.target.value)
    }

    useEffect(() => {
        ProductsService.getProducts(REQUEST_OPTIONS).then((res:any[]) => setProducts(res));
    }, [productType]);
    console.warn(products)
    return (
        <Fragment>
            <h1>Base Component</h1>
            <OptionsFormControl options={ productOptions } getSelectOnChange={ handleOnChange } />
            <Table />
        </Fragment>
    );
}

export default BaseComponent;
