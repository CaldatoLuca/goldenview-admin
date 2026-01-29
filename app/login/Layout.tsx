// LoginLayout.tsx
import { Flex } from "antd";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen bg-gray-900">
      {" "}
      {/* sfondo scuro */}
      <Flex justify="center" align="center" className="h-full">
        {children}
      </Flex>
    </main>
  );
}
