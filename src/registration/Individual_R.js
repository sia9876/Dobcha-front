
import ReactDOM from "react-dom";
import React, {useEffect, useState} from 'react'
import "antd/dist/antd.css";
import "./Individual_R.css";
import { Divider, Button } from "antd";
import { Form, Input, InputNumber, Select, Checkbox, AutoComplete } from 'antd';
import logo from '../images/dobcha_logo.png'



const Individual_R =({history}) => {
  
 
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.net', '.co.kr'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
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

            <div className="content">
                <div className="step"></div>
                <Divider />
                <Form
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                <div className="form">
                    <div className="in">
                
                        < Form.Item
                            name="e-mail"
                            label="E-Mail"
                            rules={[
                        {
                            type: 'email',
                            message: '이메일을 입력하세요',
                        },
                        {
                            required: true,
                            message: '이메일을 입력하시오.',
                        },
                        ]}
                        >
                        <Input />
                        <Form.Item
                            name="password"
                            label="비밀번호"
                            rules={[
                            {
                                required: true,
                                message: '비밀번호를 입력하시오.',
                            },
                            ]}
                            hasFeedback
                        >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="비밀번호 확인"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: '비밀번호 확인을 진행하십시오.',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('비밀번호가 일치하지 않습니다.'));
                            },
                        }),
                        ]}
                    >
                    <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="Agency_Name"
                        label="단체(법인)명"
                        rules={[
                        {
                            required: true,
                            message: '단체명을 입력하십시오.',
                            whitespace: true,
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="전화번호"
                        rules={[
                        {
                            required: true,
                            message: '전화번호를 입력하세요',
                        },
                        ]}
                    >
                        <Input
                        style={{
                            width: '100%',
                        }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="website"
                        label="Website"
                        rules={[
                        {
                            required: true,
                            message: '단체(법인) 사이트를 입력하세요',
                        },
                        ]}
                    >
                        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
                        <Input />
                        </AutoComplete>
                    </Form.Item>
                    
                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                        {
                            validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('이용약관에 동의해주십시오.')),
                        },
                        ]}
                    
                    >
                        <Checkbox>
                        <a href="">  Dobcha의 이용약관 및 개인정보 수집, 이용에 동의 </a>합니다.
                        </Checkbox>
                    </Form.Item>
                    
                    
                    <Form.Item >
                        <Button type="primary" htmlType="submit"
                        onClick={()=>{history.push("/registration/R_Done")}}>
                        가입하기
                        </Button>
                    </Form.Item>
                    </Form.Item>
                    
                    </div>
                    </div>
            </Form>
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
            
                 
        
    );
    
}                 
export default Individual_R;
