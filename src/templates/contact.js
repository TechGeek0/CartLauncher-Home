import React, { useEffect } from "react"
import Breadcrumb from "../components/common/widgets/breadcrubs"
import SEO from "../components/headers/common/SEO"
import CommonLayout from "../components/layouts/CommonLayout"




import { encode } from "../utils"
import Form from "./form"

function ContactOne({ pageContext }) {
  const {  content,title,SeoMetaData } = pageContext

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.google.com/recaptcha/api.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  }, [])

  let index = content.indexOf("{{form}}")
  // 8 is lenght of {{form}}
  let content1 = content.slice(0, index)
  let content2 = content.slice(index + 8)

  return (
    <CommonLayout>
      <SEO title={title} page={{ title, SeoMetaData }} />
      <div className="main">
        <Breadcrumb title="Contact" />
        <div className="contact-page section-b-space">
          <div className="container">
            <div
              className="page-header page-header-big text-center"
              style={{
                backgroundImage: `url(/assets/images/contact-header-bg.jpg)`,
              }}
            >
              <h1 className="page-title ">
                Contact us
                <p className="">keep in touch with us</p>
              </h1>
            </div>
          </div>
          {/* <div className="container section-b-space">
                            <div className="col-lg-12 map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d50059.12775918716!2d72.78534673554945!3d21.16564923510817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1533793756956"
                                    allowFullScreen></iframe>
                            </div></div> */}
          <div className="page-content">
            <div className="container">
              <div
                dangerouslySetInnerHTML={{
                  __html: `${content1}`,
                }}
              />
              <Form encode={encode} />
              <div
                dangerouslySetInnerHTML={{
                  __html: `${content2}`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  )
}

export default React.memo(ContactOne)
