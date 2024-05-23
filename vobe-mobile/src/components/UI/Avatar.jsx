import { Image, StyleSheet, View, Text } from "react-native";
import { Typography } from "./Typography";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import clsx from "clsx";

//variant: square, rounded, circle
//size: small, medium
export function Avatar({ size, image, children, style }) {
    const sizeStyles = {
        container: clsx(
            { "w-6 h-6": size === "small" },
            { "w-14 h-14": size === "medium" }
        )
    };

    if (image && image.length) {
        return (
            <Image
                className={`rounded-full ${sizeStyles.container}`}
                style={style}
                source={{ uri: image }}
            />
        );
    } else {
        return (
            <>
                <View
                    className="bg-spl-blue-30 rounded-full p-5 pl-8 pr-8 border border-black"
                    style={style}
                >
                    <Typography className="text-display-lg text-brand-10">
                        {children}
                    </Typography>
                </View>
            </>
        );
    }
}

export function EditAvatar({ children }) {
    return (
        <>
            <View className="bg-spl-blue-30 rounded-full m-auto border border-black w-32 h-32 items-center justify-center">
                <Typography className="text-display-lg text-brand-10">
                    {children}
                </Typography>
                <View
                    style={{
                        position: "absolute",
                        top: 93,
                        left: 80
                    }}
                    className="bg-brand-80 rounded-full p-2"
                >
                    <Feather name="edit-2" size={18} color="white" />
                </View>
            </View>
        </>
    );
}

export function AvatarGroup({ data, size = "medium" }) {
    return (
        <View className="flex-row">
            {data.map((obj, index) => {
                return (
                    <Avatar
                        key={index}
                        size={size}
                        image={obj.avatar}
                        className={`relative border border-black`}
                        style={{
                            left: -10 * index
                        }}
                    />
                );
            })}
        </View>
    );
}
