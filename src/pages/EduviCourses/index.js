import React from "react";

import {
  Column,
  Row,
  Text,
  Stack,
  List,
  Img,
  Button,
  Grid,
  Input,
  SelectBox,
  Slider,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const EduviCoursesPage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Row className="bg-yellow_100 items-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius20 w-[89%]">
          <Text
            className="font-medium xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] mt-[2px] text-red_300 tracking-ls1 w-[auto]"
            variant="body5"
          >
            <span className="text-black_900 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
              Home |
            </span>
            <span className="text-red_300 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
              {" "}
            </span>
            <span className="text-red_300 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
              Courses
            </span>
          </Text>
          <Text
            className="font-normal lg:leading-[35px] xl:leading-[44px] 2xl:leading-[50px] 3xl:leading-[60px] ml-[3px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] text-gray_900 w-[30%]"
            as="h2"
            variant="h2"
          >
            Eduvi Courses
            <br />
            For All Standards
          </Text>
          <Stack className="font-airbnbcerealapp lg:h-[166px] xl:h-[208px] 2xl:h-[234px] 3xl:h-[280px] lg:ml-[112px] xl:ml-[140px] 2xl:ml-[158px] 3xl:ml-[189px] mt-[3px] w-[35%]">
            <Column className="absolute inset-y-[0] justify-start w-[100%]">
              <List
                className="gap-[0] min-h-[auto] lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] w-[32%]"
                orientation="vertical"
              >
                <Row className="items-center justify-between my-[1px] w-[100%]">
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                </Row>
                <Row className="items-center justify-between mb-[1px] mt-[1.575px] w-[100%]">
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                </Row>
                <Row className="items-center justify-between mb-[1px] mt-[1.575px] w-[100%]">
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                </Row>
                <Row className="items-center justify-between mb-[1px] mt-[1.575px] w-[100%]">
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                </Row>
                <Row className="items-center justify-between mb-[1px] mt-[1.575px] w-[100%]">
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                </Row>
                <Row className="items-center justify-between mb-[1px] mt-[1.575px] w-[100%]">
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                </Row>
                <Row className="items-center justify-between mb-[1px] mt-[1.575px] w-[100%]">
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                  <Text
                    className="text-deep_orange_400 w-[auto]"
                    variant="body6"
                  >
                    +
                  </Text>
                </Row>
              </List>
              <div className="backdrop-opacity-[0.5] bg-black_900_cc blur-[90.00px] lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] 3xl:mt-[115px] lg:mt-[68px] xl:mt-[85px] 2xl:mt-[96px] rounded-radius2155 w-[100%]"></div>
            </Column>
            <Img
              src="images/img_image_233X416.png"
              className="absolute lg:h-[166px] xl:h-[208px] 2xl:h-[234px] 3xl:h-[280px] left-[3%] right-[1%] w-[97%]"
              alt="Image"
            />
          </Stack>
        </Row>
        <Row className="items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] rounded-radius10 w-[89%]">
          <Button
            className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[12%]"
            variant="FillWhiteA700"
          >
            All Courses
          </Button>
          <Button
            className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[12%]"
            variant="FillWhiteA700"
          >
            Kindergarten
          </Button>
          <Button
            className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[12%]"
            variant="FillOrange200"
          >
            High School
          </Button>
          <Button
            className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[9%]"
            variant="FillWhiteA700"
          >
            College
          </Button>
          <Button
            className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[11%]"
            variant="FillWhiteA700"
          >
            Computer
          </Button>
          <Button
            className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[9%]"
            variant="FillWhiteA700"
          >
            Science
          </Button>
          <Button
            className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[12%]"
            variant="FillWhiteA700"
          >
            Engineering
          </Button>
          <Button
            className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-deep_orange_400 w-[13%]"
            variant="FillWhiteA700"
          >
            More Courses
          </Button>
        </Row>
        <Column className="justify-start lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[89%]">
          <Text
            className="font-normal text-gray_900 w-[auto]"
            as="h4"
            variant="h4"
          >
            Standard Classes
          </Text>
          <Grid className="lg:gap-[28px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-4 lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
            <Column className="hover:cursor-pointer hover:shadow-bs1 hover:w-[100%] eduvi">
              <Img
                src="images/img_download.svg"
                className="lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] download_One"
                alt="download"
              />
              <Text className="StandardOne" as="h5" variant="h5">
                Standard One
              </Text>
              <Text className="Standard1isa" variant="body5">
                Standard 1 is a foundation Standard that reflects 7 important
                concepts...
              </Text>
              <Button
                className="font-medium lg:mb-[10px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[62%]"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineRed300"
              >
                Class Details
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-start lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius15 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_download_50X50.svg"
                className="download_One"
                alt="download One"
              />
              <Text className="StandardOne" as="h5" variant="h5">
                Standard Two
              </Text>
              <Text
                className="font-normal lg:leading-[21px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic text-center text-gray_700 w-[98%]"
                variant="body5"
              >
                Standard 2 builds on the foundations of Standard 1 and includes
                requirements...
              </Text>
              <Button
                className="font-medium lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[70%]"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineRed300"
              >
                Class Details
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:p-[20px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] rounded-radius15 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_whatsapp.svg"
                className="mt-[1px] download_One"
                alt="whatsapp"
              />
              <Text className="StandardOne" as="h5" variant="h5">
                Standard Three
              </Text>
              <Text className="Standard1isa" variant="body5">
                Standard 3 of the Aged Care Quality Standards applies to all
                services delivering personal...
              </Text>
              <Button
                className="font-medium mb-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[70%]"
                shape="RoundedBorder5"
                size="sm"
              >
                Class Details
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-start lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius15 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_rewind_50X50.svg"
                className="download_One"
                alt="rewind"
              />
              <Text className="StandardOne" as="h5" variant="h5">
                Standard Four
              </Text>
              <Text
                className="font-normal lg:leading-[21px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic text-center text-gray_700 w-[95%]"
                variant="body5"
              >
                Standard 4 of the Aged Care Quality Standards focuses on
                services and supports...
              </Text>
              <Button
                className="font-medium lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[70%]"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineRed300"
              >
                Class Details
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius15 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img src="images/img_music.svg" className="music" alt="music" />
              <Text className="StandardOne" as="h5" variant="h5">
                Standard Five
              </Text>
              <Text className="Standard1isa" variant="body5">
                Standard 5 Learning Resources. Learning Resources ensure that
                the school has the...
              </Text>
              <Button
                className="font-medium mb-[4px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[68%]"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineRed300"
              >
                Class Details
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius15 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_volume_50X50.svg"
                className="volume_One"
                alt="volume"
              />
              <Text className="StandardOne" as="h5" variant="h5">
                Standard Six
              </Text>
              <Text className="Standard6requ" variant="body5">
                Standard 6 requires an organisation to have a system to resolve
                complaints...
              </Text>
              <Button
                className="font-medium lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[66%]"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineRed300"
              >
                Class Details
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius15 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_arrowdown.svg"
                className="music"
                alt="arrowdown Four"
              />
              <Text className="StandardOne" as="h5" variant="h5">
                Standard Seven
              </Text>
              <Text className="Standard6requ" variant="body5">
                Standard 7 Blood Management mandates that leaders of health
                service organisations...
              </Text>
              <Button
                className="font-medium mb-[4px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[68%]"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineRed300"
              >
                Class Details
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius15 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img src="images/img_info.svg" className="music" alt="info" />
              <Text
                className="lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] text-gray_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                Standard Eight
              </Text>
              <Text
                className="font-normal lg:leading-[21px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic text-center text-gray_700 w-[99%]"
                variant="body5"
              >
                Standard 8 Course from NCERT Solutions help students to
                understand...
              </Text>
              <Button
                className="font-medium mb-[4px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[68%]"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineRed300"
              >
                Class Details
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius15 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_volume_1.svg"
                className="music"
                alt="volume One"
              />
              <Text className="StandardOne" as="h5" variant="h5">
                Standard Nine
              </Text>
              <Text className="Standard1isa" variant="body5">
                Standard 5 Learning Resources. Learning Resources ensure that
                the school has the...
              </Text>
              <Button
                className="font-medium mb-[4px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[68%]"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineRed300"
              >
                Class Details
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius15 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_015o.svg"
                className="volume_One"
                alt="015o"
              />
              <Text className="StandardOne" as="h5" variant="h5">
                O- Level
              </Text>
              <Text className="Standard6requ" variant="body5">
                Standard 6 requires an organisation to have a system to resolve
                complaints...
              </Text>
              <Button
                className="font-medium lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[66%]"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineRed300"
              >
                Class Details
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius15 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_arrowup.svg"
                className="volume_One"
                alt="arrowup"
              />
              <Text className="StandardOne" as="h5" variant="h5">
                A- Level
              </Text>
              <Text className="Standard6requ" variant="body5">
                Standard 6 requires an organisation to have a system to resolve
                complaints...
              </Text>
              <Button
                className="font-medium lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[66%]"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineRed300"
              >
                Class Details
              </Button>
            </Column>
          </Grid>
        </Column>
        <Column className="items-center justify-start lg:mt-[106px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[89%]">
          <Column className="justify-start w-[100%]">
            <Text
              className="font-normal text-gray_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              Other Courses For High School
            </Text>
            <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]">
              <Input
                className="font-medium p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_700_99 text-gray_700_99 w-[100%]"
                wrapClassName="flex w-[66%]"
                name="Search"
                placeholder="Serach Class, Course"
                suffix={
                  <Img
                    src="images/img_search.svg"
                    className="bg-red_300 lg:w-[17px] lg:h-[18px] lg:mx-[9px] xl:w-[21px] xl:h-[22px] xl:mx-[11px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mx-[13px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mx-[15px] rounded-radius10 my-[auto]"
                    alt="search"
                  />
                }
                shape="RoundedBorder10"
                variant="FillWhiteA700"
              ></Input>
              <SelectBox
                className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700_99 w-[31%]"
                placeholderClassName="text-gray_700_99"
                name="Sortby"
                placeholder="Sort by: Latest"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_1.svg"
                    className="lg:w-[17px] lg:h-[18px] lg:mr-[10px] xl:w-[21px] xl:h-[22px] xl:mr-[13px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[15px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[18px]"
                    alt="arrow_down"
                  />
                }
                shape="RoundedBorder10"
                size="md"
                variant="FillWhiteA700"
              ></SelectBox>
            </Row>
          </Column>
          <Stack className="3xl:h-[1056px] lg:h-[626px] xl:h-[782px] 2xl:h-[880px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
            <Row className="absolute bottom-[0] inset-x-[0] items-center justify-end mx-[auto] lg:px-[44px] xl:px-[55px] 2xl:px-[62px] 3xl:px-[74px] w-[22%]">
              <Text
                className="font-medium text-gray_900 w-[auto]"
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
                className="font-medium lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] text-gray_900 w-[auto]"
                variant="body5"
              >
                of 13
              </Text>
            </Row>
            <Column className="absolute items-center justify-start w-[100%]">
              <Slider
                slidesToShow={10}
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="w-[100%]"
                items={[...Array(30)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <Row className="bg-white_A700 items-end lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10">
                      <Img
                        src="images/img_image_103X160.png"
                        className="Image_One1"
                        alt="Image One"
                      />
                      <Column className="justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[59%]">
                        <Text
                          className="text-gray_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
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
                        variant="icbFillRed53"
                      >
                        <Img
                          src="images/img_bag.svg"
                          className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                          alt="bag One"
                        />
                      </Button>
                    </Row>
                  </React.Fragment>
                ))}
                Indicator={({ isActive }) => {
                  if (isActive) {
                    return <div className="" />;
                  }
                  return <div className="" role="button" tabIndex={0} />;
                }}
              />
              <Row className="items-center justify-center lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[22%]">
                <Button
                  className="cursor-pointer flex lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] items-center justify-center lg:w-[31px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                  onClick={() => sliderRef.current?.slidePrev()}
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
                <Button
                  className="cursor-pointer flex lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] items-center justify-center lg:ml-[135px] xl:ml-[169px] 2xl:ml-[190px] 3xl:ml-[228px] rotate-[180deg] lg:w-[31px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                  onClick={() => sliderRef.current?.slideNext()}
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
          </Stack>
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

export default EduviCoursesPage;
