import RequestOptions from "../../models/request/RequestModel";
import { http, handleError } from '../base/BaseService';


class GamesService {

    static async getGames(options:RequestOptions):Promise<any> {
        return await http(options.url, options.method, options.headers, options.body)
            .then(res => res.json())
            .then(games => {
                console.warn('games => ', games)
            })
            .catch(error => handleError(error))
    }
}

export default GamesService;
