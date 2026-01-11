import React from 'react'
import HerbicideActives from '../components/HerbicideActives'
import FormulationsTable from '../components/FormulationsTable'
import Banner from '../components/Banner'
import bannerImg from '/images/banner.jpg'
import './Product.css'

const Product = () => {
  return (
    <>
      <Banner title="Our Products" backgroundImage={bannerImg} />
      <section className="section">
        <div className="container">
          <HerbicideActives />
          <FormulationsTable />
        </div>
      </section>
    </>
  )
}

export default Product
