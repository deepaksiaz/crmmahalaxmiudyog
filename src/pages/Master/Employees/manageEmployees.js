import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, Form, Label, Input, ModalHeader, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ManageEmployees = () => {
    const [modal_list, setmodal_list] = useState(false);
    const [modal_id, setmodal_id] = useState(null);
    function tog_list() {
        setmodal_list(!modal_list);
    }

    const [modal_delete, setmodal_delete] = useState(false);
    function tog_delete(id) {
        setmodal_id(id)
        setmodal_delete(!modal_delete);
    }



    const searchTable =
    [
      { id: "05", employeetype:'Full Time',skilltype:'Unskilled', wagetype:'Monthly Wage', name: "Ashok Patil",gender:'Male',aadharno:'9872628876287',panno:'JANA021K', primaryphoneno: "9889883241", secondayphoneno: "9889883241",emailid:'email@gmail.com',wage:'10000', added: "Feb 02, 2024" },
      { id: "04", employeetype:'Full Time',skilltype:'Unskilled', wagetype:'Monthly Wage', name: "Ashok Patil",gender:'Male',aadharno:'9872628876287',panno:'JANA021K', primaryphoneno: "9889883241", secondayphoneno: "9889883241",emailid:'email@gmail.com',wage:'10000', added: "Feb 02, 2024" },
      { id: "03", employeetype:'Full Time',skilltype:'Unskilled', wagetype:'Monthly Wage', name: "Ashok Patil",gender:'Male',aadharno:'9872628876287',panno:'JANA021K', primaryphoneno: "9889883241", secondayphoneno: "9889883241",emailid:'email@gmail.com',wage:'10000', added: "Feb 02, 2024" },
      { id: "02", employeetype:'Full Time',skilltype:'Unskilled', wagetype:'Monthly Wage', name: "Ashok Patil",gender:'Male',aadharno:'9872628876287',panno:'JANA021K', primaryphoneno: "9889883241", secondayphoneno: "9889883241",emailid:'email@gmail.com',wage:'10000', added: "Feb 02, 2024" },
      { id: "01", employeetype:'Full Time',skilltype:'Unskilled', wagetype:'Monthly Wage', name: "Ashok Patil",gender:'Male',aadharno:'9872628876287',panno:'JANA021K', primaryphoneno: "9889883241", secondayphoneno: "9889883241",emailid:'email@gmail.com',wage:'10000', added: "Feb 02, 2024" }
    ];
    const [employee, setEmployee] = useState(searchTable);
    const [value, setvalue] = useState([{name:'', vendor: '', company: '', primaryphoneno: '', secondayphoneno:'', emailid: '',gstno:'',panno:'', msme:'',rawmaterialsupply:'', transportno:'', volume:'', activationdate:''}]);
    const [isvissibleone, setVissibleone] = useState('');
    const [isvissibletwo, setVissibletwo] = useState('d-none');
    const [isDisabled, setIsDisabled] = useState(false);



    const [searchValue, setSearchValue] = useState("");
  
    const filteremployee = (searchValue) => {
      if (searchValue === "") {
        return searchTable;
      }
      return searchTable.filter((article) =>
        article.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    };
  
    useEffect(() => {
      const filteredemployee = filteremployee(searchValue);
      setEmployee(filteredemployee);
    }, [searchValue]);



    const handleDisable = () => {
      setIsDisabled(true);
    };
  
    const handleEnable = () => {
      setIsDisabled(false);
    };

    const handledelete = (id) => {
        console.log(id);
        setEmployee(employee.filter((item) => item.id !== id));
        setmodal_delete(false);
        toast.error('Deleted Sucessfully');
    };
    const updateHandler = (id) => {
        setVissibleone('d-none');
        setVissibletwo('');
        setvalue(employee.find(item => item.id === id))
        console.log(employee)

    };

   const updateRecord = (id) => {
   

    const updatedArr = employee.map(row => {
        if (row.id === id) {
          return value;
        } else {
          return row;
        }
      });
      setEmployee(updatedArr);
      toast.success('Updated Sucessfully');
      console.log({...employee,updatedArr});
    };

    const onChangeValue = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })
        console.log(value)
    }



    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Manage Employees" pageTitle="Employees" />
                    <Row className={isvissibleone}>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Edit/Delete Employee</h4>
                                </CardHeader>

                                <CardBody>
                                    <div className="listjs-table" id="customerList">
                                        <Row className="g-4 mb-3">
                                            <Col className="col-sm">
                                                <div className="d-flex justify-content-sm-end">
                                                    <div className="search-box ms-2">
                                                        <input type="text" className="form-control search" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder="Search..."/>
                                                        <i className="ri-search-line search-icon"></i>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>

                                        <div className="table-responsive table-card mt-3 mb-1">
                                            <table className="table align-middle text-center table-nowrap" id="customerTable">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th className="sort" data-sort="id">ID</th>
                                                        <th className="sort" data-sort="name">Name</th>
                                                        <th className="sort" data-sort="type">Employee Type</th>
                                                        <th className="sort" data-sort="measurementunit">Skill Type</th>
                                                        <th className="sort" data-sort="density">Phone Number</th>
                                                        <th className="sort" data-sort="added">Added On</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="list form-check-all">
                                                    {employee.map((item, index) =>
                                                        <tr key={index}>
                                                            <td className="id">{item.id}</td>
                                                            <td className="name">{item.name}</td>
                                                            <td className="type">{item.employeetype}</td>
                                                            <td className="measurementunit">{item.skilltype}</td>
                                                            <td className="density">{item.primaryphoneno}</td>
                                                            <td className="added">{item.added}</td>
                                                            <td>
                                                                <div className="d-flex justify-content-center gap-2">
                                                                    <div className="view">
                                                                        <Button className="btn btn-success"
                                                                            data-bs-toggle="modal" data-bs-target="#showModal" onClick={() => {handleDisable(); updateHandler(item.id);}}><i className="ri-eye-line"></i></Button>
                                                                    </div>
                                                                    <div className="edit">
                                                                        <Button className="btn btn-success"
                                                                            data-bs-toggle="modal" data-bs-target="#showModal" onClick={() => updateHandler(item.id)}><i className="ri-pencil-line"></i></Button>
                                                                    </div>
                                                                    <div className="remove">
                                                                        <Button className="btn btn-soft-danger" onClick={() => tog_delete(item.id)}><i className="ri-delete-bin-2-line"></i></Button>

                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                    }
                                                </tbody>
                                            </table>
                                            <div className="noresult" style={{ display: "none" }}>
                                                <div className="text-center">
                                                    <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop"
                                                        colors="primary:#121331,secondary:#08a88a" style={{ width: "75px", height: "75px" }}>
                                                    </lord-icon>
                                                    <h5 className="mt-2">Sorry! No Result Found</h5>
                                                    <p className="text-muted mb-0">We've searched more than 150+ Orders We did not find any
                                                        orders for you search.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-end">
                                            <div className="pagination-wrap hstack gap-2">
                                                <Link className="page-item pagination-prev disabled" to="#">
                                                    Previous
                                                </Link>
                                                <ul className="pagination listjs-pagination mb-0"></ul>
                                                <Link className="page-item pagination-next" to="#">
                                                    Next
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row className={isvissibletwo}>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="Add following information for New Vendor Registration" />
                                <CardBody>
                                    <div className="live-preview">
                                    <Button className="btn btn-primary mb-3" onClick={() => { setVissibleone(''); setVissibletwo('d-none'); handleEnable();}}><i className="ri-arrow-left-line"></i></Button>
                                        
                                        <Form action="#">
                                            <Row className="g-3">
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelect" name="employeetype" value={value.employeetype} onChange={onChangeValue} disabled={isDisabled} aria-label="">
                                                            <option >Select Employee Type...</option>
                                                            <option defaultValue="1">Full Time</option>
                                                            <option defaultValue="2">Part Time</option>
                                                        </select>
                                                        <Label htmlFor="floatingSelect">Employee Type</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelect" name="skilltype" value={value.skilltype} onChange={onChangeValue} disabled={isDisabled} aria-label="">
                                                            <option >Select Skill Type...</option>
                                                            <option defaultValue="1">Unskilled</option>
                                                            <option defaultValue="2">Skilled</option>
                                                        </select>
                                                        <Label htmlFor="floatingSelect">Skill Type</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelect" name="wagetype" value={value.wagetype} onChange={onChangeValue} disabled={isDisabled} aria-label="">
                                                            <option >Select Wage Type...</option>
                                                            <option defaultValue="1">Daily Wage</option>
                                                            <option defaultValue="2">Weekly Wage</option>
                                                            <option defaultValue="2">Monthly Wage</option>
                                                        </select>
                                                        <Label htmlFor="floatingSelect">Wage Type</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" name="name" value={value.name} onChange={onChangeValue} disabled={isDisabled} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Employee Name</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelect" name="gender" value={value.gender} onChange={onChangeValue} disabled={isDisabled} aria-label="">
                                                            <option >Select Gender...</option>
                                                            <option defaultValue="1">Male</option>
                                                            <option defaultValue="2">Female</option>
                                                        </select>
                                                        <Label htmlFor="namefloatingInput">Gender</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" name="aadharno" value={value.aadharno} onChange={onChangeValue} disabled={isDisabled} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Aadhar Card Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" name="panno" value={value.panno} onChange={onChangeValue} disabled={isDisabled} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Pan Card Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" name="primaryphoneno" value={value.primaryphoneno} onChange={onChangeValue} disabled={isDisabled} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Primary Phone Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" name="secondaryphoneno" value={value.secondayphoneno} onChange={onChangeValue} disabled={isDisabled} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Reference/Family Phone Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="email" className="form-control" placeholder="" name="emailid" value={value.emailid} onChange={onChangeValue} disabled={isDisabled}/>
                                                        <Label htmlFor="namefloatingInput">Email ID,If Any</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="number" className="form-control" name="wage" value={value.wage} onChange={onChangeValue} disabled={isDisabled} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Wage Amount</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div>
                                                        <Label htmlFor="formFile" className="form-label" >Upload Photo</Label>
                                                        <Input className="form-control" type="file" id="formFile" />
                                                    </div>
                                                </Col>

                                                <Col lg={12}>
                                                    <div className="text-end">
                                                        <button type="submit" className="btn btn-success" onClick={(e)=>{e.preventDefault(); updateRecord(value.id)}}>Submit</button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Remove Modal */}
            <Modal isOpen={modal_delete} toggle={() => { tog_delete(); }} centered >
                <div className="modal-header">
                    <Button type="button" onClick={() => setmodal_delete(false)} className="btn-close" aria-label="Close"> </Button>
                </div>
                <ModalBody>
                    <div className="mt-2 text-center">
                        <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop"
                            colors="primary:#f7b84b,secondary:#f06548" style={{ width: "100px", height: "100px" }}></lord-icon>
                        <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                            <h4>Are you Sure ?</h4>
                            <p className="text-muted mx-4 mb-0">Are you Sure You want to Remove this Record ?{modal_id}</p>
                        </div>
                    </div>
                    <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                        <button type="button" className="btn w-sm btn-light" onClick={() => setmodal_delete(false)}>Close</button>
                        <button type="button" className="btn w-sm btn-danger " id="delete-record" onClick={() => {
                            setmodal_delete(false);
                            handledelete(modal_id)
                        }}>Yes, Delete It!</button>
                    </div>
                </ModalBody>
                
            </Modal>
            <ToastContainer autoClose={1500} limit={1} />
        </React.Fragment>
    );
};

export default ManageEmployees;
