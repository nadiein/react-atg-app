import DriverDetailsModel from '../driver/DriverModel';
import { HorseDetailsModel } from '../horse/HorseModel';
import TrackModel from '../track/TrackModel';


class GameModel {
    public id:string;
    public gameRaces:GameRacesModel[] = [];
}

class GameRacesModel {
    public number:number;
    public name:string;
    public startTime:string;
    public track:TrackModel;
    public starts:GameStartsModel[] = [];
}

class GameStartsModel {
    public number:number;
    public horse:HorseDetailsModel;
    public driver:DriverDetailsModel;
}

export {
    GameModel,
    GameRacesModel,
    GameStartsModel
};
