import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi"

const FooterAddress = () => {

    const address = [
        "Weiskopffstraße 16 / 17",
        "12459 Berlin",
        "Germany"
    ]

    return (
        <div className="grid gap-2">
            <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
                <FiMapPin />
                <div>
                    {address.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
                <FiPhoneCall />
                <a href="tel:+4930555789760">+49 30 555789760</a>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
                <FiMail />
                <a href="mailto:crossover@wbscodingschool.com">crossover@wbscodingschool.com</a>
            </div>
        </div>
    )
}

export default FooterAddress


