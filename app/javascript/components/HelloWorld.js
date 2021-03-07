import React from "react"
import PropTypes from "prop-types"

class HelloWorld extends React.Component {
  render () {
    return (
      <h1>
        Greeting: {this.props.message}
      </h1>
    );
  }
}

HelloWorld.defaultProps = {
  message: "No Message"
}

HelloWorld.propTypes = {
  message: PropTypes.string
}

export default HelloWorld
