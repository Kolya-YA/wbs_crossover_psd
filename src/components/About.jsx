import bgAbout from "../assets/bg-about-2.png";
import bikeAbout from "../assets/about-cycle-bg.png";
import "../App.css";

export default function About() {
  return (
    <>
      <div
        className="bg-bp-green text-white py-20 pb-[230px]"
        style={{ backgroundImage: `url(${bgAbout})` }}
      >
        <div className="m-auto w-1/2 content-center mb-20">
          <p className="text-center text-4xl font-bold my-12">
            About Our cycle Store
          </p>
          <p className="text-center text-lg mb-20">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </p>
        </div>
      </div>
      <div className="m-auto w-1/2 content-center">
        <img src={bikeAbout} alt="" className="-mt-[400px] px-10" />
      </div>
    </>
  );
}
