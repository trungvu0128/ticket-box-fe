import {
  Flex,
  Typography,
  Input,
  Checkbox,
  Space,
  Button,
  Divider,
} from "antd";
import React from "react";
import { AiFillMail } from "react-icons/ai";
export const Login = () => {
  return (
    <div>
      <Flex justify="center" align="center">
        <Flex
          gap={100}
          align="flex-end"
          justify="center"
          style={{
            background: "rgb(45, 194, 117)",
            height: "124px",
            width: "100%",
          }}
        >
          <Typography.Title level={2} style={{ color: "#fff" }}>
            Hello !
          </Typography.Title>
          <svg width="80" height="64" fill="none" class="sc-1pb1hf-9 fCcDFu">
            <path
              d="M75.538 76.358s-.678-12.34-9.182-25.508H21.221L21 57.5"
              fill="#FFD530"
            ></path>
            <path
              d="M75.538 76.358s-.678-12.34-9.182-25.508H21.221L21 57.5"
              stroke="#2A2D34"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M23.903 49.471S18.77 29.948 10.172 28.843C1.168 27.683-.855 42.697 20 61"
              fill="#FFD530"
            ></path>
            <path
              d="M23.903 49.471S18.77 29.948 10.172 28.843C1.168 27.683-.855 42.697 20 61"
              stroke="#2A2D34"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M66.071 56.529s2.975 7.218 2.972 14.13c-.004 9.717-2.827 13.444-4.248 17.078 0 0-.005 7.487-1.293 10.553-1.29 3.067-11.386 3.006-14.123 1.01-3.446-2.51-4.592-10.926-4.592-10.926H42.475s-.858 8.413-4.307 10.922c-2.74 1.991-13.04 2.043-14.326-1.026-1.286-3.069-.895-10.556-.895-10.556-1.417-3.636-4.416-7.365-4.411-17.085.004-6.909 2.987-14.125 2.987-14.125"
              fill="#FFD530"
            ></path>
            <path
              d="M66.071 56.529s2.975 7.218 2.972 14.13c-.004 9.717-2.827 13.444-4.248 17.078 0 0-.005 7.487-1.293 10.553-1.29 3.067-11.386 3.006-14.123 1.01-3.446-2.51-4.592-10.926-4.592-10.926H42.475s-.858 8.413-4.307 10.922c-2.74 1.991-13.04 2.043-14.326-1.026-1.286-3.069-.895-10.556-.895-10.556-1.417-3.636-4.416-7.365-4.411-17.085.004-6.909 2.987-14.125 2.987-14.125"
              stroke="#2A2D34"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M43.788 82.767c8.075 0 14.62-8.33 14.62-18.604S51.863 45.56 43.788 45.56c-8.074 0-14.62 8.33-14.62 18.604 0 10.275 6.546 18.604 14.62 18.604z"
              fill="#fff"
            ></path>
            <path
              d="M43.79 55.001C31.1 55.008 23.92 52.19 21.224 50.85v-3.123c2.477 1.188 10.662 4.526 22.568 4.52 11.905.006 20.088-3.332 22.567-4.52v3.123C63.662 52.19 56.48 55.008 43.791 55z"
              fill="#2DC275"
            ></path>
            <path
              d="M43.79 55.001C31.1 55.008 23.92 52.19 21.224 50.85v-3.123c2.477 1.188 10.662 4.526 22.568 4.52 11.905.006 20.088-3.332 22.567-4.52v3.123C63.662 52.19 56.48 55.008 43.791 55"
              stroke="#2A2D34"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M46.44 58.62l-1.41 1.41a1.753 1.753 0 01-2.48 0l-1.41-1.41a1.753 1.753 0 010-2.48l1.41-1.41a1.753 1.753 0 012.48 0l1.41 1.41a1.753 1.753 0 010 2.48z"
              fill="#FFD530"
              stroke="#2A2D34"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M73.766 18.37C67.816 3.143 52.322 1.495 43.87 1.48h-.162c-8.453.015-23.945 1.663-29.898 16.89-7.636 19.537 7.512 29.359 7.512 29.359a54.56 54.56 0 0022.466 4.52A54.692 54.692 0 0056.125 51a54.642 54.642 0 0010.13-3.272s15.148-9.822 7.511-29.359z"
              fill="#fff"
            ></path>
            <path
              d="M43.789 10.268c7.625 0 4.25 7.74 5.064 11.777.816 4.036 2.954 2.384 13.241.702 9.804-1.604 12.719 11.666 12.972 12.74 1.331-4.482 1.492-10.186-1.218-17.117C67.859 3.045 52.202 1.475 43.788 1.48c-8.413-.005-24.07 1.565-30.059 16.89-2.71 6.929-2.549 12.635-1.218 17.117.253-1.071 3.169-14.342 12.972-12.74 10.287 1.684 12.427 3.334 13.241-.702.816-4.037-2.56-11.777 5.065-11.777z"
              fill="#FFD530"
            ></path>
            <path
              d="M33.183 27.523s2.366 1.627 4.77.549c2.405-1.078 3.35-1.953 5.835-1.953 2.489.003 3.433.875 5.838 1.955 2.405 1.078 4.77-.547 4.77-.547"
              stroke="#2A2D34"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M46.697 22.845l.034-.039c.795-.904.352-2.312-.816-2.612-.741-.192-1.543-.246-2.129-.249-.583 0-1.387.055-2.129.247-1.168.3-1.613 1.706-.818 2.61l.034.04c1.55 1.736 4.278 1.738 5.824.003z"
              fill="#2DC275"
              stroke="#2A2D34"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M32.41 19.945a.525.525 0 00-.506.651 2.804 2.804 0 005.456 0 .525.525 0 00-.507-.65H32.41zM55.17 19.945c.339 0 .585.321.506.651a2.804 2.804 0 01-5.456 0 .525.525 0 01.507-.65h4.443z"
              fill="#2A2D34"
            ></path>
            <path
              d="M66.336 47.729c-2.477 1.189-10.644 4.526-22.55 4.52-11.905-.007-20.07-3.33-22.547-4.52 0 0-15.148-9.822-7.512-29.359C19.718 3.045 35.375 1.475 43.789 1.48c8.413-.005 24.07 1.565 30.059 16.89 7.639 19.537-7.512 29.359-7.512 29.359z"
              stroke="#2A2D34"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M24.72 5.986s-4.64-2.066-7.983 1.1c-3.342 3.166-2.61 6.753-2.11 7.74.971 1.915 6.716 5.386 9.073 3.696 2.622-1.878.755-9.386.755-9.386"
              fill="#FFD530"
            ></path>
            <path
              d="M24.72 5.986s-4.64-2.066-7.983 1.1c-3.342 3.166-2.61 6.753-2.11 7.74.971 1.915 6.716 5.386 9.073 3.696 2.622-1.878.755-9.386.755-9.386"
              stroke="#2A2D34"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M62.858 5.986s4.64-2.066 7.982 1.1c3.342 3.166 2.61 6.753 2.11 7.74-.971 1.915-6.716 5.386-9.073 3.696-2.621-1.878-.755-9.386-.755-9.386"
              fill="#FFD530"
            ></path>
            <path
              d="M62.858 5.986s4.64-2.066 7.982 1.1c3.342 3.166 2.61 6.753 2.11 7.74-.971 1.915-6.716 5.386-9.073 3.696-2.621-1.878-.755-9.386-.755-9.386"
              stroke="#2A2D34"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </Flex>
      </Flex>
      <Flex
        vertical
        gap={30}
        style={{
          marginLeft: "40%",
          marginRight: "40%",
          marginTop: 20,
          background: "#fff",
          border: 10,
          padding: 20,
        }}
      >
        <Flex vertical gap={5}>
          <Typography.Text>Input your phone number</Typography.Text>
          <Space.Compact>
            <Input addonBefore={"+84"} placeholder="input your phone number" />
          </Space.Compact>
        </Flex>
        <Checkbox>
          I agree to Ticketbox's Terms of Use and Information Privacy Policy
        </Checkbox>
        <Button disabled>Continue</Button>
        <Divider orientation="center" style={{ margin: 0 }}>
          Or
        </Divider>
        <Flex gap={50} justify="center" align="center">
          <Button
            shape="circle"
            style={{ borderRadius: "1px solid black", width: 40, height: 40 }}
          >
            <AiFillMail height={50} />
          </Button>
          <Button
            shape="circle"
            style={{ borderRadius: "1px solid black", width: 40, height: 40 }}
          >
            <AiFillMail height={50} />
          </Button>
          <Button
            shape="circle"
            style={{ borderRadius: "1px solid black", width: 40, height: 40 }}
          >
            <AiFillMail height={50} />
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};
