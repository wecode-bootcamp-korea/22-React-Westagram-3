import './Login.scss';
import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <section class="westagram-login-wrap">
                <main className="main-wrap">
                    <div className="contetns-wrap">
                        <div className="box-wrap">
                            <div className="login-wrap">
                                <h1>westagram</h1>
                                <div className="input-wrap">
                                    <form>
                                        <div className="login-box">
                                            <div className="id-wrap">
                                                <label>
                                                    <input type="text" name="ID" id="userId" placeholder="전호번호, 사용자 이름 또는 이메일" />
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="password" name="Password" id="userPassWord" placeholder="비밀번호" />
                                                </label>
                                            </div>
                                            <div className="login-button-wrap">
                                                <button type="button" className="btn-login" disabled="disabled">
                                                    <span>로그인</span>
                                                </button>
                                            </div>
                                            <a href="." className="find-pw">비밀번호를 잊으셨나요?</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        );
    }
}



export default Login;