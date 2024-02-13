import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { FaHashtag } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import './CryptoPrice.css'


async function CryptoPrice() {

  

    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Csolana%2Cxrp%2Ccardano%2Cdogecoin%2Ctron%2Cpolkadot%2Cpolygon%2Clitecoin%2Cdai%2Cbnb%2Cusdc%2Ckaspa%2Ccelestia%2Cstellar%2Captos%2Chedera%2Carbitrum%2Ccronos%2Cmenero%2Csui%2Cmaker%2Crender%2Csei%2Calgorand%2Cmina%2Chelium%2Caave%2Cflow%2Cfantom%2Castar%2Cflare%2Ctezos%2C%2Cchiliz%2Cdecentraland%2Cbonk%2Cneo%2Ceos%2Cronin%2Cosmosis%2Cblur%2Ckava%2Cklaytn%2Cpendle%2Cwoo%2Cjupiter%2Cgala%2Cgnosis%2Caxelar%2Cpancakeswap%2Carweave&vs_currencies=usd&include_market_cap=true&include_24hr_vol=treu&include_24hr_change=true&include_last_updated_at=true', {
    })
    const data = await response.json()

    let coinNum = 1;
    const setDatas = Object.keys(data).map((key) => {
        const price = data[key].usd;
        const marketCap = data[key].usd_market_cap;
        const changeP = typeof data[key].usd_24h_change === 'number' ? data[key].usd_24h_change.toFixed(3) : null;

        return {
            coinNum: coinNum++,
            coinName: key,
            price: price,
            marketCap: marketCap.toFixed(0),
            changeP: changeP,
        };
    });

    return (
        <div className='priceContainer'>
            <Header />
            <div className='priceDiv'>
                <div className='priceHeaderDiv'>
                    <h1 className='priceHeader'>The price of cryptocurrencies</h1>
                    <span className='priceDes'>
                        Here you can see the price and price changes and other information of cryptocurrencies
                    </span>
                </div>

                <div className='priceBoxDiv'>

                    <div className='priceBox'>
                        <div className='pricesHeaderDiv'>
                            <div className='hashtagNameDiv'>
                                <div className='nullDiv'></div>
                                <div className='hashtagNameDiv2'>
                                    <div className='hashtagIconDiv'>
                                        <FaHashtag className='hashtagIcon' />
                                    </div>
                                    <span className='HeaderName'>Name</span>
                                </div>
                            </div>
                            <div className='price24ChangeDiv'>
                                <span className='HeaderName'>Price</span>
                                <span className='HeaderName'>24h Changes</span>
                                <span className='HeaderName'>24h Changes</span>
                            </div>
                        </div>
                        {setDatas.map((item) => {
                            return (
                                <div className='coinBox'>
                                    <div className='iconNameDiv'>
                                        <div className='starIconDiv'>
                                            <CiStar className='starIcon' />
                                        </div>
                                        <div className='coinNumNameDiv'>
                                            <span className='coinNum'>{item.coinNum}</span>
                                            <div className='logoNameDiv'>
                                                <img className='coinLogo' src={`${item.coinName}.png`} />
                                                <span className='coinName'>{item.coinName}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='coinPricesDiv'>
                                        <span className='prices'>{item.price}</span>
                                        <span className='prices'>{item.changeP}</span>
                                        <span className='prices'>{item.marketCap}</span>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CryptoPrice 