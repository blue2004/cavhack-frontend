import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Grid, Row, Col, Image, PageHeader, Panel, Button } from 'react-bootstrap'
// import { AddModal } from '../components/Modal/Modal'

// import { getUserProfile } from '../actions/api'

class MyProfileContainer extends Component {
  constructor(props) {
    super(props)

    // State variables to be tracked in the component
    this.state = {
      showModal: false,
      type: '',
      addValue: ''
    }

    // ADD FUNCTION BINDINGS HERE

  }

  componentDidMount() {

    // ADD CHECK FOR USER QUERY PARAMETER HERE

  }

  // ADD FUNCTION TO HANDLE OPENING THE MODAL HERE (with "type" variable)
  handleModalOpen(type) {}

  // ADD FUNCTION TO HANDLE CLOSING THE MODAL HERE
  handleModalClose() {}

  // ADD FUNCTION TO TRACK TEXT CHANGES HERE (with event variable)
  handleTextChange(e) {}

  // ADD FUNCTION TO HANDLE SUBMITTING "ADD" FORM HERE
  handleAddSubmit() {}

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid valign-wrapper">
            <Col xs={1} md={2} lg={3}>
              {/* https://vignette.wikia.nocookie.net/legouniverse/images/3/3c/Epic_face_ezio_by_kerog6-d49f4d3-1.jpg/revision/latest?cb=20120504225409 */}
            </Col>
            <Col xs={2} md={4} lg={6}>
              {/* ADD PAGE HEADER WITH NAME AND ABOUT ME HEADINGS HERE */}
              <Image thumbnail src="https://vignette.wikia.nocookie.net/legouniverse/images/3/3c/Epic_face_ezio_by_kerog6-d49f4d3-1.jpg/revision/latest?cb=20120504225409"/>
              {/* Epic face equals epic life */}
              <iframe src="http://www.me.umn.edu/~dockt036/snake.html" width="1000" height="800"></iframe>
           
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">Don't push my my buttons</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
              <Button bsStyle="primary">REEEEEEEEEEEEEEEEEEEEEEEEE YOU PUSHED MY BUTTONS!</Button>
            </Col>
          </Row>
          <Row className="show-grid">

            {/* Include all sections in the following column */}
            <Col xs={12}>

              <PageHeader>
                My Interest
                </PageHeader>
                <Panel>
                <Panel.Body>
                  <ul>
                   <li>Swimming</li>
                    <li>Gaming</li>
                    <li>Everything</li>
                    </ul>
                    </Panel.Body>
                    </Panel>
                    
                    
                                   {/* ADD PANEL FOR SECTION INFORMATION WITH LIST HERE */}

              {/* ADD BUTTON FOR ADDITIONAL INFORMATION HERE */}

            </Col>
          </Row>
        </Grid>

        {/* ADD MODAL HERE */}

      </div>
    )
  }
}

// Uses withRouter to grab query paramters in URL (ex: http://localhost:3000?user=1 where user is the query parameter)
export default withRouter(MyProfileContainer)