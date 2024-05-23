import { useRef } from "react";
import { Animated, Dimensions, Image, View } from "react-native";

function Indicators({ scrollX, data, width }) {
  return (
    <View
      className="flex-row p-2 rounded-sm"
      style={{
        position: "absolute",
        bottom: 20,
        left: 20,
        backgroundColor: "rgba(174, 193, 209, 0.6)",
      }}
    >
      {data.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width
        ];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [1, 1.4, 1],
          extrapolate: "clamp"
        });
        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: [
            "rgba(86, 86, 86, 0.4)",
            "rgba(86, 86, 86, 0.6)",
            "rgba(86, 86, 86, 0.4)"
          ],
          extrapolate: "clamp"
        });
        return (
          <Animated.View
            key={index}
            style={{
              width: 8,
              height: 8,
              backgroundColor,
              borderWidth: 1,
              borderColor: "rgba(255, 255, 255, 0.4)",
              borderRadius: 100,
              margin: 2,
              transform: [{ scale }]
            }}
          />
        );
      })}
    </View>
  );
}

export function ImageCarousel({ imageList, height = 472, isLoading }) {
  const { width } = Dimensions.get("window");
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item }) => {
    if (isLoading) {
      return <View style={{ width, height }} />;
    }
    return (
      <View>
        <Image
          source={{
            uri: ``
          }}
          style={{ width, height }}
        />
      </View>
    );
  };

  return (
    <View>
      <Animated.FlatList
        data={isLoading ? [1, 2] : imageList}
        keyExtractor={item => item}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
      <View>
        <Indicators scrollX={scrollX} data={imageList} width={width} />
      </View>
    </View>
  );
}
