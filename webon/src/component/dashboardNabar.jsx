import React, { Component } from "react";

class DashboardNavbar extends Component {
    state = { username: "" };

    render() {
        return (
            <div>
                <nav
                    className="navbar navbar-expand-lg navbar-light bg-light"
                    style={{ borderBottom: "1px solid grey" }}
                >
                    <div className="container-fluid">
                        <a
                            href="/"
                            style={{ textDecoration: "none" }}
                            className="navbar-brand"
                        >
                            <a
                                className="navbar-brand"
                                href="/"
                                style={{
                                    marginLeft: "10px",
                                    fontSize: "20px",
                                    color: "#000000",
                                    fontWeight: "bolder",
                                }}
                            >
                                WebOn
                            </a>
                        </a>
                        <span className="navbar-text">
                            <ul className="navbar-nav form-inline me-auto mb-8 mb-lg-0">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                    >
                                        BRAND
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </div>
                </nav>
            </div>
        );
    }
}

export default DashboardNavbar;
