import logoFooter from '../assets/logo_footer.png';

function Footer() {
    return <footer>
        <div className="footer_box">
            <div className="footer_item">
                <img src={logoFooter} alt="logo" />
                <h3>© 2020 Kasa. All rights reserves</h3>
            </div>
        </div>

    </footer>

}
export default Footer;