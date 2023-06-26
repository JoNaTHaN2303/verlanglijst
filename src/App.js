import Product from "./components/Product"
import React from 'react'
import data from "./assets/items.json"

function App() {
  return (
    <div className="min-w-full min-h-screen bg-[#373A36] text-gray-400 text-lg font-mono font-semibold">
      <p className='flex justify-center items-center text-3xl md:text-4xl lg:text-5xl pt-10'>Verlanglijstje</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pt-10 pb-10 px-10 sm:px-15 lg:px-20'>
        {data.map((item, index) => (
          <Product
            key={index}
            naam={item.naam}
            info={item.info}
            foto={item.image}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
