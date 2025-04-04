import CategoryList from "@/components/product/CategoryList";
import Image from "next/image";
import Link from "next/link";

// 임시 데이터 타입 정의
type Product = {
  id: number;
  name: string;
  price: number;
  discountPrice?: number;
  image: string;
  category: string;
};

// 임시 데이터
const featuredProducts: Product[] = [
  { id: 1, name: "프리미엄 후드티", price: 59000, image: "https://s.pstatic.net/static/www/mobile/edit/20240112_1095/upload_1705057885416AaxUM.png", category: "의류" },
  { id: 2, name: "캐주얼 데님 팬츠", price: 49000, discountPrice: 39000, image: "https://s.pstatic.net/static/www/mobile/edit/20240112_1095/upload_1705057885416AaxUM.png", category: "의류" },
  { id: 3, name: "스포츠 워치", price: 120000, image: "https://s.pstatic.net/static/www/mobile/edit/20240112_1095/upload_1705057885416AaxUM.png", category: "액세서리" },
  { id: 4, name: "블루투스 헤드폰", price: 89000, image: "https://s.pstatic.net/static/www/mobile/edit/20240112_1095/upload_1705057885416AaxUM.png", category: "전자기기" },
];

const newArrivals: Product[] = [
  { id: 5, name: "울 코트", price: 159000, image: "https://s.pstatic.net/static/www/mobile/edit/20240112_1095/upload_1705057885416AaxUM.png", category: "의류" },
  { id: 6, name: "니트 스웨터", price: 69000, image: "https://s.pstatic.net/static/www/mobile/edit/20240112_1095/upload_1705057885416AaxUM.png", category: "의류" },
  { id: 7, name: "가죽 크로스백", price: 129000, image: "https://s.pstatic.net/static/www/mobile/edit/20240112_1095/upload_1705057885416AaxUM.png", category: "액세서리" },
  { id: 8, name: "스마트 스피커", price: 99000, discountPrice: 79000, image: "https://s.pstatic.net/static/www/mobile/edit/20240112_1095/upload_1705057885416AaxUM.png", category: "전자기기" },
];

// 개별 상품 카드 컴포넌트
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-60">
        <Image src={product.image} alt={product.name} width={300} height={400} className="h-full w-full object-cover object-center" />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 dark:text-gray-300">
            <Link href={`/product/${product.id}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{product.category}</p>
        </div>
        <div>
          {product.discountPrice ? (
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{product.discountPrice.toLocaleString()}원</p>
              <p className="text-xs text-gray-500 line-through dark:text-gray-400">{product.price.toLocaleString()}원</p>
            </div>
          ) : (
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{product.price.toLocaleString()}원</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* 히어로 섹션 */}
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 h-[60vh] flex items-center justify-center px-6 sm:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">시즌 오프 세일</h1>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">최대 50% 할인된 가격으로 올해의 트렌드를 만나보세요.</p>
              <div className="mt-8">
                <Link href="/sale" className="inline-block rounded-md bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700">
                  세일 상품 보기
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-sky-100 to-indigo-100 dark:from-gray-800 dark:to-gray-700"></div>
      </div>

      <CategoryList />

      {/* 추천 상품 섹션 */}
      <div className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">추천 상품</h2>
          <Link href="/featured" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
            더 보기 &rarr;
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* 신상품 섹션 */}
      <div className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">신상품</h2>
          <Link href="/new-arrivals" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
            더 보기 &rarr;
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* 프로모션 배너 */}
      <div className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-full w-full object-cover"></div>
          </div>
          <div className="relative px-6 py-16 sm:px-12 sm:py-24">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">무료 배송 이벤트</span>
            </h2>
            <p className="mt-6 max-w-lg text-xl text-indigo-100">5만원 이상 구매 시 전국 무료 배송! 이번 주말까지만 진행되는 특별 이벤트를 놓치지 마세요.</p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/promotions"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
                >
                  이벤트 자세히 보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 아래 여백 */}
      <div className="py-16"></div>
    </div>
  );
}
