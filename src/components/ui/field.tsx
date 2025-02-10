import {Field as ChakraField} from "@chakra-ui/react";
import * as React from "react";

type SizeProps = "xs" | "sm" | "md" | "lg" | number;
type WeightProps =
  | "thin"
  | "extraLight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black"
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

type LabelProps = {
  color?: string;
  size?: SizeProps;
  weight?: WeightProps;
};

export interface FieldProps extends Omit<ChakraField.RootProps, "label"> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  errorText?: React.ReactNode;
  optionalText?: React.ReactNode;
  labelProps?: LabelProps;
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(function Field(props, ref) {
  const {label, children, helperText, errorText, optionalText, labelProps, ...rest} = props;

  // Map size and weight to Tailwind-compatible class names
  const sizeClass =
    labelProps?.size === "xs"
      ? "text-xs"
      : labelProps?.size === "sm"
      ? "text-sm"
      : labelProps?.size === "md"
      ? "text-base"
      : labelProps?.size === "lg"
      ? "text-lg"
      : typeof labelProps?.size === "number"
      ? `text-[${labelProps.size}px]`
      : "";

  const weightClass =
    labelProps?.weight === "thin"
      ? "font-thin"
      : labelProps?.weight === "extraLight"
      ? "font-extralight"
      : labelProps?.weight === "light"
      ? "font-light"
      : labelProps?.weight === "normal"
      ? "font-normal"
      : labelProps?.weight === "medium"
      ? "font-medium"
      : labelProps?.weight === "semibold"
      ? "font-semibold"
      : labelProps?.weight === "bold"
      ? "font-bold"
      : labelProps?.weight === "extrabold"
      ? "font-extrabold"
      : labelProps?.weight === "black"
      ? "font-black"
      : typeof labelProps?.weight === "number"
      ? `font-[${labelProps.weight}]`
      : "";

  return (
    <ChakraField.Root ref={ref} {...rest}>
      {label && (
        <ChakraField.Label
          className={`${sizeClass} ${weightClass}`}
          style={{
            color: labelProps?.color, // Inline style for color
          }}
        >
          {label}
          <ChakraField.RequiredIndicator fallback={optionalText} />
        </ChakraField.Label>
      )}
      {children}
      {helperText && <ChakraField.HelperText>{helperText}</ChakraField.HelperText>}
      {errorText && <ChakraField.ErrorText>{errorText}</ChakraField.ErrorText>}
    </ChakraField.Root>
  );
});
