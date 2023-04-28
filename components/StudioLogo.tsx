import React from "react";
import Image from "next/image";
import logo from "../assets/headphones_c_1.webp";

const StudioLogo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-md object-cover bg-white"
        height={50}
        width={50}
        src={logo}
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
};

export default StudioLogo;
