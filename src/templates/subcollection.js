import React, { useState } from 'react';
import CommonLayout from '../components/layouts/CommonLayout';
import ProductList from '../components/common/productList.js';
import { Container, Row} from 'reactstrap';
import FilterPage from '../components/common/filter.js';
import FilterProvider from '../helpers/filter/FilterProvider';
import { graphql } from 'gatsby';
import Breadcrumb from '../components/common/widgets/breadcrubs';
import SEO from '../components/headers/common/SEO';

const LeftSidebar = (props) => {
  const {subCategory} = props.pageContext;

   
  
    

    const [sidebarView,setSidebarView] = useState(false)
    
    const openCloseSidebar = (props) => {
        if(sidebarView){
            setSidebarView(!sidebarView)
        } else {
            setSidebarView(!sidebarView)
        }
    }
    const location = props.location?.pathname.split("/")[2];
    return (
      <FilterProvider>
        <CommonLayout title="collection" parent="home" >
        <SEO
        title={subCategory?.SeoMetaData?.title || subCategory?.name}
        category={subCategory}
      />
          <Breadcrumb 
          title={`${subCategory?.name}`} 
          parent={[ `collections/${location}`]}
          />
            <section className="section-b-space ratio_asos">
                <div className="collection-wrapper">
                    <Container>
                        <Row>
                            <FilterPage sm="3" sidebarView={sidebarView} closeSidebar={() => openCloseSidebar(sidebarView)} data={props.data}  />
                            <ProductList colClass="col-xl-3 col-6 col-grid-box" layoutList=''  openSidebar={() => openCloseSidebar(sidebarView)}  data={props.data} allcategory={props.data.allCategories} subCategory={subCategory}/>
                        </Row>
                    </Container>
                </div>
            </section>
        </CommonLayout>
        </FilterProvider>
    )
}

export default LeftSidebar;



export const query = graphql`
query getAllSubcollection($ido: String) {
  metadata {
    id
    storeLocation {
      _id
      name
    }
  }
  categories: allCategories {
    nodes {
      _id
      name
      itemCount
      subCategories {
        name
      }
    }
  }
  allProducts(filter: { subCategory: { eq: $ido } }) {
    nodes {
      _id
      title
      description
      quantity
      price
      oldPrice
      rating
      isDefaultShippingEnabled
      isDeliverable

      isPickup
      isShippable
      condition
      seoMetaData {
        slug
      }
      storeLocation {
        _id
        name
        state
        zipCode
        address
      }
      images {
        childImageSharp {
    fluid(maxWidth: 175, maxHeight: 175, quality: 100) {
        src
        srcSet
      }
          gatsbyImageData(
            width: 160
            height: 175
            quality: 100
            layout: CONSTRAINED
          )
        }
      }
      thumbnail {
        childImageSharp {
    fluid(maxWidth: 75, maxHeight: 75, quality: 100) {
        src
        srcSet
      }
    
           gatsbyImageData(width: 75, height: 75, quality: 100, layout: FIXED)
         }
       }
       category {
         _id
         name
       }
       subCategory
       createdAt
     }
   }
 }
 `;
