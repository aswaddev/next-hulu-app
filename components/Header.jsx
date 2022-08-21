import Image from "next/image";
import HeaderItem from "./HeaderItem";
import Logo from "../public/vercel.svg";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="flex sm:flex-row flex-col items-center justify-between m-5">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <div className="lg:mr-12 mr-0">
        <Image
          className="object-contain"
          src={Logo}
          width={200}
          height={100}
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
