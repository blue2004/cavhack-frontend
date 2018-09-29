import React, { Component } from 'react'
import { Grid, Row, Thumbnail, Col, Button} from 'react-bootstrap'

// Hardcoded users for All Profiles page
// const users = [
//   {
//     id: 1,
//     firstName: 'David',
//     lastName: '',
//   },
//   {
//     id: 2,
//     firstName: 'Alex',
//     lastName: '',
//     },
//     {
//     id: 3,
//     firstName: '',
//     lastName: '',
//   },
//   {
//     id: 4,
//     firstName: '',
//     lastName: '',
//   }
// ]

class AllProfilesContainer extends Component {
  render() {

    // ADD MAPPING FOR ALL USERS TO DYNAMICALLY CREATE CARDS HERE

    return (
      <Grid>
        <Row>

          {/* ADD ALL PROFILES CREATED ABOVE HERE */}
          <Col xs={6} md={4} lg={3}>
          <Thumbnail src="https://ih1.redbubble.net/image.478115041.1589/raf,360x360,075,t,fafafa:ca443f4786.jpg" />
          <h3>firstName lastName</h3>
          <p></p>
          <Button bsStyle="primary">Button</Button>
        </Col>
        </Row>
      </Grid>
    )
  }
}

export default AllProfilesContainer