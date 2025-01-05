import React, { useState } from "react";
import { Container, Button, Table, Modal } from "react-bootstrap";

const ManagementComponent = () => {
  const [activeView, setActiveView] = useState(null); // Trạng thái hiển thị

  // Dữ liệu mẫu cho các loại quản lý
  const gamecodeConfig = [
    {
      package_code: "VIP_B",
      package_name: "Nap VIP B",
      description: "50K/500 kim cương game B",
      add_value: "500",
      ws_id: "1",
      valid_time: "100",
      price: "50000",
      status: "1",
    },
  ];

  const serviceConfig = [
    {
      model_code: "VIP_B_basic",
      model_name: "Nap VIP B basic",
      description: "Mua trên 20 gamecode VIP_B sẽ được chiết khấu 7%",
      discount: "7",
      package_id: "2",
      start_date: "2024-12-18T21:52:37.000+00:00",
      valid_date: "2025-12-13T21:52:37.000+00:00",
      number_required: "20",
      status: "1",
    },
  ];

  const companyConfig = [
    {
      company_id: "4",
      gamecode_model_id: "4",
      start_date: "2024-12-18T21:52:37.000+00:00",
      valid_date: "2025-12-13T21:52:37.000+00:00",
    },
  ];

  // Hàm render bảng dữ liệu
  const renderTable = (data) => (
    <Table striped bordered hover>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key, index) => (
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, idx) => (
              <td key={idx}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <Container className="mt-4">
      <h3 className="mb-4">Quản lý cấu hình</h3>

      {/* Các nút điều hướng */}
      <div className="mb-4">
        <Button variant="primary" className="me-2" onClick={() => setActiveView("gamecode")}>Quản lý cấu hình gamecode</Button>
        <Button variant="secondary" className="me-2" onClick={() => setActiveView("service")}>Quản lý dịch vụ</Button>
        <Button variant="success" onClick={() => setActiveView("company")}>Quản lý cấu hình dịch vụ</Button>
      </div>

      {/* Hiển thị nội dung theo nút đã chọn */}
      {activeView === "gamecode" && (
        <>
          <h5>Quản lý cấu hình gamecode</h5>
          {renderTable(gamecodeConfig)}
        </>
      )}

      {activeView === "service" && (
        <>
          <h5>Quản lý dịch vụ</h5>
          {renderTable(serviceConfig)}
        </>
      )}

      {activeView === "company" && (
        <>
          <h5>Quản lý cấu hình dịch vụ cho doanh nghiệp</h5>
          {renderTable(companyConfig)}
        </>
      )}
    </Container>
  );
};

export default ManagementComponent;
