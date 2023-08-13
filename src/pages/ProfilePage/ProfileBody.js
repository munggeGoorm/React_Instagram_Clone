import React, {useState} from 'react';
import { PenTool } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ProfileBody = ({
  name,
  accountName,
  profileImage,
  followers,
  following,
  post,
  description,
}) => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px' }}>
        <img
          src={profileImage}
          alt={name}
          style={{
            width: 80,
            height: 80,
            borderRadius: '80%',
            marginRight: '20px'
          }}
        />
        <div>
          <h2 style={{ margin: 0 }}>{accountName}</h2>
        </div>
        <div style={{ marginLeft: 'auto',backgroundColor: '#7D756D', borderRadius:'98%'}}>
          <p> 프로필편집</p>
        </div>
        <div style={{ marginLeft: 'auto',backgroundColor: '#7D756D', borderRadius:'80%' }}>
          <button>
            <p> 보관된 스토리 보기</p>
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ alignItems: 'center', flex: 1, textAlign: 'center' }}>
          <p>게시물 {post}</p>
        </div>
        <div style={{ alignItems: 'center', flex: 1, textAlign: 'center' }}>
          <p>팔로워 {followers}</p>

        </div>
        <div style={{ alignItems: 'center', flex: 1, textAlign: 'center' }}>
          <p>팔로잉 {following}</p>
        </div>
      </div>
      <div style={{ alignItems: 'center', marginLeft:'60px',flex: 1, textAlign: 'left' }}>
          {description}
        </div>
    </div>
  );
};
export const ProfileButtons = ({id, name, accountName, profileImage}) => {
  const navigate = useNavigate();
  const [follow, setFollow] = useState(false);
  return (
    <>
{id === 0 ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '5px 0' }}>
          <button
            onClick={() =>
              navigate(`EditProfile`, {
                state: {
                  name: name,
                  accountName: accountName,
                  profileImage: profileImage,
                },
              })
            }
            style={{
              width: '100%',
              height: 35,
              borderRadius: 5,
              borderColor: '#DEDEDE',
              borderWidth: '1px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <span style={{ fontWeight: 'bold', fontSize: 14, letterSpacing: 1, opacity: 0.8 }}>
              Edit Profile
            </span>
          </button>
          <button
            onClick={() => setFollow(!follow)}
            style={{
              width: '42%',
              height: 35,
              borderRadius: 5,
              backgroundColor: follow ? 'transparent' : '#3493D9',
              borderColor: '#DEDEDE',
              borderWidth: follow ? '1px' : '0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: follow ? 'black' : 'white',
            }}>
            {follow ? 'Following' : 'Follow'}
          </button>
          <button
            style={{
              width: '42%',
              height: 35,
              borderRadius: 5,
              borderWidth: '1px',
              borderColor: '#DEDEDE',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            Message
          </button>

          <button
            style={{
              width: '10%',
              height: 35,
              borderRadius: 5,
              borderWidth: '1px',
              borderColor: '#DEDEDE',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
          </button>
        </div>
      


        
      ) : (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            onClick={() => setFollow(!follow)}
            style={{
              width: '42%',
              height: 35,
              borderRadius: 5,
              backgroundColor: follow ? 'transparent' : '#3493D9',
              borderColor: '#DEDEDE',
              borderWidth: follow ? '1px' : '0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: follow ? 'black' : 'white',
            }}>
            {follow ? 'Following' : 'Follow'}
          </button>
          <button
            style={{
              width: '42%',
              height: 35,
              borderRadius: 5,
              borderWidth: '1px',
              borderColor: '#DEDEDE',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              
            }}>
            <p style={{color:"gray"}}>Message</p>
          </button>

          <button
            style={{
              width: '10%',
              height: 35,
              borderRadius: 5,
              borderWidth: '1px',
              borderColor: '#DEDEDE',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <PenTool name="chevron-down" style={{ fontSize: 20, color: 'black' }} />
          </button>
        </div>
      )}
    </>
  );
};