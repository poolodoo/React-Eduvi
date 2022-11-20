import { SelectBox } from "components";
export default {
  title: "ajitkumar_s_application3/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "RoundedBorder10",
  variant: "FillWhiteA700",
  size: "sm",
  className: "w-[300px]",
};
