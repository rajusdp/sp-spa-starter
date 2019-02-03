import * as React from 'react';
import './App.css';
import { Web } from '@pnp/sp';

const web = new Web("https://rajo365dev.sharepoint.com/sites/dev/Courses");

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { lists: [], listItems: [], listName: "" };
    this._onClickHandler = this._onClickHandler.bind(this);
  }

  async _onClickHandler(e: React.MouseEvent<HTMLElement>) {
    var listName = e.currentTarget.innerText;
    this.setState({ listName });

    var lstResults = [{}];
    const result = await web.lists.getByTitle(listName).items.get();
    for (var i = 0; i < result.length; i++) {
      lstResults.push({ key: i, ID: result[i].Id, Title: result[i].Title })
    }
    this.setState({ listItems: lstResults });
  }

  componentWillMount() {
    const lists: any = [];

    web.lists.get().then(Alllists => {
      Alllists.forEach(function (list, index) {
        lists.push({ key: index, title: list.Title });
      })
      this.setState({ lists: lists })
    })
  }

  public render() {
    return (
      <div className="grid-container">
        <div className="header">Header</div>
        <div className="leftnav" style={{ textAlign: "left", paddingLeft: "10px" }} >
          {this.state.lists.map(list =>
            <div ><a href="#" onClick={this._onClickHandler}>{list.title}</a></div>)}
        </div>
        <div className="main" style={{ textAlign: "left", paddingLeft: "10px" }}>
          {(this.state.listItems.length === 0) ? 'No Data' :
            <table><tbody> <tr><th>ID</th><th>Title</th>
            </tr> {this.state.listItems.map(lstitems => <tr><td> {lstitems.ID} </td><td> {lstitems.Title} </td></tr>)}
            </tbody></table>}
        </div>
        <div className="rightnav">Right</div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default App;