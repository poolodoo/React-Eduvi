import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Stack,
  Line,
  Button,
  List,
  Input,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const EduviJoinAsTeacherPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Row className="bg-yellow_100 items-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius20 w-[89%]">
          <Text
            className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] text-black_900 tracking-ls1 w-[auto]"
            variant="body5"
          >
            <span className="text-black_900 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
              Home |{" "}
            </span>
            <span className="text-red_300 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
              Become An Instructor
            </span>
          </Text>
          <Text
            className="font-normal lg:leading-[35px] xl:leading-[44px] 2xl:leading-[50px] 3xl:leading-[60px] ml-[3px] lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] text-gray_900 w-[23%]"
            as="h2"
            variant="h2"
          >
            Join Eduvi as
            <br />a Mentor
          </Text>
          <Img
            src="images/img_objects.svg"
            className="lg:h-[149px] xl:h-[186px] 2xl:h-[210px] 3xl:h-[251px] mb-[2px] lg:ml-[150px] xl:ml-[188px] 2xl:ml-[212px] 3xl:ml-[254px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[25%]"
            alt="OBJECTS"
          />
        </Row>
        <Row className="items-center justify-between lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] pr-[4px] w-[85%]">
          <Img
            src="images/img_image.png"
            className="lg:h-[371px] xl:h-[464px] 2xl:h-[522px] 3xl:h-[626px] w-[42%]"
            alt="Image"
          />
          <Column className="w-[49%]">
            <Text
              className="font-normal text-gray_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              Apply As Instructor
            </Text>
            <Text
              className="font-normal lg:leading-[21px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic text-gray_700 w-[100%]"
              variant="body5"
            >
              Teaching is a vital and admirable career. As such, it comes with
              quite a bit of responsibility, both in practice and in preparation
              with many skills required to be a teacher. The following steps
              provide a general breakdown of the requirements for teachers:
            </Text>
            <Column className="items-center justify-start lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[57%]">
              <Row className="items-start justify-between w-[100%]">
                <Text
                  className="font-medium mt-[1px] text-red_300 w-[auto]"
                  variant="body5"
                >
                  Intstructor Requirements
                </Text>
                <Text
                  className="font-medium mb-[1px] text-gray_700 w-[auto]"
                  variant="body5"
                >
                  Instructor Rules
                </Text>
              </Row>
              <Stack className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                <Line className="absolute bg-gray_700 h-[1px] shadow-bs3 w-[100%]" />
                <Line className="absolute bg-red_300 h-[1px] left-[0] shadow-bs3 w-[56%]" />
              </Stack>
            </Column>
            <Column className="justify-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[46%]">
              <Row className="items-start mr-[auto] mt-[3px] w-[77%]">
                <div className="bg-red_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[1px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                <Text className="rowellipse1721" variant="body5">
                  An undergraduate degree
                </Text>
              </Row>
              <Row className="items-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                <div className="bg-red_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[1px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                <Text className="rowellipse1721" variant="body5">
                  Participate in supervised teaching
                </Text>
              </Row>
              <Row className="items-start mr-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[68%]">
                <div className="bg-red_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[1px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                <Text className="rowellipse1721" variant="body5">
                  State teaching license
                </Text>
              </Row>
              <Row className="items-start mr-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[70%]">
                <div className="bg-red_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[1px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                <Text className="rowellipse1721" variant="body5">
                  Purse graduate studies
                </Text>
              </Row>
            </Column>
            <Button
              className="font-medium lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[24%]"
              size="md"
            >
              Apply Now
            </Button>
          </Column>
        </Row>
        <Column className="items-end lg:mt-[119px] xl:mt-[149px] 2xl:mt-[168px] 3xl:mt-[201px] 3xl:px-[109px] lg:px-[64px] xl:px-[80px] 2xl:px-[91px] w-[100%]">
          <Stack className="lg:h-[516px] xl:h-[645px] 2xl:h-[726px] 3xl:h-[871px] w-[92%]">
            <List
              className="absolute font-airbnbcerealapp gap-[0] min-h-[auto] right-[0] top-[0] w-[16%]"
              orientation="vertical"
            >
              <Row className="items-center justify-between lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
                <Text className="text-red_300 w-[auto]" variant="body6">
                  +
                </Text>
              </Row>
            </List>
            <Text
              className="absolute font-bold font-metropolis left-[14%] text-gray_900 top-[2%] w-[auto]"
              as="h2"
              variant="h2"
            >
              How to apply to join as instructor
            </Text>
            <Column className="absolute bg-white_A700 bottom-[0] font-airbnbcerealapp items-center justify-start left-[0] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 shadow-bs4 w-[92%]">
              <Stack className="bg-indigo_50 lg:h-[406px] xl:h-[508px] 2xl:h-[571px] 3xl:h-[685px] rounded-radius20 w-[100%]">
                <Stack className="absolute bottom-[0] lg:h-[382px] xl:h-[478px] 2xl:h-[538px] 3xl:h-[645px] left-[16%] w-[62%]">
                  <Column
                    className="absolute bg-cover bg-repeat items-center justify-start left-[0] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rotate-[180deg] top-[21%] w-[25%]"
                    style={{
                      backgroundImage: "url('images/img_comments.svg')",
                    }}
                  >
                    <Text
                      className="font-medium lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mb-[10px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] rotate-[180deg] text-white_A700 w-[93%]"
                      variant="body3"
                    >
                      3 Simple
                      <br />
                      Steps to go
                    </Text>
                  </Column>
                  <Stack
                    className="absolute bg-cover bg-repeat lg:h-[382px] xl:h-[478px] 2xl:h-[538px] 3xl:h-[645px] 3xl:px-[112px] lg:px-[66px] xl:px-[83px] 2xl:px-[94px] right-[0] w-[90%]"
                    style={{
                      backgroundImage: "url('images/img_group7681.png')",
                    }}
                  >
                    <Img
                      src="images/img_objects.svg"
                      className="absolute bottom-[10%] xl:h-[101px] 2xl:h-[114px] 3xl:h-[136px] lg:h-[81px] left-[0] w-[30%]"
                      alt="OBJECTS One"
                    />
                  </Stack>
                </Stack>
                <Img
                  src="images/img_group7684.svg"
                  className="absolute bottom-[0] lg:h-[47px] xl:h-[59px] 2xl:h-[67px] 3xl:h-[80px] w-[100%]"
                  alt="Group7684"
                />
              </Stack>
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

export default EduviJoinAsTeacherPage;
