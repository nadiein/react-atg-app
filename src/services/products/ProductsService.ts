import { ProductDetailsModel, ProductModel, ProductTrackModel } from '../../models/product/ProductModel';
import RequestOptions from "../../models/request/RequestModel";
import { http, handleError } from '../base/BaseService';


class ProductsService {

    static async getProducts(options:RequestOptions):Promise<any> {
        return await http(options.url, options.method, options.headers, options.body)
            .then(res => res.json())
            .then(products => {
                const productModel = new ProductModel();
                productModel.productDetails = [];

                for (const product of products['results']) {
                    const details = new ProductDetailsModel();
                    details.id = product['id'];
                    details.tracks = [];

                    for (const track of product['tracks']) {
                        const detailsTrack = new ProductTrackModel();
                        detailsTrack.id = track['id'];
                        detailsTrack.name = track['name'];
                        details.tracks.push(detailsTrack);
                    }
                    productModel.productDetails.push(details);
                }
                productModel.type = products['betType'];

                return productModel;
            })
            .catch(error => handleError(error))
    }
}

export default ProductsService;
