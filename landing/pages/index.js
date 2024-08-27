import Head from "next/head";
import { useEffect } from "react";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Solutions from "../components/ui/Solutions";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Testimonials from "../components/ui/Testimonials";
import ToolKit from "../components/ui/ToolKit";
import Script from "next/script";
import ProblemStatement from "../components/ui/ProblemStatement";
import ValueProposition from "../components/ui/ValueProposition";
import ReactGA from 'react-ga4';

export default function Home() {
  ReactGA.initialize('G-MR7Q9V8LF1');
  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "Home"
  })

  useEffect(() => {
      ReactGA.initialize('G-MR7Q9V8LF1');
      ReactGA.send({
        hitType: "pageview",
        page: "/",
        title: "Home"
      })
  }, [])
  return (
    <>
      <Head>
        <meta name="robots" content="index" />
      </Head>
      <Hero />
      <ProblemStatement />
      <Solutions />
      <ValueProposition />
      {/* <Testimonials /> */}
      <FooterCTA />
    </>
  );
}
