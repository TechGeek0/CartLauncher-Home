import React from "react";

import Breadcrubs from "../components/common/widgets/breadcrubs";
import SEO from "../components/headers/common/SEO";
// import Seo from "../components/common/Seo";

import CommonLayout from "../components/layouts/CommonLayout";
import "./general.scss";

const General = ({ pageContext }) => {
  const { title, content } = pageContext;
  return (
    <CommonLayout>
      <Seo title={title} page={{ title, SeoMetaData }} />
  
      <Breadcrubs title={title} />

      <section className="section-b-space">
        <div className="collection-wrapper">
          <div className="container">
            <div className="row">
              <div className="collection-content col">
                <div className="page-main-content">
                  <h2 className="pb-4">{title}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<div>${content}</div>`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CommonLayout>
  );
};

export default General;
