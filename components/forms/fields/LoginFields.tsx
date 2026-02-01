import { Form, Input } from "antd";

export function LoginFields() {
  return (
    <>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: "Email obbligatoria" },
          { type: "email", message: "Email non valida" },
        ]}
      >
        <Input placeholder="email@email.com" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          { required: true, message: "Password obbligatoria" },
          { min: 8, message: "Minimo 8 caratteri" },
        ]}
      >
        <Input.Password placeholder="••••••••" />
      </Form.Item>
    </>
  );
}
