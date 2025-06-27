"use client";

import { useState } from "react";
import Header from "@/components/header/Header";
import Search from "@/components/Search/Search";
import Register from "./(auth)/Register/Register";

export default function HeaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSearch, setShowSearch] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  return (
    <>
      {(!showSearch || !openRegister) && (
        <Header
          onSearchClick={() => setShowSearch(true)}
          handleOpenRegister={() => setOpenRegister(!openRegister)}
        />
      )}

      {!showSearch && children}
      {showSearch && <Search onClose={() => setShowSearch(false)} />}
      {openRegister && (
        <Register
          open={openRegister}
          handleOpen={() => setOpenRegister(false)}
        />
      )}
    </>
  );
}
