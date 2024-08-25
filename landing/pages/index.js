import Head from "next/head";
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

export default function Home() {
  return (
    <>
      <div className="container">
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MR7Q9V8LF1"
        ></script>
        <script>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-MR7Q9V8LF1');
          `}
        </script>
      </div>

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
