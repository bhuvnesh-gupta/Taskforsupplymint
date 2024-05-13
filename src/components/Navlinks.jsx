import * as React from "react";
import help from "../assets/help.svg";
import upload from "../assets/upload.svg";
import messages from "../assets/messages.svg";
import bell from "../assets/bell.svg";

const ProfileImage = ({ src, alt, className }) => {
  return <img loading="lazy" src={src} alt={alt} className={className} />;
};

const Divider = () => {
  return (
    <div className="shrink-0 self-stretch my-auto w-px border border-solid bg-slate-300 border-slate-300 h-[17px]" />
  );
};

const ProfileInfo = () => {
  return (
    <div className="flex flex-col sm:flex-col self-stretch max-sm:hidden">
      <div className="flex gap-1 text-sm font-semibold text-blue-950">
        <div className="grow my-auto">Vmart-Procurement Team</div>
        <ProfileImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/85640eb30ddde1e0b4be611b95fa041e2a9ad9b2a60f5abadde41db3b80acc66?apiKey=7f64cdb42b7f479bb38f13352d21d330&"
          alt="Verified badge"
          className="shrink-0 aspect-square w-[18px]"
        />
      </div>
      <div className="mt-1.5 text-xs font-medium text-slate-500">
        Ashish Kumar Singla
      </div>
    </div>
  );
};

const Navlinks = () => {
  return (
    <div className="flex flex-wrap gap-3.5 bg-slate-50  max-md:flex-wrap">
      <div>
        <ul className="flex">
          <li className="mr-4">
            <a
              className="inline-block border-slate-50 rounded py-2 px-4 bg-slate-50 hover:bg-slate-200 text-black"
              href="/">
              <img src={help} alt="help" />
            </a>
          </li>
          <li className="mr-4">
            <a
              className="inline-block border-white rounded py-2 px-4 bg-slate-50 hover:bg-slate-200 text-black"
              href="/">
              <img src={upload} alt="upload" />
            </a>
          </li>
          <li className="mr-4">
            <a
              className="inline-block border-white rounded py-2 px-4 bg-slate-50 hover:bg-slate-200 text-black"
              href="/">
              <img src={messages} alt="messages" />
            </a>
          </li>
          <li className="mr-4">
            <a
              className="inline-block border-white rounded py-2 px-4 bg-slate-50 hover:bg-slate-200 text-black"
              href="/">
              <img src={bell} alt="bell" />
            </a>
          </li>
        </ul>
      </div>
      <Divider />
      <ProfileImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aae8fc6cd40b553f7eb407512704be969eacff8adf23316ec437bf9348660e4f?apiKey=7f64cdb42b7f479bb38f13352d21d330&"
        alt="Company logo"
        className="max-sm:hidden shrink-0 self-stretch my-auto aspect-square w-[31px]"
      />
      <ProfileInfo />
    </div>
  );
};

export default Navlinks;