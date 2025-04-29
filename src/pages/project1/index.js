import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Link } from "react-router-dom";

const project1photos = [
{
  img: "https://picsum.photos/400/800/?grayscale",
  description: "Execution and Analysis of WannaCry Ransomware",
  link: "https://youtu.be/MQgmoUdVD4A",
},
];


export const Project1 = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Azure Help Desk Simulation | {meta.title} </title>{" "}
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
                  <div className="display-6"> Azure Help Desk Simulation (Tier 1)</div>
                  <br />
                  <div className="fs-3 mb-5"> In this project, I wanted to simulate a helpdesk environment and test my skills as a desk assistant. This projects shows how I configured a common cloud helpdesk environment and troubleshot fake tickets for it. You can see a diagram of the overall structure below.</div>
                  <img  className="po_itemPROJECT1" src="https://res.cloudinary.com/drewskljl/image/upload/v1745959813/Screenshot_2025-04-29_164854_cs1hft.png" />
                  <br />
                  <br />
                  <br />
                  <div className="display-6">1. Deployed Windows Server as a Domain Controller</div>
                  <img  className="po_itemPROJECT1" src="https://res.cloudinary.com/drewskljl/image/upload/v1745963447/1.Screenshot_2025-04-17_184414_rgnc82.png" />
                  <div className="po_itemPROJECT1">Installed the Active Directory Domain Services role and configured a new forest and domain (helpdesk.local). This domain forms the foundation of user and device management for the simulated environment.</div>
                  
                  <div className="display-6">2. Configured DNS and DHCP for Internal Network Communication</div>
                  <img  className="po_itemPROJECT1" src="https://res.cloudinary.com/drewskljl/image/upload/v1745963447/2.Screenshot_2025-04-17_163038_r6kwj4.png" />
                  <div className="po_itemPROJECT1">
                  Set up DNS zones and DHCP scopes to ensure seamless IP address assignment and name resolution across all lab VMs.</div>

                  <div className="display-6">3. Joined Windows 10 Client to Domain</div>
                  <img  className="po_itemPROJECT1" src="https://res.cloudinary.com/drewskljl/image/upload/v1745963447/3.domain_join_success_gmisqf.png" />
                  <div className="po_itemPROJECT1">Successfully joined a Windows 10 Professional client to the helpdesk.local domain. Verified domain membership and authentication through Group Policy and login testing.</div>

                  <div className="display-6">4. Created and Linked Group Policies</div>
                  {/* <img  className="po_itemPROJECT1" src="https://res.cloudinary.com/drewskljl/image/upload/v1745105835/Screenshot_2024-12-07_004138highlight_zbsvkb.png" /> */}
                  <div className="po_itemPROJECT1">Designed and applied GPOs to enforce password complexity, disable USB storage, and customize desktop settings for standard users.</div>

                  <div className="display-6">5. Provisioned Help Desk Users in Active Directory</div>
                  {/* <img  className="po_itemPROJECT1" src="https://res.cloudinary.com/drewskljl/image/upload/v1745105980/Screenshot_2024-12-07_011010_ukomp9.png" /> */}
                  <div className="po_itemPROJECT1">Added Tier 1 staff and test users into AD. Assigned them to appropriate security groups with scoped permissions for safe role-based access.</div>

                  <div className="display-6">6. Enabled Remote Desktop Access for Remote Support Simulation</div>
                  {/* <img  className="po_itemPROJECT1" src="https://res.cloudinary.com/drewskljl/image/upload/v1745106361/Screenshot_2025-04-19_194535_t903nh.png" /> */}
                  <div className="po_itemPROJECT1">Configured RDP access to simulate remote help desk troubleshooting. Verified connectivity between support and client machines.</div>

                  <div className="display-6">7. Resolved Common User Issue: Drive Mapping / Printer / Password Reset</div>
                  {/* <img  className="po_itemPROJECT1" src="https://res.cloudinary.com/drewskljl/image/upload/v1745106610/Screenshot_2024-12-05_190405highlight_ka9xui.png" /> */}
                  <div className="po_itemPROJECT1">Simulated a typical help desk request by resolving a drive mapping failure using Group Policy and verifying success via client login.</div>

                  <div className="display-6">8. Mapped Network Drives via GPO</div>
                  {/* <img  className="po_itemPROJECT1" src="https://res.cloudinary.com/drewskljl/image/upload/v1745106610/Screenshot_2024-12-05_190405highlight_ka9xui.png" /> */}
                  <div className="po_itemPROJECT1">Used Group Policy Preferences to map a shared network drive for all domain users. Validated permissions and availability on login.</div>

                  <div className="display-6">9. Monitored and Analyzed System Logs for Incident Response</div>
                  {/* <img  className="po_itemPROJECT1" src="https://res.cloudinary.com/drewskljl/image/upload/v1745106610/Screenshot_2024-12-05_190405highlight_ka9xui.png" /> */}
                  <div className="po_itemPROJECT1">Used Windows Event Viewer to track failed logins, service restarts, and group policy application events across lab machines.</div>

                  <div className="display-6">10. Handled Local Policy Conflicts for Troubleshooting Simulation</div>
                  {/* <img  className="po_itemPROJECT1" src="https://res.cloudinary.com/drewskljl/image/upload/v1745106610/Screenshot_2024-12-05_190405highlight_ka9xui.png" /> */}
                  <div className="po_itemPROJECT1">Simulated policy corruption and reset local GPOs using gpupdate /force and secedit tools to resolve a broken login or configuration issue.</div>
                  
                  <a 
                    href="https://github.com/bristeele99/tier1-helpdesk-project/tree/main" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit' }} // optional styling
                  >
                    <div className="po_itemPROJECT2">
                      GitHub Project: https://github.com/bristeele99/tier1-helpdesk-project/tree/main
                    </div>
                  </a>


              </div>
              
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
