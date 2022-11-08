import React, { Fragment, FunctionComponent, ReactElement } from 'react';
import { GameRacesModel } from '../../models/game/GameModel';
import { ProductDetailsModel } from '../../models/product/ProductModel';
import { formatTimeToTwoDigits } from '../../utils/date/DateTimeHelpers';
import GameRaceDetails from './GameRaceDetails';


type GameTableDetailsTypes = {
    product:ProductDetailsModel,
    gameRaces:GameRacesModel[]
}

const GameTableDetails:FunctionComponent<GameTableDetailsTypes> = ({ product, gameRaces }:GameTableDetailsTypes):ReactElement => {
    const { name } = product['track'];
    const trackTime = formatTimeToTwoDigits(new Date(product['startTime']));

    return (
        <Fragment>
            <div className='table-row'>
                <div className='table-header'>
                    <h2>{ name } - { trackTime }</h2>
                </div>
                <div className='table-body'>
                    {
                        gameRaces ? gameRaces.map((race:GameRacesModel, index:number) => (
                            <GameRaceDetails 
                                gameRaces={ race }
                                key={ index } />
                        )) : 'No game races details'
                    }
                </div>
            </div>
        </Fragment>
    );
}

export default GameTableDetails;
