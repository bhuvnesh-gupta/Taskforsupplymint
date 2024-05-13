import * as React from "react";
import Bottombar from "./Bottombar";

const ProductCard = ({ product }) => {
  const {
    image,
    name,
    icon1,
    icon2,
    logo,
    color,
    multiplier,
    designNumber,
    size,
    inStock,
    price,
    originalPrice,
    sizeImage,
    moreSizes,
    arrowIcon,
  } = product;

  return (
    <div className="flex flex-col max-w-xs sm:max-w-sm md:max-w-md ">
      {/* Product Image Section */}
      <div className="flex overflow-hidden relative flex-col pb-11 w-full aspect-[1.13]">
        <img loading="lazy" src={image} alt={name} className="object-cover w-full absolute inset-0 size-full" />
        {/* Discount Badge Section */}
        <div className="flex relative gap-5 justify-between items-start px-2 pt-1.5 pb-5 w-full">
          <div className="flex flex-col justify-center">
            <div className="shrink-0 bg-white border-2 border-solid border-slate-300 h-[18px] w-[18px]" />
          </div>
          <div className="justify-center px-1 text-xs font-semibold text-white rounded-sm bg-slate-900">10% Off</div>
        </div>
        {/* Icon Section */}
        <div className="flex relative gap-5 justify-between mt-5 w-full">
          <img loading="lazy" src={icon1} alt="" className="shrink-0 w-6 aspect-square" />
          <img loading="lazy" src={icon2} alt="" className="shrink-0 w-6 aspect-square" />
        </div>
        {/* Brand Logo Section */}
        <img loading="lazy" src={logo} alt={name} className="mt-11 ml-3.5 aspect-[7.69] w-[31px]" />
      </div>
      {/* Product Details Section */}
      <div className="flex z-10 flex-col px-3 py-3 mt-0 w-full bg-white">
        {/* Product Info */}
        <div className="flex gap-1.5 text-xs font-medium text-slate-900">
          <div className="flex flex-col justify-center">
            <div className="justify-center items-start px-1 bg-white rounded-sm border border-amber-500 border-solid">{color}</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="justify-center px-1 bg-white rounded-sm border border-solid border-zinc-200">
              Multiplier: {multiplier}
            </div>
          </div>
        </div>
        <div className="mt-3.5 text-xs text-zinc-500">Item Name</div>
        <div className="mt-2.5 text-xs font-medium text-slate-900">{name}</div>
        <div className="mt-2.5 text-xs text-zinc-500">Design Number</div>
        <div className="mt-1.5 text-xs text-slate-900">{designNumber}</div>
        {/* Size and Stock Section */}
        <div className="flex gap-1.5 mt-5 text-xs font-semibold text-slate-900">
          <div className="justify-center px-1 whitespace-nowrap rounded-sm bg-zinc-200">{size}</div>
          <div className="justify-center px-1 rounded-sm bg-zinc-200">Instock: {inStock}</div>
        </div>
        {/* Price Section */}
        <div className="flex gap-3.5 mt-4 text-xs">
          <div className="font-semibold text-slate-900">{price}</div>
          <div className="flex-auto font-medium text-zinc-400">{originalPrice}</div>
        </div>
        {/* Size Image and More Section */}
        <div className="flex gap-2 mt-4">
          <img loading="lazy" src={sizeImage} alt="" className="shrink-0 w-8 border border-solid aspect-[1.06] border-slate-200" />
          <div className="flex gap-5 justify-between px-2.5 bg-zinc-300 bg-opacity-50">
            <div className="flex gap-2.5 my-auto text-xs text-slate-900">
              <div className="my-auto font-bold">{size}</div>
              <div className="justify-center px-1.5 py-1.5 font-medium bg-white rounded-[40px]">+{moreSizes} More</div>
            </div>
            <div className="flex gap-2">
              <div className="shrink-0 w-px border border-solid bg-neutral-200 border-neutral-200 h-[30px]" />
              <img loading="lazy" src={arrowIcon} alt="" className="shrink-0 my-auto w-3 aspect-square" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Product component
const Product = () => {
  const products = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/74191066db2d01e749360288bcd8225330896694297804b1bdba4ea4e7e3bfd8?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      name: "Mens white check Shirt regular fit",
      icon1:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d5f648b1792ca64d83237c726cda71461ab36f66fbaa01384ef2b24db2616e71?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      icon2:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dc3ddd20831eb82d6c2655528632f8ef1338c2c5d97c12f26e75c803d1c8491b?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      logo:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/44345467e1e69e0861b543c116f4c1c04e575841da76c04751fa0d1d530ab07c?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      brand: "Brand Logo",
      color: "Mustard Yellow",
      multiplier: 5,
      designNumber: "DN098234839",
      size: "XL",
      inStock: 100,
      price: "₹ 799.67",
      originalPrice: "₹ 1299.67",
      sizeImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/455b0d333802d83275247a455cd1e32aec6962504aa837b09e2075a7b31815ef?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      moreSizes: 5,
      arrowIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b59a3b6e5e817d7657d82c7c2b738e996603f50057e63a357cb18adab8861ca7?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/74191066db2d01e749360288bcd8225330896694297804b1bdba4ea4e7e3bfd8?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      name: "Mens white check Shirt regular fit",
      icon1:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d5f648b1792ca64d83237c726cda71461ab36f66fbaa01384ef2b24db2616e71?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      icon2:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dc3ddd20831eb82d6c2655528632f8ef1338c2c5d97c12f26e75c803d1c8491b?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      logo:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/44345467e1e69e0861b543c116f4c1c04e575841da76c04751fa0d1d530ab07c?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      brand: "Brand Logo",
      color: "Mustard Yellow",
      multiplier: 5,
      designNumber: "DN098234839",
      size: "XL",
      inStock: 100,
      price: "₹ 799.67",
      originalPrice: "₹ 1299.67",
      sizeImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/455b0d333802d83275247a455cd1e32aec6962504aa837b09e2075a7b31815ef?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      moreSizes: 5,
      arrowIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b59a3b6e5e817d7657d82c7c2b738e996603f50057e63a357cb18adab8861ca7?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/74191066db2d01e749360288bcd8225330896694297804b1bdba4ea4e7e3bfd8?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      name: "Mens white check Shirt regular fit",
      icon1:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d5f648b1792ca64d83237c726cda71461ab36f66fbaa01384ef2b24db2616e71?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      icon2:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dc3ddd20831eb82d6c2655528632f8ef1338c2c5d97c12f26e75c803d1c8491b?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      logo:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/44345467e1e69e0861b543c116f4c1c04e575841da76c04751fa0d1d530ab07c?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      brand: "Brand Logo",
      color: "Mustard Yellow",
      multiplier: 5,
      designNumber: "DN098234839",
      size: "XL",
      inStock: 100,
      price: "₹ 799.67",
      originalPrice: "₹ 1299.67",
      sizeImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/455b0d333802d83275247a455cd1e32aec6962504aa837b09e2075a7b31815ef?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      moreSizes: 5,
      arrowIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b59a3b6e5e817d7657d82c7c2b738e996603f50057e63a357cb18adab8861ca7?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/74191066db2d01e749360288bcd8225330896694297804b1bdba4ea4e7e3bfd8?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      name: "Mens white check Shirt regular fit",
      icon1:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d5f648b1792ca64d83237c726cda71461ab36f66fbaa01384ef2b24db2616e71?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      icon2:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dc3ddd20831eb82d6c2655528632f8ef1338c2c5d97c12f26e75c803d1c8491b?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      logo:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/44345467e1e69e0861b543c116f4c1c04e575841da76c04751fa0d1d530ab07c?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      brand: "Brand Logo",
      color: "Mustard Yellow",
      multiplier: 5,
      designNumber: "DN098234839",
      size: "XL",
      inStock: 100,
      price: "₹ 799.67",
      originalPrice: "₹ 1299.67",
      sizeImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/455b0d333802d83275247a455cd1e32aec6962504aa837b09e2075a7b31815ef?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      moreSizes: 5,
      arrowIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b59a3b6e5e817d7657d82c7c2b738e996603f50057e63a357cb18adab8861ca7?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
    },

    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/74191066db2d01e749360288bcd8225330896694297804b1bdba4ea4e7e3bfd8?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      name: "Mens white check Shirt regular fit",
      icon1:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d5f648b1792ca64d83237c726cda71461ab36f66fbaa01384ef2b24db2616e71?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      icon2:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dc3ddd20831eb82d6c2655528632f8ef1338c2c5d97c12f26e75c803d1c8491b?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      logo:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/44345467e1e69e0861b543c116f4c1c04e575841da76c04751fa0d1d530ab07c?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      brand: "Brand Logo",
      color: "Mustard Yellow",
      multiplier: 5,
      designNumber: "DN098234839",
      size: "XL",
      inStock: 100,
      price: "₹ 799.67",
      originalPrice: "₹ 1299.67",
      sizeImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/455b0d333802d83275247a455cd1e32aec6962504aa837b09e2075a7b31815ef?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
      moreSizes: 5,
      arrowIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b59a3b6e5e817d7657d82c7c2b738e996603f50057e63a357cb18adab8861ca7?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
    },
   
  ];

  return (
    <div className="max-w-screen-xl  ">
    <Bottombar />
    <main className="w-[1062px]">
      <section className="grid grid-cols-1 m-2 mt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>
    </main>
    </div>
  );
};

export default Product;