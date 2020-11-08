import { Spin } from 'antd';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DataInput from '../data-input/DataInput';
import Home from '../home/Home';
import Results from '../results/Results';
import './App.less';

function App() {
    return (
        <div className='app'>
            <Router>
                <Suspense
                    fallback={
                        <Spin spinning size='large' className='app__loader' />
                    }
                >
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/data-entry'>
                            <DataInput />
                        </Route>
                        <Route path='/results'>
                            <Results />
                        </Route>
                        <Route path='*'>
                            <div className='app__not-found'>
                                <h1 style={{ fontSize: 120, margin: 0 }}>
                                    404
                                </h1>
                                <span style={{ fontSize: 60 }}>
                                    Page Not Found
                                </span>
                            </div>
                        </Route>
                    </Switch>
                </Suspense>
            </Router>
        </div>
    );
}

App.displayName = 'App';

export default App;
