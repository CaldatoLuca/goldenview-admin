// components/AntdProvider.tsx
"use client";

import { ReactNode } from "react";
import { ConfigProvider, theme } from "antd";
import itIT from "antd/locale/it_IT";

type AntdProviderProps = {
  children: ReactNode;
  darkMode?: boolean;
};

const getThemeConfig = (darkMode: boolean) => ({
  token: {
    colorPrimary: "#FA7921",

    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorInfo: "#1890ff",

    colorBgBase: "#f5e8d3",
    colorBgContainer: "#fafafa",
    colorTextBase: "#1a0f0b",

    ...(darkMode && {
      colorBgBase: "#1a0f0b",
      colorBgContainer: "#2d2012",
      colorTextBase: "#f5e8d3",
    }),

    fontSize: 14,
    borderRadius: 12,
    lineWidth: 1,

    sizeUnit: 4,
    sizeStep: 4,

    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    boxShadowSecondary:
      "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",

    motionDurationMid: "0.2s",
    motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  },
  algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
  cssVar: {
    key: "ant",
  },
});

export const AntdProvider = ({
  children,
  darkMode = false,
}: AntdProviderProps) => {
  return (
    <ConfigProvider locale={itIT} theme={getThemeConfig(darkMode)}>
      {children}
    </ConfigProvider>
  );
};
