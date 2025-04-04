import { gql } from "@apollo/client";
import { CATEGORY_EXTENDED_FRAGMENT, PAGE_INFO_FRAGMENT, PRODUCT_BASIC_FRAGMENT } from "./fragments";

// GraphQL 쿼리 정의
export const GET_PRODUCTS = gql`
  query GetProducts(
    $name: String,
    $overprice: Int,
    $underprice: Int,
    $categoryId: Int,
    $page: Int = 0,
    $size: Int = 10
  ) {
    products(
      name: $name,
      overprice: $overprice,
      underprice: $underprice,
      categoryId: $categoryId,
      page: $page,
      size: $size
    ) {
      items {
        ${PRODUCT_BASIC_FRAGMENT}
      }
      pageInfo {
        ${PAGE_INFO_FRAGMENT}
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      ${PRODUCT_BASIC_FRAGMENT}
    }
  }
`;

// 간소화된 상품 쿼리 (기본 정보만)
export const GET_BASIC_PRODUCTS = gql`
  query GetBasicProducts(
    $page: Int,
    $size: Int
  ) {
    products(
      page: $page,
      size: $size
    ) {
      items {
        ${PRODUCT_BASIC_FRAGMENT}
      }
      pageInfo {
        ${PAGE_INFO_FRAGMENT}
      }
    }
  }
`;

// GraphQL 뮤테이션 정의
export const ADD_PRODUCT = gql`
  mutation AddProduct($input: ProductInput!) {
    addProduct(input: $input) {
      ${PRODUCT_BASIC_FRAGMENT}
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($input: ProductUpdateInput!) {
    updateProduct(input: $input) {
      ${PRODUCT_BASIC_FRAGMENT}
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id)
  }
`;
export const GET_CATEGORIES = gql`
  query GetCategories($page: Int, $size: Int) {
    categories(page: $page, size: $size) {
        ${CATEGORY_EXTENDED_FRAGMENT}
      }
  }
`;

export const GET_CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      ${CATEGORY_EXTENDED_FRAGMENT}
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation AddCategory($input: CategoryInput!) {
    addCategory(input: $input) {
      ${CATEGORY_EXTENDED_FRAGMENT}
    }
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation UpdateCategory($input: CategoryUpdateInput!) {
    updateCategory(input: $input) {
      ${CATEGORY_EXTENDED_FRAGMENT}
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation DeleteCategory($id: ID!) {
    deleteCategory(id: $id)
  }
`;
