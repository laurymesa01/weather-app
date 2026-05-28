import { Component } from 'react'
import Error from '../pages/Error'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught a render error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Error message="There was an unexpected error displaying the weather data. Please try again." />
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
