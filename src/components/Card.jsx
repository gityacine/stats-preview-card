import Stat from "./Stat";
import stats from "../data";

export default function Card() {
    return (
        <div className="flex flex-col bg-[#1b1938] rounded-xl overflow-hidden m-6">
            <div className="relative">
                <picture>
                    <source media="(min-width: 640px)" srcSet="image-header-desktop.jpg" />
                    <img src="image-header-mobile.jpg" alt="background image" />
                </picture>
                <div className="absolute top-0 w-full h-full bg-[#aa5cdb]/50"></div>
            </div>
            <div className="flex flex-col py-9 px-10">
                <h1 className="font-inter font-bold text-3xl text-white text-center">Get <span className="text-[#aa5cdb]">insights</span> that help your business grow.</h1>
                <p className="font-inter font-normal text-base leading-7 text-white/75 text-center mt-5">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
                <div className="flex flex-col space-y-8 mt-10">
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