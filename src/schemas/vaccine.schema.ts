import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VaccineDocument = HydratedDocument<Vaccine>;

@Schema()
export class Vaccine {
  @Prop({required: true})
  name: string;

  @Prop({required: true})
  what: string;
}

export const VaccineSchema = SchemaFactory.createForClass(Vaccine);