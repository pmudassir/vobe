import { View, ImageBackground, Text, ScrollView, TouchableOpacity } from "react-native";
import { ProgressBar } from "./components/ProgressBar";
import { useRef, useState } from "react";
import { Dimensions } from "react-native";
import { Button } from "../../UI/Button2";
import { Typography } from "../../UI/Typography";
import { LinearGradient } from 'expo-linear-gradient';
import RBSheet from "react-native-raw-bottom-sheet";
import { Divider } from "../../UI/Divider";
import About from "../About/About";
import Menu from "../Menu/components/Menu";
import Features from "../Features/components/Features";
import BookingRB from "../BookingRB/components/BookingRB";

const data = [
  {
    id: 1,
    image: "https://ik.imagekit.io/ajcgv08p8/story_test/imgone.jpg?updatedAt=1707382488869"
  },
  {
    id: 2,
    image: "https://ik.imagekit.io/ajcgv08p8/story_test/imgtwo.jpg?updatedAt=1707382488788"
  },
  {
    id: 3,
    image: "https://ik.imagekit.io/ajcgv08p8/story_test/imgthree.jpg?updatedAt=1707382488779"
  }
]

const Story = ({ pubId, navigation }) => {
  const [current, setCurrent] = useState(0);
  const { width } = Dimensions.get("screen");
  const singleTabWidth = (width - 40) / data.length;
  const [isPaused, setIsPaused] = useState(false);
  const refRBSheet = useRef();

  const refRBSheet2 = useRef();

  return (
    <View
      className="m-3 rounded-[20px] border border-[#BC842FB2]"
    >
      <ImageBackground
        source={{ uri: data[current].image }}
        resizeMode="cover"
        imageStyle={{ borderRadius: 20 }}
        className="h-[500] items-center justify-between"
      >
        <LinearGradient
          colors={['rgba(0,0,0,1)', 'transparent']}
          className="w-full h-[100] p-[20] rounded-[20px]"
        >
          <View>
            <View className="flex-row mb-2 items-center">
              <Typography variant="display-sb">BYG BREWSKI</Typography>
              <Typography variant="display-m" className="ml-2 text-brand-40"> · 2m ago</Typography>
            </View>
            <ProgressBar
              duration={10000}
              current={current}
              data={data}
              isPaused={isPaused}
              setIsPaused={setIsPaused}
              setCurrent={setCurrent}
              singleTabWidth={singleTabWidth}
            />
          </View>
        </LinearGradient>
        <LinearGradient
          colors={['transparent', 'rgba(1,0,0,1)']}
          className="w-full h-[200] items-end p-[20] rounded-[20px]"
        >
          <View className="flex-1" />
          <View
            className="w-full items-center justify-self-end"
          >
            <Typography
              variant="display-b"
              className="text-xl"
            >
              Bartender Night
            </Typography>
            <Typography
              className="mb-2"
              variant="display-sb"
            >
              only 2 tables left
            </Typography>

            <Button
              className="w-full"
              label="attend"
              onPress={() => refRBSheet2.current.open()}
            />
          </View>
        </LinearGradient>

      </ImageBackground>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={700}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.4)"
          },
          draggableIcon: {
            backgroundColor: "#6D6D6D"
          },
          container: {
            backgroundColor: "#121212"
          }
        }}
        dragFromTopOnly={true}
        animationType="fade"
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            // className="flex-row"
            source={{ uri: "https://ik.imagekit.io/ajcgv08p8/story_test/image%209.png?updatedAt=1707447425073" }}
            resizeMode="cover"
          >
            <View
              className="flex"
            >
              <Typography
                variant="display-b"
                className="mt-24 ml-4 text-2xl"
              >
                Bar Tender Night
              </Typography>
              <View className="flex-row">
                <Typography
                  variant="display-m"
                  className="ml-4 text-trans-white-60"
                >
                  Byg Brewski
                </Typography>
                <Typography
                  variant="display-m"
                  className="ml-2 text-trans-white-60"
                >
                  | tomorrow. 6pm onwards
                </Typography>
              </View>
            </View>
          </ImageBackground>


          {/* ABOUT SECTION */}
          <About />

          <Divider />

          {/* MENU SECTION */}
          <Menu />

          <Divider />
          <Features />
          {/* FLOATING CTA */}
        </ScrollView>
        <View
          className="items-center pb-5"
        >
          <Divider
            className="w-full"
          />
          <Typography variant='display-m' className="py-3">only
            <Typography variant='display-b'>
              {" "}2 Tables{" "}
            </Typography>
            left
          </Typography>
          <Button
            label="book a table"
            className="w-full px-4"
          />
        </View>

      </RBSheet>

      {/* Booking RB Sheet */}

      <RBSheet
        ref={refRBSheet2}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={700}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.4)"
          },
          draggableIcon: {
            backgroundColor: "#6D6D6D"
          },
          container: {
            backgroundColor: "#121212"
          }
        }}
        dragFromTopOnly={true}
        animationType="fade"
      >
        <BookingRB pubId={pubId} navigation={navigation} />
      </RBSheet>

      {/* Booking RB Sheet */}

    </View>
  )
}

export default Story;