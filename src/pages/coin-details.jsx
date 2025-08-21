import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import Spinner from "../components/Spinner";
import CoinChart from "../components/CoinChart";
const API_URL = import.meta.env.VITE_COIN_API_URL;

const CoinDetailPage = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoin = async () => {
            try {
                const response = await fetch(`${API_URL}/${id}`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                setCoin(data);
            } catch (error) {
                console.error("Fetch error:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }   
        fetchCoin();
    }, [id]);

    return ( 
        <div className="coin-details-container">
            <Link to="/" className="back-link">Back to Home</Link>

            <h1 className="coin-details-title">
                {coin ? `${coin.name} (${coin.symbol.toUpperCase()})` : "Coin Details"}
            </h1>

            {loading && <Spinner />}
            {error && <div className="error">Error: {error}</div>}

            {!loading && !error && (
                <>
                    <img src={coin.image.large} alt={coin.name} className="coin-datail-image" />

                    <p>{coin.description.en.split('. ')[0] + '.'}</p>

                    <div className="coin-details-info">
                        <h3>Rank: {coin.marke_cap_ran}</h3>
                        <h3>Current Price: €{coin.market_data.current_price.eur.toLocaleString()}</h3>
                        <h4>Market Cap: €{coin.market_data.market_cap.eur.toLocaleString()}</h4>
                        <h4>24h High: €{coin.market_data.high_24h.eur.toLocaleString()}</h4>
                        <h4>24h Low: €{coin.market_data.low_24h.eur.toLocaleString()}</h4>
                        <h4>24h Price Change: €{coin.market_data.price_change_24h.toFixed(2)} ({coin.market_data.price_change_percentage_24h.toFixed(2)})%</h4>
                        <h4>Circulating Supply: {coin.market_data.circulating_supply.toLocaleString()}</h4>
                        <h4>Total Supply: {coin.market_data.total_supply?.toLocaleString() || 'N/A'}</h4>
                        <h4>
                        All-Time High: €{coin.market_data.ath.eur.toLocaleString()} on{' '}
                        {new Date(coin.market_data.ath_date.eur).toLocaleDateString()}
                        </h4>
                        <h4>
                        All-Time Low: €{coin.market_data.atl.eur.toLocaleString()} on{' '}
                        {new Date(coin.market_data.atl_date.eur).toLocaleDateString()}
                        </h4>
                        <h4>
                        Last Updated: {new Date(coin.last_updated).toLocaleDateString()}
                        </h4>
                    </div>

                    <CoinChart coinId={coin.id} />

                    <div className="coin-details-links">
                        {coin.links.homepage[0] && (
                        <p>
                            🌐{' '}
                            <a
                            href={coin.links.homepage[0]}
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                            Website
                            </a>
                        </p>
                        )}
                        {coin.links.blockchain_site[0] && (
                        <p>
                            🧩{' '}
                            <a
                            href={coin.links.blockchain_site[0]}
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                            Blockchain Explorer
                            </a>
                        </p>
                        )}
                        {coin.categories.length > 0 && (
                        <p>Categories: {coin.categories.join(', ')}</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
 
export default CoinDetailPage;