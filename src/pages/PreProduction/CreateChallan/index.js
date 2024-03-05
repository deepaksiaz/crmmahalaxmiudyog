import React, { useEffect, useState } from "react";

import {
    CardBody,
    Row,
    Col,
    Card,
    Container,
    Form,
    Input,
    Label,
    Table,
    FormFeedback,
} from "reactstrap";

import { Link, useNavigate } from "react-router-dom";
import Flatpickr from "react-flatpickr";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Select from "react-select";

import logoDark from "../../../assets/images/logo-dark.png";
import logoLight from "../../../assets/images/logo-light.png";

//formik
import { useFormik } from "formik";
import * as Yup from "yup";

//redux
import { useDispatch } from "react-redux";
import { addNewInvoice as onAddNewInvoice } from "../../../slices/thunks";

const CreateChallan = () => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const [ispaymentDetails, setispaymentDetails] = useState(null);
    const [isCurrency, setisCurrency] = useState("$");

    function handleispaymentDetails(ispaymentDetails) {
        setispaymentDetails(ispaymentDetails);
    }

    function handleisCurrency(isCurrency) {
        setisCurrency(isCurrency);
    }

    const paymentdetails = [
        {
            options: [
                { label: "Payment Method", value: "Payment Method" },
                { label: "Mastercard", value: "Mastercard" },
                { label: "Credit Card", value: "Credit Card" },
                { label: "Visa", value: "Visa" },
                { label: "Paypal", value: "Paypal" },
            ],
        },
    ];

    const allstatus = [
        {
            options: [
                { label: "Select Payment Status", value: "Select Payment Status" },
                { label: "Paid", value: "Paid" },
                { label: "Unpaid", value: "Unpaid" },
                { label: "Refund", value: "Refund" },
            ],
        },
    ];

    const allcurrency = [
        {
            options: [
                { label: "G", value: "(G)" },
                { label: "KG", value: "(KG)" },
                { label: "TON", value: "(TON)" },
            ],
        },
    ];

    const [count, setCount] = useState(0);
    const [rate, setRate] = useState(0);
    const [tax, setTax] = useState(0);
    const [dis, setDis] = useState(0);
    const [charge, setCharge] = useState(0);

    useEffect(() => {
        let tax = (0.125 * rate * count);
        let dis = (0.15 * rate * count);

        if ((rate && count) && isNaN !== 0) {
            setCharge(65);
        } else {
            setCharge(0);

        }
        setTax(tax);
        setDis(dis);
    }, [rate, count]);

    const dateFormat = () => {
        let d = new Date(),
            months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return ((d.getDate() + ' ' + months[d.getMonth()] + ', ' + d.getFullYear()).toString());
    };

    const [date, setDate] = useState(dateFormat());

    const dateformate = (e) => {
        const date = e.toString().split(" ");
        const joinDate = (date[2] + " " + date[1] + ", " + date[3]).toString();
        setDate(joinDate);
    };



    document.title = "Create Invoice ";

    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {
            postalcode: "",
            registration: "",
            email: "",
            website: "",
            contact: "",
            invoiceId: "",
            date: "",
            name: "",
            status: "",
            country: "",
            amount: "",
            billing_address: "",
            billing_phone: "",
            billing_taxno: "",
            shipping_name: "",
            shipping_address: "",
            shipping_phone: "",
            shipping_taxno: "",
            product_name: "",
        },
        validationSchema: Yup.object({
            postalcode: Yup.string().required("This field is required"),
            registration: Yup.string().required("Please Enter a registration no"),
            email: Yup.string().required("Please Enter a Email"),
            website: Yup.string().required("Please Enter a website"),
            contact: Yup.string().required("Please Enter a contact number"),
            invoiceId: Yup.string().required("This field is required"),
            name: Yup.string().required("Please Enter a Full name"),
            // country: Yup.string().required("Please Enter a Country"),
            billing_address: Yup.string().required("Please Enter a Address"),
            billing_phone: Yup.string().required("Please Enter a Phone Number"),
            billing_taxno: Yup.string().required("Please Enter a tax Number"),
            shipping_name: Yup.string().required("Please Enter a Full name"),
            shipping_address: Yup.string().required("Please Enter a Address"),
            shipping_phone: Yup.string().required("Please Enter a Phone Number"),
            shipping_taxno: Yup.string().required("Please enter a tax Number"),
            product_name: Yup.string().required("Please Enter a product Name"),
        }),
        onSubmit: (values) => {
            const newInvoice = {
                _id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
                postalcode: values.postalcode,
                registration: values.registration,
                email: values.email,
                website: values.website,
                contact: values.contact,
                invoiceId: values.invoiceId,
                date: date,
                name: values.name,
                status: values.status,
                country: "India",
                amount: Math.round(rate * count + tax + charge - dis),
                billing_address: values.billing_address,
                billing_phone: values.billing_phone,
                billing_taxno: values.billing_taxno,
                shipping_name: values.shipping_name,
                shipping_address: values.shipping_address,
                shipping_phone: values.shipping_phone,
                shipping_taxno: values.shipping_taxno,
                product_name: values.product_name,
            };
            dispatch(onAddNewInvoice(newInvoice));
            history("/apps-invoices-list");
            validation.resetForm();
        },
    });

    return (
        <div className="page-content">
            <Container fluid>
                <BreadCrumb title="Create Purchase Challan" pageTitle="Pre Production" />
                <Row className="justify-content-center">
                    <Col xxl={12}>
                        <Card>
                            <Form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    validation.handleSubmit();
                                    return false;
                                }}
                                className="needs-validation"
                                id="invoice_form"
                            >

                                <CardBody className="p-4">
                                    <Row className="g-3 d-flex flex-row justify-content-between">
                                        <Col lg={3} sm={6}>
                                            <Label for="invoicenoInput">Invoice No</Label>
                                            <Input
                                                type="text"
                                                className="form-control bg-light border-0"
                                                id="invoicenoInput"
                                                name="invoiceId"
                                                value={validation.values.invoiceId || ""}
                                                onBlur={validation.handleBlur}
                                                onChange={validation.handleChange}
                                                placeholder="Invoice No"
                                                invalid={validation.errors.invoiceId && validation.touched.invoiceId ? true : false}
                                            />
                                            {validation.errors.invoiceId && validation.touched.invoiceId ? (
                                                <FormFeedback type="invalid">{validation.errors.invoiceId}</FormFeedback>
                                            ) : null}
                                        </Col>
                                        <Col lg={3} sm={6}>
                                            <div>
                                                <Label for="date-field">Date</Label>
                                                <Flatpickr
                                                    name="date"
                                                    id="date-field"
                                                    className="form-control"
                                                    placeholder="Select a date"
                                                    options={{
                                                        altInput: true,
                                                        altFormat: "d M, Y",
                                                        dateFormat: "d M, Y",
                                                    }}
                                                    onChange={(e) =>
                                                        dateformate(e)
                                                    }
                                                    value={validation.values.date || ""}
                                                />
                                                {validation.touched.date && validation.errors.date ? (
                                                    <FormFeedback type="invalid">{validation.errors.date}</FormFeedback>
                                                ) : null}
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                                <CardBody className="p-4 border-top border-top-dashed">
                                    <Row>
                                    <Col lg={4}>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelect" aria-label="Vendor Type">
                                                            <option >Select Challan Type...</option>
                                                            <option defaultValue="1">Production Challan</option>
                                                            <option defaultValue="2">Non Production Challan</option>
                                                        </select>
                                                        <Label htmlFor="floatingSelect">Challan Type</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelect" aria-label="Vendor Type">
                                                            <option >Select Vendor...</option>
                                                            <option defaultValue="1">Production</option>
                                                            <option defaultValue="2">Non Production</option>
                                                        </select>
                                                        <Label htmlFor="floatingSelect">Vendor Type</Label>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="form-floating">
                                                        <Input type="number" className="form-control"  placeholder="" />
                                                        <Label htmlFor="namefloatingInput">Phone Number</Label>
                                                    </div>
                                                </Col>
                                    </Row>
                                </CardBody>
                                <CardBody className="p-4">
                                    <div className="table-responsive">
                                        <Table className="invoice-table table-borderless table-nowrap mb-0">
                                            <thead className="align-middle">
                                                <tr className="table-active">
                                                    <th scope="col" style={{ width: "50px" }}>
                                                        #
                                                    </th>
                                                    <th scope="col">Product Name</th>
                                                    <th scope="col" style={{ width: "100px" }}>
                                                        <div className="d-flex currency-select input-light align-items-center">
                                                            Qty
                                                        </div>
                                                    </th>
                                                    <th scope="col" style={{ width: "100px" }}>
                                                        <div className="d-flex currency-select input-light align-items-center">
                                                            Unit
                                                        </div>
                                                    </th>
                                                    <th scope="col" style={{ width: "120px" }}>
                                                        <div className="d-flex currency-select input-light align-items-center">
                                                            Rate
                                                        </div>
                                                    </th>

                                                    <th
                                                        scope="col"
                                                        className="text-end"
                                                        style={{ width: "150px" }}
                                                    >
                                                        Amount
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="text-end"
                                                        style={{ width: "150px" }}
                                                    >
                                                        Date
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="text-end"
                                                        style={{ width: "105px" }}
                                                    ></th>
                                                </tr>
                                            </thead>
                                            <tbody id="newlink">
                                                <tr id="1" className="product">
                                                    <th scope="row" className="product-id">
                                                        1
                                                    </th>
                                                    <td className="text-start">
                                                        <div className="mb-2">
                                                            <Input
                                                                type="text"
                                                                className="form-control bg-light border-0"
                                                                id="productName-1"
                                                                placeholder="Product Name"
                                                                name="product_name"
                                                                value={validation.values.product_name || ""}
                                                                onBlur={validation.handleBlur}
                                                                onChange={validation.handleChange}
                                                                invalid={validation.errors.product_name && validation.touched.product_name ? true : false}
                                                            />
                                                            {validation.errors.product_name && validation.touched.product_name ? (
                                                                <FormFeedback type="invalid">{validation.errors.product_name}</FormFeedback>
                                                            ) : null}

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <Input
                                                            type="number"
                                                            className="form-control product-qty bg-light border-0"
                                                            placeholder="0.00"
                                                            id="productQty" step="0.01"
                                                            onChange={(e) => {
                                                                setCount(e.target.value);
                                                            }}
                                                        />
                                                        <div className="invalid-feedback">
                                                            Please enter a Qty
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <Select
                                                            options={allcurrency}
                                                            name="choices-single-default"
                                                            id="idStatus"
                                                        >
                                                        </Select>
                                                    </td>
                                                    <td>
                                                        <Input
                                                            type="number"
                                                            className="form-control product-price bg-light border-0"
                                                            placeholder="0.00"
                                                            id="productRate-1" step="0.01"
                                                            onChange={(e) => {
                                                                setRate(e.target.value);
                                                            }}
                                                        />
                                                        <div className="invalid-feedback">
                                                            Please enter a rate
                                                        </div>
                                                    </td>

                                                    <td className="text-end">
                                                        <div>
                                                            <Input
                                                                type="text"
                                                                className="form-control bg-light border-0 product-line-price"
                                                                id="productPrice-1"
                                                                placeholder="$0.00"
                                                                value={"₹" + rate * count}
                                                                readOnly
                                                            />
                                                        </div>
                                                    </td>
                                                    <td className="product-removal">
                                                        <Flatpickr
                                                            name="date"
                                                            id="date-field"
                                                            className="form-control"
                                                            placeholder="Select a date"
                                                            options={{
                                                                altInput: true,
                                                                altFormat: "d M, Y",
                                                                dateFormat: "d M, Y",
                                                            }}
                                                            onChange={(e) =>
                                                                dateformate(e)
                                                            }
                                                            value={validation.values.date || ""}
                                                        />
                                                        {validation.touched.date && validation.errors.date ? (
                                                            <FormFeedback type="invalid">{validation.errors.date}</FormFeedback>
                                                        ) : null}
                                                    </td>
                                                    <td className="product-removal">
                                                        <Link to="#" className="btn btn-success">
                                                            Delete
                                                        </Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr id="newForm" style={{ display: "none" }}><td className="d-none" colSpan="5"><p>Add New Form</p></td></tr>
                                                <tr>
                                                    <td colSpan="5">
                                                        <Link
                                                            to="#"
                                                            className="btn btn-soft-secondary fw-medium"
                                                            id="add-item"
                                                        >
                                                            <i className="ri-add-fill me-1 align-bottom"></i>{" "}
                                                            Add Item
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr className="border-top border-top-dashed mt-2">
                                                    <td colSpan="3"></td>
                                                    <td colSpan="2" className="p-0">
                                                        <Table className="table-borderless table-sm table-nowrap align-middle mb-0">
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">Sub Total</th>
                                                                    <td style={{ width: "150px" }}>
                                                                        <Input
                                                                            type="text"
                                                                            className="form-control bg-light border-0"
                                                                            id="cart-subtotal"
                                                                            placeholder="$0.00"
                                                                            readOnly
                                                                            value={"₹" + rate * count}
                                                                        />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                                        <Link to="#" className="btn btn-primary">
                                            <i className="ri-download-2-line align-bottom me-1"></i>{" "}
                                            Preview & Submit
                                        </Link>
                                    </div>
                                </CardBody>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CreateChallan;
