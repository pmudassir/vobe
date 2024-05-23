import { View } from "react-native";
import { Typography } from "./Typography";

export function TextChip({ label, ...rest }) {
  return (
    <View
      className="border border-ntrl-80 mr-2 mt-3 rounded-full"
      {...rest}
    >
      <Typography className="p-2 rounded-full text-brand-40">
        {label}
      </Typography>
    </View>
  );
}

export function SelectChip({
  label,
  selected,
  onChange = () => { },
  index = -1,
  ...rest
}) {
  return (
    <View
      className={
        selected
          ? "border border-[#F5B53C] mr-2 px-3 py-2 rounded-full"
          : "border border-ntrl-80 mr-2 px-3 py-2 rounded-full"
      }
      onPress={index < 0 ? onChange : () => onChange(index)}
      {...rest}
    >
      <Typography
        variant="display-sb"
        className={selected ? "text-[#AD7013]" : " text-trans-white-60"}
      >
        {label}
      </Typography>
    </View>
  );
}
