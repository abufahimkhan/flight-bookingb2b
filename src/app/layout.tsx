import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/themes/theme-provider";
import { ToastWrapper } from "keep-react";
import ProvideStore from "@/redux/ProvideStore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: "Trip Beyond",
  description: "Fly in a safe way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-secondary-main bg-[#f4f4f4] text-base">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <ProvideStore>{children}</ProvideStore>
          </main>
          <ToastWrapper
            toastOptions={{
              classNames: {
                toast: "border border-white bg-white",
                title: "text-secondary-main ",
                description: "text-metal-600",
                actionButton: "bg-secondary-main text-white",
                cancelButton: "bg-secondary-main text-white",
                closeButton: "bg-secondary-main text-white",
                error: "text-error-500",
                success: "text-success-500",
                warning: "text-warning-500",
                info: "text-primary-main",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
