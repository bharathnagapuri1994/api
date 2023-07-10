import { Model, Document } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Vaccine } from "src/schemas/vaccine.schema";

@Injectable()
export class ServicesService{
    constructor(@InjectModel(Vaccine.name) private vaccineModel: Model<Vaccine>){}

    getHello(): string{
        return 'Hello Minuteclinic users';
    }

    async findAll(): Promise<Vaccine[]>{
        return this.vaccineModel.find().exec();
    }

}