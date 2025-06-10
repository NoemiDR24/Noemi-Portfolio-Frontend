import './Footer.css'; 

function Footer() {

  return (
    <footer className="footer-container">
        <div className="row">
            <div className="copyright">
                <span>© Copyright NDR 2025</span>
            </div>
            <ul className="social">
                <li><a href="https://github.com/NoemiDR24" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                <li><a href="https://linkedin.com/in/noemidelgadilloroldan" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
            </ul>
        </div>
    </footer>
  );
};

export default Footer;