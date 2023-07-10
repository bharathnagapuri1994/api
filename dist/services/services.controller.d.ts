import { ServicesService } from './services.service';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    fetchAll(): Promise<import("../schemas/vaccine.schema").Vaccine[]>;
    fetchOne(id: string): void;
    removeVaccine(id: string): {
        message: string;
    };
    updateVaccine(name: string, what: string, id: string): {
        data: {
            name: string;
            what: string;
        };
    };
    addVaccine(name: string, what: string): {
        data: {
            name: string;
            what: string;
        };
    };
}
