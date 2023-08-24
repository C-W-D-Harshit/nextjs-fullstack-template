"use client";
import Link from "next/link";
import "@/styles/adminLayout/sidebar.scss";
import ThemeSwitch from "../ui/user/sidebar/Switch";
import {
  MdOutlineCategory,
  MdOutlineDashboard,
  MdPayments,
} from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { BsFillPersonBadgeFill, BsHandbag } from "react-icons/bs";

const AdminSidebar = () => {
  const path = usePathname();
  const data = [
    {
      icon: <MdOutlineDashboard />,
      title: "Dashboard",
      link: "/admin",
    },
    {
      icon: <FiShoppingCart />,
      title: "Orders",
      link: "/admin/orders",
      not: 2,
    },
    {
      icon: <BsHandbag />,
      title: "Products",
      link: "/admin/products",
    },
    {
      icon: <MdOutlineCategory />,
      title: "Categories",
      link: "/admin/categories",
    },
    {
      icon: <BsFillPersonBadgeFill />,
      title: "Customers",
      link: "/admin/customers",
    },
    {
      icon: <MdPayments />,
      title: "Transactions",
      link: "/admin/transactions",
    },
  ];
  return (
    <div className="adminSidebar">
      <Link href="/admin" className="adminSidebar__logo">
        <p>Vista Cart</p>
      </Link>
      <div className="adminSidebar_menu">
        {data?.map((dat: any, i: number) => {
          if (i > 0) {
            return (
              <Link
                key={i}
                href={dat.link}
                className={
                  dat.link === path || path.startsWith(dat.link + "/")
                    ? "ads"
                    : ""
                }
              >
                <div>
                  {dat.icon}
                  <p>{dat.title}</p>
                </div>
                {dat.not && (
                  <div className="huds">
                    <p>{dat.not}</p>
                  </div>
                )}
                <div />
              </Link>
            );
          }
          return (
            <Link
              key={i}
              href={dat.link}
              className={dat.link === path ? "ads" : ""}
            >
              <div>
                {dat.icon}
                <p>{dat.title}</p>
              </div>
              {dat.not && (
                <div className="huds">
                  <p>{dat.not}</p>
                </div>
              )}
              <div />
            </Link>
          );
        })}
      </div>
      <div className="sidebar__dark">
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default AdminSidebar;
