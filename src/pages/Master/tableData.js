import React, { useEffect, useMemo, useState, useCallback } from 'react';
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';



const RawMaterialTable = () => {
  const searchTable =
    [
      { id: "06", name: "Cement", type: "Production", measurementunit: "Ton", density: "Density", added: "Feb 02, 2024" },
      { id: "05", name: "Cement", type: "Production", measurementunit: "Ton", density: "Density", added: "Feb 02, 2024" },
      { id: "04", name: "Cement", type: "Production", measurementunit: "Ton", density: "Density", added: "Feb 02, 2024" },
      { id: "03", name: "Cement", type: "Production", measurementunit: "Ton", density: "Density", added: "Feb 02, 2024" },
      { id: "02", name: "Cement", type: "Production", measurementunit: "Ton", density: "Density", added: "Feb 02, 2024" },
      { id: "01", name: "Cement", type: "Production", measurementunit: "Ton", density: "Density", added: "Feb 02, 2024" }
    ];

  const [rawMaterialData, setRawMaterialData] = useState(searchTable);
  const [showConfirm, setShowConfirm] = useState(false);

  const handledelete = (id) => {
    setRawMaterialData(rawMaterialData.filter((item) => item.id !== id));
    setShowConfirm(false);
  };


  const handleAlert = (id) => {
    alert(`ID: ${id}`);
  };

  const columns = useMemo(
    () => [
      {
        header: "ID",
        cell: (cell) => {
          return (
            <span className="fw-semibold">{cell.getValue()}</span>
          );
        },
        accessorKey: "id",
        enableColumnFilter: false,
      },

      {
        header: "Name",
        accessorKey: "name",
        enableColumnFilter: false,
      },
      {
        header: "Type",
        accessorKey: "type",
        enableColumnFilter: false,
      },
      {
        header: "Unit",
        accessorKey: "measurementunit",
        enableColumnFilter: false,
      },
      {
        header: "Density",
        accessorKey: "density",
        enableColumnFilter: false,
      },
      {
        header: "Added On",
        accessorKey: "added",
        enableColumnFilter: false,
      },
      {
        header: "Actions",
        enableColumnFilter: false,
        cell: ({ row }) => {
          const id = row.original.id;
          return (
            <React.Fragment>
              <div className="hstack d-block gap-3">
                <button onClick={() => handleAlert(id)} className="link-success fs-15 border-0 bg-white"><i className="ri-eye-line"></i></button>
                <button onClick={() => handleAlert(id)} className="link-primary fs-15 border-0 bg-white"><i className="ri-edit-2-line"></i></button>
                <button onClick={() => handledelete(id)} className="link-danger fs-15 border-0 bg-white"><i className="ri-delete-bin-line"></i></button>
              </div>
            </React.Fragment>
          );
        },
      },
    ],
    []
  );

  return (
    <React.Fragment >
      <TableContainer
        columns={(columns || [])}
        data={(rawMaterialData || [])}
        isGlobalFilter={true}
        divClass="table-responsive"
        tableClass="align-middle text-center table-nowrap mb-0 table"
        customPageSize={5}
        SearchPlaceholder='Search...'
      />
    </React.Fragment >
  );
};

const VendorsTable = () => {
  const searchTable =
    [
      { id: "06", vendor: "Ashok Patil", company: "Sairaj Supplier", primaryphoneno: "9889883241", emailid: "abc@email.com", added: "Feb 02, 2024" },
      { id: "05", vendor: "Ashok Patil", company: "Sairaj Supplier", primaryphoneno: "9889883241", emailid: "abc@email.com", added: "Feb 02, 2024" },
      { id: "04", vendor: "Ashok Patil", company: "Sairaj Supplier", primaryphoneno: "9889883241", emailid: "abc@email.com", added: "Feb 02, 2024" },
      { id: "03", vendor: "Ashok Patil", company: "Sairaj Supplier", primaryphoneno: "9889883241", emailid: "abc@email.com", added: "Feb 02, 2024" },
      { id: "02", vendor: "Ashok Patil", company: "Sairaj Supplier", primaryphoneno: "9889883241", emailid: "abc@email.com", added: "Feb 02, 2024" },
      { id: "01", vendor: "Ashok Patil", company: "Sairaj Supplier", primaryphoneno: "9889883241", emailid: "abc@email.com", added: "Feb 02, 2024" }
    ];

  const columns = useMemo(
    () => [
      {
        header: "ID",
        cell: (cell) => {
          return (
            <span className="fw-semibold">{cell.getValue()}</span>
          );
        },
        accessorKey: "id",
        enableColumnFilter: false,
      },

      {
        header: "Vendor",
        accessorKey: "vendor",
        enableColumnFilter: false,
      },
      {
        header: "Company",
        accessorKey: "company",
        enableColumnFilter: false,
      },
      {
        header: "Phone Number",
        accessorKey: "primaryphoneno",
        enableColumnFilter: false,
      },
      {
        header: "Email Id",
        accessorKey: "emailid",
        enableColumnFilter: false,
      },
      {
        header: "Added On",
        accessorKey: "added",
        enableColumnFilter: false,
      },
      {
        header: "Actions",
        enableColumnFilter: false,
        cell: ({ row }) => {
          const id = row.original.id;
          return (
            <React.Fragment>
              <div className="hstack d-block gap-3">
                <button onClick={() => handleAlert(id)} className="link-success fs-15 border-0 bg-white"><i className="ri-eye-line"></i></button>
                <button onClick={() => handleAlert(id)} className="link-primary fs-15 border-0 bg-white"><i className="ri-edit-2-line"></i></button>
                <button onClick={() => handleDelete(id)} className="link-danger fs-15 border-0 bg-white"><i className="ri-delete-bin-line"></i></button>
              </div>
            </React.Fragment>
          );
        },
      },
    ],
    []
  );

  return (
    <React.Fragment >
      <TableContainer
        columns={(columns || [])}
        data={(searchTable || [])}
        isGlobalFilter={true}
        customPageSize={5}
        divClass="table-responsive"
        tableClass="align-middle text-center table-nowrap mb-0 table"
        SearchPlaceholder='Search...'
      />
    </React.Fragment >
  );
};


const EmployeesTable = () => {
  const searchTable =
    [
      { id: "05", name: "Ashok Patil", employeetype: "	Full Time", primaryphoneno: "9889883241", skilltype: "Skilled", added: "Feb 02, 2024" },
      { id: "04", name: "Ashok Patil", employeetype: "	Full Time", primaryphoneno: "9889883241", skilltype: "Skilled", added: "Feb 02, 2024" },
      { id: "03", name: "Ashok Patil", employeetype: "	Full Time", primaryphoneno: "9889883241", skilltype: "Skilled", added: "Feb 02, 2024" },
      { id: "02", name: "Ashok Patil", employeetype: "	Full Time", primaryphoneno: "9889883241", skilltype: "Skilled", added: "Feb 02, 2024" },
      { id: "01", name: "Ashok Patil", employeetype: "	Full Time", primaryphoneno: "9889883241", skilltype: "Skilled", added: "Feb 02, 2024" }
    ];

  const columns = useMemo(
    () => [
      {
        header: "ID",
        cell: (cell) => {
          return (
            <span className="fw-semibold">{cell.getValue()}</span>
          );
        },
        accessorKey: "id",
        enableColumnFilter: false,
      },

      {
        header: "Name",
        accessorKey: "name",
        enableColumnFilter: false,
      },
      {
        header: "Employee Type",
        accessorKey: "employeetype",
        enableColumnFilter: false,
      },
      {
        header: "Skill Type",
        accessorKey: "skilltype",
        enableColumnFilter: false,
      },
      {
        header: "Phone Number",
        accessorKey: "primaryphoneno",
        enableColumnFilter: false,
      },
      {
        header: "Added On",
        accessorKey: "added",
        enableColumnFilter: false,
      },
      {
        header: "Actions",
        enableColumnFilter: false,
        cell: ({ row }) => {
          const id = row.original.id;
          return (
            <React.Fragment>
              <div className="hstack d-block gap-3">
                <button onClick={() => handleAlert(id)} className="link-success fs-15 border-0 bg-white"><i className="ri-eye-line"></i></button>
                <button onClick={() => handleAlert(id)} className="link-primary fs-15 border-0 bg-white"><i className="ri-edit-2-line"></i></button>
                <button onClick={() => handleDelete(id)} className="link-danger fs-15 border-0 bg-white"><i className="ri-delete-bin-line"></i></button>
              </div>
            </React.Fragment>
          );
        },
      },
    ],
    []
  );

  return (
    <React.Fragment >
      <TableContainer
        columns={(columns || [])}
        data={(searchTable || [])}
        isGlobalFilter={true}
        customPageSize={5}
        divClass="table-responsive"
        tableClass="align-middle text-center table-nowrap mb-0 table"
        SearchPlaceholder='Search...'
      />
    </React.Fragment >
  );
};


export { RawMaterialTable, VendorsTable, EmployeesTable };