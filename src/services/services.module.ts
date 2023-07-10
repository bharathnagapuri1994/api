import { Module } from "@nestjs/common";
import { ServicesController } from "./services.controller";
import { ServicesService} from "./services.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Vaccine, VaccineSchema } from "src/schemas/vaccine.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: Vaccine.name, schema: VaccineSchema }])],
    controllers : [ServicesController],
    providers : [ServicesService], 
})
export class ServicesModule{}
