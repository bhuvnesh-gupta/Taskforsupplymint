import * as React from "react";

function CustomerInfo({ customer }) {
  return (
    <div className="flex gap-2.5 py-2.5 pr-20 pl-3 bg-gray-100">
      <img
        src={customer.logo}
        alt={`${customer.name} logo`}
        className="shrink-0 self-start w-4 aspect-square"
      />
      <div className="flex flex-col">
        <div className="text-xs text-zinc-500">Customer</div>
        <div className="mt-2 text-xs font-semibold text-slate-900">
          {customer.name}
        </div>
      </div>
    </div>
  );
}

function LocationInfo({ title, location, icon }) {
  return (
    <div className="flex flex-col items-start py-2 pr-16 pl-3 mt-2.5 w-full bg-gray-100">
      <div className="flex gap-2 text-xs text-zinc-500">
        <img
          src={icon}
          alt={`${title} icon`}
          className="shrink-0 self-start w-5 aspect-[2.86]"
        />
        <div className="flex-auto">{title}</div>
      </div>
      <div className="mt-1.5 text-xs font-semibold text-slate-900">
        {location}
      </div>
    </div>
  );
}

function PriceItem({ label, value }) {
  return (
    <div className="flex gap-5 justify-between mt-5 text-zinc-500">
      <div className="text-xs">{label}</div>
      <div className="text-sm font-medium text-right">{value}</div>
    </div>
  );
}

function PriceBreakupItem({ label, value }) {
  return (
    <>
      <div>{label}</div>
      <div className="mt-5">{value}</div> 
    </>
  );
}

function OrderSummary() {
  const customer = {
    name: "SRG India Pvt Ltd",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d51fdd055db7b9238a9b8cb057e9bc1666b7009d89824ea94a8db5ff716fa03?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
  };

  const locations = [
    {
      title: "Delivery Location",
      location: "Gurugram-017838",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f782b7befa6d60270b44f6620e378fe4d9a0090e3069a53ec1703d25709b49cc?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
    },
    {
      title: "Dispatch Location", 
      location: "Gurugram-017838",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/301144a15be63884c80f228a1bea6ee6667f3952a0a2890c6d7b4168b5ffc720?apiKey=7f64cdb42b7f479bb38f13352d21d330&",
    },
  ];

  const priceItems = [
    { label: "Total Quantity", value: 21 },
    { label: "Total Items", value: 7 },
    { label: "Order Quantity", value: 21 },
  ];

  const priceBreakupItems = [
    { label: "IGST", value: "₹ 230.80" },
    { label: "CGST", value: "₹ 230.80" },
    { label: "SGST", value: "₹ 230.80" },
    { label: "CESS", value: "₹ 0.00" },
  ];

  return (
    <div className="flex flex-col p-2 sm:p-3.5 bg-slate-50 px-3.5 mt-2 pt-3.5 pb-20  max-w-[249px]">
      <CustomerInfo customer={customer} />
      
      {locations.map((location, index) => (
        <LocationInfo key={index} {...location} />
      ))}

      <div className="justify-center items-center px-16 py-2.5 mt-2.5 text-xs font-medium bg-gray-100 text-zinc-500">
        Show More
      </div>

      <hr className="shrink-0 mt-4 h-px border border-solid bg-zinc-100 border-zinc-100" />

      <h2 className="mt-4 text-xs font-semibold tracking-wider uppercase text-slate-900">
        Summary
      </h2>

      <div className="justify-center px-2 py-1.5 mt-3 text-sm font-semibold whitespace-nowrap bg-zinc-300 bg-opacity-50 text-slate-900">
        #SO_DRAFT_00000017_2024
      </div>

      {priceItems.map((item, index) => (
        <PriceItem key={index} {...item} />
      ))}

      <div className="flex gap-5 justify-between px-3 py-4 mt-3 rounded-md bg-slate-50 text-slate-900">
        <div className="text-xs">Total Bag Price</div>
        <div className="text-sm font-semibold text-right">₹ 23031.808</div>
      </div>

      <hr className="shrink-0 mt-4 h-px border border-solid bg-zinc-100 border-zinc-100" />

      <h2 className="mt-3.5 text-xs font-semibold tracking-wider uppercase text-slate-900">
        Price Breakup
      </h2>

      <div className="flex gap-5 justify-between px-px mt-4 text-zinc-500">
        <div className="flex flex-col text-xs whitespace-nowrap">
          {priceBreakupItems.map((item, index) => (
            <PriceBreakupItem key={index} {...item} />
          ))}
        </div>
        <div className="flex flex-col text-sm font-medium text-right">
          {priceBreakupItems.map((item, index) => (
            <PriceBreakupItem key={index} {...item} />
          ))}
        </div>
      </div>

      <div className="flex gap-5 px-2.5 py-3 mt-4 w-full rounded-md bg-slate-50 text-stone-500 max-sm:w-full">
        <div className="flex flex-1 gap-2 text-xs font-medium whitespace-nowrap">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c7b7931615502d9389534a98783720102adc8fe7416f64bf7c0c1fa9aef9888?apiKey=7f64cdb42b7f479bb38f13352d21d330&"
            alt="Discount icon"
            className="shrink-0 aspect-[1.06] w-[17px]"
          />
          <div className="my-auto">Discount</div>
        </div>
        <div className="my-auto text-sm font-semibold text-right">₹ 690.00</div>
      </div>

      <div className="flex gap-5 justify-between px-3 py-4 mt-1.5 rounded-md bg-slate-50 text-slate-900">
        <div className="text-xs">Total Amount</div>
        <div className="text-sm font-semibold text-right">₹ 23031.808</div>
      </div>
    </div>
  );
}

export default OrderSummary;