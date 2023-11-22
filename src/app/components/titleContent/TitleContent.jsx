const TitleContent = ({ title, buttonOption = false }) => {
    return (
        <div className="flex items-center justify-between">
            <h2 className="text-5xl font-bold text-white">{title}</h2>
            {buttonOption && <button className="uppercase bg-[#80808033] hover:bg-[#2e2e2e] text-sm py-[0.5rem] px-[0.75rem] rounded-md text-white font-extrabold">see more</button>}
        </div>
    );
};

export default TitleContent;
