import { CSSProperties, InputHTMLAttributes, ReactNode } from "react";

export type TTextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  variant?: TTextInputVariant;
  colors?: { base?: string; highlight?: string };
  adornments?: { left?: ReactNode; right?: ReactNode };
  error?: string;
  style?: TTextInputStyle;
};

export type TTextInputStyle = {
  root?: CSSProperties;
  input?: CSSProperties;
  bar?: CSSProperties;
  label?: CSSProperties;
  highlight?: CSSProperties;
  error?: CSSProperties;
};

export type TTextInputVariant = "standard" | "filled";
