import Stat from "./Stat";
import stats from "../data";

export default function Card() {
    return (
        <div className="flex flex-col sm:flex-row sm:w-[58rem] bg-[#1b1938] rounded-xl shadow-lg overflow-hidden m-6">
            <div className="relative sm:basis-1/2 sm:order-last">
                <picture>
                    <source media="(min-width: 640px)" srcSet="image-header-desktop.jpg" />
                    <img className="sm:h-full sm:w-full sm:object-cover" src="image-header-mobile.jpg" alt="background image" />
                </picture>
                <div className="absolute top-0 w-full h-full bg-[#aa5cdb]/50"></div>
            </div>
            <div className="flex flex-col sm:basis-1/2 sm:justify-center py-9 px-10">
                <h1 className="font-inter font-bold text-3xl text-white text-center sm:text-left">Get <span className="text-[#aa5cdb]">insights</span> that help your business grow.</h1>
                <p className="font-inter font-normal text-base leading-7 text-white/75 text-center sm:text-left mt-5">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
                <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-10 mt-10">
                    {stats.map((item, index) => (
                        <Stat
                            key={index}
                            value={item.value}
                            cat={item.key}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}