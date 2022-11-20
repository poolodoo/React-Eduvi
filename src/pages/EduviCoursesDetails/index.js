import React from "react";

import {
  Column,
  Row,
  Text,
  Button,
  Img,
  List,
  Grid,
  Stack,
  Input,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const EduviCoursesDetailsPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Row className="bg-gray_200 items-center lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:p-[20px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] rounded-radius20 w-[89%]">
            <Column className="mb-[1px] ml-[1px] w-[69%]">
              <Text
                className="font-medium text-deep_orange_400 tracking-ls1 w-[auto]"
                variant="body5"
              >
                <span className="text-black_900 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  Home | Courses |
                </span>
                <span className="text-red_400 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  {" "}
                  Course Details
                </span>
              </Text>
              <Column className="justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[92%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-start lg:p-[140px] xl:p-[175px] 2xl:p-[197px] 3xl:p-[236px] rounded-radius20 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group7667.png')" }}
                >
                  <Button
                    className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center mb-[1px] rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                    size="2xlIcn"
                    variant="icbFillRed300"
                  >
                    <Img
                      src="images/img_play.svg"
                      className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                      alt="play"
                    />
                  </Button>
                </Column>
                <Text
                  className="lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] text-black_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Maths - for Standard 3 Students | Episode 2
                </Text>
              </Column>
            </Column>
            <Column className="w-[31%]">
              <Text className="text-black_900 w-[auto]" as="h5" variant="h5">
                Course Playlists
              </Text>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                orientation="vertical"
              >
                <Column className="bg-white_A700 hover:cursor-pointer justify-start lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 hover:shadow-bs2 w-[100%]">
                  <Row className="items-end rounded-radius5 w-[74%]">
                    <Img
                      src="images/img_image_50X80.png"
                      className="lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] rounded-radius5 w-[30%]"
                      alt="Image"
                    />
                    <Column className="justify-start mb-[3px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[67%]">
                      <Text
                        className="font-normal text-black_900 w-[auto]"
                        variant="body4"
                      >
                        Maths - Introduction
                      </Text>
                      <Text
                        className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-deep_orange_400 w-[auto]"
                        variant="body6"
                      >
                        1:57
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Column className="bg-white_A700 hover:cursor-pointer justify-start lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 hover:shadow-bs2 w-[100%]">
                  <Row className="items-end rounded-radius5 w-[89%]">
                    <Img
                      src="images/img_image_50X80.png"
                      className="lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] rounded-radius5 w-[25%]"
                      alt="Image One"
                    />
                    <Column className="justify-start mb-[3px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[72%]">
                      <Text
                        className="font-normal text-black_900 w-[auto]"
                        variant="body4"
                      >
                        Maths - for Standard 3 St..
                      </Text>
                      <Text
                        className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-deep_orange_400 w-[auto]"
                        variant="body6"
                      >
                        5:43
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Row className="bg-white_A700_87 hover:cursor-pointer items-end lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 hover:shadow-bs2 w-[100%]">
                  <Column
                    className="bg-cover bg-repeat items-center justify-start lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius5 w-[22%]"
                    style={{
                      backgroundImage: "url('images/img_image_50X80.png')",
                    }}
                  >
                    <Button
                      className="flex lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center rounded-radius50 lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                      size="smIcn"
                      variant="icbFillWhiteA700"
                    >
                      <Img
                        src="images/img_lock_18X18.svg"
                        className="flex items-center justify-center lg:h-[8px] xl:h-[9px] 2xl:h-[11px] 3xl:h-[13px]"
                        alt="lock"
                      />
                    </Button>
                  </Column>
                  <Column className="justify-start mb-[3px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[64%]">
                    <Text
                      className="font-normal text-black_900_87 w-[auto]"
                      variant="body4"
                    >
                      Maths - for Standard 3 St..
                    </Text>
                    <Text className="time_Two" variant="body6">
                      8:11
                    </Text>
                  </Column>
                </Row>
                <Row className="bg-white_A700_87 hover:cursor-pointer items-end lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 hover:shadow-bs2 w-[100%]">
                  <Column
                    className="bg-cover bg-repeat items-center justify-start lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius5 w-[22%]"
                    style={{
                      backgroundImage: "url('images/img_image_50X80.png')",
                    }}
                  >
                    <Button
                      className="flex lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center rounded-radius50 lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                      size="smIcn"
                      variant="icbFillWhiteA700"
                    >
                      <Img
                        src="images/img_lock_18X18.svg"
                        className="flex items-center justify-center lg:h-[8px] xl:h-[9px] 2xl:h-[11px] 3xl:h-[13px]"
                        alt="lock One"
                      />
                    </Button>
                  </Column>
                  <Column className="justify-start mb-[3px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[64%]">
                    <Text
                      className="font-normal text-black_900_87 w-[auto]"
                      variant="body4"
                    >
                      Maths - for Standard 3 St..
                    </Text>
                    <Text className="time_Two" variant="body6">
                      6:10
                    </Text>
                  </Column>
                </Row>
                <Row className="bg-white_A700_87 hover:cursor-pointer items-end lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 hover:shadow-bs2 w-[100%]">
                  <Column
                    className="bg-cover bg-repeat items-center justify-start lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius5 w-[22%]"
                    style={{
                      backgroundImage: "url('images/img_image_50X80.png')",
                    }}
                  >
                    <Button
                      className="flex lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center rounded-radius50 lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                      size="smIcn"
                      variant="icbFillWhiteA700"
                    >
                      <Img
                        src="images/img_lock_18X18.svg"
                        className="flex items-center justify-center lg:h-[8px] xl:h-[9px] 2xl:h-[11px] 3xl:h-[13px]"
                        alt="lock Two"
                      />
                    </Button>
                  </Column>
                  <Column className="justify-start mb-[3px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[64%]">
                    <Text
                      className="font-normal text-black_900_87 w-[auto]"
                      variant="body4"
                    >
                      Maths - for Standard 3 St..
                    </Text>
                    <Text className="time_Two" variant="body6">
                      10:00
                    </Text>
                  </Column>
                </Row>
                <Row className="bg-white_A700_87 hover:cursor-pointer items-end lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 hover:shadow-bs2 w-[100%]">
                  <Column
                    className="bg-cover bg-repeat items-center justify-start lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius5 w-[22%]"
                    style={{
                      backgroundImage: "url('images/img_image_50X80.png')",
                    }}
                  >
                    <Button
                      className="flex lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center rounded-radius50 lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                      size="smIcn"
                      variant="icbFillWhiteA700"
                    >
                      <Img
                        src="images/img_lock_18X18.svg"
                        className="flex items-center justify-center lg:h-[8px] xl:h-[9px] 2xl:h-[11px] 3xl:h-[13px]"
                        alt="lock Three"
                      />
                    </Button>
                  </Column>
                  <Column className="justify-start mb-[3px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[64%]">
                    <Text
                      className="font-normal text-black_900_87 w-[auto]"
                      variant="body4"
                    >
                      Maths - for Standard 3 St..
                    </Text>
                    <Text className="time_Two" variant="body6">
                      7:53
                    </Text>
                  </Column>
                </Row>
              </List>
            </Column>
          </Row>
          <Row className="items-start lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[89%]">
            <Column className="justify-start pr-[2px] pt-[2px] w-[69%]">
              <Column className="justify-start w-[94%]">
                <Text
                  className="font-normal text-black_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Course Details
                </Text>
                <Text className="description6" variant="body5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                </Text>
              </Column>
              <Column className="justify-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[94%]">
                <Text
                  className="font-normal text-black_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Certification
                </Text>
                <Text className="description6" variant="body5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                </Text>
              </Column>
              <Column className="justify-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[94%]">
                <Text
                  className="font-normal text-black_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Who this course is for
                </Text>
                <Text className="description6" variant="body5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                </Text>
              </Column>
              <Column className="items-center justify-start lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] w-[51%]">
                <Text
                  className="font-normal text-black_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  What you'll learn in this course:
                </Text>
                <Row className="items-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[96%]">
                  <div className="bg-deep_orange_400 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[1px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="rowellipse172" variant="body5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </Row>
                <Row className="items-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[96%]">
                  <div className="bg-deep_orange_400 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[1px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="rowellipse172" variant="body5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </Row>
                <Row className="items-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[96%]">
                  <div className="bg-deep_orange_400 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[1px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="rowellipse172" variant="body5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </Row>
                <Row className="items-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[96%]">
                  <div className="bg-deep_orange_400 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[1px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="rowellipse172" variant="body5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </Row>
                <Row className="items-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[96%]">
                  <div className="bg-deep_orange_400 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[1px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="rowellipse172" variant="body5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center justify-start w-[31%]">
              <Column className="bg-white_A700 items-center justify-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius10 w-[100%]">
                <Row className="items-start justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                  <Text className="Price" variant="body3">
                    Price
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    $49.00
                  </Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Text
                    className="font-normal text-gray_700 w-[auto]"
                    variant="body3"
                  >
                    Instructor
                  </Text>
                  <Text className="font-normal lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 underline w-[auto]">
                    Wade Warren
                  </Text>
                </Row>
                <Row className="items-start justify-between lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                  <Text className="Price" variant="body3">
                    Ratings
                  </Text>
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[26%]"
                    alt="mobile"
                  />
                </Row>
                <Row className="items-start justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                  <Text
                    className="font-normal mb-[2px] text-gray_700 w-[auto]"
                    variant="body3"
                  >
                    Durations
                  </Text>
                  <Text
                    className="font-normal mt-[2px] text-black_900 w-[auto]"
                    variant="body3"
                  >
                    10 Days
                  </Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                  <Text className="Price" variant="body3">
                    Lessons
                  </Text>
                  <Text className="Thirty" variant="body3">
                    30
                  </Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                  <Text className="Price" variant="body3">
                    Quizzes
                  </Text>
                  <Text className="Thirty" variant="body3">
                    5
                  </Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Text
                    className="font-normal mb-[1px] text-gray_700 w-[auto]"
                    variant="body3"
                  >
                    Certificate
                  </Text>
                  <Text
                    className="font-normal mt-[1px] text-black_900 w-[auto]"
                    variant="body3"
                  >
                    Yes
                  </Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                  <Text className="Price" variant="body3">
                    Language
                  </Text>
                  <Text className="Thirty" variant="body3">
                    English
                  </Text>
                </Row>
                <Row className="items-center justify-between lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                  <Text className="Price" variant="body3">
                    Access
                  </Text>
                  <Text className="Thirty" variant="body3">
                    Lifetime
                  </Text>
                </Row>
              </Column>
              <Button
                className="font-medium lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                shape="RoundedBorder5"
              >
                Purchase Course
              </Button>
            </Column>
          </Row>
          <Column className="font-metropolis justify-start lg:mt-[107px] xl:mt-[134px] 2xl:mt-[151px] 3xl:mt-[181px] w-[89%]">
            <Text
              className="font-bold text-gray_900 w-[auto]"
              as="h2"
              variant="h2"
            >
              Similar Courses
            </Text>
            <Grid className="font-inter lg:gap-[28px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-2 lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[100%]">
              <Row className="bg-white_A700 hover:cursor-pointer items-end lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
                <Img
                  src="images/img_image_12.png"
                  className="Image_One1"
                  alt="Image Two"
                />
                <Column className="justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[59%]">
                  <Text className="text-gray_900 w-[auto]" as="h6" variant="h6">
                    The Three Musketeers
                  </Text>
                  <Img
                    src="images/img_star_20X112.svg"
                    className="star"
                    alt="star"
                  />
                  <Text className="price2" as="h6" variant="h6">
                    $40.00
                  </Text>
                </Column>
                <Button
                  className="flex lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] items-center justify-center lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] lg:w-[31px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                  shape="icbRoundedBorder5"
                  size="mdIcn"
                  variant="icbFillRed300"
                >
                  <Img
                    src="images/img_lock.svg"
                    className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                    alt="lock Four"
                  />
                </Button>
              </Row>
              <Row className="bg-white_A700 hover:cursor-pointer items-end lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
                <Img
                  src="images/img_image_5.png"
                  className="Image_One1"
                  alt="Image Four"
                />
                <Column className="justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[59%]">
                  <Text className="text-gray_900 w-[auto]" as="h6" variant="h6">
                    The Three Musketeers
                  </Text>
                  <Img
                    src="images/img_star_20X112.svg"
                    className="star"
                    alt="star One"
                  />
                  <Text className="price2" as="h6" variant="h6">
                    $40.00
                  </Text>
                </Column>
                <Button
                  className="flex lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] items-center justify-center lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] lg:w-[31px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                  shape="icbRoundedBorder5"
                  size="mdIcn"
                  variant="icbFillRed53"
                >
                  <Img
                    src="images/img_bag.svg"
                    className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                    alt="bag One"
                  />
                </Button>
              </Row>
              <Row className="bg-white_A700 hover:cursor-pointer items-end lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
                <Img
                  src="images/img_image_8.png"
                  className="Image_One1"
                  alt="Image Six"
                />
                <Column className="justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[59%]">
                  <Text className="text-gray_900 w-[auto]" as="h6" variant="h6">
                    The Three Musketeers
                  </Text>
                  <Img
                    src="images/img_star_20X112.svg"
                    className="star"
                    alt="star Two"
                  />
                  <Text className="price2" as="h6" variant="h6">
                    $40.00
                  </Text>
                </Column>
                <Button
                  className="flex lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] items-center justify-center lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] lg:w-[31px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                  shape="icbRoundedBorder5"
                  size="mdIcn"
                  variant="icbFillRed53"
                >
                  <Img
                    src="images/img_bag.svg"
                    className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                    alt="bag Two"
                  />
                </Button>
              </Row>
              <Row className="bg-white_A700 hover:cursor-pointer items-end lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
                <Img
                  src="images/img_image_6.png"
                  className="Image_One1"
                  alt="Image Eight"
                />
                <Column className="justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[59%]">
                  <Text className="text-gray_900 w-[auto]" as="h6" variant="h6">
                    The Three Musketeers
                  </Text>
                  <Img
                    src="images/img_star_20X112.svg"
                    className="star"
                    alt="star Three"
                  />
                  <Text className="price2" as="h6" variant="h6">
                    $40.00
                  </Text>
                </Column>
                <Button
                  className="flex lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] items-center justify-center lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] lg:w-[31px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                  shape="icbRoundedBorder5"
                  size="mdIcn"
                  variant="icbFillRed53"
                >
                  <Img
                    src="images/img_bag.svg"
                    className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                    alt="bag Three"
                  />
                </Button>
              </Row>
            </Grid>
          </Column>
          <Stack className="bg-black_901 lg:h-[299px] xl:h-[374px] 2xl:h-[421px] 3xl:h-[505px] lg:mt-[106px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] lg:px-[35px] xl:px-[44px] 2xl:px-[50px] 3xl:px-[60px] rounded-radius20 w-[89%]">
            <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[45%]">
              <Text className="SubscribeForG" as="h2" variant="h2">
                Subscribe For Get Update
                <br />
                Every New Courses
              </Text>
              <Text className="test_20kstudentsd" variant="body5">
                20k+ students daily learn with Eduvi. Subscribe for new courses.
              </Text>
              <Row className="font-inter items-center lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[88%]">
                <Input
                  className="placeholder:text-white_A700 button"
                  wrapClassName="w-[72%]"
                  type="email"
                  name="button"
                  placeholder="enter your email"
                ></Input>
                <Button
                  className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[28%]"
                  shape="CustomBorderLR10"
                >
                  Subscribe
                </Button>
              </Row>
            </Column>
            <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[92%]">
              <Row className="items-center justify-between w-[97%]">
                <Img
                  src="images/img_ellipse168.png"
                  className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rotate-[180deg] rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  alt="Ellipse168"
                />
                <Img
                  src="images/img_ellipse166.png"
                  className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  alt="Ellipse166"
                />
              </Row>
              <Row className="items-start justify-between lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[78%]">
                <Img
                  src="images/img_ellipse167.png"
                  className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] lg:mb-[17px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] rotate-[180deg] rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  alt="Ellipse167"
                />
                <Img
                  src="images/img_ellipse167_60X60.png"
                  className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  alt="Ellipse167 One"
                />
              </Row>
              <Row className="items-center justify-between lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[97%]">
                <Img
                  src="images/img_ellipse166_60X60.png"
                  className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rotate-[180deg] rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  alt="Ellipse166 One"
                />
                <Img
                  src="images/img_ellipse168_60X60.png"
                  className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  alt="Ellipse168 One"
                />
              </Row>
            </Column>
          </Stack>
          <Footer className="bg-gray_100 font-inter w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default EduviCoursesDetailsPage;
