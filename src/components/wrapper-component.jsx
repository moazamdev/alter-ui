const WrapperSection = ({ children }) => {
    return (
        <section className="outline flex flex-col justify-center items-center mx-auto my-0 px-2.5 py-[20px] md:py-[50px]">
            <div className="container relative w-[min(100%_-_15px,1250px)] flex justify-between mx-auto my-0 p-1.5 sm:p-2.5">
                {children}
            </div>
        </section>
    );
};

export default WrapperSection;
