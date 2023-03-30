import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import "./Calculator.css"

function Calculator() {
    return (
        <Container className="calc-container">
            <Row>
                <Col>
                    <Dropdown className="calc-dropdown">
                        <Dropdown.Toggle id="dropdown-basic">
                            Выберите тип прокси
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                <Row>
                                    <Col>
                                        Серверные IPv4 индивидуальные
                                    </Col>
                                    <Col>
                                        От 60 ₽/шт
                                    </Col>
                                </Row>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                <Row>
                                    <Col>
                                        Серверные IPv6 индивидуальные
                                    </Col>
                                    <Col>
                                        От 0,51 ₽/шт
                                    </Col>
                                </Row>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                <Row>
                                    <Col>
                                        Мобильные индивидуальные
                                    </Col>
                                    <Col>
                                        От 160 ₽/шт
                                    </Col>
                                </Row>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <Dropdown className="calc-dropdown">
                        <Dropdown.Toggle id="dropdown-basic">
                            Выберите страну
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                <Row>
                                    <Col>
                                        Беларусь
                                    </Col>
                                    <Col>
                                        От 154 ₽/шт
                                    </Col>
                                </Row>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                <Row>
                                    <Col>
                                        Россия
                                    </Col>
                                    <Col>
                                        От 0,51 ₽/шт
                                    </Col>
                                </Row>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <Dropdown className="calc-dropdown">
                        <Dropdown.Toggle id="dropdown-basic">
                            Выберите срок
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                <Row>
                                    <Col>
                                        1 день
                                    </Col>
                                    <Col>
                                        От 160 ₽/шт
                                    </Col>
                                </Row>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                <Row>
                                    <Col>
                                        7 дней
                                    </Col>
                                    <Col>
                                        От 1,19 ₽/шт
                                    </Col>
                                </Row>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                <Row>
                                    <Col>
                                        1 месяц
                                    </Col>
                                    <Col>
                                        От 5,10 ₽/шт
                                    </Col>
                                </Row>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>Сумма к оплате: </Col>
                <Col>от 1000 руб</Col>
                <Col>
                    <Button variant="primary">
                        Оформить заказ
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Calculator;