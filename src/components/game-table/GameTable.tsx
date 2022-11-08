import React, { Fragment, FunctionComponent, ReactElement } from 'react';
import { GameModel } from '../../models/game/GameModel';
import { ProductDetailsModel, ProductModel } from '../../models/product/ProductModel';
import GameTableDetails from './GameTableDetails';

import './game-table.scss';


type GamesTableTypes = {
    productModel:ProductModel,
    gamesModel:GameModel
}

const GameTable:FunctionComponent<GamesTableTypes> = ({ productModel, gamesModel }:GamesTableTypes):ReactElement => {
    const { gameRaces } = gamesModel;

    return (
        <Fragment>
            <div className='games-table-wrapper'>
                {
                    productModel['productDetails'] && productModel['productDetails'].length > 0 ? <div className='table-wrapper'>
                        {
                            productModel['productDetails'].map((product:ProductDetailsModel, index:number) => (
                                <GameTableDetails product={ product } gameRaces={ gameRaces } key={ index } />
                            ))
                        }
                    </div> : 'Have no Game Details'
                }
            </div>
        </Fragment>
    );
}

export default GameTable;
