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
import React from "react";
// react plugin used to create datetimepicker

// reactstrap components
import {
  Button,
  Modal,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function SectionJavaScript() {
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="section javascript-components">
        <Container>
          <div className="title">
            <h2>Javascript Components</h2>
          </div>
          <Row id="modals">
            <Col md="6">
              <Button
                className="btn-round"
                color="danger"
                outline
                type="button"
                onClick={toggleModal}
              >
                Want a Modal?
              </Button>
              {/* Modal */}
              <Modal isOpen={modal} toggle={toggleModal}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                    #2 What would you want here?
                  </h5>
                </div>
                <div className="modal-body">
                    #3 What would you like it to say here?
                </div>
                <div className="modal-footer">
                  <div className="left-side">
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={toggleModal}
                    >
                      Never mind
                    </Button>
                  </div>
                  
                </div>
              </Modal>
            </Col>
          </Row>
          <div className="title">
            <h3>Want a Carousel?</h3><small>What Pics?</small>
          </div>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionJavaScript;
