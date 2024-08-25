import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    
    const socialInfo = [   
        {
            icon: <FaLinkedin size={24}/>,
            href: "https://www.linkedin.com/in/vitalijusalsauskas/"
        },   
    ]

    return (
        <footer>
            <div className="custom-screen pt-16">
                <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                    <p className="text-gray-600">
                        © {new Date().getFullYear()} Hyperion. All rights reserved. <br/>
                        <strong>Email:</strong> vitalijus@hyperionaiagency.com
                    </p>
                    <div className="flex items-center gap-x-6 text-gray-400 mt-6">
                        {
                            socialInfo.map((item, idx) => (
                                <a key={idx} href={item.href} aria-label="social media" target="_blank" rel="noreferrer">
                                    {item.icon}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer