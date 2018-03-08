/*
 * Provides a 'Product object
*/

export class Product {
  constructor(
    public sky: string,
    public name: string,
    public imageUrl: string,
    public department: string[],
    public price: number) {}
}
