import { forwardRef, memo, useEffect, useImperativeHandle, useRef, useState } from "react";

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count0 = 0;
console.log('================');


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

const Child2 = memo(forwardRef((props: { count: number },ref) => {

  const [c2Count,set2Count] =useState(0) 


  const { count } = props;
  count4++;
  console.log(count3, "Child1  进入渲染");

  useImperativeHandle(ref,()=>({c2Count,count4,set2Count}),[c2Count,count4,set2Count])

  return (
    <div>
      <button  className="border-red-200 border m-2  p-5" onClick={()=>set2Count((c)=>c+1)}>c2 点击计数</button>
      Child2 组件计数：{count} 渲染次数：{count4} 自己计数：{c2Count}
    </div>
  );
}));

const Demo2 = () => {
  const [count, setCount] = useState(0);
  const [countX, setCountX] = useState(0);
  const countRef = useRef(0);
  const c2Ref = useRef<any>(null);

  const renderCount = () => {
    console.log(count1, count2, count3, "完成渲染");

    count1++;

    return <div>内部函数计数：{count}</div>;
  };

  count0++;
  console.log(count0,'count0');
  

 
  return (
    <div>
      <Child count={count} cRef={countRef} />
      <br />
      <Child1 count={count} />
      <br />
      <Child2 count={count} ref={c2Ref}/>
      <br/>
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
      <button
        className="border-red-200 border m-2  p-5"
        onClick={() => {c2Ref.current?.set2Count((count:number) => count + 1); count0++}}
      >
        计数c2内部:{c2Ref.current?.c2Count}
      </button>
      <button
        className="border-red-200 border m-2  p-5"
        onClick={() => {alert(c2Ref.current?.c2Count)}}
      >
        展示计数c2内部:{c2Ref.current?.c2Count}
      </button>
      <div>父组件 渲染次数：{count0}</div>
      <div>
        Child 渲染次数：{count2}/{countRef.current}
      </div>
      <div>Child1 渲染次数：{count3}</div>
      <div>Child12 渲染次数：{count4}/{c2Ref.current?.count4}/{c2Ref.current?.c2Count}</div>
      <div>内部函数 渲染次数：{count1}</div>
      <br />
      结论：
      <br />
      1.父组件内的jsx完成渲染之后，才会进行子组件的渲染，如果使用渲染函数，则父组件渲染的同时就会执行，视为父组件jsx的一部分
      <br />
      2.基于1，即时使用ref计数，父组件同样无法渲染到最新的渲染计数
      <br />
      3.使用forwardRef和useImperativeHandle在父组件使用子组件元素，有诸多限制。这里子组件内部元素的更新不会触发父元素更新，因此只有等父组件下一次更新的时候，才会在父元素的jsx中把子组件的元素更新，这里和使用ref类似
      <br />
      4.热加载会保存ref，state等状态，但不会保持该作用域下声明变量的值
    </div>
  );
};

export default Demo2;
