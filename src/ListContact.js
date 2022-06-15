import {  useState, useLayoutEffect } from "react";
 import React from "react";
import Header from "./Header";
import { faker } from "@faker-js/faker";

import Avatar from "@mui/material/Avatar";




export default function ListContact(props) {
  const [list, setList] = useState([]);
  
  useLayoutEffect((_) => {
    let i = 0;
    setList([]);
    while (i < 100) {
      setList((prev) => [
        ...prev,
        {
          name: faker.internet.userName(),
          img: faker.image.avatar(),
        },
      ]);
      i++;
    }
  }, []);
  return (
    <div>
      <Header />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop:110
        }}
      >
        {list.map((el) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              width: 450,
            }}
          >
            <div style={{ float: "left", width: "50%" }}>
              {el.name}
              
            </div>

            <div style={{ float: "right", width: "50%" ,padding:14}}>
              <Avatar
                alt="Remy Sharp"
                src={el.img}
                sx={{ width: 60, height: 60 }}
              />
            
              
            </div>
          </div>

         
        ))}
      </div>
    </div>
  );
}
