import Header from '../Header'
import {Div, Heading, Para, RegButton, HomeImg} from './styledComponent'

const Home = () => (
  <>
    <Header />
    <Div>
      <Heading>Welcome to Meetup</Heading>
      <Para>Please register for the topic</Para>
      <RegButton type="button">Register</RegButton>
      <HomeImg
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </Div>
  </>
)

export default Home
