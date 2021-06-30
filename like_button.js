'use strict';

// react 创建元素的方法，不适用jsx时，用来创建dom元素
const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
// 将react组件添加到 指定的div中
const domContainer = document.querySelector('#like_button_container');

ReactDOM.render(e(LikeButton), domContainer);