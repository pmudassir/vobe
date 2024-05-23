import { View } from "react-native";
import { ProgressView } from "./ProgressView";

export const Tabs = ({index, length, width, current, next, isPaused, duration}) => {
  return (
    <View
      className={`h-1 ${index < length - 1 && "mr-1"}`}
      style={{
        width,
        backgroundColor: "rgba(251,251,251,0.3)",
        borderRadius: 100
      }}
    >
      {index === current && (
        <ProgressView duration={duration} tabWidth={width} pause={isPaused} next={next} />
      )}
    </View>
  );
};
