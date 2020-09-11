import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import Shop from "./page/shopPage/shop.component";
import Header from "./components/header/header.component";
import AuthPage from "./page/authPage/authPage";
import Sidebar from "./components/sidebar/Sidebar";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { setCurrentUser } from "./redux/user/user.action";
import {
  auth,
  createUserProfileDocument
} from "./firebase/firebase";
import CheckOutPage from "./page/checkoutPage/checkOutPage.component";
import AddItemPage from "./page/addItemPage/addItem.component";
import Dashboard from "./page/dashboard/Dashboard";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(
            userAuth
          );
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        } else {
          setCurrentUser(userAuth);
        }
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className='app'>
        <div className='app__headers'>
          {this.props.currentUser?.isAdmin ? (
            <Sidebar className='app__sidebar'></Sidebar>
          ) : (
            <Header className='app__header'></Header>
          )}
        </div>
        <div className='app__pages'>
          <Switch>
            <Route exact path='/' component={Shop}></Route>

            <Route
              exact
              path='/add'
              component={AddItemPage}
            ></Route>
            <Route
              exact
              path='/dashboard'
              component={Dashboard}
            ></Route>
            <Route
              exact
              path='/auth'
              render={() =>
                this.props.currentUser ? (
                  <Redirect to='/'></Redirect>
                ) : (
                  <AuthPage></AuthPage>
                )
              }
            ></Route>
            <Route
              exact
              path='/checkout'
              component={CheckOutPage}
            ></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
