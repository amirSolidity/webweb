import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Home.css'
import { motion } from "framer-motion";
import Header from './components/Header/Header'


function Home() {


  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }

  return (
    <div className='homeContainer'>
      <Header />
      <div className='homeDiv1'>
        <div className='homeImgDiv'>
          <img className='homeImg' src='./ethereumImg.jpg' />
          <img className='homeImg ll' src='nftImg.jpg' />
        </div>

        <div className='txtDiv1'>
          <span className='desTxt1'>
            This website was created to provide web3 and blockchain services.
            You can also use this website for transfers and blockchain news and digital currencies.
            Click the button for more details.
          </span>
        </div>

        <div className='desBtnDiv'>
          <Button variant="success" className='detailsBtn'>Details</Button>
        </div>
      </div>
      <motion.div
      className="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />
    </div>
  )
}

export default Home