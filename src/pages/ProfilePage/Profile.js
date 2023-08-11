

import React from 'react';
import { Plus } from 'lucide-react';
import { ProfileBody,ProfileButtons } from '../ProfilePage/ProfileBody';
const Profile = () => {
  let circles = [];
  let numberOfCircles = 10;

  for (let index = 0; index < numberOfCircles; index++) {
    circles.push(
      <div key={index} style={{ margin: '0 5px' }}>
        {index === 0 ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 60,
              height: 60,
              borderRadius: '50%',
              border: '1px solid black',
              opacity: 0.7,
            }}
          >
            <Plus name="plus" style={{ fontSize: 40, color: 'black' }} />
          </div>
        ) : (
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              backgroundColor: 'black',
              opacity: 0.1,
            }}
          ></div>
        )}
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
        <div style={{ width: '100%', padding: 10 }}>
          <ProfileBody
            name="이요나"
            accountName="YODAFRIEND"
            profileImage={require('../../images/인스타프로필.jpg')}
            followers="388"
            following="35"
            post="12"
            description="이요나"
          />
          <ProfileButtons
            id={0}
            name="이요나"
            accountName="YODAFRIEND"
            profileImage={require('../../images/인스타프로필.jpg')}
          />
        </div>
        <div>
            <textarea
                style={{
                    padding: 10,
                    letterSpacing: 1,
                    fontSize: 14,
                }}
                defaultValue="Story Highlights" 
            ></textarea>
            <span
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    overflowX: 'auto',
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingRight: 10,
                }}
            >
                {circles}
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
            <div style={{ width: '80%', height: '200px', backgroundColor: '#eee' }}>
          <img style={{height:'200px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX2qFRKLH6BFpL7q8Qk0tBsBka_sln5T6b4hgsF8gfXQ&s"></img>
        </div>
        <div style={{ width: '80%', height: '200px', backgroundColor: '#eee' }}>
        <img style={{height:'200px'}} src=""></img>
        </div>
        <div style={{ width: '80%', height: '200px', backgroundColor: '#eee' }}>
        <img style={{height:'200px'}} src="data:image/jpeg;base64,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"></img>
        </div>
      </div>
        </div>
    </div>
);
};

export default Profile;