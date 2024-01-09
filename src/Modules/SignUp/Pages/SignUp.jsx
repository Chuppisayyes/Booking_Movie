import React from 'react'
import Header from '../../../Components/Header'
import "./signup.min.css"
const SignUp = () => {
    return (
        <section className="sign_up">
            <form className="form_container">
                <div className="logo_container">
                    <i class="fa-regular fa-user"></i>
                </div>
                <div className="title_container">
                    <p className="title">Đăng Ký</p>
                </div>
                <br />
                <div className="input_container">
                    <label htmlFor="">Tên người dùng:</label>
                    <input placeholder='@Full-name' title='full-name' name='input-name' type="text" className='input_field' />
                </div>
                <div className="input_container">
                    <label htmlFor="">Email:</label>
                    <input placeholder="@mail.com" title="email" name="input-name" type="text" className="input_field" id="email_field" />
                </div>
                <div className="input_container">
                    <label htmlFor="">Tài khoản:</label>
                    <input placeholder='@User' title='user' name='input-name' type="text" className='input_field' />
                </div>
                <div className="input_container">
                    <label htmlFor="">Mật Khẩu:</label>
                    <div className="hidden-pass">
                        <input placeholder="@Password" title="password" name="input-name" type="password" className="input_field" id="password_field" />
                        <i class="fa-regular fa-eye-slash"></i>
                    </div>
                </div>
                <button type="submit" className="sign-up_btn">
                    <span>Đăng ký</span>
                </button>
                <a className="note">Bạn đã có Tài Khoản? Đăng Nhập </a>
            </form>
        </section>
    )
}

export default SignUp