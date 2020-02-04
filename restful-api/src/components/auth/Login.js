import React from 'react'
import axios from 'axios'
// import { notify } from 'react-notify-toast'
import Auth from '../lib/Auth'

class Login extends React.Component{
  state = {
    data: {
      email: '',
      password: ''
    },
    error: ''
  }
handleChange = ({ target: { name, value } }) => {
  const data = { ...this.state.data, [name]: value }
  this.setState({ data, error: '' })
}
handleSubmit = async e => {
  e.preventDefault()
  console.log(this.state.data)
  try {
    const res = await axios.post('/api/login', this.state.data)
    Auth.setToken( res.data.token)
    // notify.show(res.data.message, 'success', 3000)
    this.props.history.push('/gods')
  } catch (err) {
    console.log(err)
    this.setState({ error: 'Invalid Credentials, Thou Unworthy' })
  }
}

render() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter">
            <h2 className="title">Login</h2>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className={`input ${this.state.error ? 'is-success' : ''}`}
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className={`input ${this.state.error ? 'is-success' : ''}`}
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.error && <small className="help is-success">{this.state.error}</small>}
            </div>
            <button type="submit" className="button is-success is-fullwidth">Login</button>
          </form>
        </div>
      </div>
    </section>
  )
}

}

export default Login