import { useState } from "react";
import clsx from "clsx";
import { ActivityIndicator, Pressable } from "react-native";
import { Typography } from "./Typography";
import { Feather } from "@expo/vector-icons";

interface ButtonProps {
  children?: React.ReactNode;
  action?: "primary" | "secondary" | "tertiary" | "destructive" | "ghost";
  type?: "default" | "icon" | "text-icon";
  iconPosition?: "left" | "right";
  iconName?: keyof typeof Feather.glyphMap;
  iconColor?: string;
  iconSize?: number;
  size?: "XL" | "L" | "M" | "S";
  className?: string;
  label?: string;
  disabled?: boolean;
  typographyClassName?: string;
  onPressIn?: () => void;
  onPressOut?: () => void;
  onPress?: () => void;
  isLoading?: boolean;
  loadingSize?: "small" | "large";
  loadingColor?: string;
}

export function Button(props: ButtonProps) {
  const {
    children,
    action = "primary",
    type = "default",
    iconPosition = "right",
    iconName,
    iconColor,
    iconSize = 24,
    size = "L",
    className,
    label = "",
    disabled = false,
    typographyClassName = "",
    onPressIn = () => {},
    onPressOut = () => {},
    isLoading = false,
    loadingSize = "small",
    loadingColor,
    ...rest
  } = props;

  const [isPressed, setIsPressed] = useState(false);

  const actionStyles = {
    container: clsx(
      // PRIMARY
      { "bg-golden": action === "primary" && !disabled },
      { "bg-golden": action === "primary" && isPressed },

      // SECONDARY
      { "bg-base-ntrl-N900": action === "secondary" && !disabled },
      { "bg-ntrl-60": action === "secondary" && isPressed },

      // TERTIARY
      {
        "bg-transparent border border-spl-green-50":
          action === "tertiary" && !disabled,
      },
      { "bg-spl-green-50": action === "tertiary" && isPressed },

      // DESTRUCTIVE
      { "bg-spl-red-30": action === "destructive" && !disabled },
      { "bg-spl-red-50": action === "destructive" && isPressed },

      //GHOST
      {
        "bg-transparent border": action === "ghost" && !disabled,
      },
      { "bg-ntrl-40": action === "ghost" && isPressed }
    ),

    text: clsx(
      { "text-ntrl-black": action === "primary" && !disabled },
      { "text-ntrl-white": action === "secondary" && !disabled },
      { "text-spl-green-50": action === "tertiary" && !disabled },
      { "text-ntrl-white": action === "destructive" },
      { "text-ntrl-80": action === "ghost" }
    ),

    loading: clsx(
      { "#000": action === "primary" && !disabled },
      { "#fff": action === "secondary" && !disabled },
      { "#3A7E6A": action === "tertiary" && !disabled },
      { "#fff": action === "destructive" },
      { "#333333": action === "ghost" }
    ),
  };

  const typeStyles = {
    container: clsx(
      { "justify-center": type === "default" },
      { "justify-center": type === "icon" },
      { "justify-between flex-row": type === "text-icon" }
    ),
  };

  // const disabledStyles = {
  //   container: clsx({
  //     "bg-ntrl-black": disabled
  //   }),
  //   text: clsx({ "text-ntrl-white": disabled })
  // };

  const disabledStyles = {
    container: clsx({
      "bg-[#2323231a]": disabled,
    }),
    text: clsx({ "text-[#fff]": disabled }),
  };

  const sizeStyles = {
    container: clsx(
      { "p-4": size === "XL" },
      { "p-2": size === "L" },
      { "p-[6px]": size === "M" },
      { "p-1": size === "S" }
    ),
  };

  let textVariant;
  switch (size) {
    case "XL":
    case "L":
      textVariant = "label-large";
      break;
    case "M":
      textVariant = "label-medium";
      break;
    case "S":
      textVariant = "label-small";
      break;
  }

  return (
    <Pressable
      className={`flex items-center rounded-[10px] ${actionStyles.container} ${typeStyles.container} ${disabledStyles.container} ${sizeStyles.container} ${className}`}
      onPressIn={() => {
        setIsPressed(true);
        onPressIn();
      }}
      onPressOut={() => {
        setIsPressed(false);
        onPressOut();
      }}
      disabled={disabled}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}>
      {!isLoading && type === "text-icon" && iconPosition === "left" && (
        <Feather name={iconName} size={iconSize} color={iconColor} />
      )}
      {(type === "default" || type === "text-icon") && (
        <Typography
          variant={textVariant}
          color={actionStyles.text}
          className={`${disabledStyles.text} ${
            iconPosition === "left" && "ml-1"
          } ${typographyClassName}`}>
          {!disabled && isLoading && (
            <ActivityIndicator
              size={loadingSize}
              color={loadingColor ?? actionStyles.loading}
            />
          )}
          {!isLoading && label}
        </Typography>
      )}

      {!isLoading &&
        ((type === "text-icon" && iconPosition === "right") ||
          type === "icon") && (
          <Feather name={iconName} size={iconSize} color={iconColor} />
        )}
    </Pressable>
  );
}
