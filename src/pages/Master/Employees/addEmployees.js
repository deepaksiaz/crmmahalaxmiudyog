import React from "react";
import { Card, CardBody, Col, Container, Form, Input, Label, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb"
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';

const AddEmployees = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Add Employee" pageTitle="Employees" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="Add following information for New Employee Registration" />
                                <CardBody>
                                    <div className="live-preview">
                                        <Form action="#">
                                            <Row className="g-3">
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelect" aria-label="">
                                                            <option >Select Employee Type...</option>
                                                            <option defaultValue="1">Full Time</option>
                                                            <option defaultValue="2">Part Time</option>
                                                        </select>
                                                        <Label htmlFor="floatingSelect">Employee Type</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelect" aria-label="">
                                                            <option >Select Skill Type...</option>
                                                            <option defaultValue="1">Unskilled</option>
                                                            <option defaultValue="2">Skilled</option>
                                                        </select>
                                                        <Label htmlFor="floatingSelect">Skill Type</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelect" aria-label="">
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
                                                        <Input type="text" className="form-control" placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Employee Name</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelect" aria-label="">
                                                            <option >Select Gender...</option>
                                                            <option defaultValue="1">Male</option>
                                                            <option defaultValue="2">Female</option>
                                                        </select>
                                                        <Label htmlFor="namefloatingInput">Gender</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Aadhar Card Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Pan Card Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Primary Phone Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Reference/Family Phone Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="email" className="form-control" placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Email ID,If Any</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="number" className="form-control" placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Wage Amount</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div>
                                                        <Label htmlFor="formFile" className="form-label">Upload Photo</Label>
                                                        <Input className="form-control" type="file" id="formFile" />
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

export default AddEmployees;
