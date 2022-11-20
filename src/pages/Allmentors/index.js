import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Button,
  List,
  SelectBox,
  Stack,
  Line,
  Input,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const AllmentorsPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Row className="bg-red_52 items-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius20 w-[89%]">
          <Text
            className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] text-black_900 tracking-ls1 w-[auto]"
            variant="body5"
          >
            <span className="text-black_900 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
              Home |{" "}
            </span>
            <span className="text-red_300 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
              Our Mentors
            </span>
          </Text>
          <Text
            className="font-normal lg:leading-[35px] xl:leading-[44px] 2xl:leading-[50px] 3xl:leading-[60px] ml-[2px] lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] text-gray_900 w-[29%]"
            as="h2"
            variant="h2"
          >
            Eduvi has the
            <br />
            qualified mentor
          </Text>
          <Img
            src="images/img_49063311.svg"
            className="lg:h-[149px] xl:h-[186px] 2xl:h-[210px] 3xl:h-[251px] lg:ml-[100px] xl:ml-[126px] 2xl:ml-[142px] 3xl:ml-[170px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[34%]"
            alt="49063311"
          />
        </Row>
        <Column className="lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:px-[56px] xl:px-[71px] 2xl:px-[80px] 3xl:px-[96px] w-[100%]">
          <Row className="items-center rounded-radius10 w-[72%]">
            <Button
              className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 text-center w-[16%]"
              variant="FillWhiteA700"
            >
              All Mentors
            </Button>
            <Button
              className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 text-center w-[21%]"
              variant="FillWhiteA700"
            >
              For Kindergarten
            </Button>
            <Button
              className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
              variant="FillOrange200"
            >
              For high school
            </Button>
            <Button
              className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 text-center w-[16%]"
              variant="FillWhiteA700"
            >
              For college
            </Button>
            <Button
              className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 text-center w-[19%]"
              variant="FillWhiteA700"
            >
              For Technology
            </Button>
          </Row>
        </Column>
        <Column className="items-center justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[89%]">
          <List
            className="gap-[0] min-h-[auto] w-[100%]"
            orientation="vertical"
          >
            <Row className="items-center justify-evenly lg:my-[14px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
              <Column className="w-[26%]">
                <Img src="images/img_bg.png" className="BG" alt="BG" />
                <Column className="justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[88%]">
                  <SelectBox
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[100%]"
                    placeholderClassName="text-black_900"
                    name="Group1658"
                    placeholder="Kristin Watson"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_2.svg"
                        className="mr-[0] lg:w-[17px] lg:h-[18px] xl:w-[21px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <Text className="Name" variant="body6">
                    Founder & Mentor
                  </Text>
                </Column>
              </Column>
              <Column className="w-[26%]">
                <Img
                  src="images/img_bg_290X290.png"
                  className="BG"
                  alt="BG One"
                />
                <Column className="justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[88%]">
                  <SelectBox
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[100%]"
                    placeholderClassName="text-black_900"
                    name="Group1672"
                    placeholder="Brooklyn Simmons"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_2.svg"
                        className="mr-[0] lg:w-[17px] lg:h-[18px] xl:w-[21px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <Text className="Name" variant="body6">
                    Founder & Mentor
                  </Text>
                </Column>
              </Column>
              <Column className="w-[26%]">
                <Img src="images/img_bg_1.png" className="BG" alt="BG Two" />
                <Column className="justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[88%]">
                  <SelectBox
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[100%]"
                    placeholderClassName="text-black_900"
                    name="Group1697"
                    placeholder="Robert Fox"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_2.svg"
                        className="mr-[0] lg:w-[17px] lg:h-[18px] xl:w-[21px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <Text className="Name" variant="body6">
                    Founder & Mentor
                  </Text>
                </Column>
              </Column>
              <Column className="items-center w-[23%]">
                <Img src="images/img_bg_2.png" className="BG" alt="BG Three" />
                <Column className="justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                  <SelectBox
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[100%]"
                    placeholderClassName="text-black_900"
                    name="Group1665"
                    placeholder="Wade Warren"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_2.svg"
                        className="mr-[0] lg:w-[17px] lg:h-[18px] xl:w-[21px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <Text className="Name" variant="body6">
                    Founder & Mentor
                  </Text>
                </Column>
              </Column>
            </Row>
            <Row className="items-start justify-evenly lg:my-[14px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
              <Column className="justify-start w-[26%]">
                <Img src="images/img_bg_3.png" className="BG" alt="BG One" />
                <Column className="justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[88%]">
                  <SelectBox
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[100%]"
                    placeholderClassName="text-black_900"
                    name="Group1661"
                    placeholder="Bessie Cooper"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_2.svg"
                        className="mr-[0] lg:w-[17px] lg:h-[18px] xl:w-[21px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <Text className="Name" variant="body6">
                    Founder & Mentor
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start w-[26%]">
                <Img
                  src="images/img_bg_4.png"
                  className="BG"
                  alt="BG One One"
                />
                <Column className="justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[88%]">
                  <SelectBox
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[100%]"
                    placeholderClassName="text-black_900"
                    name="Group1675"
                    placeholder="Ronald Richards"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_2.svg"
                        className="mr-[0] lg:w-[17px] lg:h-[18px] xl:w-[21px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <Text className="Name" variant="body6">
                    Founder & Mentor
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start w-[26%]">
                <Img
                  src="images/img_bg_5.png"
                  className="lg:h-[207px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] lg:w-[206px] xl:w-[257px] 2xl:w-[290px] 3xl:w-[348px]"
                  alt="BG Two One"
                />
                <Stack className="3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[95px] w-[88%]">
                  <Row className="absolute bottom-[12%] inset-x-[0] items-start justify-center mx-[auto] w-[33%]">
                    <Line className="bg-gray_700 lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] mb-[1px] w-[1px]" />
                    <Text
                      className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] text-gray_700 w-[auto]"
                      variant="body6"
                    >
                      <span className="text-gray_700 font-inter font-medium lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                        Courses(
                      </span>
                      <span className="text-red_300 font-inter font-medium underline lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                        30
                      </span>
                      <span className="text-gray_700 font-inter font-medium lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                        )
                      </span>
                    </Text>
                  </Row>
                  <Column className="absolute bg-white_A700 items-end justify-start xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] shadow-bs5 w-[100%]">
                    <Line className="bg-red_300 h-[1px] w-[100%]" />
                    <Column className="justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[95%]">
                      <Column className="justify-start w-[100%]">
                        <SelectBox
                          className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_300 w-[100%]"
                          placeholderClassName="text-red_300"
                          name="Group1689"
                          placeholder="Guy Hawkins"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_2.svg"
                              className="mr-[0] lg:w-[17px] lg:h-[18px] xl:w-[21px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px]"
                              alt="arrow_down"
                            />
                          }
                        ></SelectBox>
                        <Text className="Name" variant="body6">
                          Founder & Mentor
                        </Text>
                      </Column>
                      <Row className="items-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[30%]">
                        <Img
                          src="images/img_star.svg"
                          className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                          alt="star"
                        />
                        <Text
                          className="lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] text-gray_700 w-[auto]"
                          variant="body6"
                        >
                          <span className="text-gray_700 font-inter font-medium lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            4.9 (
                          </span>
                          <span className="text-red_300 font-inter font-medium underline lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            135
                          </span>
                          <span className="text-gray_700 font-inter font-medium lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            )
                          </span>
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Stack>
              </Column>
              <Column className="items-center justify-start w-[23%]">
                <Img
                  src="images/img_bg_6.png"
                  className="BG"
                  alt="BG Three One"
                />
                <Column className="justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                  <SelectBox
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[100%]"
                    placeholderClassName="text-black_900"
                    name="Group1668"
                    placeholder="Floyd Miles"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_2.svg"
                        className="mr-[0] lg:w-[17px] lg:h-[18px] xl:w-[21px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <Text className="Name" variant="body6">
                    Founder & Mentor
                  </Text>
                </Column>
              </Column>
            </Row>
            <Row className="items-center justify-evenly lg:mb-[14px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[24px] mt-[20px] w-[100%]">
              <Column className="w-[26%]">
                <Img src="images/img_bg_7.png" className="BG" alt="BG Two" />
                <Column className="justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[88%]">
                  <SelectBox
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[100%]"
                    placeholderClassName="text-black_900"
                    name="Group1664"
                    placeholder="Theresa Webb"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_2.svg"
                        className="mr-[0] lg:w-[17px] lg:h-[18px] xl:w-[21px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <Text className="Name" variant="body6">
                    Founder & Mentor
                  </Text>
                </Column>
              </Column>
              <Column className="w-[26%]">
                <Img
                  src="images/img_bg_8.png"
                  className="BG"
                  alt="BG One Two"
                />
                <Column className="justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[88%]">
                  <SelectBox
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[100%]"
                    placeholderClassName="text-black_900"
                    name="Group1678"
                    placeholder="Cody Fisher"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_2.svg"
                        className="mr-[0] lg:w-[17px] lg:h-[18px] xl:w-[21px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <Text className="Name" variant="body6">
                    Founder & Mentor
                  </Text>
                </Column>
              </Column>
              <Column className="w-[26%]">
                <Img
                  src="images/img_bg_9.png"
                  className="BG"
                  alt="BG Two Two"
                />
                <Column className="justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[88%]">
                  <SelectBox
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[100%]"
                    placeholderClassName="text-black_900"
                    name="Group1681"
                    placeholder="Courtney Henry"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_2.svg"
                        className="mr-[0] lg:w-[17px] lg:h-[18px] xl:w-[21px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <Text className="Name" variant="body6">
                    Founder & Mentor
                  </Text>
                </Column>
              </Column>
              <Column className="items-center w-[23%]">
                <Img
                  src="images/img_bg_10.png"
                  className="BG"
                  alt="BG Three Two"
                />
                <Column className="justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                  <SelectBox
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[100%]"
                    placeholderClassName="text-black_900"
                    name="Group1671"
                    placeholder="Jerome Bell"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_2.svg"
                        className="mr-[0] lg:w-[17px] lg:h-[18px] xl:w-[21px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <Text className="Name" variant="body6">
                    Founder & Mentor
                  </Text>
                </Column>
              </Column>
            </Row>
          </List>
          <Row className="items-start justify-center lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[21%]">
            <Button
              className="flex lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] items-center justify-center lg:w-[31px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
              shape="icbRoundedBorder5"
              size="mdIcn"
              variant="icbFillWhiteA700"
            >
              <Img
                src="images/img_arrowright.svg"
                className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                alt="arrowright"
              />
            </Button>
            <Text
              className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] text-black_900 w-[auto]"
              variant="body5"
            >
              Page
            </Text>
            <Button
              className="font-medium lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_801 text-center lg:w-[31px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
              size="sm"
              variant="FillWhiteA700"
            >
              1
            </Button>
            <Text
              className="font-medium lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] text-black_900 w-[auto]"
              variant="body5"
            >
              of 3
            </Text>
            <Button
              className="flex lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] items-center justify-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] rotate-[180deg] lg:w-[31px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
              shape="icbRoundedBorder5"
              size="mdIcn"
              variant="icbFillRed300"
            >
              <Img
                src="images/img_arrowright_44X44.svg"
                className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                alt="arrowright One"
              />
            </Button>
          </Row>
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
        <Footer className="bg-gray_100 w-[100%]" />
      </Column>
    </>
  );
};

export default AllmentorsPage;
