import React from 'react';
import './_formEx.scss';


export default () =>{
  return (
    <form className="formEx">
      <h2 className="formEx__title">create account</h2>
      <div className="formEx__group">
        <label className="formEx__label" htmlFor="name">Name</label>
        <input type='text' className="input input--border input--default-bg formEx__input" placeholder="enter your name" />
      </div>

      <div className="formEx__group">
        <label className="formEx__label" htmlFor="email">email</label>
        <input type='email' className="input input--border input--default-bg formEx__input" placeholder="enter your email"/>
        <span>we are not facebook, we never share your info.</span>
      </div>

      <div className="formEx__group">
        <label className="formEx__label" htmlFor="name">password</label>
        <input type='password' className="input input--border input--default-bg formEx__input" placeholder="enter your password" />
        <span>password must be at least 8 characters.</span>
      </div>

      <div className="formEx__group">
        <label className="formEx__label" htmlFor="name">retype password</label>
        <input type='password' className="input input--border input--default-bg formEx__input" placeholder="retype your password" />
      </div>
      <label class="checkbox">
        <p>I'did not read the terms but I agree.</p>
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>

      <a className="btn btn--block btn--blue formEx__btn" href="#submit">Signup</a>
    </form>
  );
}
