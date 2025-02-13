import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Testimonials() {
  return (
    <MDBContainer fluid className="py-5 gradient-custom">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="12">
          <div className="text-center mb-4 pb-2">
            <MDBIcon fas icon="quote-left" size="3x" className="text-white" />
          </div>
          <MDBCard>
            <MDBCardBody className="px-4 py-5">
              <MDBCarousel showIndicators showControls dark>
                <MDBCarouselItem className="active">
                  <MDBRow className="d-flex justify-content-center">
                    <MDBCol lg="10" xl="8">
                      <MDBRow>
                        <MDBCol lg="4" className="d-flex justify-content-center">
                          <img
                            src="images/aditya1.jpg"
                            className="rounded-circle shadow-1 mb-4 mb-lg-0"
                            alt="Aditya Pratap Singh"
                            width="150"
                            height="150"
                          />
                        </MDBCol>
                        <MDBCol
                          md="9"
                          lg="7"
                          xl="8"
                          className="text-center text-lg-start mx-auto mx-lg-0"
                        >
                          <h4 className="mb-4">
                            Aditya Pratap Singh - Web Developer
                          </h4>
                          <p className="mb-0 pb-3">
                            <a href="https://www.linkedin.com/in/aditya-pratap-singh-524a70283/" target="_blank" rel="noopener noreferrer">
                              LinkedIn Profile
                            </a>
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBCarouselItem>
              </MDBCarousel>
            </MDBCardBody>
          </MDBCard>
          <div className="text-center mt-4 pt-2">
            <MDBIcon fas icon="quote-right" size="3x" className="text-white" />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
