import React from "react";
import { graphql ,Link} from "gatsby";
import { Col, Row ,Container} from "reactstrap";
import CommonLayout from "../components/layouts/CommonLayout";
import Breadcrumb from "../components/common/widgets/breadcrubs";
import { GatsbyImage } from "gatsby-plugin-image";
import slugify from "slugify";
import SEO from "../components/headers/common/SEO";




const BlogList = (props) => {
  console.log(props);
    const blogs = props.data.blogs.nodes

    
    const { metadata } = props.pageContext
    const { title, SeoMetaData } = metadata.pageSettings.blog
    const SeoTitle = metadata?.pageSettings?.blog?.title || "Blog Page"


  return (
    <CommonLayout parent="home" title="blog">
        <Breadcrumb title="blog" />
        <SEO title={title} page={{ title: SeoTitle, SeoMetaData }} />
            <section className="section-b-space blog-page ratio2_3">
                <Container>
                    <Row>
                    {blogs.length === 0 ? (
                  <div className="text-center">
                    <p>No posts for the moment</p>
                  </div>
                    ):(
                        <Col>
                        {blogs.map((post, i) => (
                        <Row className="blog-media" key={i}>
            <Col xl="6">
              <div className="blog-left">
              <Link
                              to={`/${metadata?.pageSettings?.blog?.SeoMetaData
                                ?.slug || "blog"}/${post.slug ||
                                slugify(post.title).toLowerCase()}/`}
                            >
                              <GatsbyImage
                                image={
                                  post?.featuredImage?.childImageSharp?.gatsbyImageData
                                }
                              />
                            </Link>
              </div>
            </Col>
            <Col xl="6">
              <div className="blog-right">
                <div>
                <Link
                                to={`/${metadata?.pageSettings?.blog
                                  ?.SeoMetaData?.slug || "blog"}/${post.slug ||
                                  slugify(post.title).toLowerCase()}/`}
                              >
                                <h4>{post.title}</h4>
                              </Link>
                 
                  <ul className="post-social">
                    <li>   Posted By : {post.author || "Anonymous"}</li>
                  
                  </ul>
                  <p>{post.excerpt}</p>
                </div>
              </div>
            </Col>
          </Row>
         ))} 
      {/* <!--Blog List start--> */}

                        </Col>
                    )}
                    </Row>
                </Container>
            </section>
        </CommonLayout>
     
             
  );
};

export default BlogList;
export const query = graphql`
  query MyBlogPosts {
    blogs: allPages(filter: { type: { eq: "blog" } }) {
      nodes {
        title
        content
        slug
        excerpt
        author
        createdAt
        featuredImage {
          childImageSharp {
            gatsbyImageData(  width: 400, quality: 100 )
          }
        }
      }
    }
  }
`