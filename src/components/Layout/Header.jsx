import React, { useEffect } from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import { setUserInfo } from '../../state/actionCreators';

const { primary_accent_color } = colors;

function HeaderContent(props) {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  //!this handles state for if the user is logged in, and then sets state
  useEffect(() => {
    if (isAuthenticated) {
      props.setUserInfo(user);
    } else {
      props.setUserInfo('');
    }
  }, [isAuthenticated]); //eslint-disable-line
  //!this decides between the login or logout function
  const advancedProfileStatus = () => {
    if (isAuthenticated) logout();
    else loginWithRedirect();
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div id="navBarSelection">
        <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Graphs
        </Link>
        {/* //! added this ternary express to either render login or logout */}
        <div
          onClick={() => advancedProfileStatus()}
          style={{ color: '#E2F0F7', paddingRight: '75px', cursor: 'pointer' }}
        >
          {!isAuthenticated ? 'Login' : 'Logout'}
        </div>
        {isAuthenticated && (
          <Link
            to="/profile"
            id="profileContainer"
            style={{ color: '#E2F0F7' }}
          >
            Profile
          </Link>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    data: state.loginReducer,
  };
};
export default connect(mapStateToProps, { setUserInfo })(HeaderContent);
