import {
  IsDecimal,
  IsNotEmpty,
  IsString,
  IsUUID,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class CreateLandDto {
  @IsUUID()
  owner_id: string;

  @IsDecimal({ decimal_digits: '2' })
  price: string;

  @IsBoolean()
  @IsOptional()
  availability?: boolean;

  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsOptional()
  complement?: string;

  @IsString()
  @IsOptional()
  district?: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  postal_code: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  constructor(
    owner_id: string,
    price: string,
    street: string,
    city: string,
    state: string,
    number: string,
    postal_code: string,
    country: string,
    complement?: string,
  ) {
    this.owner_id = owner_id;
    this.price = price;
    this.street = street;
    this.city = city;
    this.state = state;
    this.number = number;
    this.postal_code = postal_code;
    this.country = country;
    this.complement = complement;
  }
}
