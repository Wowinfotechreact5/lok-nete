import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
      const dispatch = useDispatch();
      const navigate = useNavigate();

      const { loading, error, isAuthenticated } = useSelector(
            (state) => state.auth
      );

      const [form, setForm] = useState({
            mobileNo: "",
            password: "",
      });

      const [formError, setFormError] = useState("");

      useEffect(() => {
            if (isAuthenticated) {
                  navigate("/");
            }
      }, [isAuthenticated, navigate]);

      const handleChange = (e) => {
            setForm({
                  ...form,
                  [e.target.name]: e.target.value,
            });
      };

      const handleLogin = () => {
            setFormError("");

            if (!form.mobileNo || !form.password) {
                  setFormError("All fields are required");
                  return;
            }

            if (form.mobileNo.length !== 10) {
                  setFormError("Mobile number must be 10 digits");
                  return;
            }

            const payload = {
                  mobileNo: form.mobileNo,
                  password: form.password,
                  roleID: 1,
                  companyID: 1,
            };

            dispatch(loginUser(payload));
      };

      return (
            <div className="login-container">
                  <div className="login-card">
                        <h2 className="login-title">Admin Login</h2>
                        <p className="login-subtitle">
                              Please login to access the admin panel
                        </p>

                        {(formError || error) && (
                              <div className="login-error">
                                    {formError || error}
                              </div>
                        )}

                        <div className="login-field">
                              <label>Mobile Number</label>
                              <input
                                    type="text"
                                    name="mobileNo"
                                    maxLength={10}
                                    placeholder="Enter mobile number"
                                    value={form.mobileNo}
                                    onChange={handleChange}
                              />
                        </div>

                        <div className="login-field">
                              <label>Password</label>
                              <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    value={form.password}
                                    onChange={handleChange}
                              />
                        </div>

                        <button
                              className="login-btn"
                              onClick={handleLogin}
                              disabled={loading}
                        >
                              {loading ? "Logging in..." : "Login"}
                        </button>
                  </div>
            </div>
      );
};

export default Login;
