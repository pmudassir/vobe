import { TextInput, TextInputProps } from "react-native";

interface TextFieldProps extends TextInputProps {
  changeHandler?: (text: string) => void;
}

export function TextField(props: TextFieldProps) {
  const { style, placeholder, value, changeHandler, ...rest } = props;
  return (
    <TextInput
      className="border border-brand-50 py-4 px-5 w-full rounded-xs text-brand-50 text-label-md"
      style={style}
      value={value}
      placeholder={placeholder}
      onChangeText={changeHandler}
      {...rest}
    />
  );
}
