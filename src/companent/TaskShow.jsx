import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setshowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditClick = () => {
    setshowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedDesc) => {
    setshowEdit(false);
    onUpdate(id, updatedTitle, updatedDesc);
  };

  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate
          task={task}
          taskformUpdate={true}
          onTimeUpdate={handleSubmit}
        />
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-desc">Yapılacaklar</h3>
          <p>{task.desc}</p>
          <div>
            <button onClick={handleDeleteClick} className="task-delete">
              Sil
            </button>
            <button onClick={handleEditClick} className="task-edit">
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
