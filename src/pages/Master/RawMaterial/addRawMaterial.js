import React, { useState } from "react";
import { Card, CardBody, Col, Container, Form, Input, Label, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb"
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const AddRawMaterial = () => {

    const [value, setvalue] = useState({ type: '',measurementunit: '',rawmaterial: '', hsncode: '', gstrate: '',   density: '', description: '' });

    const onChangeValue = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })
        console.log(value);
       
        // console.log(sessionStorage.getItem("qwqw"))
    }

    const handleSave = () => {
        axios.post('http://13.233.230.0:4500/api/rawMaterial', value)
        .then(response => toast.success(response.message));
        setvalue({ type: '',measurementunit: '',rawmaterial: '', hsncode: '', gstrate: '',   density: '', description: '' })
    }
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Add Raw Material" pageTitle="Raw Material" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="Add Following Information for Raw Material" />
                                <CardBody>
                                    <div className="live-preview">
                                        <Form action="#">
                                            <Row className="g-3">
                                                <Col lg={6}>
                                                    <div className="form-floating">
                                                        <select className="form-select" name='type' id="floatingSelect" value={value.type} onChange={onChangeValue} aria-label="Raw Material Type">
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
                                                        <select className="form-select" id="floatingSelect" value={value.measurementunit} name='measurementunit' onChange={onChangeValue} aria-label="Measurement Unit">
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
                                                        <Input type="text" className="form-control" name='rawmaterial' value={value.rawmaterial} onChange={onChangeValue} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Raw Material Name</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" name='hsncode' value={value.hsncode} onChange={onChangeValue} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">HSN Code</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" name='gstrate' value={value.gstrate} onChange={onChangeValue} placeholder="" />
                                                        <Label htmlFor="namefloatingInput">GST Rate</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" value={value.density} onChange={onChangeValue} name='density' placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Density</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" value={value.description} onChange={onChangeValue} name='description' placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Description, If any</Label>
                                                    </div>
                                                </Col>

                                                <Col lg={12}>
                                                    <div className="text-end">
                                                        <button type="submit" className="btn btn-success" onClick={(e) => { e.preventDefault(); handleSave() }}>Submit</button>
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

export default AddRawMaterial;
