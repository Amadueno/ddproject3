import React from 'react'
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap'
import Moment from 'react-moment'

// export default class MyComponent extends React.Component {
//   render() {
//     return (
//             const dateToFormat = new Date('1976-04-19T12:59-0500');
//             <Moment date = { dateToFormat } />
//         );
//   }
// }

const Notes = (props) => {
  return (
    <div>
      <Card inverse>
        <CardImg width="100%" src="/assets/318x270.svg" alt="parchment" />
        <CardImgOverlay>
          <CardTitle>Note Title</CardTitle>
          <CardText> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque aliquam excepturi sapiente vero optio doloribus commodi ab quaerat, eum, ratione cumque. Optio exercitationem nihil reprehenderit suscipit voluptatibus maxime officia ex!</CardText>
          <CardText>
            <small className="text-muted">
              <Moment />
            </small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  )
}

export default Notes