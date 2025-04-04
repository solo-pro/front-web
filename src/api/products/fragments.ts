export const PRODUCT_BASIC_FRAGMENT = `
  id
  name
  price
  stock
`;

export const CATEGORY_BASIC_FRAGMENT = `
  id
  name
`;

export const PAGE_INFO_FRAGMENT = `
  totalItems
  totalPages
  currentPage
  hasNextPage
`;

// 확장 프래그먼트 (선택적 필드 포함)
export const PRODUCT_EXTENDED_FRAGMENT = `
  ${PRODUCT_BASIC_FRAGMENT}
  mainImage
  description
  createdTimeStamps
  updatedTimeStamps
`;

export const PRODUCT_FULL_FRAGMENT = `
  ${PRODUCT_EXTENDED_FRAGMENT}
  category {
    ${CATEGORY_BASIC_FRAGMENT}
  }
`;

export const CATEGORY_EXTENDED_FRAGMENT = `
  ${CATEGORY_BASIC_FRAGMENT}
  description
  createdTimeStamps
  updatedTimeStamps
`;
