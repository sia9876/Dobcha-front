import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./Agency_R.css";
import { Layout, Divider, Button, Steps } from "antd";
import { Form, Input, InputNumber, Select, Checkbox } from 'antd';
import logo from '../images/dobcha_logo.png'
import Item from "antd/lib/list/Item";

const { Header, Footer, Content } = Layout;
const {Step} = Steps;
const steps = [
    {
      title: 'First',
      content: 'First-content',
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ];
  


const Agency_R =({history}) => {
    const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };    
 
    return(
    
        <div className="frame">
            <div className="top2">
                <Button style={{ border: "none" }}><img src={logo} alt="dobcha_logo"
                    onClick={() => { history.push('/'); } } /></Button>
                <div className="click">
                    <a
                        onClick={() => {
                            history.push("/");
                        } }
                        style={{
                            padding: "15px",
                            marginRight: "50px",
                            color: "#000000",
                            fontSize: "17px",
                            fontWeight: "bold"
                        }}
                    >
                        {" "}
                        기부 {/* 기부 페이지 생기면 경로 바꾸기*/}{" "}
                    </a>

                    <a
                        onClick={() => {
                            history.push("/");
                        } }
                        style={{
                            padding: "15px",
                            marginRight: "30px",
                            color: "#000000",
                            fontSize: "17px",
                            fontWeight: "bold"
                        }}
                    >
                        {" "}
                        봉사활동 {/* 봉사활동 페이지를 만들게 되면 경로 바꾸기*/}{" "}
                    </a>
                    <a
                        onClick={() => {
                            history.push("/");
                        } }
                        style={{
                            padding: "15px",
                            marginLeft: "20px",
                            color: "#000000",
                            fontSize: "17px",
                            fontWeight: "bold"
                        }}
                    >
                        {" "}
                        플랫폼 소개 {/* 플랫폼 소개 페이지를 만들게 되면 경로 바꾸기*/}{" "}
                    </a>
                </div>
                <div className="btn">
                    <Button
                        block
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
                        } }
                    >
                        로그인
                    </Button>
                    <Button
                        block
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
                        } }
                    >
                        회원가입{" "}
                    </Button>
                    {/* 회원가입 페이지로 경로 바꾸기*/}
                </div>
            </div>
            <Divider />
            <h2> 기관 회원 가입</h2>
            <div className="content">
                <div className="step"><>
                    <Steps current={current}>
                        {steps.map(item => (<Step key={Item.title} title={Item.title} />
                        ))}
                    </Steps>
                    <div className="steps-conent">{steps[current].content}</div>
                    <div className="steps-action">

                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => next()}>
                                Next
                            </Button>
                        )} {current === steps.length - 1 && (
                            <Button type="primary" onClick={() => {history.push("/")}}>
                                Done
                            </Button>
                        )} {current > 0 && (
                            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                            </Button>
                        )}
                </div>
                </>
            </div>
            <Divider />
            <div className="signupForm">

            </div>

            
        
        
            <div className="bottom">
                <a herf="#" style={{ color: "#8c8c8c" }}>
                    돕차 소개
                </a>
                <Divider type="vertical" />
                <a herf="#" style={{ color: "#8c8c8c" }}>
                    돕차 이용 약관
                </a>
                <Divider type="vertical" />
                <a herf="#" style={{ color: "#8c8c8c" }}>
                    개인정보 처리 방침
                </a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dobcha ©2021
                </div>
            </div>
            
      </div>           
        
    );
    
                        }                  
export default Agency_R;