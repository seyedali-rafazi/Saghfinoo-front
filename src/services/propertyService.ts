import { staticProperties } from "../data/properties";
import { AdQueryStringType } from "../context/AdQueryContext";
import { ListParams, Property, QueryFilters } from "../types/property";

const FAVORITES_KEY = "saghfinoo_favorites";

function getStorage() {
  return sessionStorage;
}
const USER_PRODUCTS_KEY = "saghfinoo_user_products";
const PAGE_SIZE = 6;

const numericFields: (keyof QueryFilters)[] = [
  "rooms",
  "parking",
  "warHouse",
  "WC",
  "elevator",
  "floor",
];

const stringFields: (keyof QueryFilters)[] = [
  "WCType",
  "collingSystem",
  "heatingSystem",
  "floorMaterial",
];

function getUserProducts(): Property[] {
  try {
    const stored = localStorage.getItem(USER_PRODUCTS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveUserProducts(products: Property[]) {
  localStorage.setItem(USER_PRODUCTS_KEY, JSON.stringify(products));
}

export function isFavorite(id: string): boolean {
  return getFavoriteIds().includes(id);
}

export function getAllProperties(): Property[] {
  return [...staticProperties, ...getUserProducts()];
}

function matchesFilters(property: Property, filters: QueryFilters): boolean {
  if (filters.city && !property.city.includes(filters.city)) {
    return false;
  }

  for (const field of numericFields) {
    const value = filters[field];
    if (value !== undefined && value !== "") {
      if (property[field as keyof Property] !== Number(value)) {
        return false;
      }
    }
  }

  for (const field of stringFields) {
    const value = filters[field];
    if (value !== undefined && value !== "") {
      if (property[field as keyof Property] !== value) {
        return false;
      }
    }
  }

  return true;
}

function sortProperties(properties: Property[], sort?: string): Property[] {
  const sorted = [...properties];
  if (sort === "latest") {
    sorted.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  } else {
    sorted.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
  return sorted;
}

export function listProperties({
  houseGroup,
  sort,
  queryString,
  page = 1,
  pageSize = PAGE_SIZE,
}: ListParams) {
  let filtered = getAllProperties();

  if (houseGroup) {
    filtered = filtered.filter((p) => p.houseGroup.title === houseGroup);
  }

  if (queryString) {
    filtered = filtered.filter((p) => matchesFilters(p, queryString));
  }

  filtered = sortProperties(filtered, sort);

  const start = (page - 1) * pageSize;
  const products = filtered.slice(start, start + pageSize);

  return { products, total: filtered.length };
}

export function getPropertyById(id: string): Property | undefined {
  return getAllProperties().find((p) => p._id === id);
}

export function getPropertiesForMap(houseGroup?: string): Property[] {
  let properties = getAllProperties();
  if (houseGroup) {
    properties = properties.filter((p) => p.houseGroup.title === houseGroup);
  }
  return properties;
}

export function getFavoriteIds(): string[] {
  try {
    const stored = getStorage().getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function getFavoriteProducts(): Property[] {
  const ids = getFavoriteIds();
  return getAllProperties().filter((p) => ids.includes(p._id));
}

export function toggleFavorite(id: string): { added: boolean; message: string } {
  const ids = getFavoriteIds();
  const index = ids.indexOf(id);

  if (index === -1) {
    ids.push(id);
    getStorage().setItem(FAVORITES_KEY, JSON.stringify(ids));
    return { added: true, message: "به علاقه‌مندی‌ها اضافه شد" };
  }

  ids.splice(index, 1);
  getStorage().setItem(FAVORITES_KEY, JSON.stringify(ids));
  return { added: false, message: "از علاقه‌مندی‌ها حذف شد" };
}

export function getMockUser() {
  return {
    data: {
      user: {
        name: "کاربر سقفینو",
        phoneNumber: "09123456789",
        email: "user@saghfinoo.ir",
        favoriteProduct: getFavoriteProducts(),
      },
    },
  };
}

const tehranCoords = [
  { lat: 35.6892, lng: 51.389 },
  { lat: 35.7219, lng: 51.4056 },
  { lat: 35.7575, lng: 51.4083 },
  { lat: 35.7815, lng: 51.3752 },
  { lat: 35.8044, lng: 51.425 },
];

export function addProperty(data: AdQueryStringType): Property {
  const fallback = tehranCoords[Math.floor(Math.random() * tehranCoords.length)];
  const houseGroupTitle =
    data.houseGroup === "665a3964bcd7885317cd4b23" ? "اجاره" : "خرید";

  const newProperty: Property = {
    _id: `user-${Date.now()}`,
    title: data.title,
    description: data.description,
    city: data.city,
    price: data.price,
    imageLink: data.imageLink,
    houseGroup: { title: houseGroupTitle as "خرید" | "اجاره" },
    rooms: data.rooms,
    floor: data.floor,
    parking: data.parking,
    WC: data.WC,
    WCType: data.WCType,
    warHouse: data.warHouse,
    elevator: data.elevator,
    collingSystem: data.collingSystem,
    floorMaterial: data.floorMaterial,
    heatingSystem: data.heatingSystem,
    lat: data.lat || fallback.lat,
    lng: data.lng || fallback.lng,
    createdAt: new Date().toISOString().split("T")[0],
    propertyType: "آپارتمان",
  };

  const userProducts = getUserProducts();
  userProducts.push(newProperty);
  saveUserProducts(userProducts);

  return newProperty;
}

export function getPropertyStats() {
  const all = getAllProperties();
  return {
    total: all.length,
    buy: all.filter((p) => p.houseGroup.title === "خرید").length,
    rent: all.filter((p) => p.houseGroup.title === "اجاره").length,
    apartment: all.filter((p) => p.propertyType === "آپارتمان").length,
    villa: all.filter((p) => p.propertyType === "ویلا").length,
    house: all.filter((p) => p.propertyType === "خانه مسکونی").length,
    commercial: all.filter((p) => p.propertyType === "تجاری").length,
  };
}
