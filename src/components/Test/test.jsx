import React, { useState } from "react";

function GrandFa() {
  const initAction = "sleep";
  const initInput = "";
  const [nowInput, setInput] = useState("");
  const [nowAction, setAction] = useState(initAction);

  const whatYouWant = nowInput;

  const onInputChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const changeAction = (e) => {
    e.preventDefault();
    setAction(whatYouWant);
    setInput(initInput);
  };

  return (
    <div>
      <form action="">
        <label htmlFor="inputAction">하고싶은 행동</label>
        <input
          type="text"
          name="inputAction"
          id="inputAction"
          onChange={onInputChange}
          value={nowInput}
        />
        <br />
        <button onClick={changeAction}>Change Action</button>
      </form>
      <Mother nowAction={nowAction}></Mother>
    </div>
  );
}

function Mother({ nowAction }) {
  const otherSchedule = {
    at9pm: "brush my teeth",
    at10pm: "read the book",
  };
  const [nowSchedule, setSchedule] = useState(otherSchedule.at10pm);

  const whatYouDo = {
    at00: "have a lunch",
    at3pm: "finish homework",
    at6pm: "watching TV",
  };

  const changeScheduleBtn = () => {
    if (nowSchedule === otherSchedule.at9pm) {
      setSchedule(otherSchedule.at10pm);
    } else if (nowSchedule === otherSchedule.at10pm) {
      setSchedule(otherSchedule.at9pm);
    }
  };

  return (
    <div>
      Mother
      <Children
        whatYouDo={whatYouDo}
        otherSchedule={otherSchedule}
        changeScheduleBtn={changeScheduleBtn}
        nowSchedule={nowSchedule}
        nowAction={nowAction}
      />
    </div>
  );
}

function Children({ whatYouDo, changeScheduleBtn, nowSchedule, nowAction }) {
  return (
    <div>
      I'll {whatYouDo.at00} ,{whatYouDo.at3pm}, {whatYouDo.at6pm}, {nowSchedule}{" "}
      and {nowAction}
      <br />
      <button onClick={changeScheduleBtn}>Change Schedule</button>
    </div>
  );
}

export default GrandFa;
