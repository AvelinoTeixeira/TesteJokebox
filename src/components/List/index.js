import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import './style.css';

function List({ todos, onRemove, onToggle }) {
  const [editableTask, setEditableTask] = useState(null);
  const [editedTaskName, setEditedTaskName] = useState('');

  const handleEdit = (item) => {
    setEditableTask(item);
    setEditedTaskName(item.name);
  };

  const handleSaveEdit = () => {
    if (editedTaskName.trim() !== '') {
      const updatedTask = { ...editableTask, name: editedTaskName };
      onToggle(updatedTask);
      setEditableTask(null);
    }
  };

  const handleCancelEdit = () => {
    setEditableTask(null);
  };

  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <li key={item.id} className={editableTask === item ? 'editing' : ''}>
          {editableTask === item ? (
            <>
              <input
                type="text"
                value={editedTaskName}
                onChange={(e) => setEditedTaskName(e.target.value)}
              />
              <button onClick={handleSaveEdit}>Save</button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </>
          ) : (
            <>
              <span
                onClick={() => onToggle(item)}
                className={item.checked ? 'checked' : ''}
              >
                {item.name}
              </span>
              <button type="button" onClick={() => onRemove(item)}>
                <MdDelete size={24} />
              </button>
              <button type="button" onClick={() => handleEdit(item)}>
                Editar
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default List;
