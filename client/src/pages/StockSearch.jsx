import React from 'react';

import { Line, Bar, Doughnut } from 'react-chartjs-2';

import {
    Badge,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    UncontrolledTooltip
} from 'reactstrap';

import {
    chartExample1,
    chartExample2,
    chartExample3,
    chartExample4,
    chartExample5,
    chartExample6,
    chartExample7,
    chartExample8
} from "../variables/charts.jsx";


export default function StockSearch() {
    return (
        <div className='content'>
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4">Cisco Systems</CardTitle>
                            <p className="card-category">Company Fundamentals</p>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col md="5">
                                    <h6 className="big-title">Stock Price Chart</h6>
                                    <Line
                                        data={chartExample1.data}
                                        options={chartExample1.options}
                                        height={380}
                                        width={826}
                                    />
                                </Col>
                                <Col md="7">
                                    <Row>
                                        <Col md="6">
                                            <Card className="card-stats">
                                                <CardBody>
                                                    <Row>
                                                        <Col md="4" xs="5">
                                                            <div className="icon-big text-center icon-success">
                                                                <i className="nc-icon nc-globe text-success" />
                                                            </div>
                                                        </Col>
                                                        <Col md="8" xs="7">
                                                            <div className="numbers">
                                                                <p className="card-category">Valuation</p>
                                                                <CardTitle tag="p" className="text-success">$52</CardTitle>
                                                                <p />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                                <CardFooter>
                                                    <hr />
                                                    <Button color="info" size="md" block> More Valuation Details</Button>
                                                </CardFooter>
                                            </Card>
                                        </Col>
                                        <Col md="6">
                                            <Card className="card-stats">
                                                <CardBody>
                                                    <Row>
                                                        <Col md="4" xs="5">
                                                            <div className="icon-big text-center icon-warning">
                                                                <i className="nc-icon nc-money-coins text-success" />
                                                            </div>
                                                        </Col>
                                                        <Col md="8" xs="7">
                                                            <div className="numbers">
                                                                <p className="card-category">Potential Upside</p>
                                                                <CardTitle tag="p" className="text-success">35%</CardTitle>
                                                                <p />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                                <CardFooter>
                                                    <hr />
                                                    <Button color="info" size="md" block> More Valuation Details</Button>
                                                </CardFooter>
                                            </Card>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md="6">
                                            <Card className="card-stats" body outline color="primary">
                                                <CardBody>
                                                    <Row>
                                                        <Col md="4" xs="5">
                                                            <div className="icon-big text-center icon-warning">
                                                                <i className="nc-icon nc-globe text-warning" />
                                                            </div>
                                                        </Col>
                                                        <Col md="8" xs="7">
                                                            <div className="numbers">
                                                                <p className="card-category">Today's Media Sentiment</p>
                                                                <CardTitle tag="p" >Neutral</CardTitle>
                                                                <p />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col md="6">
                                            <Card className="card-stats" body outline color="primary">
                                                <CardBody>
                                                    <Row>
                                                        <Col md="4" xs="5">
                                                            <div className="icon-big text-center icon-warning">
                                                                <i className="nc-icon nc-globe text-warning" />
                                                            </div>
                                                        </Col>
                                                        <Col md="8" xs="7">
                                                            <div className="numbers">
                                                                <p className="card-category">Analyst Recommandation</p>
                                                                <CardTitle tag="p">Buy</CardTitle>
                                                                <p />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </CardBody>

                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}


