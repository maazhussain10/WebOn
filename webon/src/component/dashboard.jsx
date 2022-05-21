import React, { Component } from "react";
import DashboardNavbar from "./dashboardNabar";

class Dashboard extends Component {
    state = {};
    render() {
        return (
            <>
                <DashboardNavbar />
                HELLOOO
                <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-5 col-md-12">
                                <div
                                >
                                    <div
                                        className="card"
                                        style={{ width: "15rem" }}
                                    >
                                        <div className="card-body cardname">
                                            <h5
                                                className="card-title "
                                            >
asca                                            </h5>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
            </>
        );
    }
}

export default Dashboard;
