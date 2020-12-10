import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import { fetchCollectionsStart } from './redux/shop/shop.actions';
import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { addCollectionAndDocuments } from './firebase/firebase.utils';
import Details from './components/details/details.component';
import shopData from './redux/shop/shop.data';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ checkUserSession, fetchCollectionsStart, currentUser}) => {
  useEffect(() => {
    checkUserSession();
    fetchCollectionsStart();
  }, [checkUserSession],[fetchCollectionsStart]);

  // addCollectionAndDocuments('collections', shopData);
  
  return (
    <div>
      <GlobalStyle />
      <Header />
      
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route  path='/details/:id' component={Details} />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
 
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
  //addCollectionAndDocuments: dispatch(addCollectionAndDocuments())
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
