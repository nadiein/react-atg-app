enum ProductType {
    V75 = 'V75',
    V86 = 'V86',
    GS75 = 'GS75'
}

class ProductModel {
    public type:ProductType;
    public productDetails:ProductDetailsModel[];
}

class ProductDetailsModel {
    public startTime:string;
    public totalToWin:string;
    public tracks:ProductTrackModel[];
}

class ProductTrackModel {
    public id:number;
    public name:string;
}


export {
    ProductType,
    ProductModel,
    ProductDetailsModel,
    ProductTrackModel
};
