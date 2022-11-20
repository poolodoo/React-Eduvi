import React from "react";

import {
  Column,
  Row,
  Button,
  Text,
  SelectBox,
  Img,
  Line,
  Stack,
  List,
  Grid,
  Input,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const EduviPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Row className="items-start lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[91%]">
          <Column className="justify-start lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] w-[49%]">
            <Button
              className="font-medium lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center text-deep_orange_400 w-[37%]"
              size="sm"
              variant="FillWhiteA700"
            >
              Never Stop Learning
            </Button>
            <Text
              className="lg:leading-[53px] xl:leading-[66px] 2xl:leading-[75px] 3xl:leading-[90px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] text-gray_900 w-[92%]"
              as="h1"
              variant="h1"
            >
              Grow up your skills
              <br />
              by online courses
              <br />
              with Eduvi
            </Text>
            <Text
              className="font-normal lg:leading-[21px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] not-italic text-gray_700 w-[87%]"
              variant="body5"
            >
              Eduvi is a Global training provider based across the UK that
              specialises in accredited and bespoke training courses. We crush
              the barriers togetting a degree.
            </Text>
            <Row className="bg-white_A700 items-center justify-end lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius10 w-[94%]">
              <SelectBox
                className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700_99 w-[21%]"
                placeholderClassName="text-gray_700_99"
                name="Courses One"
                placeholder="Kindergarten"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_1.svg"
                    className="mr-[0] lg:w-[17px] lg:h-[18px] xl:w-[21px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <Line className="bg-bluegray_100 lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[1px]" />
              <Text
                className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] text-gray_700_99 w-[auto]"
                variant="body5"
              >
                Class/Course
              </Text>
              <Button
                className="2xl:ml-[167px] 3xl:ml-[200px] flex items-center justify-center lg:ml-[118px] text-center w-[24%] xl:ml-[148px]"
                leftIcon={
                  <Img
                    src="images/img_search.svg"
                    className="text-center lg:w-[17px] lg:h-[18px] lg:mr-[3px] xl:w-[21px] xl:h-[22px] xl:mr-[4px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[5px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[6px]"
                    alt="search"
                  />
                }
                size="md"
              >
                <div className="bg-transparent font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  Search
                </div>
              </Button>
            </Row>
          </Column>
          <Stack className="lg:h-[498px] xl:h-[622px] 2xl:h-[700px] 3xl:h-[840px] w-[51%]">
            <Stack className="absolute bottom-[0] lg:h-[476px] xl:h-[596px] 2xl:h-[670px] 3xl:h-[804px] inset-x-[0] mx-[auto] w-[89%]">
              <Img
                src="images/img_vector1.svg"
                className="absolute lg:h-[401px] xl:h-[501px] 2xl:h-[564px] 3xl:h-[676px] top-[1%] w-[100%]"
                alt="VectorOne"
              />
              <Column
                className="absolute bg-cover bg-repeat items-center justify-start lg:px-[35px] xl:px-[44px] 2xl:px-[50px] 3xl:px-[60px] right-[0] rounded-radius30 w-[88%]"
                style={{ backgroundImage: "url('images/img_group1621.png')" }}
              >
                <Column
                  className="bg-cover bg-repeat items-center justify-start w-[100%]"
                  style={{ backgroundImage: "url('images/img_group1622.png')" }}
                >
                  <Stack
                    className="bg-cover bg-repeat lg:h-[476px] xl:h-[596px] 2xl:h-[670px] 3xl:h-[804px] px-[3px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group1623.png')",
                    }}
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="absolute lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] right-[0] top-[4%] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                      alt="favorite"
                    />
                  </Stack>
                </Column>
              </Column>
            </Stack>
            <Img
              src="images/img_rewind.svg"
              className="absolute lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] inset-y-[0] left-[11%] my-[auto] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
              alt="rewind"
            />
            <Img
              src="images/img_4.svg"
              className="absolute lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] left-[0] top-[0] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
              alt="Four"
            />
            <Img
              src="images/img_car.svg"
              className="absolute bottom-[9%] lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] right-[0] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
              alt="car"
            />
          </Stack>
        </Row>
        <Stack className="font-airbnbcerealapp 2xl:h-[1121px] 3xl:h-[1345px] lg:h-[797px] xl:h-[997px] lg:mt-[106px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] w-[76%]">
          <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] rounded-radius10 top-[0] w-[71%]">
            <Text
              className="font-bold font-metropolis lg:leading-[39px] xl:leading-[48px] 2xl:leading-[55px] 3xl:leading-[66px] text-center text-gray_900 w-[71%]"
              as="h2"
              variant="h2"
            >
              High quality video, audio
              <br />& live classes
            </Text>
            <Text
              className="font-inter font-normal lg:leading-[21px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] not-italic text-center text-gray_700 w-[100%]"
              variant="body5"
            >
              High-definition video is video of higher resolution and quality
              than standard-definition. While there is no standardized meaning
              for high-definition, generally any video image with considerably
              more than
              <br />
              480 vertical scan lines or 576 vertical lines is considered
              high-definition.
            </Text>
            <Button className="font-inter font-medium lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[21%]">
              Visit Courses
            </Button>
          </Column>
          <Stack className="absolute bottom-[0] 3xl:h-[1009px] lg:h-[598px] xl:h-[748px] 2xl:h-[841px] w-[100%]">
            <List
              className="absolute gap-[0] min-h-[auto] right-[0] top-[0] w-[16%]"
              orientation="vertical"
            >
              <Row className="items-center justify-between lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-deep_orange_400 w-[auto]" variant="body6">
                  +
                </Text>
              </Row>
            </List>
            <Column className="absolute bottom-[0] font-inter inset-x-[0] items-center justify-start mx-[auto] w-[97%]">
              <Row
                className="bg-cover bg-repeat items-start lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius16 w-[94%]"
                style={{ backgroundImage: "url('images/img_group1815.png')" }}
              >
                <Img
                  src="images/img_portraitlittle.png"
                  className="lg:h-[153px] xl:h-[192px] 2xl:h-[216px] 3xl:h-[259px] lg:mt-[188px] xl:mt-[235px] 2xl:mt-[265px] 3xl:mt-[318px] rounded-radius16 w-[22%]"
                  alt="portraitlittle"
                />
                <Button
                  className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:ml-[166px] xl:ml-[208px] 2xl:ml-[234px] 3xl:ml-[280px] lg:mt-[284px] xl:mt-[355px] 2xl:mt-[400px] 3xl:mt-[480px] rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  size="lgIcn"
                  variant="icbFillDeeporange400"
                >
                  <Img
                    src="images/img_alarm.svg"
                    className="flex items-center justify-center lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px]"
                    alt="alarm"
                  />
                </Button>
                <Button
                  className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:ml-[243px] xl:ml-[304px] 2xl:ml-[342px] 3xl:ml-[410px] lg:mt-[284px] xl:mt-[355px] 2xl:mt-[400px] 3xl:mt-[480px] rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  size="xlIcn"
                  variant="icbFillRed300"
                >
                  <Img
                    src="images/img_arrowup_60X60.svg"
                    className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                    alt="arrowup"
                  />
                </Button>
              </Row>
              <List
                className="lg:gap-[21px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-3 min-h-[auto] lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[100%]"
                orientation="horizontal"
              >
                <Row className="bg-white_A700 items-center lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 w-[100%]">
                  <Stack className="bg-red_50 lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]">
                    <Img
                      src="images/img_volume.svg"
                      className="volume"
                      alt="volume"
                    />
                  </Stack>
                  <Text className="rowvolume" as="h5" variant="h5">
                    Audio Classes
                  </Text>
                </Row>
                <Row className="bg-white_A700 items-center lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 w-[100%]">
                  <Stack className="bg-gray_50 lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]">
                    <Img
                      src="images/img_user_30X30.svg"
                      className="volume"
                      alt="user One"
                    />
                  </Stack>
                  <Text className="rowvolume" as="h5" variant="h5">
                    Live Classes
                  </Text>
                </Row>
                <Row className="bg-white_A700 items-center lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 w-[100%]">
                  <Stack className="bg-cyan_50 lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]">
                    <Img
                      src="images/img_playbutton1.svg"
                      className="volume"
                      alt="playbuttonOne"
                    />
                  </Stack>
                  <Text className="rowvolume" as="h5" variant="h5">
                    Recorded Class
                  </Text>
                </Row>
              </List>
            </Column>
          </Stack>
        </Stack>
        <Column className="font-inter items-center justify-start lg:mt-[106px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] pt-[1px] w-[89%]">
          <Column className="items-center justify-start w-[51%]">
            <Text
              className="font-bold font-metropolis text-gray_900 w-[auto]"
              as="h2"
              variant="h2"
            >
              Qualified lessons for students
            </Text>
            <Text
              className="font-inter font-normal lg:leading-[21px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] not-italic text-center text-gray_700 w-[97%]"
              variant="body5"
            >
              A lesson or class is a structured period of time where learning is
              intended to occur. It involves one or more students being taught
              by a teacher or instructor.
            </Text>
          </Column>
          <Row className="items-start justify-center lg:mt-[39px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] rounded-radius10 w-[32%]">
            <Text
              className="font-medium lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] text-gray_900 w-[auto]"
              variant="body5"
            >
              Kindergarten
            </Text>
            <Button
              className="font-medium lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[37%]"
              variant="FillOrange200"
            >
              High School
            </Button>
            <Text
              className="font-medium lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] text-gray_900 w-[auto]"
              variant="body5"
            >
              College
            </Text>
          </Row>
          <Grid className="lg:gap-[28px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-4 lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]">
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
                alt="rewind One"
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
                alt="volume One"
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
          </Grid>
          <Button className="font-medium lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[16%]">
            Visit More Classes
          </Button>
        </Column>
        <Stack className="bg-red_51 lg:h-[475px] xl:h-[594px] 2xl:h-[668px] 3xl:h-[801px] lg:mt-[106px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] lg:pl-[14px] xl:pl-[18px] 2xl:pl-[21px] 3xl:pl-[25px] rounded-radius20 w-[89%]">
          <Column className="absolute h-[max-content] inset-y-[0] justify-start left-[4%] my-[auto] rounded-radius10 w-[39%]">
            <Button
              className="font-inter font-medium lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[34%]"
              size="md"
              variant="FillBlack900"
            >
              College Level
            </Button>
            <Text
              className="font-bold font-metropolis lg:leading-[39px] xl:leading-[48px] 2xl:leading-[55px] 3xl:leading-[66px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] text-gray_900 w-[91%]"
              as="h2"
              variant="h2"
            >
              Don’t waste time in
              <br />
              COVID-19 pandemic.
              <br />
              Develop your skills.
            </Text>
            <Text
              className="font-inter font-normal lg:leading-[21px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] not-italic text-gray_700 w-[100%]"
              variant="body5"
            >
              High-definition video is video of higher resolution and quality
              than standard-definition. While there is no standardized
              <br />
              meaning for high-definition, generally any video.
            </Text>
            <Button className="font-inter font-medium lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[37%]">
              Registation Now
            </Button>
          </Column>
          <Stack className="absolute lg:h-[421px] xl:h-[526px] 2xl:h-[592px] 3xl:h-[710px] right-[0] top-[0] w-[61%]">
            <Stack className="absolute lg:h-[418px] xl:h-[523px] 2xl:h-[588px] 3xl:h-[705px] top-[1%] w-[100%]">
              <Row
                className="absolute bg-cover bg-repeat items-start justify-between lg:p-[45px] xl:p-[56px] 2xl:p-[64px] 3xl:p-[76px] right-[0] w-[88%]"
                style={{ backgroundImage: "url('images/img_group1816.png')" }}
              >
                <Button
                  className="flex items-center justify-center lg:mb-[255px] xl:mb-[319px] 2xl:mb-[359px] 3xl:mb-[431px] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] download_One"
                  shape="icbRoundedBorder5"
                  size="mdIcn"
                  variant="icbOutlineGray90026"
                >
                  <Img
                    src="images/img_arrowdown_50X50.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                    alt="arrowdown Five"
                  />
                </Button>
                <Img
                  src="images/img_close.svg"
                  className="lg:mb-[234px] xl:mb-[293px] 2xl:mb-[330px] 3xl:mb-[396px] 3xl:mr-[110px] lg:mr-[65px] xl:mr-[81px] 2xl:mr-[92px] lg:mt-[56px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[94px] download_One"
                  alt="close"
                />
              </Row>
              <div className="absolute backdrop-opacity-[0.5] bg-black_900 blur-[100.00px] bottom-[0] lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] left-[0] rounded-radius3705 w-[95%]"></div>
            </Stack>
            <Button
              className="absolute flex items-center justify-center right-[12%] top-[0] download_One"
              shape="icbRoundedBorder5"
              size="mdIcn"
              variant="icbOutlineGray90026"
            >
              <Img
                src="images/img_fire.svg"
                className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                alt="fire"
              />
            </Button>
          </Stack>
        </Stack>
        <Row className="items-center lg:mt-[106px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] w-[76%]">
          <Img
            src="images/img_image.png"
            className="lg:h-[371px] xl:h-[464px] 2xl:h-[522px] 3xl:h-[626px] w-[47%]"
            alt="Image One"
          />
          <Column className="lg:ml-[56px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] rounded-radius10 w-[46%]">
            <Text
              className="font-bold font-metropolis lg:leading-[39px] xl:leading-[48px] 2xl:leading-[55px] 3xl:leading-[66px] text-gray_900 w-[87%]"
              as="h2"
              variant="h2"
            >
              Want to share your
              <br />
              knowledge? Join us
              <br />a Mentor
            </Text>
            <Text
              className="font-inter font-normal lg:leading-[21px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] not-italic text-gray_700 w-[100%]"
              variant="body5"
            >
              High-definition video is video of higher resolution and quality
              than standard-definition. While there is no standardized meaning
              for high-definition, generally any video.
            </Text>
            <Button className="font-inter font-medium lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[41%]">
              Career Information
            </Button>
          </Column>
        </Row>
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
    </>
  );
};

export default EduviPage;
