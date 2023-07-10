import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Body,
  Param,
} from "@nestjs/common";
import { ServicesService } from "./services.service";

@Controller("services")
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  async fetchAll() {
    return await this.servicesService.findAll();
  }

  @Get(":id")
  async fetchOne(@Param("id") id: string) {
    return await this.servicesService.findOne(id);
  }

  @Delete(":id")
  async removeVaccine(@Param("id") id: string) {
    return await this.servicesService.remove(id);
  }

  @Patch(":id")
  updateVaccine(
    @Body("name") name: string,
    @Body("what") what: string,
    @Param("id") id: string
  ) {
    return this.servicesService.update(id, name, what);
  }

  @Post()
  async addVaccine(@Body("name") name: string, @Body("what") what: string) {
    return await this.servicesService.add(name, what);
  }
}
