import React, { Component } from "react"
import { Link } from "gatsby"
import { LoadingOverlay, Loader } from "react-overlay-loader"
import "react-overlay-loader/styles.css"

import { encode } from "../utils"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"/
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formData: {
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        message: "",
      },
      sending: false,
      isSent: false,
    }
  }

  handleSubmit = e => {
    this.setState({ sending: true })

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Contact Form", ...this.state.formData }),
    })
      .then(res => {
        this.setState({ sending: false, isSent: true })
      })
      .catch(err => {
        this.setState({ sending: false })
        console.log(err)
      })

    e.preventDefault()
  }

  handleChange = e =>
    this.setState({
      formData: Object.assign(this.state.formData, {
        [e.target.name]: e.target.value,
      }),
    })

  render() {
    return (
      <section className="contact-page section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              {this.state.isSent ? (
                <div className="col text-center pt-5">
                  {/* <FontAwesomeIcon
                    icon={faCheckCircle}
                    size="5x"
                    className="text-success mb-5"
                  /> */}
                  <h4>Your Message has been Successfully Submitted</h4>

                  <Link
                    to={"/"}
                    className="button"
                    style={{ marginTop: "50px" }}
                  >
                    Return Home
                  </Link>
                </div>
              ) : (
                <LoadingOverlay
                  style={this.state.sending ? { backgroundColor: "#eee" } : {}}
                >
                  <Loader text="Sending ..." loading={this.state.sending} />
                  <form
                    name="Contact Form"
                    className="theme-form"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value="Contact Form"
                    />
                    <input
                      type="hidden"
                      name="bot-field"
                      onChange={this.handleChange}
                    />
                    <div className="form-row">
                      <div className="col-md-6">
                        <label htmlFor="firstname">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstname"
                          name="firstname"
                          placeholder="Enter Your name"
                          required
                          value={this.state.formData.firstname}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastname"
                          name="lastname"
                          placeholder="Last Name"
                          required
                          value={this.state.formData.lastname}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone">Phone number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="Enter your number"
                          required
                          value={this.state.formData.phone}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email"
                          required
                          value={this.state.formData.email}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="message">Write Your Message</label>
                        <textarea
                          className="form-control"
                          placeholder="Write Your Message"
                          required
                          id="message"
                          name="message"
                          rows="6"
                          value={this.state.formData.message}
                          onChange={this.handleChange}
                        ></textarea>
                      </div>
                      <div className="col-md-12">
                        <button className="btn btn-solid" type="submit">
                          Send Your Message
                        </button>
                      </div>
                    </div>
                  </form>
                </LoadingOverlay>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
