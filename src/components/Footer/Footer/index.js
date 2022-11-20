import React from "react";

import { Row, Column, Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Row className="items-start lg:mb-[56px] xl:mb-[71px] 2xl:mb-[80px] 3xl:mb-[96px] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] mx-[auto] w-[89%]">
          <Column className="justify-start pr-[3px] py-[3px] w-[24%]">
            <Row className="items-start w-[57%]">
              <Img
                src="images/img_location.svg"
                className="location_One"
                alt="location One"
              />
              <Text
                className="font-inter font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mt-[3px] text-black_900 w-[auto]"
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
            <Text className="font-inter text-gray_900 w-[auto]" variant="body2">
              Courses
            </Text>
            <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[60%]">
              <Text className="columnclassroomcours1" variant="body5">
                Classroom courses
              </Text>
              <Text className="Virtualclassro1" variant="body5">
                Virtual classroom courses
              </Text>
              <Text className="Elearningcour1" variant="body5">
                E-learning courses
              </Text>
              <Text className="VideoCourses1" variant="body5">
                Video Courses
              </Text>
              <Text className="Elearningcour1" variant="body5">
                Offline Courses
              </Text>
            </Column>
          </Column>
          <Column className="justify-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[20%]">
            <Text className="font-inter text-gray_900 w-[auto]" variant="body2">
              Community
            </Text>
            <Column className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[48%]">
              <Text className="columnclassroomcours1" variant="body5">
                Learners
              </Text>
              <Text className="Elearningcour1" variant="body5">
                Parteners
              </Text>
              <Text
                className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] columnclassroomcours1"
                variant="body5"
              >
                Developers
              </Text>
              <Text className="VideoCourses1" variant="body5">
                Transactions
              </Text>
              <Text
                className="lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] columnclassroomcours1"
                variant="body5"
              >
                Blog
              </Text>
              <Text className="VideoCourses1" variant="body5">
                Teaching Center
              </Text>
            </Column>
          </Column>
          <Column className="justify-start mt-[3px] w-[24%]">
            <Text className="font-inter text-gray_900 w-[auto]" variant="body2">
              Quick links
            </Text>
            <Column className="justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[56%]">
              <Text className="columnclassroomcours1" variant="body5">
                Home
              </Text>
              <Text className="Virtualclassro1" variant="body5">
                Professional Education
              </Text>
              <Text
                className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] columnclassroomcours1"
                variant="body5"
              >
                Courses
              </Text>
              <Text className="Virtualclassro1" variant="body5">
                Admissions
              </Text>
              <Text className="Elearningcour1" variant="body5">
                Testimonial
              </Text>
              <Text
                className="lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] columnclassroomcours1"
                variant="body5"
              >
                Programs
              </Text>
            </Column>
          </Column>
          <Column className="justify-start mt-[3px] pb-[1px] w-[5%]">
            <Text className="font-inter text-gray_900 w-[auto]" variant="body2">
              More
            </Text>
            <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
              <Text className="columnclassroomcours1" variant="body5">
                Press
              </Text>
              <Text className="Elearningcour1" variant="body5">
                Investors
              </Text>
              <Text className="Elearningcour1" variant="body5">
                Terms
              </Text>
              <Text className="Virtualclassro1" variant="body5">
                Privacy
              </Text>
              <Text className="Elearningcour1" variant="body5">
                Help
              </Text>
              <Text className="Virtualclassro1" variant="body5">
                Contact
              </Text>
            </Column>
          </Column>
        </Row>
      </footer>
    </>
  );
};

export default Footer;
