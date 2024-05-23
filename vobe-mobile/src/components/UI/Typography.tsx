import clsx from "clsx";
import { Text, TextProps } from "react-native";

type TypographyVariant =
  | "display-b"
  | "display-sb"
  | "display-m"

interface TypographyProps extends TextProps {
  children: React.ReactNode;
  variant?: TypographyVariant;
  color?: string;
}

export function Typography(props: TypographyProps) {
  const {
    children,
    variant,
    color = "text-ntrl-white",
    className,
    ...rest
  } = props;

  const variantStyles = clsx(
    // Display
    { "font-gilBold": variant === "display-b" },
    {
      "font-gilMedium": variant === "display-m",
    },
    { "font-gilSemiBold": variant === "display-sb" },

    // Body
    // { "font-manropeMedium text-body-lg": variant === "body-large" },
    // {
    //   "font-manropeSemiBold text-body-md": variant === "body-medium",
    // },
    // { "font-manropeMedium text-body-sm": variant === "body-small" }
  );

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Text
      className={`${variantStyles} ${color} ${className}`}
      {...rest}
    >
      {children}
    </Text>
  );
}
