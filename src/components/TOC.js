import React, { Component } from "react";
//component를 불러오는 코드

class TOC extends Component {
  render() {
    console.log("TOC render");
    var lists = []; //나타나는 태그들 여기 담음
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            onClick={function(e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
//밖에서 가져다 쓸 수 있게 함
