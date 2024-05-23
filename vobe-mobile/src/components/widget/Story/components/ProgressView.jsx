import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const ProgressView = ({ tabWidth, pause, next, duration }) => {
  const progressAnimValue = useRef(new Animated.Value(0)).current;
  const [isPaused, setIsPaused] = useState(false);
  const wasPaused = useRef(false);
  const timeForEachUnit = useMemo(() => {
    return duration / tabWidth;
  }, [duration, tabWidth]);

  const startAnimation = () => {
    setIsPaused(false);
    Animated.timing(progressAnimValue, {
      toValue: tabWidth,
      duration: duration,
      useNativeDriver: false,
      easing: Easing.linear()
    }).start(({ finished }) => {
      if (finished) {
        progressAnimValue.setValue(0);
        next();
      }
    });
  };

  const pauseAnimation = () => {
    Animated.timing(progressAnimValue).stop();
    setIsPaused(true);
  };

  const resumeAnimation = () => {
    setIsPaused(false);
    Animated.timing(progressAnimValue, {
      toValue: tabWidth,
      duration: (tabWidth - progressAnimValue.__getValue()) * timeForEachUnit,
      useNativeDriver: false,
      easing: Easing.linear
    }).start(({ finished }) => {
      if (finished) {
        progressAnimValue.setValue(0);
        next();
      }
    });
  };

  useEffect(() => {
    if (!pause) {
      if (wasPaused.current) {
        resumeAnimation();
      } else {
        wasPaused.current = true;
        startAnimation();
      }
    } else {
      pauseAnimation();
    }
  }, [pause]);

  return (
    <Animated.Text
      style={{
        backgroundColor: "#fff",
        width: progressAnimValue,
        height: 4,
        borderRadius: 100
      }}
    />
  );
};
