import React, { useState } from 'react';

const ServiceConfig = () => {
  const [services, setServices] = useState([
    {
      model_code: 'VIP_B_basic',
      model_name: 'Nap VIP B basic',
      description: 'Mua trên 20 gamecode VIP_B sẽ được chiết khấu 7%',
      discount: '7',
      package_id: '2',
      start_date: '2024-12-18T21:52:37.000+00:00',
      valid_date: '2025-12-13T21:52:37.000+00:00',
      number_required: '20',
      status: '1',
    },
  ]);

  const [newService, setNewService] = useState({
    model_code: '',
    model_name: '',
    description: '',
    discount: '',
    package_id: '',
    start_date: '',
    valid_date: '',
    number_required: '',
    status: '',
  });

  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setNewService({ ...newService, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    if (editingIndex !== null) {
      const updatedServices = [...services];
      updatedServices[editingIndex] = newService;
      setServices(updatedServices);
      setEditingIndex(null);
    } else {
      setServices([...services, newService]);
    }
    resetForm();
  };

  const handleEdit = (index) => {
    setNewService(services[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  const resetForm = () => {
    setNewService({
      model_code: '',
      model_name: '',
      description: '',
      discount: '',
      package_id: '',
      start_date: '',
      valid_date: '',
      number_required: '',
      status: '',
    });
    setEditingIndex(null);
  };

  return (
    <div>
      <h3>Service Config</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Model Code</th>
            <th>Model Name</th>
            <th>Description</th>
            <th>Discount</th>
            <th>Package ID</th>
            <th>Start Date</th>
            <th>Valid Date</th>
            <th>Number Required</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>{service.model_code}</td>
              <td>{service.model_name}</td>
              <td>{service.description}</td>
              <td>{service.discount}</td>
              <td>{service.package_id}</td>
              <td>{service.start_date}</td>
              <td>{service.valid_date}</td>
              <td>{service.number_required}</td>
              <td>{service.status}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>{editingIndex !== null ? 'Edit Service' : 'Add New Service'}</h4>
      <div>
        <input
          type="text"
          name="model_code"
          placeholder="Model Code"
          value={newService.model_code}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="model_name"
          placeholder="Model Name"
          value={newService.model_name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newService.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="discount"
          placeholder="Discount"
          value={newService.discount}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="package_id"
          placeholder="Package ID"
          value={newService.package_id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="start_date"
          placeholder="Start Date"
          value={newService.start_date}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="valid_date"
          placeholder="Valid Date"
          value={newService.valid_date}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="number_required"
          placeholder="Number Required"
          value={newService.number_required}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={newService.status}
          onChange={handleInputChange}
        />
        <button onClick={handleAddOrUpdate}>
          {editingIndex !== null ? 'Update Service' : 'Add Service'}
        </button>
        {editingIndex !== null && <button onClick={resetForm}>Cancel</button>}
      </div>
    </div>
  );
};

export default ServiceConfig;
