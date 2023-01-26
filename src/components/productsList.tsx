import { Product } from "../services/product";

interface Props {
  productData: Product;
}

export const ProductCard = ({ productData }: Props) => {
  return (
    <>
      <div className="max-w-sm border border-gray-200 rounded-lg shadow bg-white pt-10">
          <img
            className="rounded-t-lg object-contain h-48 w-96"
            src={productData.image_url}
            alt=""
          />

        <div className="p-5">
    
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {productData.product_name}
            </h5>
          <p className="mb-3 font-normal text-gray-700 ">
            {productData.categories
              .split(",")
              .slice(0, 2)
              .map((category) => (
                <span className="bg-blue-100 text-blue-800 text-xs font-small mr-2 px-2.5 py-0.5 rounded whitespace-normal">
                  {category}
                </span>
              ))}
          </p>
          <a
            href={productData.url}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            Ler mais
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};
