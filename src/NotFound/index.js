import {
  NotFoundImg,
  Heading,
  NotFoundContainer,
  NotFoundPara,
} from './styledComponent'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImg
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <NotFoundPara>
      We are sorry, the page you requested could not be found
    </NotFoundPara>
  </NotFoundContainer>
)

export default NotFound
