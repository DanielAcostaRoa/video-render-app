import { useVideoConfig, useCurrentFrame } from "remotion";
import { text } from "stream/consumers";

export const MyVideo = ({text}:any) => {
  const frame = useCurrentFrame();
  const opacity = frame >= 20 ? 1 : frame / 20;
  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
        fontSize: "7em",
        opacity: opacity,
      }}
    >
      {text}
    </div>
  );
};

export default MyVideo;
