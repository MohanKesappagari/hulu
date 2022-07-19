import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";
import { NAV_LIST } from "./HeaderNavList";
export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {NAV_LIST.map((val) => (
          <HeaderItem key={val.title} title={val.title} Icon={val.Icon} />
        ))}
      </div>
      <Image
        className="object-contain "
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
}
