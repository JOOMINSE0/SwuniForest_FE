import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from './pages/Main/main.js';
import MainBtn1 from './Components/MainBtn/mainBtn1.js';
import MainBtn2 from './Components/MainBtn/mainBtn2.js';
import MainBtn3 from './Components/MainBtn/mainBtn3.js';
import MainBtn4 from './Components/MainBtn/mainBtn4.js';
import Login1 from './pages/Login/login1.js';
import Login2 from './pages/Login/login2.js';
import Signup1 from './pages/Signup/signup1.js';
import Signup2 from './pages/Signup/signup2.js';
import Preguestbook from './pages/Guestbook/preGuestbook.js';
import Postguestbook from './pages/Guestbook/postGuestbook.js';
import VisitorRanking from './pages/VisitorRanking/visitorRanking.js';
import UploadBoard from './pages/UploadBoard/uploadboard.js';
import Sidebar from './Components/Sidebar/sidebar.js';
import Lineup from './pages/Lineup/Lineup.js';
import Stamp from './pages/Stamp/stamp.js';
import StampList from './pages/Stamp/stamp_list.js';
import StampDetail1 from './pages/Stamp/stamp_detail_1';
import StampDetail2 from './pages/Stamp/stamp_detail_2';
import StampDetail3 from './pages/Stamp/stamp_detail_3';
import StampDetail4 from './pages/Stamp/stamp_detail_4';
import StampDetail5 from './pages/Stamp/stamp_detail_5';
import StampDetail6 from './pages/Stamp/stamp_detail_6';
import LostBoard from './pages/LostNoticeBoard/lost_board.js';
import LostList from './pages/LostNoticeBoard/lost_list.js';
import LostWrite from './pages/LostNoticeBoard/lost_write.js';
import Booth from './pages/Booth/booth.js';
import StampSuccess1 from './pages/Stamp/stamp_success_1.js';
import StampSuccess2 from './pages/Stamp/stamp_success_2.js';
import StampSuccess3 from './pages/Stamp/stamp_success_3.js';
import StampSuccess4 from './pages/Stamp/stamp_success_4.js';
import StampSuccess5 from './pages/Stamp/stamp_success_5.js';
import StampSuccess6 from './pages/Stamp/stamp_success_6.js';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Main />} /> {/*메인페이지*/}
      <Route path='/mainBtn1' element={<MainBtn1/>} /> {/*mainBtn1Component*/}
      <Route path='/mainBtn2' element={<MainBtn2/>} /> {/*mainBtn2Component*/}
      <Route path='/mainBtn3' element={<MainBtn3/>} /> {/*mainBtn3Component*/}
      <Route path='/mainBtn4' element={<MainBtn4/>} /> {/*mainBtn4Component*/}
      <Route path='/sidebar' element={<Sidebar/>} /> {/*sidebarComponent*/}
      <Route path="/login1" element={<Login1 />} /> {/*로그인1*/}
      <Route path="/login2" element={<Login2 />} /> {/*로그인2*/}
      <Route path="/signup1" element={<Signup1 />} /> {/*회원가입1*/}
      <Route path="/signup2" element={<Signup2 />} /> {/*회원가입2*/}
      <Route path="/preGuestbook" element={<Preguestbook />} /> {/*로그인전방명록*/}
      <Route path="/postGuestbook" element={<Postguestbook />} /> {/*로그인후방명록*/}
      <Route path="/visitorRanking" element={<VisitorRanking />} /> {/*방문율랭킹*/}
      <Route path="/uploadboard" element={<UploadBoard />}></Route> {/*방명록 업로드*/}
      <Route path="/lineup" element={<Lineup />} /> {/*라인업*/}
      <Route path="/stamp" element={<Stamp />} /> {/*도장판메인*/}
      <Route path="/stamp_list" element={<StampList />} /> {/*도장판리스트*/}
      <Route path="/stamp_detail_1" element={<StampDetail1 />} /> {/*도장판_사회과학*/}
      <Route path="/stamp_detail_2" element={<StampDetail2 />} /> {/*도장판_아트앤디자인*/}
      <Route path="/stamp_detail_3" element={<StampDetail3 />} /> {/*도장판_미래산업융합*/}
      <Route path="/stamp_detail_4" element={<StampDetail4 />} /> {/*도장판_인문대학*/}
      <Route path="/stamp_detail_5" element={<StampDetail5 />} /> {/*도장판_자율전공*/}
      <Route path="/stamp_detail_6" element={<StampDetail6 />} /> {/*도장판_과학기술융합*/}
      <Route path="/stamp_success_1" element={<StampSuccess1 />} /> {/*도장판_사회과학_절반*/}
      <Route path="/stamp_success_2" element={<StampSuccess2 />} /> {/*도장판_아트앤디자인_절반*/}
      <Route path="/stamp_success_3" element={<StampSuccess3 />} /> {/*도장판_미래산업융합_절반*/}
      <Route path="/stamp_success_4" element={<StampSuccess4 />} /> {/*도장판_인문대학_절반*/}
      <Route path="/stamp_success_5" element={<StampSuccess5 />} /> {/*도장판_자율전공_절반*/}
      <Route path="/stamp_success_6" element={<StampSuccess6 />} /> {/*도장판_과학기술융합_절반*/}
      <Route path="/lost_board" element={<LostBoard />} /> {/*분실물게시판메인*/}
      <Route path="/lost_list" element={<LostList />} /> {/*분실물게시판리스트*/}
      <Route path="/lost_write" element={<LostWrite />} /> {/*분실물게시판작성*/}
      <Route path="/booth" element={<Booth />} /> {/*부스배치도*/}
      <Route path="*" element={<div>없는 페이지</div>} />
    </Routes>

  );
}

export default App;
