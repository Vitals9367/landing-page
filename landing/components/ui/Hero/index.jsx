import NavLink from "../NavLink";
import { config } from "../../../config/config";

const Hero = () => (
  <section>
    <div className="custom-screen py-28 text-gray-600 flex gap-16">
      <div className="space-y-5 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
          <span className="relative">
            AI-Powered
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></span>
          </span>
          {" "}Automation Solutions that{" "}
          <span className="relative">
            Drive Growth
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r to-purple-500 from-blue-500"> </span>
          </span>
        </h1>

        <p className="max-w-xl">
          Automating customer support, lead generation, and workflows to maximize your efficiency and profits.
        </p>
        <div className="flex items-center justify-start gap-x-3 font-medium text-sm">
          <NavLink
            href={config.cto.link}
            className="text-white text-bold text-lg bg-gradient-to-r to-purple-500 from-blue-500 mb-5 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 hover:ring ring-transparent ring-offset-2 transition"
          >
            {config.cto.text}
          </NavLink>
          
        </div>
        <span className="text-md font-bold bg-clip-text text-transparent bg-gradient-to-r to-purple-500 from-blue-500 ">
          LIMITED SPOTS FOR {new Date().toLocaleString('default', { month: 'long' }).toUpperCase()}!
        </span>
      </div>
      <img src="hero.png" className="max-w-[40%] hidden lg:block"/>
    </div>
  </section>
);

export default Hero;
