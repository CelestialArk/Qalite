import Card from "./Card";
import FadeOut from "./FadeOut";
import Happy from "./assets/svg/Happy.svg";
import Global from "./assets/svg/Global.svg";
import Fast from "./assets/svg/Fast.svg";
import Security from "./assets/svg/Security.svg";

function Features() {
  return (
    <FadeOut scroll={1800}>
      <div className="p-8">
        <div className="font-semibold text-lg text-gray-400">
          What we provide
        </div>
        <div className="font-bold text-5xl text-black">Features</div>
        <div className="flex flex-wrap mt-7 justify-start items-center gap-8 ">
          <Card
            icon={Happy}
            text="Just 3 clicks and you can rent any car from our cars."
            delay={0.2}
            title="Easy To Use"
          />
          <Card
            icon={Fast}
            text="No wasting time, straight to the point. No delay time."
            delay={0.4}
            title="Fast like lightning"
          />
          <Card
            icon={Global}
            text="We cover a large section of Morocco. Wherever you are, we are there with you!"
            delay={0.6}
            title="Anywhere in Morocco"
          />
          <Card
            icon={Security}
            text="Rent your car with security. No one has access to your account but you. You get the security you deserve."
            delay={0.8}
            title="Secure And Private"
          />
        </div>
      </div>
    </FadeOut>
  );
}

export default Features;
