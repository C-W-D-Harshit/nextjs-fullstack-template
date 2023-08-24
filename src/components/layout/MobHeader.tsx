"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "@/styles/layout/user/mobHeader.scss";
import { useTheme } from "next-themes";
import Link from "next/link";
import { BiCart, BiCategory, BiHome } from "react-icons/bi";
import { FiFilm, FiTv } from "react-icons/fi";
import { TbPremiumRights } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { usePathname } from "next/navigation";

const MobHeader = () => {
  const [user, setUser] = useState<any>(null);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const path = usePathname();

  const getMe = async () => {
    try {
      const { data } = await axios.get("/api/v1/user/me");
      setUser(data.user);
    } catch (err: any) {}
  };

  useEffect(() => {
    getMe();
  }, []);
  // Assume 'light' is the initial theme

  if (theme === "dark") {
    return (
      <div className={"mobHeader"} style={{ backgroundColor: "#18181a" }}>
        <Link href={"/"} className={path === "/premium" ? "bt" : ""}>
          <TbPremiumRights />
        </Link>
        <Link href={"/categories"} className={path === "/movies" ? "bt" : ""}>
          <BiCategory />
        </Link>
        <Link href={"/"} className={path === "/" ? "bt" : ""}>
          <BiHome />
        </Link>
        <Link href={"/cart"} className={path === "/cart" ? "bt" : ""}>
          <BiCart />
          <span className="spa">3</span>
        </Link>
        <Link href={"/account"} className={path === "/account" ? "bt" : ""}>
          <BsPerson />
        </Link>
      </div>
    );
  } else {
    return (
      <div className={"mobHeader"}>
        <Link href={"/"} className={path === "/premium" ? "bt" : ""}>
          <TbPremiumRights />
        </Link>
        <Link href={"/categories"} className={path === "/movies" ? "bt" : ""}>
          <BiCategory />
        </Link>
        <Link href={"/"} className={path === "/" ? "bt" : ""}>
          <BiHome />
        </Link>
        <Link href={"/cart"} className={path === "/cart" ? "bt" : ""}>
          <BiCart />
          <span className="spa">3</span>
        </Link>
        <Link href={"/account"} className={path === "/account" ? "bt" : ""}>
          <BsPerson />
        </Link>
      </div>
    );
  }
};

export default MobHeader;
