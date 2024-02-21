import React from "react";
import { LiveShow } from "./LiveShow";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

export const LiveShowList = () => {
  let navigate = useNavigate();
  const liveShowProps = [
    {
      id: 0,
      image:
        "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2024/01/16/84BADC.jpg",
      name: "[Show xiếc 2024] Great British Circus VietNam",
      category: "Art & Culture",
      date: "06/02/2024",
    },
    {
      id: 1,
      image:
        "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2024/01/16/84BADC.jpg",
      name: "[Show xiếc 2024] Great British Circus VietNam",
      category: "Art & Culture",
      date: "06/02/2024",
    },
    {
      id: 2,
      image:
        "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2024/01/16/84BADC.jpg",
      name: "[Show xiếc 2024] Great British Circus VietNam",
      category: "Art & Culture",
      date: "06/02/2024",
    },
    {
      id: 3,
      image:
        "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2024/01/16/84BADC.jpg",
      name: "[Show xiếc 2024] Great British Circus VietNam",
      category: "Art & Culture",
      date: "06/02/2024",
    },
    {
      id: 4,
      image:
        "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2024/01/16/84BADC.jpg",
      name: "[Show xiếc 2024] Great British Circus VietNam",
      category: "Art & Culture",
      date: "06/02/2024",
    },
    {
      id: 5,
      image:
        "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2024/01/16/84BADC.jpg",
      name: "[Show xiếc 2024] Great British Circus VietNam",
      category: "Art & Culture",
      date: "06/02/2024",
    },
    {
      id: 6,
      image:
        "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2024/01/16/84BADC.jpg",
      name: "[Show xiếc 2024] Great British Circus VietNam",
      category: "Art & Culture",
      date: "06/02/2024",
    },
    {
      id: 7,
      image:
        "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2024/01/16/84BADC.jpg",
      name: "[Show xiếc 2024] Great British Circus VietNam",
      category: "Art & Culture",
      date: "06/02/2024",
    },
    {
      id: 8,
      image:
        "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2024/01/16/84BADC.jpg",
      name: "[Show xiếc 2024] Great British Circus VietNam",
      category: "Art & Culture",
      date: "06/02/2024",
    },
    {
      id: 9,
      image:
        "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2024/01/16/84BADC.jpg",
      name: "[Show xiếc 2024] Great British Circus VietNam",
      category: "Art & Culture",
      date: "06/02/2024",
    },
    {
      id: 10,
      image:
        "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2024/01/16/84BADC.jpg",
      name: "[Show xiếc 2024] Great British Circus VietNam",
      category: "Art & Culture",
      date: "06/02/2024",
    },
    {
      id: 12,
      image:
        "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2024/01/16/84BADC.jpg",
      name: "[Show xiếc 2024] Great British Circus VietNam",
      category: "Art & Culture",
      date: "06/02/2024",
    },
  ];
  return (
    <Row wrap="nowrap">
      {liveShowProps.map((item, index) => {
        return (
          <Col lg={6} md={8} key={index}>
            <LiveShow
              image={item.image}
              name={item.name}
              category={item.category}
              date={item.date}
              id={item.id}
            />
          </Col>
        );
      })}
    </Row>
  );
};
