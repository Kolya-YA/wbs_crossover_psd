import OurCycle from "./OurCycle";
import ContactForm from "./ContactForm";

import Customers from "./Customers"
import News from "./News"

const Main = () => {

    return (
        <main>
            <OurCycle />
            <Customers className='container' />
            <News className='container' />
            <ContactForm />
        </main>
    )
}

export default Main;
