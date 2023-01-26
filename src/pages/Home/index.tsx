import React from "react";
import { useInfiniteQuery, } from "react-query";
import { getProducts, Product } from "../../services/product";
import { ProductCard } from "../../components/productsList";


export const Home = () => {
  const [limit] = React.useState(70);

  const {

    data,
    isFetching,
    fetchNextPage,
    isSuccess,
  } = useInfiniteQuery(
    ["products", { limit }],
    ({ pageParam }) => getProducts(limit, pageParam),
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage, pages) => {
        console.log(lastPage);
        return lastPage.next_cursor;
      },
    }
  );

  if (isFetching) {
    return (
      <>
        <h1>Carregando!</h1>
      </>
    );
  }

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {isSuccess &&
              data?.pages.map((group, i) => (
                <React.Fragment key={i}>
                  {group.data.map(
                    (product: Product) =>
                      product.image_url !== "" &&
                      product.categories !== "" && (
                        <ProductCard productData={product} key={product.code} />
                      )
                  )}
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
      <div className="flex flex-grow-1 justify-center">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
          onClick={() => fetchNextPage()}
        >
          CARREGA CARALHO
        </button>
      </div>
    </div>
  );
};
