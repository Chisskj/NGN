import React, { useState } from 'react';

const GeneralConfig = () => {
  const [configs, setConfigs] = useState([
    {
      company_id: '4',
      gamecode_model_id: '4',
      start_date: '2024-12-18T21:52:37.000+00:00',
      valid_date: '2025-12-13T21:52:37.000+00:00',
    },
  ]);

  const [newConfig, setNewConfig] = useState({
    company_id: '',
    gamecode_model_id: '',
    start_date: '',
    valid_date: '',
  });

  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setNewConfig({ ...newConfig, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    if (editingIndex !== null) {
      const updatedConfigs = [...configs];
      updatedConfigs[editingIndex] = newConfig;
      setConfigs(updatedConfigs);
      setEditingIndex(null);
    } else {
      setConfigs([...configs, newConfig]);
    }
    resetForm();
  };

  const handleEdit = (index) => {
    setNewConfig(configs[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedConfigs = configs.filter((_, i) => i !== index);
    setConfigs(updatedConfigs);
  };

  const resetForm = () => {
    setNewConfig({
      company_id: '',
      gamecode_model_id: '',
      start_date: '',
      valid_date: '',
    });
    setEditingIndex(null);
  };

  return (
    <div>
      <h3>General Config</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Company ID</th>
            <th>Gamecode Model ID</th>
            <th>Start Date</th>
            <th>Valid Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {configs.map((config, index) => (
            <tr key={index}>
              <td>{config.company_id}</td>
              <td>{config.gamecode_model_id}</td>
              <td>{config.start_date}</td>
              <td>{config.valid_date}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>{editingIndex !== null ? 'Edit Config' : 'Add New Config'}</h4>
      <div>
        <input
          type="text"
          name="company_id"
          placeholder="Company ID"
          value={newConfig.company_id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="gamecode_model_id"
          placeholder="Gamecode Model ID"
          value={newConfig.gamecode_model_id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="start_date"
          placeholder="Start Date"
          value={newConfig.start_date}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="valid_date"
          placeholder="Valid Date"
          value={newConfig.valid_date}
          onChange={handleInputChange}
        />
        <button onClick={handleAddOrUpdate}>
          {editingIndex !== null ? 'Update Config' : 'Add Config'}
        </button>
        {editingIndex !== null && <button onClick={resetForm}>Cancel</button>}
      </div>
    </div>
  );
};

export default GeneralConfig;
