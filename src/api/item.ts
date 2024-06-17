import http from "../services/https";

const items = Array.from({ length: 100 }).map((_, i) => ({
  id: i,
  name: `Item ${i}`,
}));

type Item = (typeof items)[0];

const LIMIT = 10;
let newProduct;

async function fetchData() {
  try {
    const response = await http.get(`/product/list`);
    newProduct = response.data.data;
    return newProduct;
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
  }
}

fetchData();
console.log(newProduct);

export function fetchItems({ pageParam }: { pageParam: number }): Promise<{
  data: Item[];
  currentPage: number;
  nextPage: number | null;
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: items.slice(pageParam, pageParam + LIMIT),
        currentPage: pageParam,
        nextPage: pageParam + LIMIT < items.length ? pageParam + LIMIT : null,
      });
    }, 1000);
  });
}
