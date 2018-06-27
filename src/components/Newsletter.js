import React from 'react'
import { Hero, HeroBody, Container } from 'bloomer'

export default ({ content }) => (

  <Hero isSize="medium" isColor="dark">
    <HeroBody>
      <Container>

        <div id="mc_embed_signup">
          <form action="https://turbinekreuzberg.us11.list-manage.com/subscribe/post?u=05926695701a0c84bb46a9565&amp;id=590c4918b0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
              
              <h2>Subscribe to our mailing list</h2>
              
              <div className="indicates-required">
                <span className="asterisk">*</span> indicates required
              </div>
              
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">E-Mail-Adresse*  <span className="asterisk">*</span></label>
                <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
              </div>

              <div className="mc-field-group">
                <label htmlFor="mce-FNAME">Vorname </label>
                <input type="text" value="" name="FNAME" className="" id="mce-FNAME" />
              </div>

              <div className="mc-field-group">
                  <label htmlFor="mce-LNAME">Nachname </label>
                  <input type="text" value="" name="LNAME" className="" id="mce-LNAME" />
              </div>

              <div className="mc-field-group input-group">
                <strong>Welche Newsletter sollen abonniert werden?  <span className="asterisk">*</span></strong>
                <ul>
                  <li>
                    <input type="radio" value="Alle News von Turbine Kreuzberg" name="MMERGE4" id="mce-MMERGE4-0" />
                    <label htmlFor="mce-MMERGE4-0">Alle News von Turbine Kreuzberg</label>
                  </li>
                  <li>
                    <input type="radio" value="Nur Technologie News" name="MMERGE4" id="mce-MMERGE4-1" />
                    <label htmlFor="mce-MMERGE4-1">Nur Technologie News</label>
                  </li>
                  <li>
                    <input type="radio" value="Nur Strategie und Innovation News" name="MMERGE4" id="mce-MMERGE4-2" />
                    <label htmlFor="mce-MMERGE4-2">Nur Strategie und Innovation News</label>
                  </li>
                </ul>
              </div>

              <div className="mc-field-group input-group">
                <strong>Bitte bestätigen*  <span className="asterisk">*</span></strong>
                <ul>
                  <li>
                    <input type="radio" value="Ja, ich stimme den Bestimmungen zum Datenschutz zu." name="MMERGE3" id="mce-MMERGE3-0" />
                    <label htmlFor="mce-MMERGE3-0">Ja, ich stimme den Bestimmungen zum Datenschutz zu.</label>
                  </li>
                </ul>
              </div>
              
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{ display:"none" }}></div>
                <div className="response" id="mce-success-response" style={{ display:"none" }}></div>
              </div>    
              
              {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}

              <div style={{ position: "absolute", left: "-5000px", ariaHidden: true }}>
                <input type="text" name="b_05926695701a0c84bb46a9565_590c4918b0" tabIndex="-1" value="" />
              </div>
              
              <div className="clear">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
              </div>
            </div>

          </form>
        </div>

        </Container>
      </HeroBody>
</Hero>

)