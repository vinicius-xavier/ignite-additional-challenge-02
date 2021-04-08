import { ComponentType, InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  icon?: ComponentType<IconBaseProps>;
};

export type InputStyleProps = {
  isFilled: boolean;
  isFocused: boolean;
};
