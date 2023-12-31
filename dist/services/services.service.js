"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const vaccine_schema_1 = require("../schemas/vaccine.schema");
let ServicesService = exports.ServicesService = class ServicesService {
    constructor(vaccineModel) {
        this.vaccineModel = vaccineModel;
    }
    getHello() {
        return "Hello Minuteclinic users";
    }
    async findAll() {
        return await this.vaccineModel.find().exec();
    }
    async add(name, what) {
        const newVaccine = new this.vaccineModel({ name, what });
        return await newVaccine.save();
    }
    async findOne(id) {
        return await this.vaccineModel.find({ _id: new mongoose_1.Types.ObjectId(id) }).exec();
    }
    async update(id, name, what) {
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
    async remove(id) {
        return await this.vaccineModel.deleteOne({ _id: new mongoose_1.Types.ObjectId(id) });
    }
};
exports.ServicesService = ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(vaccine_schema_1.Vaccine.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ServicesService);
//# sourceMappingURL=services.service.js.map