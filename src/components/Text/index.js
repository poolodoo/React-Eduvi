import React from "react";
const variantClasses = {
  h1: "font-bold lg:text-[46px] xl:text-[57px] text-[65px] 3xl:text-[78px]",
  h2: "lg:text-[32px] xl:text-[40px] text-[45px] 3xl:text-[54px]",
  h3: "font-bold lg:text-[28px] xl:text-[35px] text-[40px] 3xl:text-[48px]",
  h4: "lg:text-[21px] xl:text-[26px] text-[30px] 3xl:text-[36px]",
  h5: "font-normal lg:text-[17px] xl:text-[22px] text-[25px] 3xl:text-[30px]",
  h6: "font-normal lg:text-[17px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  body1:
    "font-normal lg:text-[16px] xl:text-[20px] text-[22.54px] 2xl:text-[22px] 3xl:text-[27px]",
  body2:
    "font-normal lg:text-[15px] xl:text-[19px] text-[22px] 3xl:text-[26px]",
  body3: "lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  body4: "lg:text-[12px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  body5: "lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  body6: "font-medium xl:text-[12px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
