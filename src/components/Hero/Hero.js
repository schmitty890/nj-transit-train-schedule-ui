import React, {Component} from 'react';
import { Row, Col, Container, Button, Accordion, Card, Dropdown, Form } from 'react-bootstrap';
import styles from "./Hero.module.css";
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import SearchedTrainsCarousel from '../SearchedTrainsCarousel/SearchedTrainsCarousel';
import logo from '../../images/logo.png';

class Hero extends Component {
// const Hero = (this.props) => {

    render(){
        // console.log(this.props);
        console.log(this.props.searchedTrains);
        let searchedTrain;

        return (
            <Container>
                <Row>
                    <Col sm={4} className={styles.hero}>
                        <img className={styles.heroImage} src={logo} />
                        {/* <div className={styles.heroTitle}>{this.props.currentStation}</div> */}
                    </Col>
                    <Col sm={4} className={styles.hero}>
                        <div className={styles.currentStation}>Current station: {this.props.currentStation}</div>
                    </Col>
                    <Col sm={4} className={styles.hero}>
                        <CurrentWeather
                            currentWeather={this.props.currentWeather} />
                    </Col>
                </Row>
                <Row className={styles.controlSectionRow}>
                    <Col sm={6} className={styles.controlSectionRowColumn}>
                        {/* <div className={styles.heroTitle}>{this.props.currentStation}</div> */}
                        {/* <div>Choose a station</div> */}
                        <div className={styles.controlSection}>
                            <Button variant="primary" className={styles.controlButton}><a href="https://www.njtransit.com/pdf/rail/Rail_System_Map.pdf" target="_blank">View transit map</a></Button>
                            <Dropdown className={styles.controlDropdown}>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Choose a station
                                </Dropdown.Toggle>

                                <Dropdown.Menu className={styles.dropdown}>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'AM')}>Aberdeen-Matawan</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'AB')}>Absecon</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'AZ')}>Allendale</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'AH')}>Allenhurst</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'AN')}>Annandale</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'AP')}>Asbury Park</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'AO')}>Atco</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'AC')}>Atlantic City</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'AV')}>Avenel</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'BI')}>Basking Ridge</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'BH')}>Bay Head</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'MC')}>Bay Street</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'BS')}>Belmar</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'BY')}>Berkeley Heights</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'BV')}>Bernardsville</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'BM')}>Bloomfield</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'BN')}>Boonton</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'BK')}>Bound Brook</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'BB')}>Bradley Beach</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'BU')}>Brick Church</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'BW')}>Bridgewater</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'BF')}>Broadway</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'CB')}>Campbell Hall</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'CM')}>Chatham</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'CY')}>Cherry Hill</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'IF')}>Clifton</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'CN')}>Convent</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'XC')}>Cranford</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'DL')}>Delawanna</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'DV')}>Denville</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'DO')}>Dover</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'DN')}>Dunellen</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'EO')}>East Orange</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'ED')}>Edison</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'EH')}>Egg Harbor City</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'EL')}>Elberon</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'EZ')}>Elizabeth</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'EN')}>Emerson</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'EX')}>Essex Street</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'FW')}>Fanwood</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'FH')}>Far Hills</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'GD')}>Garfield</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'GW')}>Garwood</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'GI')}>Gillette</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'GL')}>Gladstone</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'GG')}>Glen Ridge</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'GK')}>Glen Rock Boro Hall</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'RS')}>Glen Rock Main Line</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'HQ')}>Hackettstown</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'HL')}>Hamilton</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'HN')}>Hammonton</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'RM')}>Harriman</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'HW')}>Hawthorne</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'HZ')}>Hazlet</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'HG')}>High Bridge</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'HI')}>Highland Avenue</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'HD')}>Hillsdale</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'UF')}>Hohokus</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'HB')}>Hoboken</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'JA')}>Jersey Avenue</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'KG')}>Kingsland</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'HP')}>Lake Hopatcong</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'ON')}>Lebanon</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'LP')}>Lincoln Park</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'LI')}>Linden</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'LW')}>Lindenwold</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'FA')}>Little Falls</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'LS')}>Little Silver</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'LB')}>Long Branch</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'LN')}>Lyndhurst</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'LY')}>Lyons</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'MA')}>Madison</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'MZ')}>Mahwah</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'SQ')}>Manasquan</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'MW')}>Maplewood</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'XU')}>Meadowlands Sports Complex</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'MP')}>Metropark</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'MU')}>Metuchen</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'MI')}>Middletown NJ</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'MD')}>Middletown New York</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'MB')}>Millburn</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'GO')}>Millington</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'MK')}>Monmouth Park</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'HS')}>Montclair Heights</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'UV')}>Montclair State University</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'ZM')}>Montvale</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'MX')}>Morris Plains</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'MR')}>Morristown</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'HV')}>Mount Arlington</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'OL')}>Mount Olive</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'TB')}>Mount Tabor</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'MS')}>Mountain Avenue</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'ML')}>Mountain Lakes</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'MT')}>Mountain</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'MV')}>Mountain View</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'MH')}>Murray Hill</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'NN')}>Nanuet</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'NT')}>Netcong</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'NE')}>Netherwood</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'NH')}>New Bridge Landing</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'NB')}>New Brunswick</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'NV')}>New Providence</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'NY')}>New York Penn</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'NA')}>Newark Airport</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'ND')}>Newark Broad Street</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'NP')}>Newark Penn Station</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'OR')}>North Branch</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'NZ')}>North Elizabeth</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'OD')}>Oradell</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'OG')}>Orange</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'OS')}>Otisville</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'PV')}>Park Ridge</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'PS')}>Passaic</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'RN')}>Paterson</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'PC')}>Peapack</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'PQ')}>Pearl River</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'PN')}>Pennsauken</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'PE')}>Perth Amboy</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'PH')}>Philadelphia</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'PF')}>Plainfield</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'PL')}>Plauderville</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'PP')}>Point Pleasant Beach</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'PO')}>Port Jervis</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'PR')}>Princeton</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'PJ')}>Princeton Junction</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'FZ')}>Radburn Fair Lawn</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'RH')}>Rahway</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'RY')}>Ramsey Main St</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, '17')}>Ramsey Route 17</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'RA')}>Raritan</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'RB')}>Red Bank</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'RW')}>Ridgewood</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'RG')}>River Edge</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'RL')}>Roselle Park</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'RF')}>Rutherford</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'CW')}>Sailsbury Mills Cornwall</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'TS')}>Secaucus Lower Level</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'SE')}>Secaucus Upper Level</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'RT')}>Short Hills</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'XG')}>Sloatsburg</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'SM')}>Somerville</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'CH')}>South Amboy</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'SO')}>South Orange</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'LA')}>Spring Lake</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'SV')}>Spring Valley</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'SG')}>Stirling</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'SF')}>Suffern</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'ST')}>Summit</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'TE')}>Teterboro</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'TO')}>Towaco</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'TR')}>Trenton</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'TC')}>Tuxedo</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'US')}>Union</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'UM')}>Upper Montclair</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'WK')}>Waldwick</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'WA')}>Walnut Street</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'WG')}>Watchung Avenue</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'WT')}>Watsessing Avenue</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, '23')}>Wayne/Route 23 Transit Center</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'WM')}>Wesmont</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'WF')}>Westfield</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'WW')}>Westwood</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'WH')}>White House</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'WR')}>Wood Ridge</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'WB')}>Woodbridge</Dropdown.Item>
                                    <Dropdown.Item onClick={(event) => this.props.action(event, 'WL')}>Woodcliff Lake</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Col>
                    <Col sm={6} className={styles.controlSectionRowColumn}>
                        <div className={styles.controlSection}>
                        <Form>
                            <Col lg={6} sm={12} className={styles.controlSectionSearch}>
                                <Form.Group controlId="formTrainNumber">
                                    <Form.Control ref={node => searchedTrain = node} type="text" maxLength="4" placeholder="Search by train number" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} sm={12} className={styles.controlSectionSearch}>
                                <Button variant="primary" type="submit" onClick={(event) => this.props.search(event, searchedTrain.value)}>
                                    Search
                                </Button>
                            </Col>
                        </Form>
                        </div>
                        <SearchedTrainsCarousel 
                            searchedTrains={this.props.searchedTrains}/>
                        {/* <div>
                            Recently searched trains slick.js will go here...
                        </div> */}
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default Hero;