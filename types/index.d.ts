declare type Inputs = {
    name: string;
    category: string;
    sku:string;
    barcode:string;
    unit:string;
    brand:string;
    buyingPrice:number;
    sellingPrice:number;
    reOrderPoint:string;
    warehouse:string,
    weight:number,
    dimensions:number,
    tax:number,
    notes:number,
    description:string,
    supplierId:string
  };

  declare interface ItemsRequestBody {
    name: string;
    category: string;
    notes: string;
    sku: string;
    barcode: string;
    unit: string;
    brand: string;
    buyingPrice: number;
    sellingPrice: number;
    reOrderPoint: string;
    warehouse: string;
    weight: number;
    dimensions: number;
    tax: number;
    description: string;
    supplierId: string;
    imageUrl:string
  }