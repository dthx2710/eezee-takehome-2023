import React from "react";

type ProductSortProps = {
  sort: number;
  setSort: (sort: number) => void;
};

const ProductSort = ({ sort, setSort }: ProductSortProps) => {
  return (
    // sort button group: Sort by Relevance, Sort by Price: High to Low, Sort by Price: Low to High
    <>
      <div className="flex justify-between">
        <div className="flex">
          <button className="bg-blue-100 hover:bg-blue-300 text-blue-800 py-2 px-4 rounded-l" onClick={()=>setSort(0)}>
            Sort by Relevance
          </button>
          <button className="bg-blue-100 hover:bg-blue-300 text-blue-800 py-2 px-4 rounded-r" onClick={()=>setSort(1)}>
            Sort by Price: High to Low
          </button>
          <button className="bg-blue-100 hover:bg-blue-300 text-blue-800 py-2 px-4 rounded-r" onClick={()=>setSort(2)}>
            Sort by Price: Low to High
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductSort;
