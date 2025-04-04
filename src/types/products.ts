import { BaseEntity, PageInfo } from "./models";

// 카테고리 기본 모델
export interface BaseCategory extends BaseEntity {
  name: string;
  description?: string;
}

// 상품 기본 모델
export interface BaseProduct extends BaseEntity {
  name: string;
  price: number;
  stock: number;
  mainImage?: string;
  description?: string;
  categoryId?: string;
}

export interface Product extends BaseProduct {
  category?: BaseCategory;
}

// 페이징 처리된 컬렉션
export interface ProductPage {
  items: Product[];
  pageInfo: PageInfo;
}

// API 요청 파라미터
export interface ProductQueryParams {
  name?: string;
  overprice?: number; // 최대가격
  underprice?: number; // 최소가격
  categoryId?: number;
  page?: number;
  size?: number;
}

export type ProductInput = Omit<BaseProduct, "id" | "createdTimeStamps" | "updatedTimeStamps"> & {
  categoryId: string;
};

export type ProductUpdateInput = Partial<ProductInput> & {
  id: string;
  deleted?: boolean;
};

export type CategoryInput = Omit<BaseCategory, "id" | "createdTimeStamps" | "updatedTimeStamps">;

export type CategoryUpdateInput = Partial<CategoryInput> & {
  id: string;
};
