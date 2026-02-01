import LoginForm from "@/components/forms/LoginForms";
import Card from "antd/es/card/Card";

export default function LoginPage() {
  return (
    <Card title="GoldenView Admin Login" variant="borderless" className="w-1/4">
      <LoginForm />
    </Card>
  );
}
