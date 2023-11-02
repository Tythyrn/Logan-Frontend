import { Metadata } from "next";
import { getNavigation } from "@/app/lib/data";

import Navbar from "@/app/ui/Navbar";

import '@/app/ui/globals.css';

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

export default async function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const links = await getNavigation();

    return (
      <html lang="en">
        <body>
          <Navbar links={links}/>
          {children}
        </body>
      </html>
    )
  }