import {useState, useEffect} from "react";

/* useEffect
첫 번째 인자는 딱 한 번만 실행하고 싶은 코드
두 번째 인자로 빈 배열을 사용할 경우 useState 한 번만 실행
*/

function App() {
  const [counter,setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  console.log('I run all the time');

  const onChange = (event) => {
    // console.log(event);
    setKeyword(event.target.value);
  };

  // 함수를 따로 선언하는 경우
  // const iRunOnlyOnce = () => {
  //   console.log('I run only once');
  // };
  // useEffect(iRunOnlyOnce, []);

  // 함수를 따로 선언하지 않는 경우
  useEffect(() => {
    console.log('CALL THE API...');
  }, []);

  // input value(= keyword)가 change 했을 때만
  // count 버튼을 눌렀을 때는 실행되지 않도록
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5){
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
