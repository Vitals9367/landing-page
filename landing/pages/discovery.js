import Head from "next/head";
import { InlineWidget } from "react-calendly";
import { useEffect } from "react";

export default function GetStarted() {

  useEffect(() => {
    ReactGA.initialize('G-MR7Q9V8LF1');
    ReactGA.send({
      hitType: "pageview",
      page: "/discovery",
      title: "Discovery"
    })
}, [])

  return (
    <>
      <Head>
        <title>Discovery - Hyperion AI Agency</title>
      </Head>
      <div className='pt-28 pb-12'>
        <div className='custom-screen text-gray-600'>
          <div className='max-w-lg mx-auto gap-12 lg:max-w-none'>
            <div className='text-center'>
              <h1 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                Risk-Free Consultation
              </h1>
              <p className='mt-3 mb-8'>
                We’re confident in our ability to transform your business with AI automation. <br/>
                That’s why we offer a free, no-obligation strategy session to assess your needs and show you exactly how we can help.
              </p>
            </div>
            <InlineWidget styles={{
              height: '1000px'
            }} url="https://calendly.com/hyperion-ai-agency/ai-automation-opportunity-call" />
          </div>
        </div>
      </div>
    </>
  );
}
