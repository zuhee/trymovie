import React, { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props); //component 실행할 떄 state값 초기화, render함수 실행 전에 constructor로 안에 함 수 짬
    this.state = {
      mode: "read",
      selected_content_id: 2,
      subject: { title: "WEB", sub: "World Wide Web!" }, //초기화 후 여기 값들 실행
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      contents: [
        //mode subject welcome contents는 property
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavsScript is for interactive" }
      ]
    };
  }
  render() {
    console.log("App render");
    var _title = null;
    var _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title} //상위 state값을 하위 props로 부여
          sub={this.state.subject.sub}
          onChangePage={function() {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        />

        <TOC
          onChangePage={function(id) {
            this.setState({
              mode: "read",
              selected_content_id: Number(id)
            });
          }.bind(this)}
          data={this.state.contents}
        />
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
