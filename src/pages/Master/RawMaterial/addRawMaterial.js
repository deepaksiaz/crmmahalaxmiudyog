import React from "react";
import { Card, CardBody, Col, Container, Form, Input, Label, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb"
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';

const AddRawMaterial = () => {
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
                                                        <select className="form-select" id="floatingSelect" aria-label="Raw Material Type">
                                                            <option >Choose...</option>
                                                            <option defaultValue="1">Production</option>
                                                            <option defaultValue="2">Non Production</option>
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
                                                        <select className="form-select" id="floatingSelect" aria-label="Measurement Unit">
                                                            <option >Choose...</option>
                                                            <option defaultValue="1">G</option>
                                                            <option defaultValue="2">KG</option>
                                                            <option defaultValue="3">Energy</option>
                                                        </select>
                                                        <Label htmlFor="floatingSelect">Measurement Unit</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control"  placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Raw Material Name</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Density</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Description, If any</Label>
                                                    </div>
                                                </Col>
                                                
                                                <Col lg={12}>
                                                    <div className="text-end">
                                                        <button type="submit" className="btn btn-success">Submit</button>
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
        </React.Fragment>
    );
};

export default AddRawMaterial;
