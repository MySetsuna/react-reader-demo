import { createContext, memo, useContext, useMemo, useState } from "react";

const Demo1Context = createContext({ bg: "#ff0000", border: "#008000" });
const Demo1Context2 = createContext({ bg: "#ff0000", border: "#008000" });

function Demo1() {
  const [bg, setBg] = useState("#ff0000");
  const [border, setBorder] = useState("#008000");

  return (
    <div>
      <div className="p-10 bg-yellow-100">
        <p>测试，如果使用memo，子组件使用useContext是否会触发渲染</p>
        <div>
          区域背景色：
          <input
            type="color"
            defaultValue={bg}
            color={bg}
            onChange={(event) => setBg(event.target.value)}
          />
        </div>
        <div>
          区域边框色：
          <input
            type="color"
            color={border}
            defaultValue={border}
            onChange={(event) => setBorder(event.target.value)}
          />
        </div>
        <Demo1Context2.Provider
          value={useMemo(() => ({ bg: "#ff0000", border }), [border])}
          // 如果传入值不使用useMemo缓存，实则每次都会传入一个新的对象，触发子组件的渲染
          // value={{ bg: "#ff0000", border }}
        >
          <Demo1Context.Provider value={{ bg, border }}>
            <Demo1Child title="消费背景色和边框色" />
            <Demo1Child1 title="只消费边框色，context使用useMemo传值" />
            <Demo1Child2 title="不消费任何颜色，不使用memo" />
          </Demo1Context.Provider>
        </Demo1Context2.Provider>
      </div>
      <div>
        <p className="text-2xl">结论</p>
      </div>
    </div>
  );
}

let count = 0;

const Demo1Child = memo(function (props: { title?: string }) {
  const { title } = props;
  const { bg, border } = useContext(Demo1Context);
  console.log(bg, title, count);

  count++;
  return (
    <div
      className="p-10 m-2 text-white text-3xl border-solid border-8"
      style={{ background: bg, borderColor: border }}
    >
      {title}:渲染次数：{count}
    </div>
  );
});

let count1 = 0;

const Demo1Child1 = memo(function (props: { title?: string }) {
  const { title } = props;
  const { bg, border } = useContext(Demo1Context2);
  console.log(title, count1);

  count1++;
  return (
    <div
      className="p-10 m-2 text-white text-3xl  border-solid border-8"
      style={{ background: bg, borderColor: border }}
    >
      {title}:渲染次数：{count1}
      <Demo1Child3 title="跨层级消费" />
    </div>
  );
});

let count2 = 0;
const Demo1Child2 = function (props: { title?: string }) {
  const { title } = props;
  console.log(title, count2);
  count2++;
  return (
    <div
      className="p-10 m-2 text-white text-3xl  border-solid border-8"
      style={{ background: "red", borderColor: "green" }}
    >
      {title}:渲染次数：{count2}
    </div>
  );
};

let count3 = 0;

const Demo1Child3 = memo(function (props: { title?: string }) {
  const { title } = props;
  const { bg, border } = useContext(Demo1Context);
  console.log(bg, title, count3);

  count3++;
  return (
    <div
      className="p-10 m-2 text-white text-3xl border-solid border-8"
      style={{ background: bg, borderColor: border }}
    >
      {title}:渲染次数：{count3}
    </div>
  );
});
export default Demo1;
