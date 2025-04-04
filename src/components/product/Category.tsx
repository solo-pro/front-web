import { BaseCategory } from "@/types/products";
import Link from "next/link";

export default function Category({ category }: { category: BaseCategory }) {
  return (
    <Link href={`/categories/${category.id}`} className="group bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-200 dark:hover:bg-gray-700">
      <p className="mt-4 text-gray-700 dark:text-gray-300 font-medium">{category.name}</p>
    </Link>
  );
}
