import DriverDetailsModel from '../../models/driver/DriverModel';
import { GameModel, GameRacesModel, GameStartsModel } from '../../models/game/GameModel';
import { HorseDetailsModel, HorseFatherDetails, HorsePedigreeDetailsModel } from '../../models/horse/HorseModel';
import RequestOptions from "../../models/request/RequestModel";
import TrackModel from '../../models/track/TrackModel';
import TrainerDetailsModel from '../../models/trainer/TrainerModel';
import { http, handleError } from '../base/BaseService';


class GamesService {

    static async getGames(options:RequestOptions):Promise<any> {
        return await http(options.url, options.method, options.headers, options.body)
            .then(res => res.json())
            .then(games => {
                // TODO: create dto and dao mappers
                const gameModel = new GameModel();

                const game = games['id'];
                const races = games['races'];

                gameModel['id'] = game;

                for (const race of races) {
                    const gameRacesModel = new GameRacesModel();
                    
                    gameRacesModel['number'] = race['number'];
                    gameRacesModel['name'] = race['name'];
                    gameRacesModel['startTime'] = race['startTime'];
                    
                    const track = new TrackModel();
                    
                    track['name'] = race['track']['name'];
                    gameRacesModel['track'] = track;

                    for (const start of race['starts']) {
                        const gameStartsModel = new GameStartsModel();
                        gameStartsModel['number'] = start['number'];

                        const horse = start['horse'];
                        const trainer = start['horse']['trainer'];
                        const horseFather = start['horse']['pedigree']['father'];
                        const driver = start['driver'];

                        const horseDetails = new HorseDetailsModel();
                        const horseFatherDetails = new HorseFatherDetails();
                        const horsePedigreeDetailsModel = new HorsePedigreeDetailsModel();
                        const driverDetailsModel = new DriverDetailsModel();
                        const trainerDetailsModel = new TrainerDetailsModel();

                        horseFatherDetails['name'] = horseFather['name'];
                        horsePedigreeDetailsModel['father'] = horseFatherDetails;

                        trainerDetailsModel['firstName'] = trainer['firstName'];
                        trainerDetailsModel['lastName'] = trainer['lastName'];

                        driverDetailsModel['firstName'] = driver['firstName'];
                        driverDetailsModel['lastName'] = driver['lastName'];

                        horseDetails['name'] = horse['name'];
                        horseDetails['pedigree'] = horsePedigreeDetailsModel;
                        horseDetails['trainer'] = trainerDetailsModel;
                        horseDetails['pedigree'] = horsePedigreeDetailsModel;

                        gameStartsModel['driver'] = driverDetailsModel;
                        gameStartsModel['horse'] = horseDetails;

                        gameRacesModel['starts'].push(gameStartsModel);
                    }

                    gameModel['gameRaces'].push(gameRacesModel);
                }

                return gameModel;
            })
            .catch(error => handleError(error))
    }
}

export default GamesService;
