import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, Form, Label, Input, ModalHeader, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import SimpleBar from 'simplebar-react';
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const ManageRow = () => {
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



    const searchTable = [];

    const [rawMaterialData, setRawMaterialData] = useState(searchTable);
    const [value, setvalue] = useState([{ rawmaterial: '', hsncode: '', gstrate: '', type: '', measurementunit: '', density: '', description: '' }]);
    const [isvissibleone, setVissibleone] = useState('');
    const [isvissibletwo, setVissibletwo] = useState('d-none');
    const [searchValue, setSearchValue] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const handleDisable = () => {
        setIsDisabled(true);
    };

    const handleEnable = () => {
        setIsDisabled(false);
    };

    const filterrawMaterialData = (searchValue) => {
        if (searchValue === "") {
            return searchTable;
        }
        return searchTable.filter((article) =>
            article.rawmaterial.toLowerCase().includes(searchValue.toLowerCase())
        );
    };

    useEffect(() => {
        axios.get('http://13.233.230.0:4500/api/rawMaterial')
        .then(response => setRawMaterialData(response));

        const filteredrawMaterialData = filterrawMaterialData(searchValue);
        setRawMaterialData(filteredrawMaterialData);
    }, [searchValue]);


    const handledelete = (id) => {
        console.log(id);
        setRawMaterialData(rawMaterialData.filter((item) => item.id !== id));
        setmodal_delete(false);
        axios.delete(`http://13.233.230.0:4500/api/rawMaterial/${id}`)
        .then(response => toast.error('Deleted Sucessfully'));
    };
    const updateHandler = (id) => {
        setVissibleone('d-none');
        setVissibletwo('');
        setvalue(rawMaterialData.find(item => item.id === id))
        console.log(rawMaterialData)


    };

    const updateRecord = (id) => {
        const updatedArr = rawMaterialData.map(row => {
            if (row.id === id) {
                return value;
            } else {
                return row;
            }
        });
        axios.put(`http://13.233.230.0:4500/api/rawMaterial/${id}`,value)
        .then(response => toast.success(response.message));
        setRawMaterialData(updatedArr);
        console.log({ ...rawMaterialData, updatedArr });
   
    };

    const onChangeValue = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })
        console.log(value)
    }



    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Manage Raw Material" pageTitle="Raw Material" />
                    <Row className={isvissibleone}>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Edit/Delete Raw Material Type</h4>
                                </CardHeader>

                                <CardBody>
                                    <div className="listjs-table" id="customerList">
                                        <Row className="g-4 mb-3">
                                            <Col className="col-sm">
                                                <div className="d-flex justify-content-sm-end">
                                                    <div className="search-box ms-2">
                                                        <input type="text" className="form-control search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search..." />
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
                                                        <th className="sort" data-sort="type">Type</th>
                                                        <th className="sort" data-sort="measurementunit">Unit</th>
                                                        <th className="sort" data-sort="density">Density</th>
                                                        <th className="sort" data-sort="added">Added On</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="list form-check-all">
                                                    {rawMaterialData.map((item, index) =>
                                                        <tr key={index}>
                                                            <td className="id">{item.id}</td>
                                                            <td className="name">{item.rawmaterial}</td>
                                                            <td className="type">{item.type}</td>
                                                            <td className="measurementunit">{item.measurementunit}</td>
                                                            <td className="density">{item.density}</td>
                                                            <td className="added">2024-02-06</td>
                                                            <td>
                                                                <div className="d-flex justify-content-center gap-2">
                                                                    <div className="view">
                                                                        <Button className="btn btn-success"
                                                                            data-bs-toggle="modal" data-bs-target="#showModal" onClick={() => { handleDisable(); updateHandler(item.id); }}><i className="ri-eye-line"></i></Button>
                                                                    </div>
                                                                    <div className="edit">
                                                                        <Button className="btn btn-success"
                                                                            data-bs-toggle="modal" data-bs-target="#showModal" onClick={() => {handleEnable(); updateHandler(item.id)}}><i className="ri-pencil-line"></i></Button>
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
                                <PreviewCardHeader title="Update Raw Material" />
                                <CardBody>
                                    <div className="live-preview">
                                        <Button className="btn btn-primary mb-3" onClick={() => { setVissibleone(''); setVissibletwo('d-none'); }}><i className="ri-arrow-left-line"></i></Button>
                                        <Form action="#">
                                            <Row className="g-3">
                                                <Col lg={6}>
                                                    <div className="form-floating">
                                                        <select className="form-select" name='type' id="floatingSelect" value={value.type} onChange={onChangeValue} disabled={isDisabled} aria-label="Raw Material Type">
                                                            <option>Choose...</option>
                                                            <option>Production</option>
                                                            <option>Non Production</option>
                                                        </select>
                                                        <Label htmlFor="floatingSelect">Raw Material Type</Label>
                                                    </div>
                                                </Col>
                                                {/* <Col lg={6}>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelect" aria-label="Type">
                                                            <option >Choose...</option>
                                                            <option defaultValue="1">Solid</option>
                                                            <option defaultValue="2">Liquid</option>
                                                            <option defaultValue="3">Energy</option>
                                                        </select>
                                                        <Label htmlFor="floatingSelect">Type</Label>
                                                    </div>
                                                </Col> */}
                                                <Col lg={6}>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelect" value={value.measurementunit} name='measurementunit' onChange={onChangeValue} disabled={isDisabled} aria-label="Measurement Unit">
                                                            <option >Choose...</option>
                                                            <option>G</option>
                                                            <option>KG</option>
                                                            <option>Ton</option>
                                                        </select>
                                                        <Label htmlFor="floatingSelect">Measurement Unit</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" name='rawmaterial' value={value.rawmaterial} onChange={onChangeValue} disabled={isDisabled} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Raw Material Name</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" name='hsncode' value={value.hsncode} onChange={onChangeValue} disabled={isDisabled} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">HSN Code</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" name='gstrate' value={value.gstrate} onChange={onChangeValue} disabled={isDisabled} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">GST Rate</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" value={value.density} onChange={onChangeValue} name='density' disabled={isDisabled} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Density</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" value={value.description} onChange={onChangeValue} name='description' disabled={isDisabled} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Description, If any</Label>
                                                    </div>
                                                </Col>

                                                <Col lg={12}>
                                                    <div className="text-end">
                                                        <button type="submit" className="btn btn-success" onClick={(e) => { e.preventDefault(); updateRecord(value.id) }}>Submit</button>
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

export default ManageRow;
