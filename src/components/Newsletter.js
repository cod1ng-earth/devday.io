import React from 'react'
import { Hero, HeroBody, Container, Columns, Column, Title, Field, Label, Control, Input, Radio, Button } from 'bloomer'


export default ({ content }) => (

  <Hero isSize="medium" isColor="dark" id="section-newsletter">
    <HeroBody>
      <Container>
        
        <Columns id="mc_embed_signup">
          <Column isSize="1/2" isOffset="1/4" id="mc_embed_signup_scroll">

          <Title isSize={2}>Subscribe to our mailing list</Title>
                    
            <form action="https://turbinekreuzberg.us11.list-manage.com/subscribe/post?u=05926695701a0c84bb46a9565&amp;id=590c4918b0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>

              <Field>
                <Label>E-Mail-Adresse</Label>
                <Control>
                    <Input placeholder='E-Mail-Adresse' type="email"  name="EMAIL" className="required email" id="mce-EMAIL" autoComplete='email' />
                </Control>
              </Field>

              <Field>
                <Label>Vorname</Label>
                <Control>
                    <Input placeholder='Vorname' type="text"  name="FNAME" className="" id="mce-FNAME" autoComplete='given-name' />
                </Control>
              </Field>

              <Field>
                <Label>Nachname</Label>
                <Control>
                    <Input placeholder='Nachname' type="text"  name="LNAME" className="" id="mce-LNAME" autoComplete='family-name' />
                </Control>
              </Field>

              <Field>
                  <Label>Welche Newsletter sollen abonniert werden?</Label>
                  
                    <input type="radio" className="is-checkradio is-white" name="MMERGE4" id="mce-MMERGE4-0" value="Alle News von Turbine Kreuzberg"/>
                    <label htmlFor="mce-MMERGE4-0">Alle News von Turbine Kreuzberg</label>
                    <br />
                    <input type="radio" className="is-checkradio is-white" name="MMERGE4" id="mce-MMERGE4-1" value="Nur Technologie News" />
                    <label htmlFor="mce-MMERGE4-1">Nur Technologie News</label>
                    <br />
                    <input type="radio" className="is-checkradio is-white" name="MMERGE4" id="mce-MMERGE4-2" value="Nur Strategie und Innovation News" />
                    <label htmlFor="mce-MMERGE4-2">Nur Strategie und Innovation News</label>
                  
              </Field>

              <div className="field">
                <Label>Bitte bestätigen</Label>
                <input className="is-checkradio  is-white" id="mce-MMERGE3-0" type="radio" name="MMERGE3" value="Ja, ich stimme den Bestimmungen zum Datenschutz zu." />
                <label htmlFor="mce-MMERGE3-0">Ja, ich stimme den Bestimmungen zum Datenschutz zu.</label>
              </div>

                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response" style={{ display:"none" }}></div>
                  <div className="response" id="mce-success-response" style={{ display:"none" }}></div>
                </div>    
                
                {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}

                <div style={{ position: "absolute", left: "-5000px", ariaHidden: true }}>
                  <input type="text" name="b_05926695701a0c84bb46a9565_590c4918b0" tabIndex="-1" value="" />
                </div>
                
                <Field >
                  <Control>
                      <Button type="submit" isColor='info' isFullWidth  value="Subscribe" name="subscribe" id="mc-embedded-subscribe">Subscribe</Button>
                  </Control>
              </Field>

            </form>
          </Column>
        </Columns>

        </Container>
      </HeroBody>
</Hero>

)