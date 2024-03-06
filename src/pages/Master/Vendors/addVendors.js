import React, { useState } from "react";
import { Card, CardBody, Col, Container, Form, Input, Label, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb"
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const AddVendors = () => {

    const [value, setvalue] = useState({ vendortype: '', vendor: '', company: '', primaryphoneno: '', secondaryphoneno: '', emailid: '', gstno: '', panno: '', msmeno: '', rawmaterialsupply: '', transportno: '', volume: '',activationdate:'' });

    const onChangeValue = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })
        console.log(value);

        // console.log(sessionStorage.getItem("qwqw"))
    }

    const handleSave = () => {
        axios.post('http://13.233.230.0:4500/api/vendor/', value)
            .then(response => toast.success(response.message));
        setvalue({ vendortype: '', vendor: '', company: '', primaryphoneno: '', secondaryphoneno: '', emailid: '', gstno: '', panno: '', msmeno: '', rawmaterialsupply: '', transportno: '', volume: '',activationdate:'' })
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Add Vendor" pageTitle="Vendors" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="Add following information for New Vendor Registration" />
                                <CardBody>
                                    <div className="live-preview">
                                        <Form action="#">
                                            <Row className="g-3">
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelect" name="vendortype" value={value.vendortype} onChange={onChangeValue} aria-label="Vendor Type">
                                                            <option >Select Vendor Type...</option>
                                                            <option defaultValue="1">Production</option>
                                                            <option defaultValue="2">Non Production</option>
                                                        </select>
                                                        <Label htmlFor="floatingSelect">Vendor Type</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" name='company' value={value.company} onChange={onChangeValue} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Company Name</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" name='vendor' value={value.vendor} onChange={onChangeValue} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Vendor Name</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="number" className="form-control" name="primaryphoneno" value={value.primaryphoneno} onChange={onChangeValue} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Primary Phone Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" name="secondayphoneno" value={value.secondayphoneno} onChange={onChangeValue} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Secondary Phone Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" name="emailid" value={value.emailid} onChange={onChangeValue} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Official Email ID</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" name="gstno" value={value.gstno} onChange={onChangeValue} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">GST Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" name="panno" value={value.panno} onChange={onChangeValue} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">PAN Card Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" name="msmeno" value={value.msmeno} onChange={onChangeValue} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">MSMEno Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelect" name="rawmaterialsupply" value={value.rawmaterialsupply} onChange={onChangeValue} aria-label="Raw Material Supply">
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
                                                        <Input type="text" className="form-control" name="transportno" value={value.transportno} onChange={onChangeValue} placeholder="" />
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
                                                        <Input type="text" className="form-control" name="volume" value={value.volume} onChange={onChangeValue} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Volume</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="date" className="form-control" name="activationdate" value={value.activationdate} onChange={onChangeValue} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Activation Date</Label>
                                                    </div>
                                                </Col>

                                                <Col lg={12}>
                                                    <div className="text-end">
                                                        <button type="submit" className="btn btn-success" onClick={(e) => { e.preventDefault(); handleSave(); }}>Submit</button>
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
            <ToastContainer autoClose={1500} limit={1} />
        </React.Fragment>
    );
};

export default AddVendors;
