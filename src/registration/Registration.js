import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./Registration.css";
import {Divider, Button} from "antd";
import logo from '../images/dobcha_logo.png'

const Registration = ({history}) => {

    return (
        <div className='frame'>
            <div className="top2">
                <Button style={{
                        border: "none"
                    }}><img
                    src={logo}
                    alt="dobcha_logo"
                    onClick={() => {
                history.push('/')
            }}/></Button>
                <div className="click">
                    <a
                        onClick={() => {
                            history.push("/");
                        }}
                        style={{
                            padding: "15px",
                            marginRight: "50px",
                            color: "#000000",
                            fontSize: "17px",
                            fontWeight: "bold"
                        }}>
                        {" "}
                        기부 {/* 기부 페이지 생기면 경로 바꾸기*/}{" "}
                    </a>

                    <a
                        onClick={() => {
                            history.push("/");
                        }}
                        style={{
                            padding: "15px",
                            marginRight: "30px",
                            color: "#000000",
                            fontSize: "17px",
                            fontWeight: "bold"
                        }}>
                        {" "}
                        봉사활동 {/* 봉사활동 페이지를 만들게 되면 경로 바꾸기*/}{" "}
                    </a>
                    <a
                        onClick={() => {
                            history.push("/");
                        }}
                        style={{
                            padding: "15px",
                            marginLeft: "20px",
                            color: "#000000",
                            fontSize: "17px",
                            fontWeight: "bold"
                        }}>
                        {" "}
                        플랫폼 소개 {/* 플랫폼 소개 페이지를 만들게 되면 경로 바꾸기*/}{" "}
                    </a>
                </div>
                <div className="btn">
                    <Button
                        block="block"
                        style={{
                            display: "flex",
                            width: "100px",
                            height: "30px",
                            justifyContent: "center",
                            borderRadius: "5px",
                            marginTop: "15px",
                            marginRight: "15px"
                        }}
                        onClick={() => {
                            history.push("/login/Login");
                        }}>
                        로그인
                    </Button>
                    <Button
                        block="block"
                        style={{
                            display: "flex",
                            width: "100px",
                            height: "30px",
                            justifyContent: "center",
                            borderRadius: "5px",
                            marginTop: "15px"
                        }}
                        onClick={() => {
                            history.push("/registration/Registration");
                        }}>
                        회원가입{" "}
                    </Button>
                    {/* 회원가입 페이지로 경로 바꾸기*/}
                </div>
            </div>
            <Divider/>

            
                <div className="step">
                    <div className="step1"><h1>회원 구분 선택</h1></div>
                    <Divider type="vertical"/>
                    <div className="step2"><h1>회원 정보 입력</h1></div>
                    <Divider type="vertical"/>
                    <div className="step3"><h1>회원 가입 완료</h1></div>
                </div>
            <Divider/>
            <div className="content">
            <div className="ag">
                <div className="in">
                <Button style={{
                      width: '300px',
                      height: '100px'
                    }}>
                        <a
                            onClick={() => {
                                history.push("/registration/Agency_R");
                            }}>
                            <h1>기관 회원가입 하기</h1></a>
                    </Button>        
             <Divider />
                    <Button style={{
                      width: '300px',
                      height: '100px'
                    }}>
                        <a
                            onClick={() => {
                                history.push("/registration/Individual_R");
                            }}>
                            <h1>개인 회원가입 하기</h1></a>

                    </Button>
                </div>
            </div>
            </div>
            
            <div className="bottom">
                <a herf="#" style={{
                    color: "#8c8c8c"
                }}>
                돕차 소개
            </a>
            <Divider type="vertical"/>
            <a herf="#" style={{
                    color: "#8c8c8c"
                }}>
                돕차 이용 약관
            </a>
            <Divider type="vertical"/>
            <a herf="#" style={{
                    color: "#8c8c8c"
                }}>
                개인정보 처리 방침 
            </a >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dobcha ©2021

            </div>
        </div>
    )
}

export default Registration;
