import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";
import { config } from "../../../config/config";

const FooterCTA = () => (
  <SectionWrapper>
    <div className="custom-screen">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-gray-800 text-5xl font-bold sm:text-4xl">
          Don’t Let Your Competition
          <br />
          Get Ahead – Automate Today
        </h2>
        <p className="max-w-xl mt-4 mx-auto">
          The future of business is AI-driven. Make sure your business is leading the charge
        </p>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm mt-5">
          <NavLink
            href={config.cto.link}
            className="text-white text-bold text-lg bg-gradient-to-r to-purple-500 from-blue-500 mb-5 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 hover:ring ring-transparent ring-offset-2 transition"
          >
            {config.cto.text}
          </NavLink>
        </div>
        <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r to-purple-500 from-blue-500 ">
          LIMITED SPOTS FOR {new Date().toLocaleString('default', { month: 'long' }).toUpperCase()}!
        </span>
      </div>
    </div>
  </SectionWrapper>
);

export default FooterCTA;
