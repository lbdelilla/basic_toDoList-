import React, { useState } from "react";

const ToDoList = () => {
  const [countToDo, setCountToDo] = useState(1);
  const [toDo, setToDo] = useState("");
  const [list, setList] = useState(["This is a To Do"]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setList((prevList) => [...prevList, toDo]);
      setCountToDo((prevCount) => prevCount + 1);
      setToDo("");
    }
  };

  const handleDelete = (i) => {
    const updatedList = list.filter((_, index) => index !== i);
    setList(updatedList);
    setCountToDo((prevCount) => prevCount - 1);
  };

  return (
    <section className="d-flex justify-content-center my-5">
      <div className="card" style={{ width: "18rem", alignSelf: "center" }}>
        <label htmlFor="basic-url" className="form-label card-header py-2">
          Add your To Do´s here..
        </label>
        <input
          type="text"
          className="form-control border-0"
          id="basic-url"
          aria-describedby="basic-addon3"
          value={toDo}
          onChange={(e) => {
            setToDo(e.target.value);
          }}
          onKeyDown={(e) => {
            e.key === "Enter" ? handleKeyDown(e) : null;
          }}
        />

        <ul className="list-group list-group-flush ">
        {list
      ? list.map((toDo, i) => (
          <div key={i} className="d-flex flex-row justify-content-between border-top">
            <li className="list-group-item text-start border-0">{toDo}</li>
            <button
              className="delete-btn btn text-end"
              onClick={() => handleDelete(i)}
            >
              <i className="fa-regular fa-rectangle-xmark"></i>
            </button>
          </div>
        ))
      : null}
        </ul>
        <span className="card-footer text-muted">
          You have {countToDo} to do left{" "}
        </span>
      </div>
    </section>
  );
};

export default ToDoList;
