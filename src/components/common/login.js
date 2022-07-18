import React, { useState } from "react"
import { connect } from "react-redux"
import { Container, Row, Form, Label, Input, Col } from "reactstrap"
import { Link, navigate } from "gatsby"
import { getUser, getIsAuthenticated, login } from "../../reducers/user"

const Login = ({ loginUser }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState(false)
  // const[step,setStep] = useState(1);

  const handleEmail = e => {
    setEmail(e.target.value)
  }

  const handlePassword = e => {
    setPassword(e.target.value)
  }
  const handleProcessing = (processing = false, error = null) => {
    setProcessing({ processing, error })
  }

  const submitForm = async e => {
    e.preventDefault()
    handleProcessing(true)

    loginUser({ email: email, password: password })
      .then(data => {
        handleProcessing()
        navigate("/dashboard")
      })
      .catch(err => {
        if (err.response.status === 400) {
console.log(err.response.data)
          if (err.response.data.error) {
            console.log(err)

            setError(err.response.data.error)
            // handleProcessing(false, err.response.data.error)
          } else if (err.response.data.errors) {
            console.log(err)

            setError(err.response.data.errors)
            // handleProcessing(false, [{ msg: err.response.data.error }])
          }
        }
        //   else if (err.response.status === 500) setOpenSnackbar(true);
      })
  }
  return (
    <section className="login-page section-b-space">
      <Container>
        <Row>
          <Col lg="6">
            <h3>Login</h3>
            <div className="theme-card">
              <Form className="theme-form">
                {error && (
                  <div className="row">
                    <div className="col">
                      <div className="alert alert-danger w-100" role="alert">
                        {typeof error === "string" ? (
                          error
                        ) : (
                          <ul>
                            {error.map((err, i) => (
                              <li key={i} style={{ display: "list-item" }}>
                                {err.msg}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                <div className="form-group">
                  <Label for="email">Email</Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    required=""
                    onChange={handleEmail}
                    defaultValue={email}
                  />
                </div>
                <div className="form-group">
                  <Label for="review">Password</Label>
                  <Input
                    type="password"
                    className="form-control"
                    id="review"
                    placeholder="Enter your password"
                    required=""
                    onChange={handlePassword}
                    defaultValue={password}
                  />
                </div>
                <Link
                  to="/login"
                  className="btn btn-solid"
                  onClick={submitForm}
                >
                  Login
                </Link>

                <div className="form-footer mt-3">
                  <Link to="/forgetpassword/" className="forgot-link">
                    Forgot Your Password?
                  </Link>
                </div>
              </Form>
            </div>
          </Col>
          <Col lg="6" className="right-login">
            <h3>New Customer</h3>
            <div className="theme-card authentication-right">
              <h6 className="title-font">Create A Account</h6>
              <p>
                Sign up for a free account at our store. Registration is quick
                and easy. It allows you to be able to order from our shop. To
                start shopping click register.
              </p>
              <Link to="/page/account/register" className="btn btn-solid">
                Create an Account
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const mapStateToProps = state => ({
  loggedInUser: getUser(state),
  isAuthenticated: getIsAuthenticated(state),
})

const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(login(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
