import React from 'react'
import axios from 'axios'

class GodShow extends React.Component{
  state = { god: null }

  async componentDidMount(){
    console.log('i am here')
    const godId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/gods/${godId}`)
      this.setState({ god: res.data })
    } catch (err){
      console.log(err)
    }
  }

  render() {
    const { god } = this.state 
    if (!god) return null
    return (
      <section className="section">
        <div className="container">
          <h2 className="title"> ⚡️ {god.name} ⚡️</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={god.image} alt={god.name} />
              </figure>
            </div>
            <div className="column is-half">
              <h4 className="title is-4">Gender</h4>
              <p>{god.gender}</p>
              <hr />
              <h4 className="title is-4">Description</h4>
              <hr />
              <p>{god.description}</p>
              <hr />
            </div>
          </div>
        </div>
      </section>

    )
  }
}

export default GodShow