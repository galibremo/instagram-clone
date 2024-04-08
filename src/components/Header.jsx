"use client";

import Image from "next/image";
import { IoMdAddCircleOutline } from "react-icons/io";
import { HiCamera } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import React from "react";
import { signIn, useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30 p-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="hidden lg:inline-flex">
          <Image
            src="/Instagram_logo_black.webp"
            width={96}
            height={96}
            alt="instagram logo"
            priority
            styles={{ width: "auto" }}
          />
        </Link>
        <Link href="/" className="lg:hidden">
          <Image
            src="/800px-Instagram_logo_2016.webp"
            width={40}
            height={40}
            alt="instagram logo"
          />
        </Link>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]"
        />
        {session ? (
          <div className="flex gap-2 items-center">
            <img
              src={session.user.image}
              alt={session.user.name}
              className="h-10 w-10 rounded-full cursor-pointer"
              onClick={signOut}
            />
          </div>
        ) : (
          <button
            onClick={signIn}
            className="text-sm font-semibold text-blue-500"
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
}
