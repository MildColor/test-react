import { useState, useEffect } from "react";

function Mother() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run all the time");

  // 첫번째 렌더에만 실행
  useEffect(() => {
    console.log("Call the API...");
  }, []);

  // 첫번째 렌더에 실행하고, keyword가 바뀌면 실행
  // keyword는 input value
  useEffect(() => {
    console.log("SEARCH FOR", keyword);
    //대괄호 부분은 지켜보고 있는 부분임.
  }, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        type="text"
        onChange={onChange}
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
export default Mother;
// 지금은 클릭할 때마다 계속 render가 되는 중
// 가끔은 첫번째로 render할 때만 코드를 실행하고 싶을 수도 있다.
// 그래서 첫번째 render에만 코드가 실행되고, 다른 state변화에는 실행되지 않도록 하는것.
// ex) API를 가져올 때, 첫번째 component render에서 API를 콜하고, 이후에 state가 변할 때, 그 API에서 데이터를 또다시 가져오고 싶진 않을 것이다.
