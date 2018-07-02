import React from 'react'
import { Hero, HeroBody, Container, Columns, Column, Title, Field, Label, Control, Input, Radio, Button } from 'bloomer'


export default ({ content }) => (

  <Hero isSize="medium" isColor="dark" id="section-newsletter">
    <HeroBody>
      <Container>
        
        <Columns id="mc_embed_signup">
          <Column isSize="1/2" isOffset="1/4" id="">

          <Title isSize={2}>Remind me when Dev Day 19 is happening!</Title>
                    
            <form name="devday-newsletter" method="POST" data-netlify="true" data-netlify-honeypot="lasst-nam3">
              <input type="hidden" name="form-name" value="devday-newsletter" />  
              <Field>
                <Label>Your Email address</Label>
                <Control>
                    <Input placeholder='email address' type="email"  name="email" className="required email" autoComplete='email' />
                </Control>
              </Field>

              <Field>
                <Label>Your name</Label>
                <Control>
                    <Input placeholder='how should we call you?' type="text" checked="" name="name" className="" autoComplete='given-name' />
                </Control>
              </Field>
              <p style={{display: "none"}}>
                <label>Don’t fill this out if you're human: <input name="lasst-nam3" /></label>
              </p>
              <Field>
                <Label>Bitte bestätigen</Label>
                <input className="is-checkradio is-white" type="radio" id="accept_privacy" name="accept_privacy" value="privacy_accepted" />
                <label htmlFor="accept_privacy">I've read and understood the <a href="https://turbinekreuzberg.com/en/datenschutzerklaerung" target="_blank">data privacy rules</a></label>
              </Field>
              
              <div data-netlify-recaptcha></div>

              <Field >
                  <Control>
                      <Button type="submit" isColor='info' isFullWidth  value="Subscribe" name="subscribe">Subscribe</Button>
                  </Control>
              </Field>

            </form>
          </Column>
        </Columns>

        </Container>
      </HeroBody>
</Hero>

)