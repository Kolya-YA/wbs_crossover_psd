import OurCycle from "./OurCycle";
import ContactForm from "./ContactForm";
import About from "./About";
import Customers from "./Customer";
import News from "./News";

const Main = () => {
  return (
    <main className="grid place-content-center">
      <OurCycle />
      <About />
      <Customers />
      <News />
      <ContactForm />
    </main>
  );
};

export default Main;
