
import customer from "../assets/customer.png"

const Customers =() => {
    return(
        <div className="grid place-content-center max-w-7xl border-2 border-dashed border-gray-200 m-20 ">

        <h1 className="text-center  mt-10 text-5xl font-bold">Says Customers</h1>
        <div className="m-16 p-12 bg-white overflow-hidden shadow-[0px_0px_90px_#f3f3f3] flex items-center ">
            <img className="" src={customer} alt="customer" />
            <div className="ml-14">

            <p className="text-7xl font-serif text-orange-300">{`"`}</p>
            <p className="mb-8">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
            <p className="font-bold">Channery</p>
            </div>
        </div>
        <div className="flex justify-center translate-y-6" >
            
            <button className="text-xl w-12 h-12 bg-black text-white">
                {`<`}</button>
            
            <button className="text-xl w-12 h-12 bg-orange-300 text-white">
                <p>
                {`>`}
                </p>
                </button>
        </div>
        </div>
    )
}

export default Customers;