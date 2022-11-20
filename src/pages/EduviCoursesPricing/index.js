import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  List,
  Line,
  Button,
  Stack,
  Input,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const EduviCoursesPricingPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Row className="bg-red_52 items-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius20 w-[89%]">
          <Text
            className="font-medium ml-[3px] text-black_900 tracking-ls1 w-[auto]"
            variant="body5"
          >
            <span className="text-black_900 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
              Home |{" "}
            </span>
            <span className="text-red_300 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
              Pricing
            </span>
          </Text>
          <Text
            className="font-normal lg:leading-[35px] xl:leading-[44px] 2xl:leading-[50px] 3xl:leading-[60px] lg:mt-[46px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] text-gray_900 w-[31%]"
            as="h2"
            variant="h2"
          >
            Our Pre-ready
            <br />
            Pricing Packages
          </Text>
          <Img
            src="images/img_group.svg"
            className="lg:h-[138px] xl:h-[172px] 2xl:h-[194px] 3xl:h-[232px] 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[103px] xl:ml-[128px] 2xl:ml-[145px] 3xl:ml-[174px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[34%]"
            alt="Group"
          />
        </Row>
        <Column className="items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[89%]">
          <Column className="items-center justify-start w-[65%]">
            <Text
              className="font-bold font-metropolis lg:leading-[39px] xl:leading-[48px] 2xl:leading-[55px] 3xl:leading-[66px] text-center text-gray_900 w-[100%]"
              as="h2"
              variant="h2"
            >
              We create a monthly pricing package
              <br />
              for all standard students
            </Text>
            <Text
              className="font-inter font-normal lg:leading-[21px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] not-italic text-center text-gray_700 w-[96%]"
              variant="body5"
            >
              Basically we create this package for those who are really
              interested and get benifited from our courses or books. We want to
              make a low cost package for them. So that they can purchase any
              courses with the package they buy from us. Also will get free
              books from every packages.
            </Text>
          </Column>
          <List
            className="lg:gap-[28px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-3 min-h-[auto] lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 hover:cursor-pointer justify-start lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius20 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Column className="justify-start w-[100%]">
                <Img
                  src="images/img_location_50X50.svg"
                  className="location_One1"
                  alt="location One"
                />
                <Column className="justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                  <Text
                    className="font-normal text-gray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Basic Pack
                  </Text>
                  <Line className="bg-gray_900_26 h-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
                </Column>
              </Column>
              <Row className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[77%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark"
                />
                <Text className="rowcheckmark" variant="body5">
                  3 HD video lessons & tutorials
                </Text>
              </Row>
              <Row className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[43%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark One"
                />
                <Text className="rowcheckmark" variant="body5">
                  1 Official exam
                </Text>
              </Row>
              <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[61%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark Two"
                />
                <Text className="rowcheckmark_two" variant="body5">
                  100 Practice questions
                </Text>
              </Row>
              <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[60%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark Three"
                />
                <Text className="rowcheckmark_two" variant="body5">
                  1 Month subscriptions
                </Text>
              </Row>
              <Row className="items-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[36%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark Four"
                />
                <Text className="rowcheckmark_four" variant="body5">
                  1 Free book
                </Text>
              </Row>
              <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[79%]">
                <Img
                  src="images/img_close_24X24.svg"
                  className="checkmark"
                  alt="close"
                />
                <Text className="rowcheckmark_two" variant="body5">
                  Practice quizes & assignments
                </Text>
              </Row>
              <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[59%]">
                <Img
                  src="images/img_close_24X24.svg"
                  className="checkmark"
                  alt="close One"
                />
                <Text className="rowcheckmark_two" variant="body5">
                  In depth explanations
                </Text>
              </Row>
              <Row className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[76%]">
                <Img
                  src="images/img_close_24X24.svg"
                  className="checkmark"
                  alt="close Two"
                />
                <Text className="rowcheckmark" variant="body5">
                  Personal instructor Assitance
                </Text>
              </Row>
              <Text className="columnlocation" as="h4" variant="h4">
                <span className="text-gray_900 font-inter lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                  $
                </span>
                <span className="text-gray_900 font-inter lg:text-[21px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px]">
                  200
                </span>
              </Text>
              <Button
                className="font-medium lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                shape="RoundedBorder5"
                variant="OutlineRed300"
              >
                Purchase Course
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer justify-start lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius20 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Column className="justify-start w-[100%]">
                <Img
                  src="images/img_location_50X50.svg"
                  className="location_One1"
                  alt="location Two"
                />
                <Column className="justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                  <Text
                    className="font-normal text-gray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Standard Pack
                  </Text>
                  <Line className="bg-gray_900_26 h-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]" />
                </Column>
              </Column>
              <Row className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[77%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark One"
                />
                <Text className="rowcheckmark" variant="body5">
                  8 HD video lessons & tutorials
                </Text>
              </Row>
              <Row className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[44%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark One One"
                />
                <Text className="rowcheckmark" variant="body5">
                  2 Official exam
                </Text>
              </Row>
              <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[62%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark Two One"
                />
                <Text className="rowcheckmark_two" variant="body5">
                  200 Practice questions
                </Text>
              </Row>
              <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[60%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark Three One"
                />
                <Text className="rowcheckmark_two" variant="body5">
                  1 Month subscriptions
                </Text>
              </Row>
              <Row className="items-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[39%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark Four One"
                />
                <Text className="rowcheckmark_four" variant="body5">
                  3 Free books
                </Text>
              </Row>
              <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[79%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark Five"
                />
                <Text className="rowcheckmark_two" variant="body5">
                  Practice quizes & assignments
                </Text>
              </Row>
              <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[59%]">
                <Img
                  src="images/img_close_24X24.svg"
                  className="checkmark"
                  alt="close One"
                />
                <Text className="rowcheckmark_two" variant="body5">
                  In depth explanations
                </Text>
              </Row>
              <Row className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[76%]">
                <Img
                  src="images/img_close_24X24.svg"
                  className="checkmark"
                  alt="close One One"
                />
                <Text className="rowcheckmark" variant="body5">
                  Personal instructor Assitance
                </Text>
              </Row>
              <Text className="columnlocation" as="h4" variant="h4">
                <span className="text-gray_900 font-inter lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                  $
                </span>
                <span className="text-gray_900 font-inter lg:text-[21px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px]">
                  600
                </span>
              </Text>
              <Button
                className="font-medium lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                shape="RoundedBorder5"
              >
                Purchase Course
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer justify-start lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius20 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Column className="justify-start w-[100%]">
                <Img
                  src="images/img_location_50X50.svg"
                  className="location_One1"
                  alt="location Three"
                />
                <Column className="justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                  <Text
                    className="font-normal text-gray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Premium Pack
                  </Text>
                  <Line className="bg-gray_900_26 h-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
                </Column>
              </Column>
              <Row className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[79%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark Two"
                />
                <Text className="rowcheckmark" variant="body5">
                  15 HD video lessons & tutorials
                </Text>
              </Row>
              <Row className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[44%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark One Two"
                />
                <Text className="rowcheckmark" variant="body5">
                  3 Official exam
                </Text>
              </Row>
              <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[62%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark Two Two"
                />
                <Text className="rowcheckmark_two" variant="body5">
                  300 Practice questions
                </Text>
              </Row>
              <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[60%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark Three Two"
                />
                <Text className="rowcheckmark_two" variant="body5">
                  1 Month subscriptions
                </Text>
              </Row>
              <Row className="items-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[39%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark Four Two"
                />
                <Text className="rowcheckmark_four" variant="body5">
                  5 Free books
                </Text>
              </Row>
              <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[79%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark Five One"
                />
                <Text className="rowcheckmark_two" variant="body5">
                  Practice quizes & assignments
                </Text>
              </Row>
              <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[59%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark Six"
                />
                <Text className="rowcheckmark_two" variant="body5">
                  In depth explanations
                </Text>
              </Row>
              <Row className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[76%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark Seven"
                />
                <Text className="rowcheckmark" variant="body5">
                  Personal instructor Assitance
                </Text>
              </Row>
              <Text className="columnlocation" as="h4" variant="h4">
                <span className="text-gray_900 font-inter lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                  $
                </span>
                <span className="text-gray_900 font-inter lg:text-[21px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px]">
                  1200
                </span>
              </Text>
              <Button
                className="font-medium lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                shape="RoundedBorder5"
                variant="OutlineRed300"
              >
                Purchase Course
              </Button>
            </Column>
          </List>
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

export default EduviCoursesPricingPage;
