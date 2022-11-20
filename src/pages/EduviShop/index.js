import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  List,
  Button,
  Input,
  SelectBox,
  Grid,
  Stack,
} from "components";
import Header from "components/Header/Header";

const EduviShopPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] lg:pb-[56px] xl:pb-[71px] 2xl:pb-[80px] 3xl:pb-[96px] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="items-center justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[89%]">
          <Column className="items-center justify-start w-[100%]">
            <Row className="bg-red_52 items-start lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius20 w-[100%]">
              <Text
                className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] text-red_300 tracking-ls1 w-[auto]"
                variant="body5"
              >
                <span className="text-black_900 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  Home |
                </span>
                <span className="text-red_300 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  {" "}
                </span>
                <span className="text-red_300 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  Shop
                </span>
              </Text>
              <Text
                className="font-normal lg:leading-[35px] xl:leading-[44px] 2xl:leading-[50px] 3xl:leading-[60px] ml-[4px] lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] text-gray_900 w-[22%]"
                as="h2"
                variant="h2"
              >
                Eduvi Online
                <br />
                Book Shop
              </Text>
              <Img
                src="images/img_kisspngbookcas.png"
                className="lg:h-[150px] xl:h-[187px] 2xl:h-[211px] 3xl:h-[253px] mb-[1px] lg:ml-[177px] xl:ml-[221px] 2xl:ml-[249px] 3xl:ml-[298px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[30%]"
                alt="kisspngbookcas"
              />
            </Row>
            <Row className="items-start justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
              <List
                className="gap-[0] min-h-[auto] w-[31%]"
                orientation="vertical"
              >
                <Column className="justify-start lg:my-[15px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[25px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[100%]">
                  <Column className="justify-start w-[100%]">
                    <Text
                      className="font-normal text-black_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Popular Books
                    </Text>
                    <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]">
                      <Row className="bg-white_A700 items-center lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius10 w-[100%]">
                        <Img
                          src="images/img_image14.png"
                          className="imageFourteen"
                          alt="imageFourteen"
                        />
                        <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[64%]">
                          <Img
                            src="images/img_mobile.svg"
                            className="mobile"
                            alt="mobile"
                          />
                          <Text className="TheThreeMuske" variant="body4">
                            The Three Musketeers, by
                            <br />
                            Alexandre Dumas
                          </Text>
                          <Text className="price" variant="body4">
                            $39.00
                          </Text>
                        </Column>
                      </Row>
                      <Row className="bg-white_A700 items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius10 w-[100%]">
                        <Img
                          src="images/img_image_90X75.png"
                          className="imageFourteen"
                          alt="Image"
                        />
                        <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[64%]">
                          <Img
                            src="images/img_mobile.svg"
                            className="mobile"
                            alt="mobile One"
                          />
                          <Text className="TheThreeMuske" variant="body4">
                            The Three Musketeers, by
                            <br />
                            Alexandre Dumas
                          </Text>
                          <Text className="price" variant="body4">
                            $39.00
                          </Text>
                        </Column>
                      </Row>
                      <Row className="bg-white_A700 items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius10 w-[100%]">
                        <Img
                          src="images/img_image_1.png"
                          className="imageFourteen"
                          alt="Image One"
                        />
                        <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[64%]">
                          <Img
                            src="images/img_mobile.svg"
                            className="mobile"
                            alt="mobile Two"
                          />
                          <Text className="TheThreeMuske" variant="body4">
                            The Three Musketeers, by
                            <br />
                            Alexandre Dumas
                          </Text>
                          <Text className="price" variant="body4">
                            $39.00
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                  </Column>
                  <Text className="columnseemore" variant="body3">
                    See More
                  </Text>
                </Column>
                <Column className="justify-start lg:my-[15px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[25px] w-[100%]">
                  <Text
                    className="font-normal text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    New Arrivals
                  </Text>
                  <Row className="bg-white_A700 items-center lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius10 w-[100%]">
                    <Img
                      src="images/img_image14.png"
                      className="imageFourteen"
                      alt="imageFourteen One"
                    />
                    <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[64%]">
                      <Img
                        src="images/img_mobile.svg"
                        className="mobile"
                        alt="mobile One"
                      />
                      <Text className="TheThreeMuske" variant="body4">
                        The Three Musketeers, by
                        <br />
                        Alexandre Dumas
                      </Text>
                      <Text className="price" variant="body4">
                        $39.00
                      </Text>
                    </Column>
                  </Row>
                  <Row className="bg-white_A700 items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius10 w-[100%]">
                    <Img
                      src="images/img_image_90X75.png"
                      className="imageFourteen"
                      alt="Image One"
                    />
                    <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[64%]">
                      <Img
                        src="images/img_mobile.svg"
                        className="mobile"
                        alt="mobile One One"
                      />
                      <Text className="TheThreeMuske" variant="body4">
                        The Three Musketeers, by
                        <br />
                        Alexandre Dumas
                      </Text>
                      <Text className="price" variant="body4">
                        $39.00
                      </Text>
                    </Column>
                  </Row>
                  <Row className="bg-white_A700 items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius10 w-[100%]">
                    <Img
                      src="images/img_image_1.png"
                      className="imageFourteen"
                      alt="Image One One"
                    />
                    <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[64%]">
                      <Img
                        src="images/img_mobile.svg"
                        className="mobile"
                        alt="mobile Two One"
                      />
                      <Text className="TheThreeMuske" variant="body4">
                        The Three Musketeers, by
                        <br />
                        Alexandre Dumas
                      </Text>
                      <Text className="price" variant="body4">
                        $39.00
                      </Text>
                    </Column>
                  </Row>
                  <Text className="columnseemore" variant="body3">
                    See More
                  </Text>
                </Column>
              </List>
              <Column className="justify-start w-[66%]">
                <Row className="items-center rounded-radius10 w-[73%]">
                  <Button
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[21%]"
                    variant="FillOrange200"
                  >
                    All Books
                  </Button>
                  <Button
                    className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[25%]"
                    variant="FillWhiteA700"
                  >
                    Kindergarten
                  </Button>
                  <Button
                    className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[25%]"
                    variant="FillWhiteA700"
                  >
                    High School
                  </Button>
                  <Button
                    className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[19%]"
                    variant="FillWhiteA700"
                  >
                    College
                  </Button>
                </Row>
                <Row className="items-center justify-between lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                  <Input
                    className="font-medium p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_700_99 text-gray_700_99 w-[100%]"
                    wrapClassName="flex w-[66%]"
                    type="text"
                    name="Search"
                    placeholder="Serach Class, Course, Book Name"
                    suffix={
                      <Img
                        src="images/img_search.svg"
                        className="bg-red_300 lg:w-[17px] lg:h-[18px] lg:mx-[7px] xl:w-[21px] xl:h-[22px] xl:mx-[9px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mx-[11px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mx-[13px] rounded-radius8 my-[auto]"
                        alt="search"
                      />
                    }
                    shape="RoundedBorder10"
                    variant="FillWhiteA700"
                  ></Input>
                  <SelectBox
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700_99 w-[32%]"
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
                <Grid className="lg:gap-[10px] xl:gap-[13px] 2xl:gap-[15px] 3xl:gap-[18px] grid grid-cols-3 lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                  <Column className="justify-start w-[100%]">
                    <Stack className="bg-white_A700 lg:h-[200px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 w-[100%]">
                      <Img
                        src="images/img_image14.png"
                        className="Image_Two"
                        alt="Image Two"
                      />
                    </Stack>
                    <Text className="column" variant="body4">
                      The Three Musketeers
                    </Text>
                    <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                      <Text
                        className="font-normal text-red_300 w-[auto]"
                        variant="body4"
                      >
                        $40.00
                      </Text>
                      <Img
                        src="images/img_mobile.svg"
                        className="mobile_Two"
                        alt="mobile Two"
                      />
                    </Row>
                  </Column>
                  <Column className="justify-start w-[100%]">
                    <Stack className="bg-white_A700 lg:h-[200px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 w-[100%]">
                      <Img
                        src="images/img_image_90X75.png"
                        className="Image_Two"
                        alt="Image Three"
                      />
                    </Stack>
                    <Text className="column" variant="body4">
                      The Three Musketeers
                    </Text>
                    <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                      <Text
                        className="font-normal text-red_300 w-[auto]"
                        variant="body4"
                      >
                        $40.00
                      </Text>
                      <Img
                        src="images/img_mobile.svg"
                        className="mobile_Two"
                        alt="mobile Three"
                      />
                    </Row>
                  </Column>
                  <Column className="justify-start w-[100%]">
                    <Stack className="bg-white_A700 lg:h-[200px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 w-[100%]">
                      <Img
                        src="images/img_image_240X230.png"
                        className="Image_Two"
                        alt="Image Four"
                      />
                    </Stack>
                    <Text className="column" variant="body4">
                      The Three Musketeers
                    </Text>
                    <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                      <Text
                        className="font-normal text-red_300 w-[auto]"
                        variant="body4"
                      >
                        $40.00
                      </Text>
                      <Img
                        src="images/img_mobile.svg"
                        className="mobile_Two"
                        alt="mobile Four"
                      />
                    </Row>
                  </Column>
                  <Column className="justify-start w-[100%]">
                    <Stack className="bg-white_A700 lg:h-[200px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 w-[100%]">
                      <Img
                        src="images/img_image_2.png"
                        className="Image_Two"
                        alt="Image Five"
                      />
                    </Stack>
                    <Text className="column" variant="body4">
                      The Three Musketeers
                    </Text>
                    <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                      <Text
                        className="font-normal text-red_300 w-[auto]"
                        variant="body4"
                      >
                        $40.00
                      </Text>
                      <Img
                        src="images/img_mobile.svg"
                        className="mobile_Two"
                        alt="mobile Five"
                      />
                    </Row>
                  </Column>
                  <Column className="justify-start w-[100%]">
                    <Stack className="bg-white_A700 lg:h-[200px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 w-[100%]">
                      <Img
                        src="images/img_image_1.png"
                        className="Image_Two"
                        alt="Image Six"
                      />
                    </Stack>
                    <Text className="column" variant="body4">
                      The Three Musketeers
                    </Text>
                    <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                      <Text
                        className="font-normal text-red_300 w-[auto]"
                        variant="body4"
                      >
                        $40.00
                      </Text>
                      <Img
                        src="images/img_mobile.svg"
                        className="mobile_Two"
                        alt="mobile Six"
                      />
                    </Row>
                  </Column>
                  <Column className="justify-start w-[100%]">
                    <Stack className="bg-white_A700 lg:h-[200px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 w-[100%]">
                      <Img
                        src="images/img_image_3.png"
                        className="Image_Two"
                        alt="Image Seven"
                      />
                    </Stack>
                    <Text className="column" variant="body4">
                      The Three Musketeers
                    </Text>
                    <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                      <Text
                        className="font-normal text-red_300 w-[auto]"
                        variant="body4"
                      >
                        $40.00
                      </Text>
                      <Img
                        src="images/img_mobile.svg"
                        className="mobile_Two"
                        alt="mobile Seven"
                      />
                    </Row>
                  </Column>
                  <Column className="justify-start w-[100%]">
                    <Stack className="bg-white_A700 lg:h-[200px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 w-[100%]">
                      <Img
                        src="images/img_image_90X75.png"
                        className="Image_Two"
                        alt="Image Eight"
                      />
                    </Stack>
                    <Text className="column" variant="body4">
                      The Three Musketeers
                    </Text>
                    <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                      <Text
                        className="font-normal text-red_300 w-[auto]"
                        variant="body4"
                      >
                        $40.00
                      </Text>
                      <Img
                        src="images/img_mobile.svg"
                        className="mobile_Two"
                        alt="mobile Eight"
                      />
                    </Row>
                  </Column>
                  <Column className="justify-start w-[100%]">
                    <Stack className="bg-white_A700 lg:h-[200px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 w-[100%]">
                      <Img
                        src="images/img_image14.png"
                        className="Image_Two"
                        alt="Image Nine"
                      />
                    </Stack>
                    <Text className="column" variant="body4">
                      The Three Musketeers
                    </Text>
                    <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                      <Text
                        className="font-normal text-red_300 w-[auto]"
                        variant="body4"
                      >
                        $40.00
                      </Text>
                      <Img
                        src="images/img_mobile.svg"
                        className="mobile_Two"
                        alt="mobile Nine"
                      />
                    </Row>
                  </Column>
                  <Column className="justify-start w-[100%]">
                    <Stack className="bg-white_A700 lg:h-[200px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 w-[100%]">
                      <Img
                        src="images/img_image_1.png"
                        className="Image_Two"
                        alt="Image Ten"
                      />
                    </Stack>
                    <Text className="column" variant="body4">
                      The Three Musketeers
                    </Text>
                    <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                      <Text
                        className="font-normal text-red_300 w-[auto]"
                        variant="body4"
                      >
                        $40.00
                      </Text>
                      <Img
                        src="images/img_mobile.svg"
                        className="mobile_Two"
                        alt="mobile Ten"
                      />
                    </Row>
                  </Column>
                </Grid>
                <Row className="items-start justify-center lg:ml-[197px] xl:ml-[247px] 2xl:ml-[278px] 3xl:ml-[333px] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[34%]">
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
                    className="font-medium lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rowvolume"
                    variant="body5"
                  >
                    Page
                  </Text>
                  <Button
                    className="font-medium lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_801 text-center lg:w-[31px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                    size="sm"
                    variant="FillWhiteA700"
                  >
                    5
                  </Button>
                  <Text
                    className="font-medium lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] text-gray_900 w-[auto]"
                    variant="body5"
                  >
                    of 80
                  </Text>
                  <Button
                    className="flex lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] items-center justify-center lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] rotate-[180deg] lg:w-[31px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
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
            </Row>
          </Column>
          <Stack className="bg-black_901 lg:h-[299px] xl:h-[374px] 2xl:h-[421px] 3xl:h-[505px] lg:mt-[106px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] lg:px-[35px] xl:px-[44px] 2xl:px-[50px] 3xl:px-[60px] rounded-radius20 w-[100%]">
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
          <footer className="2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] w-[100%]">
            <Row className="items-start justify-evenly w-[100%]">
              <Column className="justify-start pr-[3px] py-[3px] w-[24%]">
                <Row className="items-start w-[57%]">
                  <Img
                    src="images/img_location.svg"
                    className="location_One"
                    alt="location One"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mt-[3px] text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Educatsy
                  </Text>
                </Row>
                <Img
                  src="images/img_social_36X147.svg"
                  className="lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[48%]"
                  alt="social"
                />
                <Column className="justify-start mb-[3px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[54%]">
                  <Text
                    className="font-metropolis columnclassroomcours"
                    variant="body5"
                  >
                    <span className="text-gray_700 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                      ©
                    </span>
                    <span className="text-gray_700 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                      2021 Eduvi.co
                    </span>
                  </Text>
                  <Text
                    className="font-inter font-normal lg:leading-[18px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic text-gray_700 w-[100%]"
                    variant="body5"
                  >
                    Eduvi is a registered
                    <br />
                    trademark of Eduvi.co
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start mt-[3px] pb-[3px] pr-[3px] w-[26%]">
                <Text className="text-gray_900 w-[auto]" variant="body2">
                  Courses
                </Text>
                <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[60%]">
                  <Text className="columnclassroomcours" variant="body5">
                    Classroom courses
                  </Text>
                  <Text className="Virtualclassro" variant="body5">
                    Virtual classroom courses
                  </Text>
                  <Text className="Elearningcour" variant="body5">
                    E-learning courses
                  </Text>
                  <Text className="VideoCourses" variant="body5">
                    Video Courses
                  </Text>
                  <Text className="Elearningcour" variant="body5">
                    Offline Courses
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[20%]">
                <Text className="text-gray_900 w-[auto]" variant="body2">
                  Community
                </Text>
                <Column className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[48%]">
                  <Text className="columnclassroomcours" variant="body5">
                    Learners
                  </Text>
                  <Text className="Elearningcour" variant="body5">
                    Parteners
                  </Text>
                  <Text
                    className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] columnclassroomcours"
                    variant="body5"
                  >
                    Developers
                  </Text>
                  <Text className="VideoCourses" variant="body5">
                    Transactions
                  </Text>
                  <Text
                    className="lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] columnclassroomcours"
                    variant="body5"
                  >
                    Blog
                  </Text>
                  <Text className="VideoCourses" variant="body5">
                    Teaching Center
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start mt-[3px] w-[24%]">
                <Text className="text-gray_900 w-[auto]" variant="body2">
                  Quick links
                </Text>
                <Column className="justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[56%]">
                  <Text className="columnclassroomcours" variant="body5">
                    Home
                  </Text>
                  <Text className="Virtualclassro" variant="body5">
                    Professional Education
                  </Text>
                  <Text
                    className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] columnclassroomcours"
                    variant="body5"
                  >
                    Courses
                  </Text>
                  <Text className="Virtualclassro" variant="body5">
                    Admissions
                  </Text>
                  <Text className="Elearningcour" variant="body5">
                    Testimonial
                  </Text>
                  <Text
                    className="lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] columnclassroomcours"
                    variant="body5"
                  >
                    Programs
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start mt-[3px] pb-[1px] w-[5%]">
                <Text className="text-gray_900 w-[auto]" variant="body2">
                  More
                </Text>
                <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                  <Text className="columnclassroomcours" variant="body5">
                    Press
                  </Text>
                  <Text className="Elearningcour" variant="body5">
                    Investors
                  </Text>
                  <Text className="Elearningcour" variant="body5">
                    Terms
                  </Text>
                  <Text className="Virtualclassro" variant="body5">
                    Privacy
                  </Text>
                  <Text className="Elearningcour" variant="body5">
                    Help
                  </Text>
                  <Text className="Virtualclassro" variant="body5">
                    Contact
                  </Text>
                </Column>
              </Column>
            </Row>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default EduviShopPage;
