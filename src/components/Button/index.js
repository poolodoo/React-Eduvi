import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder5: "rounded-radius5",
  RoundedBorder10: "rounded-radius10",
  CustomBorderLR10:
    "rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px]",
  icbRoundedBorder5: "rounded-radius5",
  icbCircleBorder30: "rounded-radius30",
  icbCircleBorder9: "rounded-radius9",
};
const variants = {
  OutlineRed300: "border border-red_300 border-solid text-red_300",
  FillWhiteA700: "bg-white_A700",
  FillRed300: "bg-red_300 text-white_A700",
  FillOrange200: "bg-orange_200 text-white_A700",
  FillBlack900: "bg-black_900 text-white_A700",
  icbFillRed53: "bg-red_53",
  icbFillDeeporange400: "bg-deep_orange_400",
  icbFillRed300: "bg-red_300",
  icbOutlineGray90026: "bg-white_A700 shadow-bs",
  icbFillWhiteA700: "bg-white_A700",
};
const sizes = {
  sm: "xl:p-[12px] p-[14px] 3xl:p-[16px] lg:p-[9px]",
  md: "lg:p-[12px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  lg: "lg:p-[14px] xl:p-[18px] p-[21px] 3xl:p-[25px]",
  smIcn: "p-[4px]",
  mdIcn: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  lgIcn: "xl:p-[11px] p-[13px] 3xl:p-[15px] lg:p-[9px]",
  xlIcn: "lg:p-[12px] xl:p-[16px] p-[18px] 3xl:p-[21px]",
  "2xlIcn": "lg:p-[15px] xl:p-[19px] p-[22px] 3xl:p-[26px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder5",
    "RoundedBorder10",
    "CustomBorderLR10",
    "icbRoundedBorder5",
    "icbCircleBorder30",
    "icbCircleBorder9",
  ]),
  variant: PropTypes.oneOf([
    "OutlineRed300",
    "FillWhiteA700",
    "FillRed300",
    "FillOrange200",
    "FillBlack900",
    "icbFillRed53",
    "icbFillDeeporange400",
    "icbFillRed300",
    "icbOutlineGray90026",
    "icbFillWhiteA700",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
    "2xlIcn",
  ]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder10",
  variant: "FillRed300",
  size: "lg",
};

export { Button };
