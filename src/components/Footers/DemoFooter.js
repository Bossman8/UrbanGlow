/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="/"
                  target="_blank"
                >
                  Urban Glow Esthetics
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/pg/urbanglowesthetics/photos/?ref=page_internal"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/urbanglow_esthetics/"
                  target="_blank"
                >
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Creative Tim
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
