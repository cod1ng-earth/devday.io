import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'font-awesome/css/font-awesome.css'
import '../style/all.sass'

import {
  Container,
  Section,
  Hero,
  HeroHeader,
  HeroBody,
  HeroFooter,
} from 'bloomer'

import AppHeader from '../components/Header'
import MasterTeaser from '../components/MasterTeaser'
import AppFooter from '../components/Footer'

const TemplateWrapper = ({ children }) => (
  <div> 
    <Helmet title="Dev Day 2018" />
      <AppHeader />
      {children()}
      <AppFooter /> 
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

