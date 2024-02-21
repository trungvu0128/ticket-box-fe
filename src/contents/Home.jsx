import React from "react";
import { Banner } from "./Banner";
import { Flex } from "antd";
import { Featured } from "./Featured";
import { LiveShowList } from "./LiveShows/LiveShowList";
import { SeeMore } from "./SeeMore";

export const Home = () => {
  return (
    <>
      <Banner />
      <Flex wrap="wrap" gap={10}>
        <Featured />
        <LiveShowList />
        <SeeMore />
      </Flex>
    </>
  );
};
