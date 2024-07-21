import React, { useState } from "react";
import "./App.css";
import { Button, Image, Stack } from "@chakra-ui/react";

function App() {
  const [imageUrl, setImageUrl] = useState<string>("https://picsum.photos/800");
  const onClickRandom = () => {
    const newImageUrl = `https://picsum.photos/800?${Date.now()}`;
    setImageUrl(newImageUrl);
  };
  return (
    <div className="App">
      <Button onClick={onClickRandom} _hover={{ cursor: "pointer" }}>
        ランダム
      </Button>
      <br />
      <Image src={imageUrl} />
    </div>
  );
}

export default App;
