import React, { Fragment, FunctionComponent, ReactElement } from 'react';
import { ProductDetailsModel } from '../../models/product/ProductModel';


type GameTableDetailsTypes = {
    product:ProductDetailsModel
}

const GameTableDetails:FunctionComponent<GameTableDetailsTypes> = ({ product }:GameTableDetailsTypes):ReactElement => {

    return (
        <Fragment>
            <h1>Game table details</h1>
        </Fragment>
    );
}

export default GameTableDetails;
