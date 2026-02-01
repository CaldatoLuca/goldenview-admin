"use client";

import { Form } from "antd";
import type { FormInstance } from "antd/es/form";

type BaseFormProps<T> = {
  form: FormInstance<T>;
  onSubmit: (values: T) => void;
  children: React.ReactNode;
};

export function BaseForm<T>({ form, onSubmit, children }: BaseFormProps<T>) {
  return (
    <Form form={form} layout="vertical" onFinish={onSubmit} autoComplete="off">
      {children}
    </Form>
  );
}
