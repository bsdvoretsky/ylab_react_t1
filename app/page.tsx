"use client";

import "./globals.css";
import Form from "./components/form";
import { useCallback } from "react";

export default function Page() {
  const someFetch: typeof fetch = async (url, options) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (url === "api/sign-in") {
      const { email, password } = JSON.parse(
        (options ? options.body : {}) as string
      );

      if (email === "ylab@gmail.com" && password === "1111") {
        return new Response("", {
          status: 200,
          statusText: "OK",
        });
      }

      return new Response("", {
        status: 401,
        statusText: "Unauthorized",
      });
    }

    return new Response("", {
      status: 404,
      statusText: "Not found",
    });
  };

  const handleSignIn = useCallback(async (email: string, password: string) => {
    const fetchPromise = someFetch("api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    try {
      const response = await fetchPromise;

      if (response.status === 200) {
        alert("Signed in");
      } else if (response.status === 401) {
        alert("Unauthorized");
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <main className="flex items-center justify-center h-screen">
      <Form onSignIn={handleSignIn} />
    </main>
  );
}
