import React from "react";

import { Column, Stack, Text, Row, Img, Button, Input } from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const SinglementordetailsPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="items-center justify-start lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[89%]">
          <Stack className="lg:h-[185px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] w-[100%]">
            <Column className="absolute bg-red_52 justify-start lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius20 top-[0] w-[100%]">
              <Text
                className="font-medium 2xl:mb-[112px] 3xl:mb-[134px] lg:mb-[79px] xl:mb-[99px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] text-black_900 tracking-ls1 w-[auto]"
                variant="body5"
              >
                <span className="text-black_900 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  Home | Mentor |{" "}
                </span>
                <span className="text-red_300 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  Kristin Watson
                </span>
              </Text>
            </Column>
            <Row className="absolute bottom-[0] items-end left-[2%] pr-[3px] rounded-radius10 w-[31%]">
              <Img
                src="images/img_bg.png"
                className="lg:h-[121px] xl:h-[152px] 2xl:h-[171px] 3xl:h-[205px] rounded-radius10 lg:w-[120px] xl:w-[151px] 2xl:w-[170px] 3xl:w-[204px]"
                alt="BG"
              />
              <Column className="justify-start mb-[1px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] 2xl:mt-[112px] 3xl:mt-[134px] lg:mt-[79px] xl:mt-[99px] w-[52%]">
                <Text
                  className="font-medium text-gray_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Kritsin Watson
                </Text>
                <Text
                  className="font-medium lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] text-gray_700 w-[auto]"
                  variant="body4"
                >
                  Founder & Mentor
                </Text>
              </Column>
            </Row>
          </Stack>
          <Row className="items-start justify-evenly lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[98%]">
            <Column className="justify-start w-[68%]">
              <Row className="items-center rounded-radius10 w-[92%]">
                <Row className="items-center justify-between rounded-radius10 w-[50%]">
                  <Button
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[27%]"
                    variant="FillOrange200"
                  >
                    About
                  </Button>
                  <Button
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[31%]"
                    variant="FillWhiteA700"
                  >
                    Courses
                  </Button>
                  <Button
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[31%]"
                    variant="FillWhiteA700"
                  >
                    Reviews
                  </Button>
                </Row>
                <Button className="font-medium lg:ml-[152px] xl:ml-[191px] 2xl:ml-[215px] 3xl:ml-[258px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[22%]">
                  Contact Now
                </Button>
              </Row>
              <Column className="justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] pr-[2px] py-[2px] w-[95%]">
                <Column className="justify-start w-[95%]">
                  <Text
                    className="font-normal text-gray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    About Kritsin
                  </Text>
                  <Text className="description6" variant="body5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                  </Text>
                </Column>
                <Column className="justify-start mb-[2px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[95%]">
                  <Text
                    className="font-normal text-gray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Certification
                  </Text>
                  <Text className="description6" variant="body5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                  </Text>
                </Column>
              </Column>
            </Column>
            <Column className="bg-white_A700 items-center justify-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius10 w-[32%]">
              <Row className="items-start justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                <Text className="Price" variant="body3">
                  Total Course
                </Text>
                <Text
                  className="text-deep_orange_400 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  30
                </Text>
              </Row>
              <Row className="items-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                <Text
                  className="font-normal mt-[3px] text-gray_700 w-[auto]"
                  variant="body3"
                >
                  Ratings
                </Text>
                <Img
                  src="images/img_star.svg"
                  className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[132px] xl:ml-[166px] 2xl:ml-[187px] 3xl:ml-[224px] mt-[2px] lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                  alt="star"
                />
                <Text
                  className="font-normal ml-[1px] text-gray_900 w-[auto]"
                  variant="body3"
                >
                  <span className="text-gray_900 font-inter lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                    4.9(
                  </span>
                  <span className="text-deep_orange_400 font-inter underline lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                    153
                  </span>
                  <span className="text-gray_900 font-inter lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                    )
                  </span>
                </Text>
              </Row>
              <Row className="items-start justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                <Text className="Price" variant="body3">
                  Experiences
                </Text>
                <Text
                  className="font-normal mb-[2px] text-gray_900 w-[auto]"
                  variant="body3"
                >
                  10 Years
                </Text>
              </Row>
              <Row className="items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                <Text
                  className="font-normal mb-[1px] text-gray_700 w-[auto]"
                  variant="body3"
                >
                  Grauduated
                </Text>
                <Text
                  className="font-normal mt-[1px] text-gray_900 w-[auto]"
                  variant="body3"
                >
                  Yes
                </Text>
              </Row>
              <Row className="items-center justify-between lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                <Text className="Price" variant="body3">
                  Language
                </Text>
                <Text
                  className="font-normal mb-[1px] text-gray_900 w-[auto]"
                  variant="body3"
                >
                  English, French
                </Text>
              </Row>
              <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                <Text
                  className="font-normal text-gray_700 w-[auto]"
                  variant="body3"
                >
                  Social
                </Text>
                <Img
                  src="images/img_social_1.svg"
                  className="lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] w-[41%]"
                  alt="social One"
                />
              </Row>
            </Column>
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

export default SinglementordetailsPage;
