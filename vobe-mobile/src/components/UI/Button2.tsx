import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import { Typography } from "./Typography";

interface ButtonProps {
  children?: React.ReactNode;
  action?: "primary" | "secondary" | "tertiary" | "destructive" | "ghost";
  type?: "default" | "icon" | "text-icon";
  iconPosition?: "left" | "right";
  // iconName?: keyof typeof Feather.glyphMap;
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
    // iconName,
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

  return (
    <TouchableOpacity {...rest}>
      <LinearGradient
        colors={["#F5B53C", "#AD7013"]}
        className="items-center rounded-xs">
        <Typography variant="display-sb" className="mt-5 mb-5 text-md text-[#121212] text-md">
          {label}
        </Typography>
      </LinearGradient>
    </TouchableOpacity>
  );
}
