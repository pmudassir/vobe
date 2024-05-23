import { View } from "react-native";
import { next } from "../utils/next";
import { Tabs } from "./Tabs";

export const ProgressBar = ({data, singleTabWidth, current, isPaused, setIsPaused, setCurrent, duration}) => {
  return (
    <View className="flex-row m-auto">
      {data &&
        data.map((_, index) => (
          <Tabs
            key={index}
            index={index}
            length={data.length}
            width={singleTabWidth}
            current={current}
            isPaused={isPaused}
            duration={duration}
            next={() =>
              next({
                setIsPaused,
                current,
                length: data.length,
                setCurrent
              })
            }
          />
        ))}
    </View>
  );
};
