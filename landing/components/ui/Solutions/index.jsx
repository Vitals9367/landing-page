import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiPowerGenerator } from "react-icons/gi";
import { MdOutlineAutorenew } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";


const Solutions = () => {

    const solutions = [
        {
            icon: <RiCustomerService2Fill color="black" />,
            title: "Automated Customer Support",
            desc: "Handle customer inquiries 24/7 with intelligent chatbots that deliver instant, accurate responses, reducing response times and increasing customer satisfaction."
        },
        {
            icon: <TbMoneybag color="black" />,
            title: "Lead Generation on Autopilot",
            desc: "Deploy AI-driven strategies that attract, qualify, and nurture leads, filling your sales pipeline while you focus on closing deals."
        },
        {
            icon: <MdOutlineAutorenew color="black" />,
            title: "Streamlined Workflows",
            desc: "Automate tedious manual processes, from order management to inventory updates, freeing up your team to focus on high-value tasks."
        }
    ]

    return (
        <SectionWrapper>
            <div id="solutions" className="custom-screen text-gray-600 mt-20">
            <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl mb-20 text-center">
                Our AI Automation Solutions
                Turn Your Problems into Profits                   
            </h2>            
                <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        solutions.map((item, idx) => (
                            <li key={idx} className="space-y-3">
                                <div className="w-12 h-12 text-4xl text-indigo-600 flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg text-gray-800 font-semibold">
                                    {item.title}
                                </h4>
                                <p>
                                    {item.desc}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </SectionWrapper>
    )
}

export default Solutions