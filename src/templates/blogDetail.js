import React from 'react';
import { Container, Form, Input, Label, Row ,Col } from 'reactstrap';
import CommonLayout from '../components/layouts/CommonLayout';
import { graphql } from 'gatsby';
import Breadcrumb from '../components/common/widgets/breadcrubs';
import SEO from '../components/headers/common/SEO';


const BlogDetail = ({location,data,pageContext}) => {

    const queryPost = data.post
    const { breadCrumbLink } = pageContext
    console.log(queryPost)
  
    let options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    }
    return (
        <CommonLayout parent="home" title="blog" subTitle="blog detail">
             <Breadcrumb
          title={`${queryPost?.title}`}
          adClass="breadcrumb-nav border-0 mb-0"
          parent={breadCrumbLink}
        />
        <SEO title={`${queryPost?.title}`} description={queryPost.except} />
            <section className="blog-detail-page section-b-space ratio2_3">
                <Container>
                    <Row>
                        <Col sm="12" className="blog-detail">
                            <img src={'/assets/images/about/about_us.jpg'} className="img-fluid blur-up lazyload" alt="" />
                            <h3> <h3>{queryPost?.title}</h3></h3>
                            <ul className="post-social">
                                <li>{" "}
                  {new Date(queryPost?.createdAt).toLocaleDateString(
                    "en-US",
                    options
                  )}</li>
                                <li>Posted By : {queryPost?.author || "Anonymous"}</li>
                                
                            </ul>
                            
                        </Col>
                    </Row>
                    {/* <Row className="section-b-space blog-advance">
                        <Col lg="6">
                            <div><Media src={'/assets/images/blog/1.jpg'} className="img-fluid blur-up lazyload bg-img" alt="" /></div>
                        </Col>
                        <Col lg='6'>
                            <div><Media src={'/assets/images/blog/2.jpg'} className="img-fluid blur-up lazyload bg-img" alt="" /></div>
                        </Col>
                        <Col lg="6">
                            <ul>
                                <li>Donec ut metus sit amet elit consectetur facilisis id vel turpis.</li>
                                <li>Aenean in mi eu elit mollis tincidunt.</li>
                                <li>Etiam blandit metus vitae purus lacinia ultricies.</li>
                                <li>Nunc quis nulla sagittis, faucibus neque a, tempus metus.</li>
                                <li>In scelerisque libero ut mi ornare, a porttitor neque pulvinar.</li>
                                <li>Morbi molestie lacus blandit interdum sodales.</li>
                                <li>Curabitur eleifend velit molestie eleifend interdum.</li>
                                <li>Vestibulum fringilla tortor et lorem sagittis,</li>
                                <li>In scelerisque libero ut mi ornare, a porttitor neque pulvinar.</li>
                                <li>Morbi molestie lacus blandit interdum sodales.</li>
                                <li>Curabitur eleifend velit molestie eleifend interdum.</li>
                            </ul>
                        </Col>
                        <Col lg="6">
                            <p>Nulla quam turpis, commodo et placerat eu, mollis ut odio. Donec pellentesque egestas consequat.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc at
                            urna dolor. Mauris odio nisi, rhoncus ac justo eget, lacinia iaculis lectus. Pellentesque id
                        dapibus justo. Nunc venenatis non odio sed luctus. Etiam sit amet elit massa.</p>
                            <p>Phasellus quis lorem eros. Aliquam non tincidunt nibh. Nulla quis interdum neque. Mauris volutpat
                            neque eu nunc ornare ullamcorper. Sed neque velit, lobortis eget tellus in, pellentesque ornare
                            nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                            Maecenas rutrum nisi non nibh egestas lacinia. Cras ut tellus sit amet lacus consequat dictum
                        nec id sapien. Ut pellentesque ac ex ut elementum. Morbi mollis volutpat neque eu volutpat.</p>
                            <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla
                            bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper
                            tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean
                            suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu.
                            Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec
                            facilisis erat tempor quis. Vestibulum eu vestibulum ex. Maecenas luctus orci sed blandit
                        fermentum. In vulputate eu metus a faucibus. Suspendisse feugiat condimentum congue.</p>
                        </Col>
                    </Row> */}
                    {/* <Row className="section-b-space">
                        <Col sm="12">
                            <ul className="comment-section">
                                <li>
                                    <div className="media"><Media src={'/assets/images/avtar.jpg'} alt="Generic placeholder image" />
                                        <div className="media-body">
                                            <h6>Mark Jecno <span>( 12 Jannuary 2021 at 1:30AM )</span></h6>
                                            <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis
                                            fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer
                                            faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique
                                            odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat
                                            lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus
                                            sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis
                                        erat tempor quis. Vestibulum eu vestibulum ex.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media"><Media src={'/assets/images/2.jpg'} alt="Generic placeholder image" />
                                        <div className="media-body">
                                            <h6>Mark Jecno <span>( 12 Jannuary 2021 at 1:30AM )</span></h6>
                                            <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis
                                            fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer
                                            faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique
                                            odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat
                                            lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus
                                            sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis
                                        erat tempor quis. Vestibulum eu vestibulum ex.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media"><Media src={'/assets/images/20.jpg'} alt="Generic placeholder image" />
                                        <div className="media-body">
                                            <h6>Mark Jecno <span>( 12 Jannuary 2021 at 1:30AM )</span></h6>
                                            <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis
                                            fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer
                                            faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique
                                            odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat
                                            lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus
                                            sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis
                                        erat tempor quis. Vestibulum eu vestibulum ex.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                    </Row> */}
                    <Row className="blog-contact">
                        <Col sm="12">
                            <h2>Leave Your Comment</h2>
                            <Form className="theme-form">
                                <Row>
                                    <Col md="12">
                                        <Label for="name">Name</Label>
                                        <Input type="text" className="form-control" id="name" placeholder="Enter Your name"
                                            required="" />
                                    </Col>
                                    <Col md="12">
                                        <Label for="email">Email</Label>
                                        <Input type="text" className="form-control" id="email" placeholder="Email" required="" />
                                    </Col>
                                    <Col md="12">
                                        <Label for="exampleFormControlTextarea1">Comment</Label>
                                        <textarea className="form-control" placeholder="Write Your Comment"
                                            id="exampleFormControlTextarea1" rows="6"></textarea>
                                    </Col>
                                    <Col md="12">
                                        <button className="btn btn-solid" type="submit">Post Comment</button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default BlogDetail;
export const query = graphql`
  query MyPost($id: String) {
    post: pages(type: { eq: "blog" }, id: { eq: $id }) {
      createdAt
      title
      content
      excerpt
      author
      slug
      id
    }
  }
`