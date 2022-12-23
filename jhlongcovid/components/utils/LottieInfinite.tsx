import React from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface Props {
  animationData: object;
  loop?: boolean;
}

/**
 * The InfiniteLottie component is a React component that displays an animated Lottie animation.
 * The Lottie animation is an infinite loop that plays forwards and backwards,
 * switching direction when it reaches the end.
 *
 *  ```ts
 * import InfiniteLottie from "./InfiniteLottie";
 * const App = () => {
 *    const animationData = { **Lottie animation data** };
 *    return <InfiniteLottie animationData={animationData} />;
 * };
 * ```
 * @param animationData - An object containing the animation data for the Lottie animation.
 */
const LottieInfinite: React.FC<Props> = ({ animationData }) => {
  const [direction, setDirection] = React.useState(1);
  const lottieRef = React.useRef<LottieRefCurrentProps>(null);

  // Change direction when the animation is complete and play the animation again
  const handleLooping = () => {
    const lottie = lottieRef.current;
    if (lottie) {
      lottie.setDirection(direction as -1 | 1);
      lottie.play();
      setDirection(direction * -1);
    }
  };

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop={false}
      style={{
        width: "50%",
        height: "40%",
      }}
      onComplete={() => {
        handleLooping();
      }}
    />
  );
};

export default LottieInfinite;
