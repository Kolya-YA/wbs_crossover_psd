import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi"

const FooterSocial = () => (
    <div className="flex gap-2">
        <FiFacebook className="bg-bp-lighttext stroke-bp-green rounded-sm" />
        <FiTwitter className="bg-bp-lighttext stroke-bp-green rounded-sm" />
        <FiInstagram className="bg-bp-lighttext stroke-bp-green rounded-sm" />
        <FiLinkedin className="bg-bp-lighttext stroke-bp-green rounded-sm" />
    </div>
)

export default FooterSocial