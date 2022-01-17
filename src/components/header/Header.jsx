import "./header.css";

function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Learn Everything About Bitcoin Investing & Trading.</span>
            </div>
            <img
                className="headerImg"
                src="https://thumbs.dreamstime.com/b/contemporary-minimal-collage-art-digital-currency-concept-bitcoin-ethereum-crypto-money-wallets-successful-traiding-229035103.jpg"
                alt=""
            />
        </div>
    );
}

export default Header;