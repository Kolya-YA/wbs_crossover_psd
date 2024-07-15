import img1 from "../assets/news-1.png";
import img2 from "../assets/news-2.png";
import img3 from "../assets/news-3.png";

const News = () => {
  return (
    <div className="flex flex-col items-center  ma-w-7xl p-14 bg-[#355764] text-white">
      <h1 className="text-5xl font-bold">News</h1>
      <p className="max-w-xl text-center m-9">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using
      </p>
      <div className="flex  space-x-">
        <div className="flex flex-col m-11 max-w-lg h-[640px] min-w-[400px] overflow-hidden bg-white text-black">
          <div className="">
            <img
              className="overflow-hidden object-cover w-full  h-[420px]"
              src={img1}
              alt=""
            />
          </div>
          <div className="p-8">
            <h3 className="font-bold text-2xl">Speed cycle</h3>
            <div className="flex justify-between gap-2 pt-4 pb-4 text-gray-300">
              <p>Post by : Den</p>
              <p className="">20-12-2019</p>
            </div>
            <p>
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using
            </p>
          </div>
        </div>

        <div className="flex flex-col m-11 max-w-lg h-[640px] min-w-[400px] overflow-hidden bg-white text-black">
          <div className="">
            <img
              className="overflow-hidden object-cover w-full  h-[420px]"
              src={img2}
              alt=""
            />
          </div>
          <div className="p-8">
            <h3 className="font-bold text-2xl">Speed cycle</h3>
            <div className="flex justify-between gap-2 pt-4 pb-4 text-gray-300">
              <p>Post by : Den</p>
              <p className="">20-12-2019</p>
            </div>
            <p>
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using
            </p>
          </div>
        </div>

        <div className="flex flex-col m-11 max-w-lg h-[640px] min-w-[400px] overflow-hidden bg-white text-black">
          <div className="">
            <img
              className="overflow-hidden object-cover w-full  h-[420px]"
              src={img3}
              alt=""
            />
          </div>
          <div className="p-8">
            <h3 className="font-bold text-2xl">Speed cycle</h3>
            <div className="flex justify-between gap-2 pt-4 pb-4 text-gray-300">
              <p>Post by : Den</p>
              <p className="">20-12-2019</p>
            </div>
            <p>
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
