import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ProfilePage(props) {
  const history = useHistory();
  const { isAuthenticated } = useAuth0();
  useEffect(() => {
    if (!isAuthenticated) history.push('/');
  }, [isAuthenticated]); //eslint-disable-line
  return (
    isAuthenticated && (
      <div id="profilePage">
        <div id="firstDiv">
          <h1>Profile Details</h1>
        </div>
        <div id="secondDiv">
          <h1>Profile</h1>
          <img src={props.data.picture} alt="profile avatar" />
          <div className="rows">
            <label>
              Nickname
              <div>{props.data.nickname}</div>
            </label>
          </div>
          <div className="rows">
            <label>
              email
              <div>{props.data.email}</div>
            </label>
          </div>
          <div className="rows">
            <label>
              Last Profile Update
              <div>{props.data.updated_at.slice(0, 10)}</div>
            </label>
          </div>
          <div className="rows">
            <label id={!props.data.email_verified && 'caution'}>
              Email Verified
              <div>{props.data.email_verified ? 'Yes' : 'No'}</div>
              {!props.data.email_verified && <div>Please Verify Email</div>}
            </label>
          </div>
        </div>
      </div>
    )
  );
}

const mapStateToProps = state => {
  return {
    data: state.loginReducer.userInfo,
  };
};

export default connect(mapStateToProps, {})(ProfilePage);
