import React from 'react'
import axios from 'axios'

import GodProfile from './GodProfile'

class Gods extends React.Component {
  state = { gods: [] }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/gods')
      this.setState({ gods: res.data })
    } catch (err){
      console.log(err)
    }
  }
  render() {
    return (
      <section className="section" id="gods">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.gods.map(god =>(
              <GodProfile key= {god.name} {...god}/>
            ))}
          </div>
        </div>
      </section>

    )
  }

}

export default Gods