import TrainerDetailsModel from '../trainer/TrainerModel';


class HorseDetailsModel {
    public name:string;
    public trainer:TrainerDetailsModel;
    public pedigree:HorsePedigreeDetailsModel;
}

class HorsePedigreeDetailsModel {
    public father:HorseFatherDetails;
}

class HorseFatherDetails {
    public name:string;
}

export {
    HorseDetailsModel,
    HorsePedigreeDetailsModel,
    HorseFatherDetails
};
