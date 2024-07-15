import FormInput from "./FormInput";

const ContactForm = () => {
    return (
        <section className="px-4 py-20 bg-bp-green">
            <form className="container mx-auto max-w-96 grid gap-4">
                <h2 className="mb-4 text-bp-lighttext text-center uppercase text-2xl font-semibold">A call Back</h2>
                <FormInput type="name" label="Name"/>
                <FormInput type="email" label="E-mail"/>
                <FormInput type="tel" label="Phone number"/>
                <FormInput type="textarea" label="Message" />
                <button className="mt-4 px-8 py-2 rounded-lg max-w-fit mx-auto bg-bp-yellow text-bp-lighttext uppercase">Sent</button>
            </form>            
        </section>
    )
}

export default ContactForm;