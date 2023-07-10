import { Model, Types } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Vaccine } from "src/schemas/vaccine.schema";

@Injectable()
export class ServicesService {
  constructor(
    @InjectModel(Vaccine.name) private vaccineModel: Model<Vaccine>
  ) {}

  getHello(): string {
    return "Hello Minuteclinic users";
  }

  async findAll(): Promise<Vaccine[]> {
    return await this.vaccineModel.find().exec();
  }

  async add(name: string, what: string) {
    const newVaccine = new this.vaccineModel({ name, what });
    return await newVaccine.save();
  }

  async findOne(id: string) {
    return await this.vaccineModel.find({ _id: new Types.ObjectId(id) }).exec();
  }

  async update(id: string, name: string, what: string) {
    let oldVaccine = await this.findOne(id);
    console.log(oldVaccine);
    if (name) {
      oldVaccine[0]["name"] = name;
    }
    if (what) {
      oldVaccine[0]["what"] = what;
    }

    return await oldVaccine[0].save();
  }

  async remove(id: string) {
    return await this.vaccineModel.deleteOne({ _id: new Types.ObjectId(id) });
  }
}
