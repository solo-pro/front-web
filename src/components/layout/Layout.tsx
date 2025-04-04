export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <svg className="animate-spin h-10 w-10 text-gray-900 dark:text-white" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4" stroke="currentColor" fill="none"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
    </div>
  );
}
