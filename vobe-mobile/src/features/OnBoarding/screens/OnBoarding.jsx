import { Image, TouchableOpacity, View } from "react-native";
import { Typography } from "../../../components/UI/Typography";
import { ResizeMode, Video } from "expo-av";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";

const OnBoarding = () => {
  const [step, setStep] = useState(0);
  const [stepButton, setStepButton] = useState([
    "https://ik.imagekit.io/ajcgv08p8/app_assets/onboarding/Progress1.png?updatedAt=1707712831033",
    "https://ik.imagekit.io/ajcgv08p8/app_assets/onboarding/Progress2.png?updatedAt=1707713101724",
    "https://ik.imagekit.io/ajcgv08p8/app_assets/onboarding/Progress3.png?updatedAt=1707713101770"
  ]);

  const getStepButton = () => {
    return (
      <View className="mt-16 mb-16">
        <TouchableOpacity
          onPress={() => {
            if (step < 3) {
              setStep(step + 1);
            } else {
              //navigate to home screen
            }

          }}
        >
          <Image
            source={{
              uri: stepButton[step]
            }}

            className="w-[90] h-[90]"
          />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View
      className="flex-1"
    >
      <Video
        source={{
          uri: "https://ik.imagekit.io/demo/sample-video.mp4/ik-master.m3u8?tr=sr-240_360_480_720_1080"
        }}
        resizeMode={ResizeMode.COVER}
        // onPlaybackStatusUpdate={status => {
        //   if (source.uri.includes(status.uri)) {
        //     setStatus(status);
        //   } else {
        //     videoStarted.current = false;
        //   }
        // }}
        isLooping
        style={{
          width: "100%",
          height: "100%"
        }}
        shouldPlay
      />
      <LinearGradient
        colors={['transparent', 'rgba(1,0,0,1)']}
        className="w-full h-[100] items-center justify-end"
        style={{
          width: "100%",
          height: "50%",
          position: "absolute",
          top: "50%",
        }}
      >
        <Typography
          style={{
            color: "white",
          }}
        >
          Elevate life with luxe drinks & VIP access
        </Typography>
        {getStepButton()}
      </LinearGradient>
    </View>
  )
}

export default OnBoarding;