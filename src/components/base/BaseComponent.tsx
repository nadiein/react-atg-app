import React, { Fragment, FunctionComponent, ReactElement, useEffect, useState } from 'react';
import { GameModel } from '../../models/game/GameModel';
import { ProductModel, ProductType } from '../../models/product/ProductModel';
import GamesService from '../../services/games/GamesService';
import ProductsService from '../../services/products/ProductsService';
import { REQUEST_OPTIONS, SearchUrlBuilder } from '../../utils/http/HttpHelpers';
import OptionsFormControl from '../form-controls/OptionsFormControl';
import GameTable from '../game-table/GameTable';


const productOptions = [
    { id: 0, name: ProductType.V75 },
    { id: 1, name: ProductType.GS75 },
    { id: 2, name: ProductType.V86 }
]

const BaseComponent:FunctionComponent = ():ReactElement => {
    const [products, setProducts] = useState(new ProductModel());
    const [productType, setProductType] = useState(ProductType.V75);

    REQUEST_OPTIONS.method = 'GET';

    const handleOnChange = (e:any):void => {
        setProductType(e.target.value)
    }

    const productRequest:string = SearchUrlBuilder.forProduct(productType).build();

    useEffect(() => {
        REQUEST_OPTIONS.url = productRequest;

        ProductsService.getProducts(REQUEST_OPTIONS).then(( res:any ) => setProducts(res));
    }, [productType]);

    useEffect(() => {
        for (const details of products['productDetails']) {
            const detailsId = details['id'];
            const gameRequest:string = SearchUrlBuilder.forGames(detailsId).build();

            REQUEST_OPTIONS.url = gameRequest;

            GamesService.getGames(REQUEST_OPTIONS).then(( res:any ) => details['games'] = res);
        }
    }, [products]);

    return (
        <Fragment>
            <h1>Base Component</h1>
            <OptionsFormControl options={ productOptions } getSelectOnChange={ handleOnChange } />
            <GameTable productModel={ products } />
        </Fragment>
    );
}

export default BaseComponent;
