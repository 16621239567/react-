import React,{Component} from "react";
import '../assets/css/User.css'
class User extends Component {
  render() {
    let {fans, follow, icon, nikename, time } = this.props.data;
    return (
      <div id="content">
        <div id="header">
          <h2><img src={icon} alt=""/></h2>
          <div className="user-box">
            <a>{nikename}</a>
            
            
          </div>
          <b></b>
          <ul className="clear">
            <li>
              <span>{follow}</span>
              <p>获赞</p>
            </li>
            <li>
              <span>{fans}</span>
              <p>粉丝</p>
            </li>
            <li>
              <span>{follow}</span>
              <p>关注</p>
            </li>
            <li>
              <span>{fans}</span>
              <p>积分</p>
            </li>
          </ul>
        </div>
        <div className="docList">
          <ul>
            <li>
              <p>邀请好友</p>
              <b></b>
            </li>
            <li>
              <p>神级鉴定</p>
              <b></b>
            </li>
            <li>
              <p>小游戏</p>
              <b></b>
            </li>
            <li>
              <p>意见反馈</p>
              <b></b>
            </li>
            <li>
              <p>设置</p>
              <b></b>
            </li>
          </ul>
        </div>
        <div class="tc">
        <a  href="javascript:;" onClick={()=>{
              localStorage.removeItem('rc_user');
              this.props.history.push('/home')
            }}>注销</a>
        </div>
        
      </div>
      
    );
  }
}

export default User;