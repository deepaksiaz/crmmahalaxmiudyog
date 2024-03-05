import React from "react";
import { Card, CardBody, Col, Container, Form, Input, Label, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb"
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';

const AddVendors = () => {

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
                                                        <select className="form-select" id="floatingSelect" aria-label="Vendor Type">
                                                            <option >Select Vendor Type...</option>
                                                            <option defaultValue="1">Production</option>
                                                            <option defaultValue="2">Non Production</option>
                                                        </select>
                                                        <Label htmlFor="floatingSelect">Vendor Type</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control"  placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Company Name</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control"  placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Vendor Name</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="number" className="form-control"  placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Primary Phone Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control"  placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Secondary Phone Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control"  placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Official Email ID</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control"  placeholder="" />
                                                        <Label htmlFor="namefloatingInput">GST Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control"  placeholder="" />
                                                        <Label htmlFor="namefloatingInput">PAN Card Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control"  placeholder="" />
                                                        <Label htmlFor="namefloatingInput">MSME Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelect" aria-label="Raw Material Supply">
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
                                                        <Input type="text" className="form-control"  placeholder="" />
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
                                                        <Input type="text" className="form-control"  placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Volume</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="date" className="form-control"  placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Activation Date</Label>
                                                    </div>
                                                </Col>
                                                
                                                <Col lg={12}>
                                                    <div className="text-end">
                                                        <button type="submit" className="btn btn-primary">Submit</button>
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

export default AddVendors;
