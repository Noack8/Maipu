function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-columns">
          {/* Columna 1 */}
          <div className="footer-col">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Maipu Global Service System</a></li>
              <li><a href="#">Service Products</a></li>
              <li><a href="#">Warranty Policy</a></li>
              <li><a href="#">Technical Training System</a></li>
            </ul>
          </div>
          {/* Columna 2 */}
          <div className="footer-col">
            <h3>News&Case</h3>
            <ul>
              <li><a href="#">News</a></li>
              <li><a href="#">Video</a></li>
            </ul>
          </div>
          {/* Columna 3 */}
          <div className="footer-col">
            <h3>About Maipu</h3>
            <ul>
              <li><a href="#">Company Profile</a></li>
              <li><a href="#">Milestone</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          {/* Columna 4 */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <p>Tel: +86-28-65544850</p>
            <p>E-mail: overseas@maipu.com</p>
          </div>
        </div>

        {/* Línea inferior de Copyright */}
        <div className="footer-bottom">
          <p>COPYRIGHT: 2013-2020 Maipu International 蜀ICP备0505998号-1 technical support: strongdigital</p>
          <div className="footer-legal">
            <a href="#">Legal Declaration</a> | <a href="#">Privacy Protection</a> | <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer