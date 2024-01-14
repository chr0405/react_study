import {useState, useEffect} from "react";

function Hello(){  
  useEffect(() => {
    // button을 click할 때마다 console에 나타난다
    // 조건문이 생성(create)과 삭제(destroy)를 반복하기 때문
    // return에 함수로 destroy 시 작동을
    console.log('created');
    // cleanup func
    return () => console.log('destroyed');
  },[]);

  // 긴 버전

  // function byeFn() {
  //   console.log("bye :(");
  // }
  // function hiFn() {
  //   console.log("hi :)");
  //   return byeFn;
  // }
  // useEffect(hiFn, []);

  return <h1>Hello</h1>
}  

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing? <Hello /> : null}
      <button onClick={onClick}>{showing? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
