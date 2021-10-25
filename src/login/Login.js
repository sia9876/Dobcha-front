import React from  'react'
import './Login.css';
import { Divider,Form, Input, Button, Checkbox } from 'antd';
import { BankFilled ,LockFilled} from '@ant-design/icons';
import logo from '../images/dobcha_logo.png'
//import line from '../images/line.png'



const Login=({location,history}) => {
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }
    
    
    return(
        <div className ='container'>
            <div className='loginWrapper'>
                <div className='top'>
                    {/* 로고 버튼 클릭 시 홈 화면으로 이동 */}
                    <button ><img src={logo} alt ="dobcha_logo" 
                    onClick ={( )=> {history.push('/')}}
                    /></button>
                </div>
                <div className='middle'>
                    <div className='middle_left'>
                        <div className="title"> 기관 회원</div>
                        <div className="aa">
                        <div className="aa1">{<BankFilled />}</div>
                        <div className="aa2">
                        <Input placeholder="ID" />
                        </div>
                        </div>
                        <div className="bb">
                        <div className="bb1">{<LockFilled />}</div>
                        <div className="bb2">
                        <Input placeholder="PW" />
                        </div>
                        </div>

                        <div className="cc">
                            <div className="cc1">
                            <Checkbox onChange={onChange}>자동 로그인</Checkbox>
                            </div>
                            <div className="cc2">
                            <a onClick={() => {history.push('/login/Finding_ip')}} style={{color:'#000000'}}>
                                ID/PW 찾기
                            </a>
                            </div>
                        </div>
                        
                        <Button type='primary' onClick={() => {
                            history.push('/')}} 
                            style={{display:'flex',width: '300px', height: 'auto', justifyContent: 'center',marginLeft:'40px',marginRight:'40px',marginBottom:'10px'
                            , border:'none',borderRadius:'5px'}}> 로그인</Button>

                        <Button type='primary' onClick={() => {
                            history.push('/')}} 
                            style={{display:'flex',width: '300px', height: 'auto', justifyContent: 'center',marginLeft:'40px',marginRight:'40px'
                            , border:'none',borderRadius:'5px'}}> 기관 회원가입</Button>
                       
                        {/* 기관 버튼부분 링크 바꾸기!!
                        로그인: 기관 로그인 시 나오는 페이지(Agency)
                        회원가입: 기관 회원가입 페이지 (Agency_R) */}
                    
                    </div>
                  
                    <div className = 'middle_right'>
                    <div className='middle_left'>
                        <div className="title1"> 개인 회원</div>
                        <div className="aaa">
                        <div className="aaa1">{<BankFilled />}</div>
                        <div className="aaa2">
                        <Input placeholder="ID" />
                        </div>
                        </div>
                        <div className="bbb">
                        <div className="bbb1">{<LockFilled />}</div>
                        <div className="bbb2">
                        <Input placeholder="PW" />
                        </div>
                        </div>

                        <div className="ccc">
                            <div className="ccc1">
                            <Checkbox onChange={onChange}>자동 로그인</Checkbox>
                            
                            </div>
                            <div className="ccc2">
                            <a onClick={() => {history.push('/login/Finding_ip')}} style={{color:'#000000'}}>
                                ID/PW 찾기
                            </a>
                            </div>
                        </div>
                        
                        <Button type='primary' onClick={() => {
                            history.push('/')}} 
                            style={{display:'flex',width: '300px', height: 'auto', justifyContent: 'center',marginLeft:'40px',marginRight:'40px',marginBottom:'10px'
                            , border:'none',borderRadius:'5px'}}> 로그인</Button>

                        <Button type='primary' onClick={() => {
                            history.push('/')}} 
                            style={{display:'flex',width: '300px', height: 'auto', justifyContent: 'center',marginLeft:'40px',marginRight:'40px'
                            , border:'none',borderRadius:'5px'}}> 개인 회원가입</Button>
                       
                        {/* 개인 버튼부분 링크 바꾸기!!
                        로그인: 개인 로그인 시 나오는 페이지(Individual)
                        회원가입: 개인 회원가입 페이지 (Individual_R) */}
                            
                    </div>

                </div>

               
                    <div style={{float:'right', marginTop:'30px'}}>
                    <a herf = "#" style={{color:'#8c8c8c'}}>돕차 소개</a>
                    <Divider type="vertical"/>
                    <a herf = "#" style={{color:'#8c8c8c'}}>돕차 이용 약관</a>
                    <Divider type="vertical"/>
                    <a herf = "#" style={{color:'#8c8c8c'}}>개인정보 처리 방침 </a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  Dobcha ©2021
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Login;