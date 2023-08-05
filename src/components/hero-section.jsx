import ButtonComponent from "./button-component"
import WrapperSection from "./wrapper-component"


const HeroSection = () => {
    return (
        <WrapperSection>
            <div className="col-one w-[60%] flex flex-col gap-[30px] pr-[30px]">
            <h1 className="font-semibold text-[70px] text-primary">
                Stay ahead of the curve with our{" "}
                <span className="bg-clip-text text-transparent  bg-gradient-to-r from-accent to-primary">
                forward-thinking.
                </span>
            </h1>
            <p className="text-text">
                An award winning SEO agency with disciplines in digital
                marketing, design and website development, focused on
                understanding you.
            </p>
            <div className="button-box flex gap-[20px]">
                <ButtonComponent theme={"primary"} text={"Get Started"} />
                <ButtonComponent theme={"secondary"} text={"View Case Study"} />
            </div>
            </div>

            <div className="col-two flex flex-col gap-[20px] w-[50%] p-[20px]">
            <div className="first-row flex gap-[20px]">
                <div className="w-[50%] h-[250px] bg-accent rounded-tl-[250px] rounded-lg"></div>
                <div className="w-[50%] h-[250px] bg-secondary rounded-lg"></div>
            </div>
            <div className="second-row w-[100%] h-[250px] bg-primary rounded-lg"></div>
            </div>
        </WrapperSection>
    )
}

export default HeroSection