import React from 'react'
import OurServices from './OurServices'
import Featured from './Featured'
import Header from './Header'
import About from './About'
import Heros from './Heros'
import Footers from './Footers'
import './Item.css'
function Items() {
  return (
    <>
      <Header />
      <Heros />
      <About />
      <OurServices />
      <Featured />
      <Footers />
    </>
  )
}

export default Items
