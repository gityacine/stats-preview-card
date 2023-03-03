
export default function Stat(props) {
    return (
        <div className="flex flex-col items-center sm:items-start">
            <h2 className="font-inter font-bold text-[1.7rem] text-white">{props.value}</h2>
            <span className="font-lexenddeca uppercase text-[15px] text-white/60 mt-1">{props.cat}</span>
        </div>
    );
}