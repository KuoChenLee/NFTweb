import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import {Button,Container,Row,Col,Navbar,Nav,Carousel,Accordion,Table,iframe,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BigNumber, ethers } from "ethers";
import Web3Modal from "web3modal";
import React,{useState} from 'react';
// import Image from '../public/image/Robot03'
// import contractAddress from './contracts/contract-address.json';
// import Stust_NETA_Artifact from './contracts/Stust_NFT_meta_metadata.json';


const web3Modal = new Web3Modal({
  network: "Goerli", // testnet
  providerOptions: {} 
});
// const contractAddr=contractAddress.STUST_NFT;
// const abi=Stust_NETA_Artifact.abi;
const contractAddr='0x669C6a997934d9b4A95c8919486E391669a2426C';
const abi=[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "initBaseURI",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "initNotRevealedUri",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "MAX_SUPPLY",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_isSaleActive",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_revealed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseExtension",
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
		"inputs": [],
		"name": "flipReveal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "flipSaleActive",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMintPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxMint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mintPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenQuantity",
				"type": "uint256"
			}
		],
		"name": "mintSNMeta",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
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
		"inputs": [],
		"name": "notRevealedUri",
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
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newBaseExtension",
				"type": "string"
			}
		],
		"name": "setBaseExtension",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newBaseURI",
				"type": "string"
			}
		],
		"name": "setBaseURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_maxBalance",
				"type": "uint256"
			}
		],
		"name": "setMaxBalance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_maxMint",
				"type": "uint256"
			}
		],
		"name": "setMaxMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_mintPrice",
				"type": "uint256"
			}
		],
		"name": "setMintPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_notRevealedURI",
				"type": "string"
			}
		],
		"name": "setNotRevealedURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
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
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
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
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
function App() {
  // let navigate = useNavigate();
  const [address,setAddress]=useState('');
  const [balance,setBalance]=useState('');
  const [contract,setContract]=useState({});
  const [ens,setEns]=useState('');
  const [isClick,setClick]=useState(false);
  const [notisClick,setNotClick]=useState(true);
  // const shortenBalance=bal=>roundDecimal(bal,2);
  // const [isClickBT,setClickBT]=useState(false);
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
    setNotClick((notisClick)=>!notisClick);
  }
 async function mint(){
  

 
  const mintPrice = await contract.mintPrice();
  
  let tx = await contract.mintSNMeta(
    3
    ,{value:mintPrice.toString()}
    )
  let response=await tx.wait();
  console.log(response);
  
  let setNotRevealedURI=await contract.setNotRevealedURI(
	"ipfs://QmWuh3khmnSxjgqKM1fX7uFa8va13zMp41irf6cDKHnYmC"
  )

  
 }
 async function SeeNFT(){
	
	let flipReveal=await contract.flipReveal();
		  let setBaseURI=await contract.setBaseURI(
			"ipfs://QmTvroQRuCm9RSmpuPmjn9eYZFWfSbPR8ULknHEYgqtBxE/"
		  )
		  
}
	



  return (
    <div className="App"> 
      <div className='div2'>
        <div className='div1'>
          <Navbar>
            <Container>
              <Navbar.Brand href="#home">STUST NFT Universe</Navbar.Brand>
              <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Attribute">Attribute</Nav.Link>
                <Nav.Link href="#mint">Mint</Nav.Link>
                <Nav.Link href='#about'>About</Nav.Link>
                <Nav.Link href="#link">FAQ</Nav.Link>
                     
                {/* <Nav.Route path="/" element={<App />}>Home</Nav.Route>
                <Nav.Route path="/" element={<Attribute />}>Attribute</Nav.Route>
                <Nav.Route href="#home">Mint</Nav.Route>
                <Nav.Route path="about" element={<About />}>About</Nav.Route>
                <Nav.Route href="#link">FAQ</Nav.Route>
                <Route path=":Item" element={<Item />} /> */}
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
              <h1>Mint Blind Box</h1>
				<h6>
					And you can get blind box
				</h6>
              <select className="list1" id="list">
                <option class="drop-down">0</option>
                <option class="drop-down" selected="selected">1</option>
                <option class="drop-down">2</option>
              </select>

              <Col>
              <Button disabled={notisClick} onClick={()=>mint()} variant={address?"danger":"secondary"} >Mint Blind Box</Button>
			  
            </Col>
              <Col>
				<h1>Open your blind box.</h1>
				<h6>
					You can open the blind box.
				</h6>
			  <Col>
			  <Button disabled={notisClick} onClick={()=>SeeNFT()} variant={address?"dark":"secondary"} >Open Blind Box</Button>
			  </Col>
			  <Col>
			  <h6>If you want to see your NFT ,Click <a href='https://testnets.opensea.io/zh-TW'>OpenSea</a></h6>
			  </Col>
			  </Col>
            </Col>
            <Col>
            <iframe src="https://kuochenlee.github.io/Blind_Box_Picture1/" width="560" height="620"/>
            </Col>
          </Row>
          <Row>
            <Col>
            <iframe src="https://kuochenlee.github.io/Blind_Box_picture/" width="560" height="620"/>
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
      {/* <button
          onClick={() => {
            navigate("/about");
          }}
        >
          about
        </button> */}
    </div>
  );
}
// function Main() {
//   return (
//     <>
//       <p>main標籤</p>
//     </>
//   );
// }
// function Attribute(){
//   return (
//     <>
//     <main>
//       <h2>Welcome to the homepage!</h2>
//       <p>You can do this, I believe in you.</p>
//     </main>
//     <nav>
//       <Link to="/about">About</Link>
//     </nav>
//   </>
//   );
// }
// function Item() {
//   const url = useParams();
//   console.log("url", url);
//   return (
//     <>
//       <p>main標籤</p>
//     </>
//   );
// }

// function About() {
//   return (
//     <>
//       <main>
//         <h2>Who are we?</h2>
//         <p>That feels like an existential question, don't you think?</p>
//       </main>
//       <nav>
//         <Link to="/">Home</Link>
//       </nav>
//     </>
//   );
// }
export default App;
