import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import useHook from "react-hook";

const App = () => {
  const { test } = useHook();

  console.dir(test);

  return (
    <div className='App'>
      <h1>React Hook Template</h1>
      <div className='card'>Test should be true = {String(test)}</div>
    </div>
  );
};

export default App;
