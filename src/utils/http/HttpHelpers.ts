import RequestOptions from "../../models/request/RequestModel";


const API_ENDPOINT = `${process.env.REACT_APP_SERVER_HOST}/${process.env.REACT_APP_SERVER_API}`;

const REQUEST_OPTIONS = new RequestOptions();
REQUEST_OPTIONS.headers = { 'content-type': 'application/json' }

class SearchUrlBuilder {
    static ProductSearchBaseUrl = `${API_ENDPOINT}/products`;
    static GamesSearchBaseUrl = `${API_ENDPOINT}/games`;

    protected _base:string;

    static forProduct(type:string):SearchUrlBuilder {
        const build = new SearchUrlBuilder();
        build._base = `${SearchUrlBuilder.ProductSearchBaseUrl}/${type}`;
        return build;
    }

    static forGames(id:string):SearchUrlBuilder {
        const build = new SearchUrlBuilder();
        build._base = `${SearchUrlBuilder.GamesSearchBaseUrl}/${id}`;
        return build;
    }

    build():string {
        const url = this._base;
        return url;
    }
}

export {
    SearchUrlBuilder,
    API_ENDPOINT,
    REQUEST_OPTIONS
};
