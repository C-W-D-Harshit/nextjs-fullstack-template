"use client";
import "@/styles/layout/user/header.scss";
import { Avatar, DropdownMenu } from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCart, BiHeart } from "react-icons/bi";
import Link from "next/link";

const Header = () => {
  const [user, setUser] = useState<any>(null);

  const getMe = async () => {
    try {
      const { data } = await axios.get("/api/v1/user/me");
      setUser(data.user);
    } catch (err: any) {}
  };

  useEffect(() => {
    getMe();
  }, []);

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/v1/user/logout");
      toast.success(data.message, {
        style: {
          fontSize: "1.8rem",
        },
      });
      setUser(null);
    } catch (err: any) {
      toast.error("Server Error!");
    }
  };

  return (
    <div className="header">
      <div className="header__search">
        <AiOutlineSearch />
        <input type="text" placeholder="Search for Products..." />
      </div>
      <div className="header__cart">
        <BiCart />
        <span>3</span>
      </div>
      <div className="header__cart">
        <BiHeart />
        <span className="span_v">2</span>
      </div>
      {user ? (
        <div className="header__user">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Avatar
                // src="https://img.freepik.com/free-icon/user_318-159711.jpg?t=st=1692683452~exp=1692684052~hmac=0381f3c76a65d3d422f451d557f6b190fc138d05ef076ff2e43877a2cf565877"
                src="/user.avif"
                fallback={user?.name?.charAt(0)}
                radius="full"
                size={"3"}
              />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>
                <Link href="/account">Account</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item onClick={logout}>Logout</DropdownMenu.Item>
              {user.role === "admin" && (
                <>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>
                    <Link href="/admin">Admin</Link>
                  </DropdownMenu.Item>
                </>
              )}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      ) : (
        <div className="header__user">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Avatar
                fallback="s"
                // src="https://img.freepik.com/free-icon/user_318-159711.jpg?t=st=1692683452~exp=1692684052~hmac=0381f3c76a65d3d422f451d557f6b190fc138d05ef076ff2e43877a2cf565877"
                src="/user.avif"
                radius="full"
                size={"3"}
              />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>
                <Link href="/auth/login">Login</Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      )}
    </div>
  );
};

export default Header;
