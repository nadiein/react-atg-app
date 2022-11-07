import React, { Fragment, FunctionComponent, ReactElement, useEffect, useState } from 'react';
import { ProductDetailsModel } from '../../models/product/ProductModel';
import GamesService from '../../services/games/GamesService';
import { REQUEST_OPTIONS, SearchUrlBuilder } from '../../utils/http/HttpHelpers';


type GameTableDetailsTypes = {
    product:ProductDetailsModel
}

const GameTableDetails:FunctionComponent<GameTableDetailsTypes> = ({ product }:GameTableDetailsTypes):ReactElement => {
    const [games, setGames] = useState([]);
    const gameRequest:string = SearchUrlBuilder.forGames(product['id']).build();

    REQUEST_OPTIONS.method = 'GET';
    REQUEST_OPTIONS.url = gameRequest;

    useEffect(() => {
        GamesService.getGames(REQUEST_OPTIONS).then(( res:any ) => { console.log('games => ', res)});
    }, []);

    return (
        <Fragment>
            <h1>Game table details</h1>
        </Fragment>
    );
}

export default GameTableDetails;
