import { Metadata } from "next";

import Layout from './ui/home/Layout';
import Hero from './ui/home/Hero'
import About from './ui/home/About'
import Resume from './ui/home/Resume'
import { GetNavigation } from '../data/graphql/query-navigations';
import Head from 'next/head'

import Footer from "./ui/Footer";

export const metadata: Metadata = {
    title: "LSR Creative",
    description: "Portfolio site of Logan Scandling Rundquist",
}

export default async function Page() {

    return (
        <div>
            
            {/* <div>
                <Hero />
                <About />
                <Resume />
            </div>
            <Footer /> */}
        </div>
    );
}
