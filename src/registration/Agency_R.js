import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./Agency_R.css";
import { Layout, Divider, Button, Steps} from "antd";
import logo from '../images/dobcha_logo.png'

const { Header, Footer, Content } = Layout;
const {Step} = Steps;



const Agency_R =({history}) => {
        
 
    return(
     <Layout>
            <Header>
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
            </Header>
            <Content>
            
                <div className="step">
                    <Steps style={{ marginTop: "30px" }}>
                        <Step title="회원 구분 선택" />
                        <Step title="약관 동의" />
                        <Step title="정보 입력" />
                        <Step title="회원 가입 완료" />
                    </Steps>
                </div>
                <Divider />

                <div className="signupForm">
                    
                </div>

            
        </Content>
        <Footer>

                <a herf="#" style={{ color: "#8c8c8c" }}>
                    돕차 소개
                </a>
                <Divider type="vertical" />
                <a herf="#" style={{ color: "#8c8c8c" }}>
                    돕차 이용 약관
                </a>
                <Divider type="vertical" />
                <a herf="#" style={{ color: "#8c8c8c" }}>
                    개인정보 처리 방침{" "}
                </a>

            </Footer>
    </Layout>
  
    );

                    }
    
                    
export default Agency_R;