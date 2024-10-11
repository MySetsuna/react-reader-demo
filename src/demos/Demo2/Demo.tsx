import { memo, useRef, useState } from "react";

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count0 = 0;

const Child = (props: {
  count: number;
  cRef: React.MutableRefObject<number>;
}) => {
  const { count, cRef } = props;
  console.log(333);
  count2++;
  cRef.current += 1;
  console.log(count2, "Child  进入渲染");
  return (
    <div>
      Child 组件计数：{count} 渲染次数：{count2}/{cRef.current}
    </div>
  );
};

const Child1 = memo((props: { count: number }) => {
  const { count } = props;
  count3++;
  console.log(count3, "Child1  进入渲染");

  return (
    <div>
      Child1 组件计数：{count} 渲染次数：{count3}
    </div>
  );
});

const Demo2 = () => {
  const [count, setCount] = useState(0);
  const [countX, setCountX] = useState(0);
  const countRef = useRef(0);

  const renderCount = () => {
    console.log(count1, count2, count3, "完成渲染");

    count1++;

    return <div>内部函数计数：{count}</div>;
  };

  count0++;

  return (
    <div>
      <Child count={count} cRef={countRef} />
      <br />
      <Child1 count={count} />
      <br />
      {renderCount()}
      <button
        className="border-red-200 border m-2 p-5"
        onClick={() => setCount((count) => count + 1)}
      >
        计数:{count}
      </button>
      <br />
      <button
        className="border-red-200 border m-2  p-5"
        onClick={() => setCountX((count) => count + 1)}
      >
        计数2:{countX}
      </button>
      <div>父组件 渲染次数：{count0}</div>
      <div>
        Child 渲染次数：{count2}/{countRef.current}
      </div>
      <div>Child1 渲染次数：{count3}</div>
      <div>内部函数 渲染次数：{count1}</div>
      <br />
      结论：
      <br />
      1.父组件内的jsx完成渲染之后，才会进行子组件的渲染，如果使用渲染函数，则父组件渲染的同时就会执行，视为父组件jsx的一部分
      <br />
      2.基于1，即时使用ref计数，父组件同样无法渲染到最新的渲染计数
    </div>
  );
};

export default Demo2;
