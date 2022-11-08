import React, { Fragment, FunctionComponent, ReactElement, useState } from 'react';
import { GameStartsModel } from '../../models/game/GameModel';

import './race-details.scss';


type RaceDetailsTypes = {
    raceDetails:GameStartsModel
}

const RaceDetails:FunctionComponent<RaceDetailsTypes> = ({ raceDetails }:RaceDetailsTypes):ReactElement => {
    const [isAccardionOpened, onChangeAccardionState] = useState(false);
    const { number, horse, driver } = raceDetails;
    const { trainer, pedigree } = horse;
    const horseName = horse['name'];
    const trainerFullName = `${trainer['firstName']} ${trainer['lastName']}`;
    const driverFullName = `${driver['firstName']} ${driver['lastName']}`;
    const horseFatherName = pedigree['father']['name'];

    const accardionClickEvent = ():void => {
        isAccardionOpened ? onChangeAccardionState(false) : onChangeAccardionState(true)
    }

    return (
        <Fragment>
            <div className='horse-details'>
                <div className='horse-details--header' onClick={ () => accardionClickEvent() }>
                    <span>{ `${number} ${horseName} - ${driverFullName}` }</span>
                </div>
                {
                    isAccardionOpened ?
                        <div className='horse-details--body'>
                            <p>Tränare: { trainerFullName }</p>
                            <p>Far: { horseFatherName }</p>
                        </div> :
                    <></>
                }
            </div>
        </Fragment>
    );
}

export default RaceDetails;
