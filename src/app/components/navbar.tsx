import denso from "@/app/assets/denso-logo.png"
import Image from "next/image";
import React from "react";
export const Navbar = () => {
  return <div style={{ borderBottom: "3px solid red", display: "flex", }}>
    <div>
      <Image
        src={denso}
        alt="denso"
        width={100}
        height={50}
        quality={100}
        priority={true}>
      </Image>
    </div>
  </div>;
};
export default Navbar;