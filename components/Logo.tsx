import { theme, Typography, Space } from "antd";

export default function Logo({
  size = 40,
  text = "GoldenView Admin",
}: {
  size?: number;
  text?: string;
}) {
  const {
    token: { colorPrimary, colorText },
  } = theme.useToken();

  const sunSize = size * 0.5;
  const raySize = size * 0.68;

  return (
    <Space align="center" size={4}>
      <div style={{ position: "relative", width: size, height: size }}>
        <div
          style={{
            position: "absolute",
            width: sunSize,
            height: sunSize,
            borderRadius: "50%",
            backgroundColor: colorPrimary,
            bottom: size * 0.25,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: raySize,
            height: raySize,
            borderRadius: "50%",
            border: `2px solid ${colorPrimary}`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      <Typography.Text
        style={{
          fontWeight: 600,
          fontSize: 18,
          color: colorText,
          userSelect: "none",
        }}
      >
        {text}
      </Typography.Text>
    </Space>
  );
}
