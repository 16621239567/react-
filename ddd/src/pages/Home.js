import React,{Component} from "react";
import '../assets/css/HOme.css'
import Swiper from "../components/Swiper";
import Cell from "../components/Cell";

import axios from 'axios';

class Home extends Component {
  state={
    cells:[],
    banners:[]
  };

  render() {
    return (
      <div className="Home">
        <Swiper {...this.props} banners={this.state.banners} dataName="banner"/>
        <Cell cells={this.state.cells} dataName="home"/>
      </div>
    );
  }
  async componentDidMount(){

    let resHome = await axios({url:'/mock/home',params:{_limit:10}});
    this.setState({cells:resHome.data.page_data})

    let resBanner = await axios({url:'/mock/banner',params:{_limit:3}});
    this.setState({banners:resBanner.data.page_data})

  }
}

export default Home;