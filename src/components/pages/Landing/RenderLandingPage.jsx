import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
//!made the data iteratable and localized in renderingPageData
import { downloadDataUrl, graphsArr } from './landingPageData';
import { disparityInsights } from './landingPageData';
//!made the data iteratable and localized in renderingPageData
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* //!Graphs Section: Add code here for the graphs section for your first ticket */}
      <div className="graphs-section">
        {graphsArr.map((n, i) => {
          return (
            <div className="img-containers" key={i}>
              <img src={n.src} alt={n.alt} />
              <h2>{n.alt}</h2>
            </div>
          );
        })}
      </div>
      {/* //!Graphs Section: Add code here for the graphs section for your first ticket */}
      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          View the Data
        </Button>
        {/* //!added dowloadable option */}
        <a href={downloadDataUrl} download={true}>
          <Button
            type="default"
            style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          >
            Download the Data
          </Button>
        </a>
        {/* //!added dowloadable option */}
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      <div>
        {/* //!Bottom Section: Add code here for the graphs section for your first ticket */}
        <div className="bottom-section">
          <h1>Systemic Disparity Insights</h1>
          <div id="dataContainer">
            {disparityInsights.map(n => {
              return (
                <div key={n.id} className="disparity-insights-containers">
                  <h2>{n.stat}</h2>
                  <h3>{n.description}</h3>
                </div>
              );
            })}
          </div>
          <div>
            <a
              href="https://humanrightsfirst.org/library/uscis-records-reveal-systemic-disparities-in-asylum-decisions/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                type="default"
                style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
              >
                Read More
              </Button>
            </a>
          </div>
        </div>
        {/* //!Bottom Section: Add code here for the graphs section for your first ticket */}
        <div className="back-to-top-container">
          <p onClick={() => scrollToTop()} className="back-to-top">
            Back To Top ^
          </p>
        </div>
      </div>
    </div>
  );
}
export default RenderLandingPage;
