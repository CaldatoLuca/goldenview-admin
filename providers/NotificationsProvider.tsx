"use client";

import { notification } from "antd";
import React, { createContext, useContext } from "react";

type NotificationType = "success" | "info" | "warning" | "error";

type NotifyFn = (
  type: NotificationType,
  title: string,
  description?: string,
) => void;

const NotificationContext = createContext<NotifyFn | null>(null);

export function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [api, contextHolder] = notification.useNotification();

  const notify: NotifyFn = (type, title, description) => {
    api[type]({
      title: title,
      description,
    });
  };

  return (
    <NotificationContext.Provider value={notify}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const ctx = useContext(NotificationContext);
  if (!ctx) {
    throw new Error("useNotification must be used inside NotificationProvider");
  }
  return ctx;
}
