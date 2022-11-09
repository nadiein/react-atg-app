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
];

const BaseComponent:FunctionComponent = ():ReactElement => {
    const [products, setProducts] = useState(new ProductModel());
    const [games, setGames] = useState(new GameModel());
    const [productType, setProductType] = useState(ProductType.V75);
    const [isLoadingFinished, setLoadingFinished] = useState(false);

    REQUEST_OPTIONS.method = 'GET';

    const handleOnChange = (e:any):void => {
        setProductType(e.target.value)
    }

    const productRequest:string = SearchUrlBuilder.forProduct(productType).build();

    // TODO: make cache like for products model
    useEffect(() => {
        REQUEST_OPTIONS.url = productRequest;

        ProductsService.getProducts(REQUEST_OPTIONS).then(( res:any ) => {
            setLoadingFinished(true);
            setProducts(res)
        });

    }, [productType]);

    useEffect(() => {
        for (const details of products['productDetails']) {
            const detailsId = details['id'];
            const gameRequest:string = SearchUrlBuilder.forGames(detailsId).build();

            REQUEST_OPTIONS.url = gameRequest;

            GamesService.getGames(REQUEST_OPTIONS).then(( res:any ) => {
                setGames(res)
                setLoadingFinished(true);
            });
        }
    }, [products])

    return (
        <Fragment>
            <div className='m-15'>
                <div className='m-b-15'>
                    <OptionsFormControl options={ productOptions } getSelectOnChange={ handleOnChange } />
                </div>
                {
                    isLoadingFinished ? <GameTable productModel={ products } gamesModel={ games } /> : '...'
                }
            </div>
        </Fragment>
    );
}

export {
    BaseComponent,
    productOptions
};
