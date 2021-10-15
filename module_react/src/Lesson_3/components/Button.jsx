import React from "react";

class Button extends React.Component {
  //Вызывается первым
  constructor(props) {
    super(props)

    this.state = {disabled: false}
    console.log('constructor')
  }

  //Вызывается перед рендерингом компонента и при обновлении
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')

    return null
  }

  //Вызывается после рендеринга компонента
  //В этой функции происходит вызов запроса к серверу
  componentDidMount() {
    console.log('componentDidMount')
  }

  //Перед удалением из DOM
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  //Вызывается при обновлении props/state
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')

    return true
  }

  //Вызывается перед рендеринга компонента
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')

    return null
  }

  //Вызывается сразу после обновления компонента
  //если shouldComponentUpdate возвращает true
  componentDidUpdate(prevProps, prevState, snapsahot) {
    console.log('componentDidUpdate')
  }

  render() {
    console.log('render')
    return <button disabled={this.state.disabled}>
      {this.props.value}
      </button>
  }
}

export default Button;