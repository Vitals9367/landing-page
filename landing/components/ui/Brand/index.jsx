import Link from "next/link";
import { config } from "../../../config/config";

const Brand = () => (
    <Link href="/">
        <img
            src={config.headerLogo}
            width={100}
            height={100}
            alt="Hyperion logo"
        />
    </Link>
)
export default Brand