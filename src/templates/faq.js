import React, { useEffect, useState } from "react"
import Breadcrumb from "../components/common/widgets/breadcrubs"
import SEO from "../components/headers/common/SEO"
import MainLayout from "../components/layouts/CommonLayout"

// import Custom Components
// import PageHeader from "../components/common/page-header";
// import Accordion from "../components/features/accordion/accordion";
// import Card from "../components/features/accordion/card";

// import Seo from "../components/Seo"



const QAContainer = ({ qa }) => {

  const { id, expanded, q, a } = qa
  const [show, setShow] = useState(expanded)
  const toggle = () => setShow(!show)

  return (
    <div className="card">
      <div className="card-header" id={id}>
        <h5 className="mb-0">
          <button
            className="btn btn-link"
            type="button"
            data-toggle="collapse"
            data-target={`#collapse${id}`}
            aria-expanded={show}
            aria-controls={`collapse${id}`}
            onClick={toggle}
          >
            {q}
          </button>
        </h5>
      </div>

      <div
        className={`collapse ${show && "show"}`}
        aria-labelledby={`${id}`}
        data-parent="#accordionExample"
      >
        <div className="card-body">
          <p dangerouslySetInnerHTML={{ __html: a }}></p>
        </div>
      </div>
    </div>
  )
}
function FAQ({ pageContext }) {
  const { title, content, SeoMetaData } = pageContext
  const [resultTable, setResultTable] = React.useState([])
  useEffect(() => {
    if (typeof window !== "undefined") {
      let html = new DOMParser().parseFromString(content, "text/html")

      var myTab = html.getElementById("faq-table")

      //loop through rows
      if (myTab.rows && myTab.rows.length > 0) {
        let table = []
        for (let i = 1; i < myTab.rows.length; i++) {
          var objCells = myTab.rows.item(i).cells
          if (
            (objCells.item(0).innerText !== " " &&
              objCells.item(0).innerText !== "") ||
            (objCells.item(1).innerText !== " " &&
              objCells.item(1).innerText !== "")
          ) {
            table.push({
              q: objCells.item(0).innerText,
              a: objCells.item(1).innerText,
            })
          }
        }
        setResultTable(table)
      }
    }
  }, [content])

  return (
    <MainLayout>
      <SEO title={title} page={{ title, SeoMetaData }} />
      <div className="main">
        <h1 className="d-none">FAQ Page</h1>
        <Breadcrumb title={"FAQ"} />

        <section className="faq-section section-b-space">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div
                  className="accordion theme-accordion"
                  id="accordionExample"
                >
                  {resultTable
                    .filter(el => el !== " ")
                    .map((elm, index) => (
                      <>
                        <QAContainer qa={{ ...elm, id: index }} key={index} />
                      </>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
export default React.memo(FAQ)
