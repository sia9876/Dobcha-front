import React from  'react'
import './Main.css';
import { Divider,  Button,Carousel} from 'antd';
import logo from '../images/dobcha_logo.png';
import img_banner1 from '../images/img_banner1.png';
import img_banner2 from '../images/img_banner2.png';
import img_donation from '../images/img_donation.png';
import img_volunteer from '../images/img_volunteer.png';

const Main=({history}) => {


    const contentStyle = {
        width:'1200px',
        height: '180px',
        color: '#fff',
        lineHeight: '200px',
        background: '#364d79',
        textAlign: 'center',
      };

      

    return(
        <div className='main_frame'>
            <div className='main_top'>
                <Button style={{ border:'none'}}
                    ><img src={logo} alt ="dobcha_logo" 
                            onClick ={( )=> {history.push('/')}}
                            /></Button>
                <div className='main_click'>
                 <a onClick={() => {history.push('/')}} 
                 style={{padding:'10px', marginRight:'50px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold' 
                }}> 기부  {/* 기부 페이지 생기면 경로 바꾸기*/} </a>

                <a onClick={() => {history.push('/hompage/Volunteer')}} 
                 style={{padding:'10px', marginRight:'30px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold' 
                }}> 봉사활동  {/* 봉사활동 페이지를 만들게 되면 경로 바꾸기*/} </a>
                <a onClick={() => {history.push('/')}} 
                 style={{padding:'10px',marginLeft:'20px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold' 
                }}> 플랫폼 소개  {/* 플랫폼 소개 페이지를 만들게 되면 경로 바꾸기*/} </a>
                </div>

                <div className='main_btn'>
                    <Button block 
                    style={{display:'flex',width: '100px', height: '30px', justifyContent: 'center'
                    ,borderRadius:'5px', marginTop:'15px', marginRight:'15px'}}
                    onClick={()=> {history.push('/login/Login')}}
                    >로그인</Button>
                    <Button block 
                    style={{display:'flex',width: '100px', height: '30px', justifyContent: 'center'
                    ,borderRadius:'5px', marginTop:'15px'}}
                    onClick={()=> {history.push('/registration/Registration')}}
                    >회원가입</Button>
                </div>
            </div>
            <Divider/>



            <div className='main_middle'>
                <div className='main_banner'>
                            <Carousel autoplay>
                <div>
                <img src={img_banner1} alt="img_banner1"/>{/* 경로 추가하기 누르면 해당 기부 페이지로 이동바꾸기*/}
                </div>
                <div>
                <img src={img_banner2} alt="img_banner2"/>{/* 경로 추가하기 누르면 해당 기부 페이지로 이동바꾸기*/}
                </div>
                <div>
                <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
                </div>



                <div className='main_donation'>
                    <Button style={{ border:'none'}}
                        ><img src={img_donation} alt ="btn_donation" 
                                onClick ={( )=> {history.push('./')}} /* 기부메뉴(Donation_Menu) 경로 바꾸기*/
                                /></Button>
                </div>
{/** 나중에 main_donation, main_volunteer 부분 css 바꾸기!! 등록된 종류가 늘어나면...결론: 백엔드와 같이 상의 */}

                <div className='main_volunteer'>
                <Button style={{ border:'none'}}
                    ><img src={img_volunteer} alt ="btn_volunteer" 
                            onClick ={( )=> {history.push('./hompage/Volunteer')}}
                            /></Button>
                </div>
            </div>



            <div className='main_bottom'>
            <a herf = "#" style={{color:'#8c8c8c'}}>돕차 소개</a>
                    <Divider type="vertical"/>
                    <a herf = "#" style={{color:'#8c8c8c'}}>돕차 이용 약관</a>
                    <Divider type="vertical"/>
                    <a herf = "#" style={{color:'#8c8c8c'}}>개인정보 처리 방침 </a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  Dobcha ©2021
            </div>
        </div>
    )
}

export default Main;