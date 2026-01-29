"use client";

import { Button, Form } from "antd";
import { BaseForm } from "@/components/forms/BaseForm";
import { LoginFields } from "@/components/forms/fields/LoginFields";
import { useRouter } from "next/navigation";
import { api } from "@/lib/axios";
import { useNotification } from "@/providers/NotificationsProvider";
import { LoginResponse } from "@/lib/types/api.types";
import { useState } from "react";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [form] = Form.useForm<LoginFormValues>();
  const router = useRouter();
  const notify = useNotification();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values: LoginFormValues) => {
    const { email, password } = values;
    setIsLoading(true);
    try {
      const res = await api.post<LoginResponse>("/auth/login", {
        email,
        password,
      });

      if (!res.data.success) {
        notify(
          "error",
          "Errore",
          res.data?.error?.message || "Errore generico",
        );
      } else {
        notify(
          "success",
          `Ciao ${res.data?.user.username}`,
          "Bentornato su GoldenView",
        );
        router.push("/dashboard");
      }
    } catch {
      notify("error", "Errore", "Login non riuscito");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BaseForm form={form} onSubmit={onSubmit}>
      <LoginFields />

      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={isLoading}>
          Login
        </Button>
      </Form.Item>
    </BaseForm>
  );
}
