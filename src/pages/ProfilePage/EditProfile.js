import React from 'react';
import {Check} from 'lucide-react';
import { useLocation, useNavigate} from 'react-router-dom';
const EditProfile = ({route, navigation}) => {
    const location = useLocation();
    const navigate = useNavigate();
  const {name, accountName, profileimg} = location.state

  return (
    <div style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px'}}>
      <button onClick={() => navigate(-1)}>
        <Check name="close-outline" style={{fontSize: '35px'}} />
      </button>
      <p style={{fontSize: '16px', fontWeight: 'bold'}}>Edit Profile</p>
      <button onClick={() => navigate(-1)}>
        <Check name="checkmark" style={{fontSize: '35px', color: '#3493D9'}} />
      </button>
    </div>
    <div style={{padding: '20px',justifyContent:'center', textAlign: 'center'}}>
      <img src={profileimg} alt="Profile" style={{width: '80px',margin:'auto',textAlign:'center' ,height: '80px', borderRadius: '50%'}} />
      <p style={{color: '#3493D9'}}>Change profile photo</p>
    </div>
    <div style={{padding: '10px'}}>
      <div>
        <p style={{opacity: 0.5}}>Name</p>
        <input placeholder="name" defaultValue={name} style={{fontSize: '16px', borderBottom: '1px solid #CDCDCD'}} />
      </div>
      <div style={{padding: '10px 0'}}>
        <p style={{opacity: 0.5}}>Username</p>
        <input placeholder="accountname" defaultValue={accountName} style={{fontSize: '16px', borderBottom: '1px solid #CDCDCD'}} />
      </div>
      <div style={{padding: '10px 0'}}>
        <input placeholder="Website" style={{fontSize: '16px', borderBottom: '1px solid #CDCDCD'}} />
      </div>
      <div style={{padding: '10px 0'}}>
        <input placeholder="Bio" style={{fontSize: '16px', borderBottom: '1px solid #CDCDCD'}} />
      </div>
    </div>
    <div>
      <p style={{margin: '10px 0', padding: '10px', color: '#3493D9', borderTop: '1px solid #EFEFEF', borderBottom: '1px solid #EFEFEF'}}>Switch to Professional account</p>
      <p style={{margin: '10px 0', padding: '10px', color: '#3493D9', borderTop: '1px solid #EFEFEF', borderBottom: '1px solid #EFEFEF'}}>Personal information setting</p>
    </div>
  </div>
    );
  };
export default EditProfile;