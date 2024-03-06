import React,{useState} from "react";
import { Card, CardBody, Col, Container, Form, Input, Label, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb"
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const AddEmployees = () => {

    
    const [value, setvalue] = useState({ employeetype: '', skilltype: '', wagetype: '',employeename:'',gender:'',aadharno:'',panno:'', primaryphoneno: '', secondaryphoneno: '', emailid: '', wage: '' });

    const onChangeValue = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })
        console.log(value);

        // console.log(sessionStorage.getItem("qwqw"))
    }

    const handleSave = () => {
        axios.post('http://13.233.230.0:4500/api/employee/', value)
            .then(response => toast.success(response.message));
        setvalue({ employeetype: '', skilltype: '', wagetype: '',employeename:'',gender:'',aadharno:'',panno:'', primaryphoneno: '', secondaryphoneno: '', emailid: '', wage: '' })
    }

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
                                                        <select className="form-select" id="floatingSelect" name="employeetype" value={value.employeetype} onChange={onChangeValue}  aria-label="">
                                                            <option >Select Employee Type...</option>
                                                            <option defaultValue="1">Full Time</option>
                                                            <option defaultValue="2">Part Time</option>
                                                        </select>
                                                        <Label htmlFor="floatingSelect">Employee Type</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelect" name="skilltype" value={value.skilltype} onChange={onChangeValue}  aria-label="">
                                                            <option >Select Skill Type...</option>
                                                            <option defaultValue="1">Unskilled</option>
                                                            <option defaultValue="2">Skilled</option>
                                                        </select>
                                                        <Label htmlFor="floatingSelect">Skill Type</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelect" name="wagetype" value={value.wagetype} onChange={onChangeValue}  aria-label="">
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
                                                        <Input type="text" className="form-control" name="employeename" value={value.employeename} onChange={onChangeValue}  placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Employee Name</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelect" name="gender" value={value.gender} onChange={onChangeValue}  aria-label="">
                                                            <option >Select Gender...</option>
                                                            <option defaultValue="1">Male</option>
                                                            <option defaultValue="2">Female</option>
                                                        </select>
                                                        <Label htmlFor="namefloatingInput">Gender</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" name="aadharno" value={value.aadharno} onChange={onChangeValue}  placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Aadhar Card Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" name="pano" value={value.panno} onChange={onChangeValue}  placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Pan Card Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" name="primaryphoneno" value={value.primaryphoneno} onChange={onChangeValue}  placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Primary Phone Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="text" className="form-control" name="secondaryphoneno" value={value.secondaryphoneno} onChange={onChangeValue}  placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Reference/Family Phone Number</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="email" className="form-control" name="emailid" value={value.emailid} onChange={onChangeValue}  placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Email ID,If Any</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="number" className="form-control" name="wage" value={value.wage} onChange={onChangeValue}  placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Wage Amount</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div>
                                                        <Label htmlFor="formFile" className="form-label">Upload Photo</Label>
                                                        <Input className="form-control" type="file" id="formFile" />
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div>
                                                        <Label htmlFor="formFile" className="form-label">Upload CV</Label>
                                                        <Input className="form-control" type="file" id="formFile" />
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div>
                                                        <Label htmlFor="formFile" className="form-label">Aadharcard</Label>
                                                        <Input className="form-control" type="file" id="formFile" />
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div>
                                                        <Label htmlFor="formFile" className="form-label">Pan Card Photo</Label>
                                                        <Input className="form-control" type="file" id="formFile" />
                                                    </div>
                                                </Col>

                                                <Col lg={12}>
                                                    <div className="text-end">
                                                        <button type="submit" className="btn btn-primary" onClick={(e) => { e.preventDefault(); handleSave(); }}>Submit</button>
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

export default AddEmployees;
