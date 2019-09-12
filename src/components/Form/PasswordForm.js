import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';

const PasswordField = ({ label, name, value, handleChange, togglePassword, placeholder, showPassword, error }) => {
  return (
    <FormGroup className="form__form-group">
      <Label for="password" className="form__form-group-label">{label}</Label>
      <div className="form__form-group-field">
        <div className="form__form-group-icon">
          <KeyVariantIcon />
        </div>
        <Input
          name={name}
          value={value}
          onChange={handleChange}
          type={togglePassword ? 'text' : 'password'}
          placeholder={placeholder}
        />
        <button
          type="button"
          className={`form__form-group-button${togglePassword ? ' active' : ''}`}
          onClick={showPassword}
        >
          <EyeIcon />
        </button>
      </div>
      <div className="text-danger">{error}</div>
    </FormGroup>
  )
}

const PasswordForm = (props) => {
  const {
    rePassword,
    oldPassword,
    newPassword,
    handleSubmit,
    handleChange,
    showPassword,
    togglePassword,
    errors,
  } = props;

  const { oldPasswordError, newPasswordError, rePasswordError } = errors;

  return (
    <Form className="form">
      <PasswordField
        label="Old Password"
        name="oldPassword"
        togglePassword={togglePassword}
        placeholder="Old Password"
        handleChange={handleChange}
        error={oldPasswordError}
        value={oldPassword}
        showPassword={showPassword}
      />
      <PasswordField
        label="New Password"
        name="newPassword"
        togglePassword={togglePassword}
        placeholder="New Password"
        handleChange={handleChange}
        error={newPasswordError}
        value={newPassword}
        showPassword={showPassword}
      />
      <PasswordField
        label="Re-type New Password"
        name="rePassword"
        togglePassword={togglePassword}
        placeholder="Retype Password"
        handleChange={handleChange}
        error={rePasswordError}
        value={rePassword}
        showPassword={showPassword}
      />
      <button className="btn btn-primary account__btn account__btn--small" onClick={handleSubmit}>
        Change Password
      </button>
    </Form>
  );
}

export default PasswordForm;

