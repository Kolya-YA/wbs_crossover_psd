import FooterSocial from "./FooterSocial"
import FooterAddress from "./FooterAddress"
import FooterForm from "./FooterForm"
import FooterMap from "./FooterMap"

const FooterContact = () => {

    return (
        <div className="grid grid-cols-[2fr_1fr]">
            <FooterMap />
            <div className="grid gap-4 px-4 py-2 bg-bp-green text-bp-lighttext">
                <FooterAddress />
                <FooterSocial />
                <FooterForm />
            </div>
        </div>
    )
}

export default FooterContact