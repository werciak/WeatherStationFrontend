import React, { Component } from "react";
import * as actions from '../action';
import { connect } from 'react-redux';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Pierwsza extends Component {

  componentDidMount(){
   this.props.pierwsza(1);
   console.log(this.props.weather)
  }

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

 

  componentWillReceiveProps(nextProps){
    this.setState({
      data: nextProps.weather
    })
  }

  render() {
   
    if(this.props.weather === undefined){
      return(
        <div>Loading..</div>
      )
    }
    const { data } = this.state;
    return (
      
      <div>
        <ReactTable
         getTrProps={(state, rowInfo, column, instance) => ({
          // onClick: e => console.log(rowInfo.row.id)
          onClick: e => this.props.history.push("/wynik/"+rowInfo.row.id)

        })}
          data={data}

          columns={[
            {
              Header: "Dane",
              columns: [
                {
                  Header: "ID",
                  accessor: "id",

                },
                {
                  Header: "Numer płytki",
                  id: "nrPlytki",
                  accessor: d => d.nrPlytki
                }
              ]
            },
            {
              Header: "Pomiary",
              columns: [
                {
                  Header: "Temperatura",
                  accessor: "temperatura"
                },
                {
                  Header: "Cisnienie",
                  accessor: "cisnienie"
                },
                {
                  Header: "Wilgotnosc",
                  accessor: "wilgotnosc"
                },
                {
                  Header: "Czas",
                  accessor: "czas"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps, actions)(Pierwsza);