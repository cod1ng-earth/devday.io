import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'font-awesome/css/font-awesome.css'
import './all.sass'

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

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const TemplateWrapper = ({ children }) => (
  <div className="has-navbar-fixed-top"> 
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

