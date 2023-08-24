"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "@/styles/layout/user/layout.scss";
// import ScrollToTop from "react-scroll-to-top";
import AdminSidebar from "../adminLayout/Sidebar";
import AdminHeader from "../adminLayout/Header";
import NextTopLoader from "nextjs-toploader";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();

  // if (path.startsWith("/auth")) {
  //   return <>{children}</>;
  // }

  // if (path.startsWith("/admin")) {
  //   return (
  //     <>
  //       <NextTopLoader showSpinner={false} color="#5c59e8;" />
  //       <div className="adminLayout">
  //         <AdminSidebar />
  //         <div className="jd">
  //           <AdminHeader />
  //           <div>{children}</div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
  // return (
  //   <div className="layout">
  //     <Sidebar />
  //     {/* <ScrollToTop color="green" /> */}
  //     <div>
  //       <Header />

  //       {children}
  //     </div>
  //   </div>
  // );
  return <>{children}</>;
};

export default LayoutProvider;
