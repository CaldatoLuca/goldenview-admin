"use client";

import { Button, Form } from "antd";
import { BaseForm } from "@/components/forms/BaseForm";
import { LoginFields } from "@/components/forms/fields/LoginFields";
import { useRouter } from "next/navigation";
import { api } from "@/lib/axios";
import { useNotification } from "@/providers/NotificationsProvider";
import { ApiResponse } from "@/lib/types/api.types";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [form] = Form.useForm<LoginFormValues>();
  const router = useRouter();
  const notify = useNotification();

  const onSubmit = async (values: LoginFormValues) => {
    const { email, password } = values;
    try {
      const res = await api.post<ApiResponse>("/auth/login", {
        email,
        password,
      });

      console.log(res);

      if (!res.data.success) {
        notify(
          "error",
          "Errore",
          res.data?.error?.message || "Errore generico",
        );
      }

      notify("success", "Bravo!", "Login avvenuto con successo");
      router.push("/dashboard");
    } catch {
      notify("error", "Errore", "Login non riuscito");
    }
  };

  return (
    <BaseForm form={form} onSubmit={onSubmit}>
      <LoginFields />

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form.Item>
    </BaseForm>
  );
}
