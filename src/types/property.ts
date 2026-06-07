export interface Property {
  _id: string;
  title: string;
  description: string;
  city: string;
  price: number;
  imageLink: string;
  houseGroup: { title: "خرید" | "اجاره" };
  rooms: number;
  floor: number;
  parking: number;
  WC: number;
  WCType: string;
  warHouse: number;
  elevator: number;
  collingSystem: string;
  floorMaterial: string;
  heatingSystem: string;
  lat: number;
  lng: number;
  createdAt: string;
  propertyType: "آپارتمان" | "ویلا" | "خانه مسکونی" | "تجاری";
}

export interface QueryFilters {
  rooms?: string;
  parking?: string;
  warHouse?: string;
  WC?: string;
  WCType?: string;
  elevator?: string;
  floor?: string;
  collingSystem?: string;
  heatingSystem?: string;
  floorMaterial?: string;
  city?: string;
}

export interface ListParams {
  houseGroup?: string;
  sort?: string;
  queryString?: QueryFilters;
  page?: number;
  pageSize?: number;
}
