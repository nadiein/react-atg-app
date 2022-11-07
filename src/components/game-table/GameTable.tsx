import React, { Fragment, FunctionComponent, ReactElement } from 'react';
import { ProductDetailsModel, ProductModel } from '../../models/product/ProductModel';
import GameTableDetails from './GameTableDetails';


type GamesTableTypes = {
    productModel:ProductModel
}

const GameTable:FunctionComponent<GamesTableTypes> = ({ productModel }:GamesTableTypes):ReactElement => {

    return (
        <Fragment>
            <div className='games-table-wrapper'>
                {
                    productModel['productDetails'] ? productModel['productDetails'].map((product:ProductDetailsModel, index:number) => (
                        <GameTableDetails product={ product } key={ index } />
                    )) : 'Have no Game Details'
                }
            </div>
        </Fragment>
    );
}

export default GameTable;
