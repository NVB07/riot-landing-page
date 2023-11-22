import TitleContent from "../titleContent/TitleContent";

const MainContent = () => {
    return (
        <div className="px-20 h-[600px] relative z-10 pt-[100px] after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:-scale-y-100 after:-z-[1] after:bg-blur-gradient">
            <div className="mb-[60px]">
                <TitleContent title={"What's happening?"} buttonOption />
            </div>
        </div>
    );
};

export default MainContent;
