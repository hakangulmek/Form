import React, { useState } from "react";

function TaskCreate({ onCreate, task, taskformUpdate, onTimeUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [desc, setDesc] = useState(task ? task.desc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskformUpdate) {
      onTimeUpdate(task.id, title, desc);
    } else {
      onCreate(title, desc);
    }

    setTitle("");
    setDesc("");
  };

  return (
    <div>
      {""}
      {taskformUpdate ? (
        <div className="task-update">
          <h1>Lütfen Taskı Düzenleyiniz!</h1>
          <form className="task-form">
            <label className="task-label">Başlığı Düzenleyiniz!</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Taskı Düzenleyiniz!</label>
            <textarea
              value={desc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button onClick={handleSubmit} className="task-updateButton">
              Güncelle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-update">
          <h1>Lütfen Task Giriniz!</h1>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Giriniz!</label>
            <textarea
              value={desc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button onClick={handleSubmit} className="task-button">
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
