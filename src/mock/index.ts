import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

const files = import.meta.glob('../mock/*.ts');

const mockData: any[] = [];
for (let key in files) {
  const res: any = await files[key]();
  mockData.push(...res.default);
}

export function setupMock() {
  createProdMockServer([...mockData]);
}
