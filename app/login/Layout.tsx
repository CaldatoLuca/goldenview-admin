"use client";

import { Flex } from "antd";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-orange-400/80 h-screen w-screen fixed inset-0 z-0" />
      <Flex
        justify="center"
        align="center"
        className="h-screen relative z-10"
        gap={24}
      >
        {children}
      </Flex>
    </>
  );
}
