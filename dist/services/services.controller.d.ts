/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ServicesService } from "./services.service";
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    fetchAll(): Promise<import("../schemas/vaccine.schema").Vaccine[]>;
    fetchOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/vaccine.schema").Vaccine> & Omit<import("../schemas/vaccine.schema").Vaccine & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    removeVaccine(id: string): Promise<import("mongodb").DeleteResult>;
    updateVaccine(name: string, what: string, id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/vaccine.schema").Vaccine> & Omit<import("../schemas/vaccine.schema").Vaccine & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    addVaccine(name: string, what: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/vaccine.schema").Vaccine> & Omit<import("../schemas/vaccine.schema").Vaccine & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
