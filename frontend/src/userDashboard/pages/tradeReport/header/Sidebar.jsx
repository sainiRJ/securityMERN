import React from 'react';

class MainMenu extends React.Component {
    render() {
        return (
            <div className="main-menu menu-fixed menu-dark menu-accordion menu-shadow" data-scroll-to-active="true">
                <div className="navbar-header">
                    <ul className="nav navbar-nav flex-row">
                        <li className="nav-item me-auto">
                            <a className="navbar-brand" href="#">
                                <span className="brand-logo"></span>
                                <h2 className="brand-text">Mehta Security</h2>
                            </a>
                        </li>
                        <li className="nav-item nav-toggle">
                            <a className="nav-link modern-nav-toggle pe-0" data-bs-toggle="collapse">
                                <i className="d-block d-xl-none text-primary toggle-icon font-medium-4" data-feather="x"></i>
                                <i className="d-none d-xl-block collapse-toggle-icon font-medium-4 text-primary" data-feather="disc" data-ticon="disc"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="shadow-bottom"></div>
                <div className="main-menu-content">
                    <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                        <li className="nav-item">
                            <a className="d-flex align-items-center" href="https://www.mehtasecurity.in/backend/home">
                                <i data-feather="home"></i>
                                <span className="menu-title text-truncate" data-i18n="Dashboards">Dashboard </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center" href="https://www.mehtasecurity.in/backend/profile">
                                <i data-feather='user'></i>
                                <span className="menu-title text-truncate" data-i18n="inventory">Profile</span>
                            </a>
                        </li>
                        <li>
                            <a className="d-flex align-items-center" href="#">
                                <i data-feather="circle"></i>
                                <span className="menu-item text-truncate" data-i18n="Forgot Password">Position</span>
                            </a>
                            <ul className="menu-content">
                                <li>
                                    <a className="d-flex align-items-center" href="view-equity-report">
                                        <span className="menu-item text-truncate" data-i18n="Basic">Equity</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="d-flex align-items-center" href="view-fno-report">
                                        <span className="menu-item text-truncate" data-i18n="Basic">F&O</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="d-flex align-items-center" href="view-comodity-report">
                                        <span className="menu-item text-truncate" data-i18n="Cover">Commodity</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* Similarly, add other menu items here */}
                    </ul>
                </div>
            </div>
        );
    }
}

export default MainMenu;
