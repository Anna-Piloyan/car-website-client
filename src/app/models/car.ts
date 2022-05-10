export class Car {
  _id: string = '';
  model: string;
  price: number;
  description: string;
  image: string = '';
  constructor(
    
    model: string,
    price: number,
    description: string,
    image: string
  ) {

    this.model = model;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}
