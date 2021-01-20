import React, { Suspense, memo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// global components
import Loader from '../components/Loader';

// components
import Home from '../components/EditorPanel';

function Routes() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={'/'} exact component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default memo(Routes);
