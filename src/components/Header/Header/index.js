import React from "react";

import { Row, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="items-center lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] w-[100%]">
          <Row className="items-start justify-center lg:ml-[41px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] mt-[3px] w-[13%]">
            <Img
              src="images/img_location.svg"
              className="location_One"
              alt="location"
            />
            <Text
              className="cursor-pointer font-inter hover:font-normal font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mt-[3px] text-black_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              Educatsy
            </Text>
          </Row>
          <Row className="items-end justify-center lg:ml-[26px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] w-[51%]">
            <Text
              className="hover:font-normal hover:text-black_900 menu"
              variant="body5"
            >
              Shop
            </Text>
            <Row className="items-start justify-center lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] w-[22%]">
              <Text
                className="hover:font-normal hover:text-black_900 ForKindergarte"
                variant="body5"
              >
                For Kindergarten
              </Text>
              <Img
                src="images/img_arrowdown_24X24.svg"
                className="arrowdown"
                alt="arrowdown"
              />
            </Row>
            <Row className="items-start justify-center lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] w-[21%]">
              <Text
                className="hover:font-normal hover:text-black_900 ForKindergarte"
                variant="body5"
              >
                For High School
              </Text>
              <Img
                src="images/img_arrowdown_24X24.svg"
                className="arrowdown"
                alt="arrowdown One"
              />
            </Row>
            <Row className="items-end justify-center lg:ml-[29px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] w-[16%]">
              <Text
                className="hover:font-normal hover:text-black_900 menu"
                variant="body5"
              >
                For College
              </Text>
              <Img
                src="images/img_arrowdown_24X24.svg"
                className="arrowdown"
                alt="arrowdown Two"
              />
            </Row>
            <Row className="items-center justify-evenly lg:ml-[27px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] w-[13%]">
              <Text
                className="cursor-pointer font-inter font-medium hover:font-normal hover:text-black_900 text-gray_900 w-[auto]"
                variant="body5"
              >
                Courses
              </Text>
              <Img
                src="images/img_arrowdown_24X24.svg"
                className="checkmark"
                alt="arrowdown Three"
              />
            </Row>
          </Row>
          <Row className="items-end justify-center 3xl:ml-[106px] lg:ml-[63px] xl:ml-[79px] 2xl:ml-[89px] w-[7%]">
            <Text
              className="cursor-pointer font-inter font-medium hover:font-normal mb-[4px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] hover:text-black_900 text-gray_900 w-[auto]"
              variant="body5"
            >
              Cart (0)
            </Text>
            <Img
              src="images/img_bag.svg"
              className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
              alt="bag"
            />
          </Row>
          <Row className="items-end justify-center lg:ml-[22px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] w-[9%]">
            <Text
              className="cursor-pointer font-inter font-medium hover:font-normal mb-[3px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] hover:text-black_900 text-gray_900 w-[auto]"
              variant="body5"
            >
              My Account
            </Text>
            <Img
              src="images/img_user_1.svg"
              className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
              alt="user"
            />
          </Row>
        </Row>
      </header>
    </>
  );
};

export default Header;
