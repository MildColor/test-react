import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("I'm here");
  }, []);
  return <h1>Hello</h1>;
}

function Mother() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
export default Mother;
