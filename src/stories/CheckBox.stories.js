import { CheckBox } from "components";
export default {
  title: "ajitkumar_s_application3/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = { label: "Checkbox", size: "sm", inputClassName: "mr-1" };
