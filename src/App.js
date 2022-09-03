import './App.css';
import {Button,Container,Row,Col,Navbar,Nav,iframe,Carousel} from 'react-bootstrap';
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
  const [userInput,setUserInput]=useState('')
  const [msg,setMsg]=useState('');
  const [contract,setContract]=useState({});
  const [ens,setEns]=useState('');
  const [isClick,setClick]=useState(false);
  // const shortenBalance=bal=>roundDecimal(bal,2);
  const shortenAddr=addr=>addr.slice(0,4)+"..."+addr.slice(-4);//取前四後四的Addr
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

  async function getMessage(){
    
  
    
    const _msg=await contract.greet();
    console.log(_msg);
    setMsg(_msg);
  }
  async function setMessage(msg){    
    await contract.setGreeting(msg);
    // await getMessage();
  }
  // async function mint(){
  //   await contract mint(
  //     1,
  //     {value:0.003S*Math.pow(10,17)}
  //   )
  // }



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
      {/* <Container className="mt-5"> */}
              <Carousel fade>
                <Carousel.Item>
                  <iframe src="https://kuochenlee.github.io/background_1/" width="2200" height="720"></iframe>
                  <Carousel.Caption >
                    <h3>STUST ROBOTS MINT </h3>
                    <p>You can mint a NFT for 0.003 Ethers</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe src="https://kuochenlee.github.io/background_3/" width="2200" height="720"></iframe>

                  <Carousel.Caption>
                    <h3>DEFFERENT ATTRUBUTE</h3>
                    <p>You can get defferent attribute NFT.</p>
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
        {/* <Row>
          
          <Col md={{span:3}}>
            <div className='text'>
            <h2>Southern Taiwan University of Science and Technology NFTS</h2>
            
            <Button variant="dark">Mint My NFT</Button>
            <h6>The Stust NFT   0.003ETH</h6>
            </div>
          </Col>
            <Col>
            
            </Col>
            <iframe src="https://kuochenlee.github.io/Robot_3/" width="640" height="620"></iframe>
        </Row> */}
        
        {/* </Container> */}
      </div>
      <div className='div1'>
        <Container>
          <Row>
            <Col>
            
              <iframe src="https://kuochenlee.github.io/Robot_9/" width="560" height="620"/>
            </Col>
            <Col>
              <h1>Attribute</h1>
              <h3>
              The Ministry of National Defense held a press conference today (8th) in response to the Chinese People's Liberation Army's "encircling Taiwan" military exercise from noon on the 4th to noon on the 7th. During the meeting, Lieutenant General Yan Youxian, Deputy Chief of the Qing Section Office, pointed out that since the 4th, the Chinese Navy has maintained 13 combat ships, intelligence search ships, etc. every day 24 nautical miles away from my country's adjoining area; The East, etc., dispatched fighter jets every day, including J-11, J-16 and air police series, to implement multiple types of deterrence in the Taiwan Strait.
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Mint your own NFT</h1>
              <Col>
                <Button variant="light">-</Button>
                <input type="text" />
                <Button variant="light">+</Button>
              </Col>
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
            <iframe src="https://kuochenlee.github.io/Robot_8/" width="560" height="620"/>
            </Col>
            <Col>
              <h1>About</h1>
              <h6>
              Yan Youxian pointed out that since the 4th, the Chinese Navy has maintained 13 combat ships, intelligence search ships, etc. 24 nautical miles away from my country's adjoining area every day; The J-11, J-16, and supply aircraft, such as the Air Police 500 and other series of aircraft, have implemented multi-ship and multi-model deterrence in the Taiwan Strait.

Lieutenant General Ye Guohui, Deputy Chief of the Planning Office of the Ministry of National Defense, further explained that in terms of the actions of the communist army, the communist army announced the opening of 6 no-navigation areas on 8/2, adding a 7th location on 8/3, launching missiles on 8/4, and launching missiles on 8/4- On 8/7, joint military operations and drones harassed our outer islands; for the national army, 8/2 dispatched troops to deal with the communist army, 8/3 enhanced alertness, 8/4 completed air defense units, 8/4-8 /7 Dispatched aircraft and ships should respond and use post-bomb warnings, and combat readiness troops should be on alert.
              </h6>
            </Col>
          </Row>
          <div className='div2'><h1>Frequently Asked Questions</h1></div>

        </Container>
      </div>
      
    </div>
  );
}

export default App;
