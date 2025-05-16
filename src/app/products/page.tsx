type Products = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
};

export default async function ProductsPage() {
  try {
    const response = await fetch("http://192.168.0.145:3001/products", {
      next: { revalidate: 10 }, // Revalidate every 10 seconds
      cache: "no-store", // Disable caching
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products: Products[] = await response.json();

    return (
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products &&
              products.map((product: Products) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src="https://picsum.photos/350/190"
                    alt={product.title}
                    className="w-full h-48 object-contain"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 text-gray-700">
                      {product.title}
                    </h2>
                    <p className="text-gray-600 text-base mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900 font-bold text-lg">
                        ${product.price}
                      </span>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  } catch (error: any) {
    console.error("Failed to fetch products", error);
    return <div>Error loading products: {error.message}</div>;
  }
}
