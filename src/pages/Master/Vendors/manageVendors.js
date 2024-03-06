import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, Form, Label, Input, ModalHeader, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import SimpleBar from 'simplebar-react';
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const ManageVendors = () => {
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
    [ ];
  const [vendors, setVendors] = useState([]);
  const [value, setvalue] = useState([{ vendortype: '', vendor: '', company: '', primaryphoneno: '', secondaryphoneno: '', emailid: '', gstno: '', panno: '', msmeno: '', rawmaterialsupply: '', transportno: '', volume: '', activationdate: '' }]);
  const [isvissibleone, setVissibleone] = useState('');
  const [isvissibletwo, setVissibletwo] = useState('d-none');
  const [isDisabled, setIsDisabled] = useState(false);
  const [searchValue, setSearchValue] = useState("");


  const filterVendors = (searchValue) => {
    if (searchValue === "") {
      return searchTable;
    }
    return searchTable.filter((article) =>
      article.vendor.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  useEffect(() => {
    axios.get('http://13.233.230.0:4500/api/vendor/')
      .then(response => setVendors(response));

    // const filteredVendors = filterVendors(searchValue);
    // setVendors(filteredVendors);
  }, [searchValue]);

  const handleDisable = () => {
    setIsDisabled(true);
  };

  const handleEnable = () => {
    setIsDisabled(false);
  };

  const handledelete = (id) => {
    console.log(id);
    setVendors(vendors.filter((item) => item.id !== id));
    setmodal_delete(false);
    axios.delete(`http://13.233.230.0:4500/api/vendor/${id}`)
    .then(response => toast.error('Deleted Sucessfully'));
  };
  const updateHandler = (id) => {
    setVissibleone('d-none');
    setVissibletwo('');
    setvalue(vendors.find(item => item.id === id))
    console.log(vendors)

  };

  const updateRecord = (id) => {


    const updatedArr = vendors.map(row => {
      if (row.id === id) {
        return value;
      } else {
        return row;
      }
    });
    axios.put(`http://13.233.230.0:4500/api/vendor/${id}`, value)
      .then(response => toast.success(response.message));
    setVendors(updatedArr);
    console.log({ ...vendors, updatedArr });
  };

  const onChangeValue = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value })
    console.log(value)
  }



  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Manage Vendors" pageTitle="Vendors" />
          <Row className={isvissibleone}>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <h4 className="card-title mb-0">Edit/Delete Vendor</h4>
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
                            <th className="sort" data-sort="name">Vendor</th>
                            <th className="sort" data-sort="type">Company</th>
                            <th className="sort" data-sort="measurementunit">Phone Number</th>
                            <th className="sort" data-sort="density">Email Id</th>
                            <th className="sort" data-sort="added">Added On</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody className="list form-check-all">
                          {vendors.map((item, index) =>
                            <tr key={index}>
                              <td className="id">{item.id}</td>
                              <td className="name">{item.vendor}</td>
                              <td className="type">{item.company}</td>
                              <td className="measurementunit">{item.primaryphoneno}</td>
                              <td className="density">{item.emailid}</td>
                              <td className="added">{item.activationdate}</td>
                              <td>
                                <div className="d-flex justify-content-center gap-2">
                                  <div className="view">
                                    <Button className="btn btn-success"
                                      data-bs-toggle="modal" data-bs-target="#showModal" onClick={() => { handleDisable(); updateHandler(item.id); }}><i className="ri-eye-line"></i></Button>
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
                    <Button className="btn btn-primary mb-3" onClick={() => { setVissibleone(''); setVissibletwo('d-none'); handleEnable(); }}><i className="ri-arrow-left-line"></i></Button>

                    <Form action="#">
                      <Row className="g-3">
                        <Col lg={4}>
                          <div className="form-floating">
                            <select className="form-select" id="floatingSelect" name="vendortype" value={value.vendortype} onChange={onChangeValue} disabled={isDisabled} aria-label="Vendor Type">
                              <option >Select Vendor Type...</option>
                              <option defaultValue="1">Production</option>
                              <option defaultValue="2">Non Production</option>
                            </select>
                            <Label htmlFor="floatingSelect">Vendor Type</Label>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="form-floating">
                            <Input type="text" className="form-control" name='company' value={value.company} onChange={onChangeValue} disabled={isDisabled} placeholder="" />
                            <Label htmlFor="namefloatingInput">Company Name</Label>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="form-floating">
                            <Input type="text" className="form-control" name='vendor' value={value.vendor} onChange={onChangeValue} disabled={isDisabled} placeholder="" />
                            <Label htmlFor="namefloatingInput">Vendor Name</Label>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="form-floating">
                            <Input type="number" className="form-control" name="primaryphoneno" value={value.primaryphoneno} onChange={onChangeValue} disabled={isDisabled} placeholder="" />
                            <Label htmlFor="namefloatingInput">Primary Phone Number</Label>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="form-floating">
                            <Input type="text" className="form-control" name="secondaryphoneno" value={value.secondaryphoneno} onChange={onChangeValue} disabled={isDisabled} placeholder="" />
                            <Label htmlFor="namefloatingInput">Secondary Phone Number</Label>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="form-floating">
                            <Input type="text" className="form-control" name="emailid" value={value.emailid} onChange={onChangeValue} disabled={isDisabled} placeholder="" />
                            <Label htmlFor="namefloatingInput">Official Email ID</Label>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="form-floating">
                            <Input type="text" className="form-control" name="gstno" value={value.gstno} onChange={onChangeValue} disabled={isDisabled} placeholder="" />
                            <Label htmlFor="namefloatingInput">GST Number</Label>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="form-floating">
                            <Input type="text" className="form-control" name="panno" value={value.panno} onChange={onChangeValue} disabled={isDisabled} placeholder="" />
                            <Label htmlFor="namefloatingInput">PAN Card Number</Label>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="form-floating">
                            <Input type="text" className="form-control" name="msme" value={value.msme} onChange={onChangeValue} disabled={isDisabled} placeholder="" />
                            <Label htmlFor="namefloatingInput">MSME Number</Label>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="form-floating">
                            <select className="form-select" id="floatingSelect" name="rawmaterialsupply" value={value.rawmaterialsupply} onChange={onChangeValue} disabled={isDisabled} aria-label="Raw Material Supply">
                              <option >Select Raw Material...</option>
                              <option>Cement</option>
                              <option>Fly Ash</option>
                              <option>Crush Sand</option>
                              <option>Water</option>
                              <option>Diesel</option>
                              <option>Metal</option>

                            </select>
                            <Label htmlFor="floatingSelect">Raw Material Supply</Label>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="form-floating">
                            <Input type="text" className="form-control" name="transportno" value={value.transportno} onChange={onChangeValue} disabled={isDisabled} placeholder="" />
                            <Label htmlFor="namefloatingInput">Transport Number</Label>
                          </div>
                        </Col>
                        {/* <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control"  placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Measurement Unit</Label>
                                                    </div>
                                                </Col> */}
                        <Col lg={4}>
                          <div className="form-floating">
                            <Input type="text" className="form-control" name="volume" value={value.volume} onChange={onChangeValue} disabled={isDisabled} placeholder="" />
                            <Label htmlFor="namefloatingInput">Volume</Label>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="form-floating">
                            <Input type="date" className="form-control" name="activationdate" value={value.activationdate} onChange={onChangeValue} disabled={isDisabled} placeholder="" />
                            <Label htmlFor="namefloatingInput">Activation Date</Label>
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

export default ManageVendors;
