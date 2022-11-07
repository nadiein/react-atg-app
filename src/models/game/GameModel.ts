import { HorseDetailsModel } from '../horse/HorseModel';


class GameModel {
    public id:string;
    public gameRaces:GameRacesModel[];
}

class GameRacesModel {
    public id:string;
    public name:string;
    public date:string;
    public number:number;
    public distance:number;
    public startTime:string;
    public scheduledStartTime:string;
    public starts:GameStartsModel[];
}

class GameStartsModel {
    public id:number;
    public name:string;
    public horse:HorseDetailsModel;
}

export {
    GameModel,
    GameRacesModel,
    GameStartsModel
};
