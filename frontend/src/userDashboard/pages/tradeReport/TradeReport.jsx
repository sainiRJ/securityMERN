import React from 'react';
import Sidebar from './header/Sidebar';
class TradeReport extends React.Component {
    render() {
        return (
          <>
          <Sidebar></Sidebar>
            <div className="app-content content">
                <div className="content-overlay"></div>
                <div className="header-navbar-shadow"></div>
    
                <div className="content-wrapper container-xxl p-0">
                    <div className="content-header row">
                        <div className="content-header-left col-md-9 col-12 mb-2">
                            <div className="row breadcrumbs-top">
                                <div className="col-12">
                                    <h2 className="content-header-title float-start mb-0">Trade Report</h2>
                                    <div className="breadcrumb-wrapper">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="https://www.mehtasecurity.in/backend/home">Dashboard</a></li>
                                            <li className="breadcrumb-item active">Report</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-header-right text-md-end col-md-3 col-12 d-md-block d-none"></div>
                    </div>
    
                    <div className="content-body">
                        <section id="basic-datatable">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card p-1 table-responsive">
                                        <table className="datatables-basic table table-bordered user_tradereport_datatable">
                                            <thead>
                                                <tr>
                                                    <th>Script Name</th>
                                                    <th>Exchange</th>
                                                    <th>Sell/Buy</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Trade Value</th>
                                                    <th>BUY/SELL</th>
                                                    <th>Price</th>
                                                    <th>Sell Value</th>
                                                    <th>LTP</th>
                                                    <th>Date</th>
                                                    <th>Time</th>
                                                    <th>P / L Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* You need to map over your data and render rows here */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default TradeReport;
