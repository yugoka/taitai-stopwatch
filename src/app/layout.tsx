import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ストップウォッチ",
  description: "サッカー実況にも使えるストップウォッチです",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="font-body">{children}</body>
    </html>
  );
}
