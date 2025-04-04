// 공통 기본 엔티티 (ID와 타임스탬프)
export interface BaseEntity {
  id: string;
  createdTimeStamps?: string;
  updatedTimeStamps?: string;
}

// 페이지네이션 정보
export interface PageInfo {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
}
