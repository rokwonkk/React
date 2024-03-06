//https://zeakd.github.io/react-naver-maps/
import { Container as MapDiv, NaverMap, Marker } from 'react-naver-maps' //npm i react-naver-maps
import { useState, useEffect } from 'react';

const App = () => {

  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const success = ({coords, timestamp}) => {
    setLat(coords.latitude);   // 위도
    setLon(coords.longitude);  // 경도

    // alert(coords.latitude + " : " + coords.longitude);
  }

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      alert("위치 정보가 지원되지 않습니다.");
    }
    navigator.geolocation.watchPosition(success);
  }

  useEffect(()=>{
    getUserLocation();
  })

  return (
    <div>
      <MapDiv
        style={{
          height: 400,
        }}
      >
        <NaverMap>
          <Marker defaultPosition={{ lat: 35.1657475, lng: 129.1323359 }} />
        </NaverMap>
      </MapDiv>

    </div>
  );
}

export default App;