import React from 'react'
import { Container, Navbar, NavbarBrand, NavbarItem, NavbarBurger, NavbarMenu, NavbarStart, NavbarEnd, Icon, Field, Control, Button } from 'bloomer'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 
export default class AppHeader extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
      scrollPos: 0
    }
    this.onClickNav = this.onClickNav.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(e) {
    this.setState({scrollPos: window.scrollY })
  }

  onClickNav() {
    this.setState(prevState => ({
        isActive: !prevState.isActive
    }));
  }

  render() {
    return <Navbar className={(this.state.scrollPos < 400 ? "is-transparent" : "is-small") + " is-primary is-fixed-top"}>
      <NavbarBrand>
          <NavbarItem className="logo_comp">
              <span className="logo_comp_dev">Dev</span>
              <span className="logo_comp_day">Day</span>
          </NavbarItem>
          <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
      </NavbarBrand>

      <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
        <NavbarStart>
            
        </NavbarStart>

        <NavbarEnd>
          
          <Link className="navbar-item" activeClass="active" to="talks" spy={true} smooth={true} offset={-100} duration={500}>
            Talks
          </Link>
          
          <Link className="navbar-item" activeClass="active" to="coding-challenge" spy={true} smooth={true} offset={-100} duration={500}>
            Coding Challenge
          </Link>

          <Link className="navbar-item" activeClass="active" to="impressions" spy={true} smooth={true} offset={-100} duration={500}>
            Impressions
          </Link>
          
        </NavbarEnd>

      </NavbarMenu>
    </Navbar>
    
  }
}
