import { Controller, Delete, Get, Patch, Post, Body, Param } from '@nestjs/common';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  async fetchAll()  {
    return await this.servicesService.findAll();
  }
  
  @Get(":id")
  fetchOne(@Param("id") id:string) {
  }

  @Delete(":id")
  removeVaccine(@Param("id") id:string) {
    return {message: `Your id is ${id}`}
  }

  @Patch(":id")
  updateVaccine(@Body('name') name: string, @Body('what') what: string, @Param("id") id:string) {
    return {data: {name, what}};
  }

  @Post()
  addVaccine(@Body('name') name: string, @Body('what') what: string) {
    return { data: { name, what } };
  }
}
