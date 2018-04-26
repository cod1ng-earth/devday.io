import React from 'react'
import Link from 'gatsby-link'
import { Container, Navbar, NavbarBrand, NavbarItem, NavbarBurger, NavbarMenu, NavbarStart, NavbarLink, NavbarDropdown, NavbarDivider, NavbarEnd, Icon, Field, Control, Button } from 'bloomer'
const brand = "";

export default class AppHeader extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
    this.onClickNav = this.onClickNav.bind(this);
  }

  onClickNav() {
    this.setState(prevState => ({
        isActive: !prevState.isActive
    }));
  }

  render() {
    return <Navbar style={{  }} className="is-primary is-fixed-top">
      <NavbarBrand>
          <NavbarItem>
              <img src={brand} style={{ }} /> devday
          </NavbarItem>
          <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
      </NavbarBrand>

      <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
        <NavbarStart>
            
        </NavbarStart>

        <NavbarEnd>
            <NavbarItem href='#/'>Event</NavbarItem>
            <NavbarItem href='#/'>Speakers</NavbarItem>
            <NavbarItem href='#/'>Venue</NavbarItem>
            <NavbarItem href='#/'>Contact</NavbarItem>
        </NavbarEnd>

      </NavbarMenu>
    </Navbar>
    
  }
}
