"use client";
import { api } from "@/lib/axios";
import { ApiResponse } from "@/lib/types/api.types";
import { Button, Flex, theme } from "antd";
import { useEffect } from "react";
import { Typography } from "antd";
import { redirect } from "next/navigation";

const { Text, Title } = Typography;

export default function ErrorPage() {
  const {
    token: { colorError },
  } = theme.useToken();

  useEffect(() => {
    api.post<ApiResponse>("/auth/logout");
  }, []);

  return (
    <>
      <Flex justify="center" align="center" className="h-screen" gap={24}>
        <div className="flex flex-col items-center">
          <Title
            style={{
              color: colorError,
            }}
          >
            Internal Server Error
          </Title>

          <Button type="primary" size="large" onClick={() => redirect("login")}>
            Torna al Login
          </Button>
        </div>
      </Flex>
    </>
  );
}
