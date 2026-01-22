import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h2 className="text-2xl font-semibold">Welcome to B2B Orders Dashboard</h2>
      <p className="text-gray-600 dark:text-gray-300">
        Click below to see the orders list.
      </p>
      <Link
        href="/orders"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Orders
      </Link>
    </div>
  );
}
