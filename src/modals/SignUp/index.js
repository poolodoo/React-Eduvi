import React from "react";
import ModalProvider from "react-modal";

import {
  Column,
  Stack,
  Slider,
  Row,
  Img,
  Text,
  Line,
  Input,
  CheckBox,
  Button,
  PagerIndicator,
} from "components";

const SignUpModal = (props) => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-black_900_b2 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Stack className="2xl:h-[1081px] 3xl:h-[1297px] lg:h-[768px] xl:h-[961px] xl:px-[124px] 2xl:px-[140px] 3xl:px-[168px] lg:px-[99px] w-[100%]">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              slidesToShow={1}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="absolute inset-[0] justify-center m-[auto] w-[74%]"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <Row className="bg-white_A700 items-center justify-end lg:p-[56px] xl:p-[70px] 2xl:p-[79px] 3xl:p-[94px] rounded-radius15">
                    <Column className="pr-[2px] pt-[2px] w-[49%]">
                      <Row className="items-start w-[30%]">
                        <Img
                          src="images/img_location.svg"
                          className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mb-[2px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                          alt="location"
                        />
                        <Text className="rowlocation" variant="body1">
                          Educatsy
                        </Text>
                      </Row>
                      <Column className="font-metropolis justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:pb-[33px] xl:pb-[41px] 2xl:pb-[47px] 3xl:pb-[56px] w-[80%]">
                        <Text className="Left" as="h3" variant="h3">
                          Welcome to
                          <br />
                          Eduvi Online
                          <br />
                          Learning Platform
                        </Text>
                        <Img
                          src="images/img_objects.svg"
                          className="lg:h-[229px] xl:h-[287px] 2xl:h-[323px] 3xl:h-[387px] ml-[2px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[93%]"
                          alt="Group"
                        />
                      </Column>
                    </Column>
                    <Line className="bg-gradient  lg:h-[456px] xl:h-[571px] 2xl:h-[642px] 3xl:h-[770px] mt-[1px] w-[1px]" />
                    <Column className="items-center lg:ml-[56px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] w-[41%]">
                      <Row className="bg-white_A700 border border-gray_301 border-solid items-center justify-center lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius10 w-[92%]">
                        <Stack className="bg-red_602 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius7 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                          <Img
                            src="images/img_google.svg"
                            className="absolute inset-[0] justify-center m-[auto] checkmark"
                            alt="google"
                          />
                        </Stack>
                        <Text
                          className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mr-[49px] xl:mr-[61px] 2xl:mr-[69px] 3xl:mr-[82px] columnclassroomcours"
                          variant="body5"
                        >
                          Signup with google
                        </Text>
                      </Row>
                      <Row className="items-start justify-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[68%]">
                        <div className="bg-gray_700 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[8%]"></div>
                        <Text
                          className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] columnclassroomcours"
                          variant="body5"
                        >
                          Or signup with your email
                        </Text>
                        <div className="bg-gray_700 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[8%]"></div>
                      </Row>
                      <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                        <Column className="justify-start w-[100%]">
                          <Text
                            className="font-medium text-gray_900 w-[auto]"
                            variant="body5"
                          >
                            Full name
                          </Text>
                          <Input
                            className="placeholder:text-gray_700 Group7608"
                            wrapClassName="2xl:mt-[11px] 3xl:mt-[13px] flex lg:mt-[7px] w-[100%] xl:mt-[9px]"
                            name="Group7608"
                            placeholder="Esther Howard"
                            prefix={
                              <Img
                                src="images/img_user_18X18.svg"
                                className="ml-[2px] lg:w-[12px] lg:h-[13px] lg:mr-[10px] xl:w-[16px] xl:h-[17px] xl:mr-[13px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[15px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[18px] my-[auto]"
                                alt="user"
                              />
                            }
                            shape="RoundedBorder10"
                            size="sm"
                            variant="OutlineGray301"
                          ></Input>
                        </Column>
                        <Column className="justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                          <Text
                            className="font-medium text-gray_900 w-[auto]"
                            variant="body5"
                          >
                            Email
                          </Text>
                          <Input
                            className="placeholder:text-gray_700 Group7608"
                            wrapClassName="2xl:mt-[11px] 3xl:mt-[13px] flex lg:mt-[7px] w-[100%] xl:mt-[9px]"
                            name="email One"
                            placeholder="bill.sanders@example.com"
                            prefix={
                              <Img
                                src="images/img_message_24_outline.svg"
                                className="ml-[2px] lg:w-[12px] lg:h-[13px] lg:mr-[10px] xl:w-[16px] xl:h-[17px] xl:mr-[13px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[15px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[18px] my-[auto]"
                                alt="message / 24 / Outline"
                              />
                            }
                            shape="RoundedBorder10"
                            size="sm"
                            variant="OutlineGray301"
                          ></Input>
                        </Column>
                        <Column className="justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                          <Text
                            className="font-medium text-gray_900 w-[auto]"
                            variant="body5"
                          >
                            Passord
                          </Text>
                          <Input
                            className="placeholder:text-gray_700 Group7608"
                            wrapClassName="2xl:mt-[11px] 3xl:mt-[13px] flex lg:mt-[7px] w-[100%] xl:mt-[9px]"
                            name="password"
                            placeholder="*************"
                            prefix={
                              <Img
                                src="images/img_lock_1.svg"
                                className="ml-[2px] lg:w-[12px] lg:h-[13px] lg:mr-[10px] xl:w-[16px] xl:h-[17px] xl:mr-[13px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[15px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[18px] my-[auto]"
                                alt="lock"
                              />
                            }
                            suffix={
                              <Img
                                src="images/img_eye.svg"
                                className="mr-[2px] lg:w-[12px] lg:h-[13px] lg:ml-[24px] xl:w-[16px] xl:h-[17px] xl:ml-[31px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[35px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[42px] my-[auto]"
                                alt="eye"
                              />
                            }
                            shape="RoundedBorder10"
                            size="sm"
                            variant="OutlineGray301"
                          ></Input>
                        </Column>
                        <CheckBox
                          className="font-medium lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900"
                          inputClassName="mr-[5px] w-[undefinedpx]"
                          name="Iagreedtothe"
                          label="I agreed to the Terms & Conditions"
                        ></CheckBox>
                        <Button
                          className="font-medium lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                          size="md"
                        >
                          Sign Up
                        </Button>
                        <Text
                          className="font-medium lg:ml-[52px] xl:ml-[65px] 2xl:ml-[74px] 3xl:ml-[88px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] text-red_300 w-[auto]"
                          variant="body5"
                        >
                          <span className="text-gray_700 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                            Alreay have account?{" "}
                          </span>
                          <span className="text-red_300 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                            Sign in
                          </span>
                        </Text>
                      </Column>
                    </Column>
                  </Row>
                </React.Fragment>
              ))}
              Indicator={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer rounded-radius50 w-[10px] h-[10px] border-red_300 border border-solid bg-white_A700 relative" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-radius50 w-[8px] h-[8px] bg-deep_orange_400_7f relative"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="absolute bottom-[10%] h-[10px] left-[21%] w-[max-content]"
              count={3}
              activeCss="inline-block cursor-pointer rounded-radius50 w-[10px] h-[10px] border-red_300 border border-solid bg-white_A700 relative"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-radius50 w-[8px] h-[8px] bg-deep_orange_400_7f relative"
              sliderRef={sliderRef}
              selectedWrapperCss="2xl:mx-[2px] 3xl:mx-[3px] inline-block lg:mx-[1px] xl:mx-[2px]"
              unselectedWrapperCss="2xl:mx-[2px] 3xl:mx-[3px] inline-block lg:mx-[1px] xl:mx-[2px]"
            />
          </Stack>
        </div>
      </ModalProvider>
    </>
  );
};

export { SignUpModal };
