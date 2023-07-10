import { Model } from "mongoose";
import { Vaccine } from "src/schemas/vaccine.schema";
export declare class ServicesService {
    private vaccineModel;
    constructor(vaccineModel: Model<Vaccine>);
    getHello(): string;
    findAll(): Promise<Vaccine[]>;
}
