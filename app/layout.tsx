import { Metadata } from "next";

export const metadata: Metadata = {
    openGraph: {
        title: "Logan Rundquist Portfolio | LSR Creative",
        type: "website",
        description: "Portfolio website of graphic designer Logan Rundquist",
        images: [{
            url: "https://media.graphcms.com/H35xS37gSciktcHfYpN8",
        }] ,
        url: "https://lsrcreative.art/",
    },
    twitter: {
        card: "summary_large_image",
    }
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }