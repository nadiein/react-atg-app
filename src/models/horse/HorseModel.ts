import TrainerDetailsModel from '../trainer/TrainerModel';


class HorseDetailsModel {
    public name:string;
    public trainer:TrainerDetailsModel;
    public pedigree:HorsePedigreeDetailsModel;
}

class HorsePedigreeDetailsModel {
    public mare:HorseMareDetails;
}

class HorseMareDetails {
    public name:string;
}

export {
    HorseDetailsModel,
    HorsePedigreeDetailsModel,
    HorseMareDetails
};
