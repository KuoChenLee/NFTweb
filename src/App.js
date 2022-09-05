import './App.css';
import {Button,Container,Row,Col,Navbar,Nav,Carousel,Accordion,Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import React,{useState} from 'react';



const web3Modal = new Web3Modal({
  network: "rinkeby", // testnet
  providerOptions: {} 
});
const contractAddr='0xB396080cD168EE931E094daCf6652979fF1B407C';
const abi= [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_greeting",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "greet",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_greeting",
        "type": "string"
      }
    ],
    "name": "setGreeting",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
function App() {
  const [address,setAddress]=useState('');
  const [balance,setBalance]=useState('');
  const [contract,setContract]=useState({});
  const [ens,setEns]=useState('');
  const [isClick,setClick]=useState(false);
  // const shortenBalance=bal=>roundDecimal(bal,2);
  const [isClickBT,setClickBT]=useState(false);
  const shortenAddr=addr=>addr.slice(0,4)+"..."+addr.slice(-4);//取前四後四的Addr
  function myFunction() {
    let elem = document.querySelectorAll(".drop-down");

    elem.forEach(element=>{
        element.addEventListener("click", e =>{
            console.log(e.target.innerHTML);
        });
    })
}
myFunction();
  async function init(){
      
    const instance = await web3Modal.connect();
    
    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();
    const addr=await signer.getAddress();
    const _contract=new ethers.Contract(contractAddr,abi,signer);
    setContract(_contract);
    window.contract=_contract;

    setEns(await provider.lookupAddress(addr));

    console.log(addr);
    setAddress(addr);

    const bal=await provider.getBalance(addr);
    setBalance(ethers.utils.formatEther( bal )); 
    setClick((isClick) => !isClick);
  }
 



  return (
    <div className="App"> 
      <div className='div2'>
        <div className='div1'>
          <Navbar>
            <Container>
              <Navbar.Brand href="#home">STUST NFT Universe</Navbar.Brand>
           
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Attribute</Nav.Link>
                <Nav.Link href="#home">Mint</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">FAQ</Nav.Link>
              <div>
                {address&&<span className='me-2' >
                {(1*balance).toFixed(2)}Ethers
                </span>}
                <Button variant={address?'success':'outline-secondary'} onClick={()=>{init()}} disabled={isClick}>
                {address?(ens||shortenAddr(address)):'Connect Wallet'}
                </Button>
              </div>
              </Container>
          </Navbar>
        </div>
      
              <Carousel fade>
                <Carousel.Item>
                  <iframe src="https://kuochenlee.github.io/background_1/" width="2200" height="720"></iframe>
                  <Carousel.Caption>
                    
                    <h3 className='text1'>STUST ROBOTS MINT </h3>
                    <p className='text1'>You can mint a NFT for 0.003 Ethers</p>
                    
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe src="https://kuochenlee.github.io/background_3/" width="2200" height="720"></iframe>

                  <Carousel.Caption>
                    <h3 className='text1'>DEFFERENT ATTRUBUTE</h3>
                    <p className='text1'>You can get defferent attribute NFT.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <iframe src="https://kuochenlee.github.io/background_1/" width="2200" height="720"></iframe>

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

      </div>
      <div className='div1'>
        <Container>
          <Row>
            <Col>
            
              <iframe src="https://kuochenlee.github.io/Robot_9/" width="560" height="620"/>
            </Col>
            <Col>
              <h1>Attribute</h1>
                <Table striped bordered hover size="sm"  variant="info">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Types</th>
                      <th></th>
                      <th>Variations</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>20</td>
                      <td>Total Robots</td>
                      <td>20</td>
                      <td>Head Tops</td>
                    </tr>
                    <tr>
                    <td></td>
                      <td>Common</td>
                      <td>Robotos</td>
                      <td>20</td>
                      <td>Eyes</td>
                      
                    </tr>
                    <tr>
                    <td></td>
                      <td>Less Common</td>
                      <td>Helmetos</td>
                      <td>10</td>
                      <td>Helmets</td>
                     
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>20</td>
                      <td>mouth</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>10</td>
                      <td>ears</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>10</td>
                      <td>Arms</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>5</td>
                      <td>backpack</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>5</td>
                      <td>body</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>3</td>
                      <td>Head Types</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>20</td>
                      <td>equipment</td>
                    </tr>
                  </tbody>
              </Table>
            </Col>
          </Row>
        
          <Row>

            <Col>
              <h1>Mint your own NFT</h1>

              <select className="list1" id="list">
                <option class="drop-down">0</option>
                <option class="drop-down" selected="selected">1</option>
                <option class="drop-down">2</option>
              </select>

              <Col>
              <Button variant="dark">Mint My NFT</Button>
            </Col>
              
            </Col>
            <Col>
            <iframe src="https://kuochenlee.github.io/Robot_5/" width="560" height="620"/>
            </Col>
          </Row>
          <Row>
            <Col>
            <iframe src="https://kuochenlee.github.io/Robot_10/" width="560" height="620"/>
            </Col>
            <Col>
              <h1>About</h1>
              <h6>
              Yan Youxian pointed out that since the 4th, the Chinese Navy has maintained 13 combat ships, intelligence search ships, etc. 24 nautical miles away from my country's adjoining area every day; The J-11, J-16, and supply aircraft, such as the Air Police 500 and other series of aircraft, have implemented multi-ship and multi-model deterrence in the Taiwan Strait.

Lieutenant General Ye Guohui, Deputy Chief of the Planning Office of the Ministry of National Defense, further explained that in terms of the actions of the communist army, the communist army announced the opening of 6 no-navigation areas on 8/2, adding a 7th location on 8/3, launching missiles on 8/4, and launching missiles on 8/4- On 8/7, joint military operations and drones harassed our outer islands; for the national army, 8/2 dispatched troops to deal with the communist army, 8/3 enhanced alertness, 8/4 completed air defense units, 8/4-8 /7 Dispatched aircraft and ships should respond and use post-bomb warnings, and combat readiness troops should be on alert.
              </h6>
            </Col>
          </Row>
          <div className='div2'><h1>Frequently Asked Questions</h1>
              <Row>
                <Col>
                <Accordion flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Questions#1</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, 
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1"></Accordion.Item>
                  </Accordion>
                </Col>
                <Col>
                <Accordion flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Questions#2</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, 
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1"></Accordion.Item>
                  </Accordion>
                </Col>
              </Row>
              <Row>
                <Col>
                <Accordion flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Questions#3</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, 
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1"></Accordion.Item>
                  </Accordion>
                </Col>
                <Col>
                <Accordion flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Questions#4</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, 
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1"></Accordion.Item>
                  </Accordion>
                </Col>
              </Row>
              <Row>
                <Col>
                <Accordion flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Questions#5</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, 
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1"></Accordion.Item>
                  </Accordion>
                </Col>
                <Col>
                <Accordion flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Questions#6</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, 
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1"></Accordion.Item>
                  </Accordion>
                </Col>
              </Row>
          </div>
          
        </Container>
       
      </div>
      <div className='div3'>

          <h6 className='text2'>
            DM us on Twitter or email hello@stickmentoys.com if you want to get in touch - we can't promise a reply to all messages but we see you, we hear you.
            DM us on Twitter or email hello@stickmentoys.com if you want to get in touch - we can't promise a reply to all messages but we see you, we hear you.
            DM us on Twitter or email hello@stickmentoys.com if you want to get in touch - we can't promise a reply to all messages but we see you, we hear you.
          </h6>
      </div>

    </div>
  );
}

export default App;
