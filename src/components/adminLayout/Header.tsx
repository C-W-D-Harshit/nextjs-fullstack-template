"use client";
import "@/styles/adminLayout/header.scss";
import { Avatar, DropdownMenu } from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Header = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

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
      router.push("/");
    } catch (err: any) {
      toast.error("Server Error!");
    }
  };

  return (
    <div className="adminHeader">
      {user ? (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <div className="header__user">
              <Avatar
                // src="https://img.freepik.com/free-icon/user_318-159711.jpg?t=st=1692683452~exp=1692684052~hmac=0381f3c76a65d3d422f451d557f6b190fc138d05ef076ff2e43877a2cf565877"
                src="/user.avif"
                fallback={user?.name?.charAt(0)}
                radius="full"
                size={"3"}
              />
              <div>
                <div>
                  <p>{user.name}</p>
                  <AiOutlineDown />
                </div>
                <p>{user.role}</p>
              </div>
            </div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item style={{ width: "20rem" }}>
              <Link href="/">Store</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item onClick={logout}>Logout</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
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
