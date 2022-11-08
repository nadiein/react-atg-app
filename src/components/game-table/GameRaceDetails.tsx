import React, { Fragment, FunctionComponent, ReactElement } from 'react';
import { GameRacesModel, GameStartsModel } from '../../models/game/GameModel';
import { formatTimeToTwoDigits } from '../../utils/date/DateTimeHelpers';
import RaceDetails from '../race-details/RaceDetails';

import './game-details.scss'


type GameRaceTypes = {
    gameRaces:GameRacesModel
}

const GameRaceDetails:FunctionComponent<GameRaceTypes> = ({ gameRaces }:GameRaceTypes):ReactElement => {
    const raceTime = formatTimeToTwoDigits(new Date(gameRaces['startTime']));
    const raceName = gameRaces['name'];

    return (
        <Fragment>
            <div className='race-details--header'>
                <h3 className='race-details--title'>
                    <span className='race-number'>{ gameRaces['number'] }</span>
                    <span className='race-name' title={ raceName }> { raceName }</span>
                    <span className='race-time'>{ raceTime }</span>
                </h3>
            </div>
            {
                gameRaces['starts'] ? <div className='race-details--body'>
                    {
                        gameRaces['starts'].map((raceDetails:GameStartsModel, index:number) => (
                            <RaceDetails raceDetails={ raceDetails } key={ index } />
                        ))
                    }
                </div> : 'Have no details about the horse'
            }
        </Fragment>
    );
}

export default GameRaceDetails;
