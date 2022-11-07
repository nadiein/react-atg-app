import React, { Fragment, FunctionComponent, ReactElement } from 'react';
import { ProductDetailsModel, ProductModel } from '../../models/product/ProductModel';
import GameTableDetails from './GameTableDetails';


type GamesTableTypes = {
    products:any
}

const GameTable:FunctionComponent<GamesTableTypes> = ({ products }:GamesTableTypes):ReactElement => {

    return (
        <Fragment>
            <div className='games-table-wrapper'>
                {
                    products['productDetails'] ? products['productDetails'].map((product:ProductDetailsModel, index:number) => (
                        <GameTableDetails product={ product } key={ index } />
                    )) : 'Have no Game Details'
                }
            </div>
        </Fragment>
    );
}

export default GameTable;
