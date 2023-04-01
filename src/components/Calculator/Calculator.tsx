import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import "./Calculator.css"
import { useState } from "react";

function Calculator() {
    const [price, setPrice] = useState<any>(0);
    const [proxyType, setProxyType] = useState<string>('');
    const [proxyTypeName, setProxyTypeName] = useState<string>('Выберите тип прокси');
    const [proxyCountry, setProxyCountry] = useState<string>('Выберите страну');
    const [proxyTime, setProxyTime] = useState<string>('Выберите срок');
    const [ipv4Price, setIpv4Price] = useState<any>(process.env.REACT_APP_IPV4_PROXY);
    const [ipv6Price, setIpv6Price] = useState<any>(process.env.REACT_APP_IPV6_PROXY);
    const [mobilePrice, setMobilePrice] = useState<any>(process.env.REACT_APP_MOBILE_PROXY);
    const [belarusPrice, setBelarusPrice] = useState(process.env.REACT_APP_BELARUS_COUNTRY);
    const [russiaPrice, setRussiaPrice] = useState(process.env.REACT_APP_RUSSIA_COUNTRY);
    const [priceDay1, setPriceDay1] = useState<any>(process.env.REACT_APP_TIME_DAY_1);
    const [priceDay7, setPriceDay7] = useState<any>(process.env.REACT_APP_TIME_DAYS_7);
    const [priceMonth1, setPriceMonth1] = useState<any>(process.env.REACT_APP_TIME_MONTH_1);

    const proxyTypes: any = {
        IPV4: {
            BELARUS: 154,
            RUSSIA: 60,
        },
        IPV6: {
            RUSSIA: 0.51,
        },
        MOBILE: {
            BELARUS: 500,
            RUSSIA: 160,
        }
    }

    const proxyCountries: any = {
        BELARUS: {
            PRICE_DAY_1: 240,
            PRICE_DAY_7: 5.19,
            PRICE_MONTH_1: 160,
        },
        RUSSIA: {
            PRICE_DAY_1: 120,
            PRICE_DAY_7: 520,
        }
    }

    const selectProxyType = (proxyType: string, proxyTypeName: string, price: string) => {
        setProxyType(proxyType);
        setProxyTypeName(proxyTypeName);
        setBelarusPrice(proxyTypes[proxyType].BELARUS);
        setRussiaPrice(proxyTypes[proxyType].RUSSIA)
        setPrice(price);
    }

    const selectProxyCountry = (proxyCountry: string, proxyCountryName: string, price: any) => {
        setProxyCountry(proxyCountryName);
        setPriceDay1(proxyCountries[proxyCountry].PRICE_DAY_1);
        setPriceDay7(proxyCountries[proxyCountry].PRICE_DAY_7);
        setPriceMonth1(proxyCountries[proxyCountry].PRICE_MONTH_1);
        setPrice(price);
    }

    const selectProxyTime = (proxyTime: string, price: any) => {
        setProxyTime(proxyTime);
        setPrice(price);
    }

    const clearFields = () => {
        setProxyTypeName('Выберите тип прокси');
        setProxyCountry('Выберите страну');
        setProxyTime('Выберите срок');
        setPrice(0);
        setIpv4Price(process.env.REACT_APP_IPV4_PROXY);
        setIpv6Price(process.env.REACT_APP_IPV6_PROXY);
        setMobilePrice(process.env.REACT_APP_MOBILE_PROXY);
        setBelarusPrice(process.env.REACT_APP_BELARUS_COUNTRY);
        setRussiaPrice(process.env.REACT_APP_RUSSIA_COUNTRY);
        setPriceDay1(process.env.REACT_APP_TIME_DAY_1);
        setPriceDay7(process.env.REACT_APP_TIME_DAYS_7);
        setPriceMonth1(process.env.REACT_APP_TIME_MONTH_1);
    }

    return (
        <>
            <Container className="calc-container">
                <span><Button onClick={clearFields}>Очистить</Button></span>
                <Row>
                    <Col>
                        <Dropdown className="calc-dropdown">
                            <Dropdown.Toggle id="dropdown-basic">
                                {proxyTypeName}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => {
                                    selectProxyType('IPV4', 'Серверные IPv4 индивидуальные', ipv4Price);
                                    setPrice(ipv4Price);
                                }}>
                                    <Row>
                                        <Col>
                                            Серверные IPv4 индивидуальные
                                        </Col>
                                        <Col>
                                            От {ipv4Price} ₽/шт
                                        </Col>
                                    </Row>
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    selectProxyType('IPV6', 'Серверные IPv6 индивидуальные', ipv6Price);
                                }}>
                                    <Row>
                                        <Col>
                                            Серверные IPv6 индивидуальные
                                        </Col>
                                        <Col>
                                            От {ipv6Price} ₽/шт
                                        </Col>
                                    </Row>
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    selectProxyType('MOBILE', 'Мобильные индивидуальные', mobilePrice);
                                }}>
                                    <Row>
                                        <Col>
                                            Мобильные индивидуальные
                                        </Col>
                                        <Col>
                                            От {mobilePrice} ₽/шт
                                        </Col>
                                    </Row>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col>
                        <Dropdown className="calc-dropdown">
                            <Dropdown.Toggle id="dropdown-basic">
                                {proxyCountry}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    proxyType !== 'IPV6'
                                        ? <Dropdown.Item onClick={() => selectProxyCountry('BELARUS', 'Беларусь', belarusPrice)}>
                                            <Row>
                                                <Col>
                                                    Беларусь
                                                </Col>
                                                <Col>
                                                    От {belarusPrice} ₽/шт
                                                </Col>
                                            </Row>
                                        </Dropdown.Item>
                                        : ''
                                }
                                <Dropdown.Item onClick={() => selectProxyCountry('RUSSIA', 'Россия', russiaPrice)}>
                                    <Row>
                                        <Col>
                                            Россия
                                        </Col>
                                        <Col>
                                            От {russiaPrice} ₽/шт
                                        </Col>
                                    </Row>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col>
                        <Dropdown className="calc-dropdown">
                            <Dropdown.Toggle id="dropdown-basic">
                                {proxyTime}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => selectProxyTime('1 день', priceDay1)}>
                                    <Row>
                                        <Col>
                                            1 день
                                        </Col>
                                        <Col>
                                            От {priceDay1} ₽/шт
                                        </Col>
                                    </Row>
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => selectProxyTime('7 дней', priceDay7)}>
                                    <Row>
                                        <Col>
                                            7 дней
                                        </Col>
                                        <Col>
                                            От {priceDay7} ₽/шт
                                        </Col>
                                    </Row>
                                </Dropdown.Item>
                                {
                                    proxyCountry !== 'Россия'
                                        ? <Dropdown.Item onClick={() => selectProxyTime('1 месяц', priceMonth1)}>
                                            <Row>
                                                <Col>
                                                    1 месяц
                                                </Col>
                                                <Col>
                                                    От {priceMonth1} ₽/шт
                                                </Col>
                                            </Row>
                                        </Dropdown.Item>
                                        : ''
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>Сумма к оплате: </Col>
                    <Col>{price} руб</Col>
                    <Col>
                        <Button variant="primary">
                            Оформить заказ
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Calculator;