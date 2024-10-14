import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

const project1photos = [
{
  img: "https://picsum.photos/400/800/?grayscale",
  description: "Building a Secure Web App in Azure",
  link: "https://res.cloudinary.com/drewskljl/video/upload/v1728930581/Security-Blog-Video_-_1728930460308_nrxblh.mp4",
},
];


export const Project1 = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Building and Deploying a Web Application in Azure | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">  </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_hoPROJECT1">
          {project1photos.map((data, i) => {
            return (
              <div key={i} className="po_itemPROJECT1">
                 <video
                  src={data.link}
                  controls
                  width="100%"  /* Ensures the video fits the container */
                  style={{ maxWidth: "600px" }}  /* Limits video width for better layout */
                ></video>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
