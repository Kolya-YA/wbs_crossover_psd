import cycle1 from "../assets/cycle-bg-1.png";
import cycle2 from "../assets/cycle-bg-2.png";
import cycle3 from "../assets/cycle-bg-3.png";
import "../App.css";

export default function OurCycle() {
  return (
    <>
      <div className="container m-auto py-16 px-12 lg:px-0">
        <p className="text-center text-4xl font-bold">OUR CYCLE</p>
        <p className="text-center mt-4">
          It is a long established fact that a reader will be distracted by the
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cycle 1 */}
          <div>
            <img src={cycle1} alt="" width="90%" className="lg:-mt-12" />
          </div>
          <div className="content-center lg:-mt-20 lg:pl-20">
            <p class="text-divider text-3xl font-bold mr-4">Cycles</p>
            <p className="text-left my-16">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters
            </p>
            <div className="flex justify-between">
              <button className="px-10 py-1 bg-[#325662] text-white font-bold">
                Buy Now
              </button>
              <p className="font-bold text-xl">
                Price <span className="text-[#f7c17b]">$</span>
                <span className="text-[#325662]">200</span>
              </p>
            </div>
          </div>
          {/* Cycle 2 */}
          <div className="content-center lg:-mt-20 lg:pr-20">
            <p class="text-divider text-3xl font-bold mr-4 mt-10">
              Stylis Cycle
            </p>
            <p className="text-left my-16">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters
            </p>
            <div className="flex justify-between">
              <button className="px-10 py-1 bg-[#325662] text-white font-bold">
                Buy Now
              </button>
              <p className="font-bold text-xl">
                Price <span className="text-[#f7c17b]">$</span>
                <span className="text-[#325662]">200</span>
              </p>
            </div>
          </div>
          <div>
            <img src={cycle2} alt="" width="90%" className="lg:-mt-[160px]" />
          </div>
          {/* Cycle 3 */}
          <div>
            <img src={cycle3} alt="" width="90%" className="lg:-mt-[120px]" />
          </div>
          <div className="content-center lg:-mt-20 lg:pl-20">
            <p class="text-divider text-3xl font-bold">Mordern Cycle</p>
            <p className="text-left my-16">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters
            </p>
            <div className="flex justify-between">
              <button className="px-10 py-1 bg-[#325662] text-white font-bold">
                Buy Now
              </button>
              <p className="font-bold text-xl">
                Price <span className="text-[#f7c17b]">$</span>
                <span className="text-[#325662]">200</span>
              </p>
            </div>
          </div>
          {/* end cycle 3 */}
        </div>
        <div className="grid place-content-center mt-10">
          <button className="px-16 py-2 bg-[#f7c17b] text-white font-bold text-xl">
            See More
          </button>
        </div>
      </div>
    </>
  );
}
