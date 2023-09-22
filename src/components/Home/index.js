import {Redirect} from 'react-router-dom'

import Header from '../Header'
import {Div, Heading, Para, RegButton, HomeImg} from './styledComponent'

const Home = () => {
  const onRegister = () => <Redirect to="/register" />

  return (
    <>
      <Header />
      <Div>
        <Heading>Welcome to Meetup</Heading>
        <Para>Please register for the topic</Para>
        <RegButton type="button" onClick={onRegister}>
          Register
        </RegButton>
        <HomeImg
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
        />
      </Div>
    </>
  )
}

export default Home
