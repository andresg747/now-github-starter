class Hello extends React.Component {

  componentDidMount() {
    this.get();
  }

  get() {
    let fetchData = new Promise((resolve, reject) => {
      fetch(`https://httpbin.org/get`)
        .then((res) => res.json())
        .then((resObj) => console.log(resObj))
        .catch((err) => console.error(err))
    });
  }

  render() {
    return React.createElement('div', null, `Hello World`);
  }
}

ReactDOM.render(
  React.createElement(Hello, {}, null),
  document.getElementById('root')
);

