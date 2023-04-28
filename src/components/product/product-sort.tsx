import React from 'react'

const ProductSort = () => {
  return (
    // sort button group: Sort by Relevance, Sort by Price: High to Low, Sort by Price: Low to High

    <div className="flex justify-between">
        <div className="flex">
            <button className="bg-blue-100 hover:bg-blue-300 text-blue-800 py-2 px-4 rounded-l">
                Sort by Relevance
            </button>
            <button className="bg-blue-100 hover:bg-blue-300 text-blue-800 py-2 px-4 rounded-r">
                Sort by Price: High to Low
            </button>
            <button className="bg-blue-100 hover:bg-blue-300 text-blue-800 py-2 px-4 rounded-r">
                Sort by Price: Low to High
            </button>
        </div>
    </div>
  )
}

export default ProductSort