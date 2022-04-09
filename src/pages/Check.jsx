import axios from "axios";
import React, { useEffect } from "react";

const Check = () => {
  useEffect(() => {
    console.log("Hello");
  }, []);

  const check = async () => {
    try {
      const data = await axios.get("/getresultimages/hello");
      let imageData = data.data.images;
      imageData = imageData.map((data) => {
        return JSON.parse(data);
      });
      console.log(imageData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button
        onClick={() => {
          check();
        }}>
        Click Me
      </button>
    </div>
  );
};

export default Check;
