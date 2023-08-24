"use server";
import { cookies } from "next/headers";

async function login(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const data: any = {
    email,
    password,
  };

  console.log(`${process.env.API}:${process.env.PORT}/api/v1/user/login`);

  try {
    const res = await fetch(
      `${process.env.API}:${process.env.PORT}/api/v1/user/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookies().toString(),
        },
        next: { revalidate: 10 },
        body: JSON.stringify(data),
      }
    );

    const data1 = res.json();
    console.log(data1);
  } catch (err) {
    console.log(err);
  }
}

export default login;
