"use client";
import { useState } from "react";
import { BaseCategory } from "@/types/products";
import Category from "./Category";
import { GET_CATEGORIES } from "@/api/products/queries";
import { useQuery } from "@apollo/client";

interface CategoriesResponse {
  categories: BaseCategory[];
}

export default function CategoryList() {
  const [page, setPage] = useState(0);
  const pageSize = 8;
  const totalPagesEstimate = 10; // 총 페이지 수 추정치 (API에서 제공하지 않는 경우)

  const { loading, error, data } = useQuery<CategoriesResponse>(GET_CATEGORIES, {
    variables: {
      page,
      size: pageSize,
    },
  });

  // 이전 페이지로 이동
  const handlePrevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  // 다음 페이지로 이동
  const handleNextPage = () => {
    // 데이터가 pageSize보다 작으면 마지막 페이지로 간주
    if (data?.categories && data.categories.length === pageSize) {
      setPage(page + 1);
    }
  };

  // 특정 페이지로 이동
  const handlePageClick = (pageNumber: number) => {
    setPage(pageNumber);
  };

  if (loading) return <p className="text-center text-gray-500 dark:text-gray-400">Loading...</p>;
  if (error) return <p className="text-center text-red-500 dark:text-red-400">Error: {error.message}</p>;
  if (!data || !data.categories) return <p className="text-center text-gray-500 dark:text-gray-400">No categories found</p>;
  if (data.categories.length === 0) {
    // 첫 페이지가 아닌데 결과가 없으면 이전 페이지로 돌아가기
    if (page > 0) {
      setPage(page - 1);
      return <p className="text-center text-gray-500 dark:text-gray-400">Loading previous page...</p>;
    }
    return <p className="text-center text-gray-500 dark:text-gray-400">No categories available</p>;
  }

  const categories = data.categories;
  const currentPage = page;
  const hasNextPage = categories.length === pageSize; // 현재 페이지에 항목이 pageSize만큼 있으면 다음 페이지가 있을 가능성이 높음

  // 최대 페이지 수 계산 (추정치)
  // 실제로는 API가 총 항목 수를 제공하는 것이 좋지만, 없는 경우 현재 페이지 기반으로 추정
  const estimatedTotalPages = Math.max(totalPagesEstimate, page + (hasNextPage ? 2 : 1));

  // 페이지 번호 배열 생성 (최대 5개까지만 표시)
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    const totalPages = estimatedTotalPages;

    const startPage = Math.max(0, Math.min(currentPage - Math.floor(maxVisiblePages / 2), totalPages - maxVisiblePages));

    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();
  const totalPages = estimatedTotalPages;

  return (
    <div className="mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">카테고리</h2>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>

      {/* 페이지네이션 UI */}
      <div className="mt-8 flex items-center justify-center space-x-1">
        {/* 이전 페이지 버튼 */}
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className={`relative inline-flex items-center px-4 py-2 border ${
            currentPage === 0 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white text-gray-700 hover:bg-gray-50"
          } text-sm font-medium rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300`}
        >
          이전
        </button>

        {/* 첫 페이지 표시 및 생략 부호 */}
        {pageNumbers[0] > 0 && (
          <>
            <button
              onClick={() => handlePageClick(0)}
              className="relative inline-flex items-center px-4 py-2 border bg-white text-gray-700 hover:bg-gray-50 text-sm font-medium rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
            >
              1
            </button>
            {pageNumbers[0] > 1 && (
              <span className="relative inline-flex items-center px-4 py-2 border bg-white text-gray-700 text-sm font-medium dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">...</span>
            )}
          </>
        )}

        {/* 페이지 번호 버튼 */}
        {pageNumbers.map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => handlePageClick(pageNum)}
            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md ${
              pageNum === currentPage ? "bg-blue-600 text-white dark:bg-blue-700" : "bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
            }`}
          >
            {pageNum + 1}
          </button>
        ))}

        {/* 마지막 페이지 표시 및 생략 부호 */}
        {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
          <>
            {pageNumbers[pageNumbers.length - 1] < totalPages - 2 && (
              <span className="relative inline-flex items-center px-4 py-2 border bg-white text-gray-700 text-sm font-medium dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">...</span>
            )}
            <button
              onClick={() => handlePageClick(totalPages - 1)}
              className="relative inline-flex items-center px-4 py-2 border bg-white text-gray-700 hover:bg-gray-50 text-sm font-medium rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
            >
              {totalPages}
            </button>
          </>
        )}

        {/* 다음 페이지 버튼 */}
        <button
          onClick={handleNextPage}
          disabled={!hasNextPage}
          className={`relative inline-flex items-center px-4 py-2 border ${
            !hasNextPage ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white text-gray-700 hover:bg-gray-50"
          } text-sm font-medium rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300`}
        >
          다음
        </button>
      </div>

      {/* 현재 페이지/전체 페이지 정보 */}
      <div className="mt-3 text-sm text-center text-gray-500 dark:text-gray-400">
        {currentPage + 1} / {totalPages} 페이지
      </div>
    </div>
  );
}
