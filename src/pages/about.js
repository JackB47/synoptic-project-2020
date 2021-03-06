import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About Pick and Mix Candy" />
      <div className="generic-content">
        <h2 className="generic-content__title">About Us</h2>
        <p className="generic-content__body">
          Nulla elit qui ipsum veniam aute mollit ex eiusmod ad cupidatat duis
          nulla proident nisi. Pariatur officia deserunt incididunt duis ad
          dolore. Duis aute reprehenderit ut eiusmod occaecat ullamco irure
          ullamco et. Cupidatat veniam incididunt eu ullamco in id nisi nisi qui
          dolor labore sit labore veniam. Aliqua voluptate Lorem ipsum dolore
          magna ullamco ullamco aliquip amet.
        </p>

        <p className="generic-content__body">
          Nulla elit qui ipsum veniam aute mollit ex eiusmod ad cupidatat duis
          nulla proident nisi. Pariatur officia deserunt incididunt duis ad
          dolore. Duis aute reprehenderit ut eiusmod occaecat ullamco irure
          ullamco et. Cupidatat veniam incididunt eu ullamco in id nisi nisi qui
          dolor labore sit labore veniam. Aliqua voluptate Lorem ipsum dolore
          magna ullamco ullamco aliquip amet.
        </p>

        <h3 className="generic-content__author">Pick &amp; Mix Candy</h3>
      </div>
    </Layout>
  )
}
