"use strict";
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  render() {
    if (this.state.liked) {
      return "You liked this new button";
    }
    return <button onClick={() => this.setState({ liked: true })}>New Button</button>;
  }
}
// 将react组件添加到 指定的div中
let domContainer = document.querySelector('#my_new_button');
ReactDOM.render(<LikeButton />, domContainer);
