import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isSpinnerVisible: false,
    };
  }

  handleLogin = () => {
    this.setState({ isSpinnerVisible: true });
    setTimeout(() => {
      this.setState({
        isSpinnerVisible: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    console.log(this.state); // Логирование состояния для отладки
    const { isSpinnerVisible, isLoggedIn } = this.state; // Деструктуризация state

    if (isSpinnerVisible) {
      return <Spinner size={25} />;
    }

    return isLoggedIn ? (
      <Logout handleLogout={this.handleLogout} /> // Передаем handleLogout в компонент Logout
    ) : (
      <Login handleLogin={this.handleLogin} /> // Передаем handleLogin в компонент Login
    );
  }
}

export default Auth;





// REACT APPROACH (!!!)
// 1. Divide the UI into components +++
// header, footer, main (text, table (row), navigation)
// 2. Build static version in React +++
// 3. Think about props, state (where, which) +++
// 4. Write logic in JS/TS (80% JS, 20% JS)
//1.login click
//