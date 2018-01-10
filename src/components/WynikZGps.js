import React, { Component } from 'react';
import * as actions from '../action';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import './WynikZGps.css';

class WynikZGps extends Component{

   

      constructor(props){
          super(props);
          this.state = {
              center: {
                  lat: 31.9356214,
                  lng: 15.5061862
              },
              zoom: 15,
          }
      }

    componentWillMount(){
        this.props.getMeasurement(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps)
   {
      if(nextProps.weather.szerokosc !== this.state.center.lat){
          this.setState({
            center: {
                lat: nextProps.weather.szerokosc,
                lng: nextProps.weather.dlugosc
            },
            zoom: 17
        })
     
   }
   


}
   

  render() {
    if(this.props.weather.dlugosc === undefined){
        return(
            <div>Loading...</div>
        )
    }
    const AnyReactComponent = ({ text }) => <div><h3>{text}</h3></div>;



   
    console.log(this.state.center.lat)

    return (

      <div className="mapa">
        <GoogleMapReact
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          bootstrapURLKeys={{key: "AIzaSyCy0gseq22QUvYs-rznNx0vK-hLyDWFSh0"}}>
          <AnyReactComponent
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            text={'Miejsce Pomiaru'}
          />
        </GoogleMapReact>
        <p>{this.props.weather.id}</p>
   <p>     {this.props.weather.nrPlytki}  </p> 
   <p>  {this.props.weather.temperatura} </p> 
   <p>  {this.props.weather.wilgotnosc} </p> 
   <p>  {this.props.weather.cisnienie} </p> 

   <p>  {this.props.weather.czas} </p> 

   <p>  {this.props.weather.szerokosc} </p> 

   <p>  {this.props.weather.dlugosc} </p> 



  <button onClick={() => { this.props.history.push("/all"); }}

>xd</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return { weather: state.weather };
  }
  
  export default connect(mapStateToProps, actions)(WynikZGps);