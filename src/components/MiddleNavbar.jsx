import * as React from "react";

const HomeIcon = () => (
  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/81b4add049df5d6563baed720205637f8d84feafc298512e661e74d13686e65e?apiKey=7f64cdb42b7f479bb38f13352d21d330&" alt="Home icon" className="shrink-0 my-auto w-4 aspect-square" />
);

const ChevronRightIcon = () => (
  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/625f3f80d2d8d9dfb9e53fd88b4f2aca21d21c7c803cc3b80ba016125255ee55?apiKey=7f64cdb42b7f479bb38f13352d21d330&" alt="Chevron right icon" className="shrink-0 self-stretch my-auto w-3 aspect-square" />
);

const DropdownIcon = () => (
  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9341e006266451afc8f0a7872bebc828490621c43c81007c71ebd99417a11506?apiKey=7f64cdb42b7f479bb38f13352d21d330&" alt="Dropdown icon" className="shrink-0 self-start aspect-square w-[18px]" />
);

const BreadcrumbItem = ({ children, icon }) => (
  <div className="flex gap-2.5 self-stretch px-5 my-auto whitespace-nowrap rounded-md">
    {icon}
    <div>{children}</div>
  </div>
);

const BreadcrumbDropdown = ({ children }) => (
  <div className="flex gap-1 self-stretch px-2 py-1.5 rounded-lg  border-solid">
    <div>{children}</div>
    <DropdownIcon />
  </div>
);

function MiddleNavbar() {
  return (
    <div className="flex flex-row justify-between">
    <nav aria-label="Breadcrumb" className="max-sm:hidden flex gap-1.5 items-center text-xs font-medium tracking-normal leading-5 text-center text-gray-600">
      <BreadcrumbItem icon={<HomeIcon />}>Home</BreadcrumbItem>
      <ChevronRightIcon />
      <BreadcrumbDropdown>Sales Order</BreadcrumbDropdown>
      <ChevronRightIcon />
      <div className="self-stretch my-auto font-semibold text-gray-800">Product Catalogue</div>
    </nav>
    <button className="bg-blue-500 rounded text-white w-32 h-8 m-2 hover:bg-blue-400">Place Order</button>
    </div>
  );
}

export default MiddleNavbar;