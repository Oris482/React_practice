import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import "./App.css";

function App() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fondSize: 24,
    padding: "1rem",
  };

  return (
    <Wrapper>
      {/* 주석은 화면에 보이지 않습니다 */}
      /* 중괄호로 감싸지 않으면 화면에 보입니다 */
      <Hello
        name="react"
        color="red"
        isSpecial={true} //기본값이 {true}라서 안적어도 됨
        // 열리는 태그 내부에서는 이런 식으로 주석 작성 가능
      />
      <Hello color="pink" />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
      <Counter />
      <InputSample />
    </Wrapper>
  );
}

export default App;
