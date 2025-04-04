import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 tracking-wider uppercase">쇼핑</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/categories" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  카테고리
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  신상품
                </Link>
              </li>
              <li>
                <Link href="/best-sellers" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  인기상품
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  할인상품
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 tracking-wider uppercase">고객 지원</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/support" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  문의하기
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  반품 및 교환
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  배송 안내
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 tracking-wider uppercase">회사 정보</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  회사 소개
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  채용정보
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 tracking-wider uppercase">뉴스레터</h3>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">최신 소식과 할인 정보를 받아보세요.</p>
            <form className="mt-4 sm:flex">
              <input
                type="email"
                name="email-address"
                id="email-address"
                required
                className="appearance-none w-full px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs dark:bg-gray-700"
                placeholder="이메일 주소"
              />
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  구독하기
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">&copy; 2025 쇼핑몰, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
