import React from 'react';
import { Switch, Route } from 'react-router-dom'

// Importação dos componentes
import Feed from './pages/Feed';
import New from './pages/New';

export default function Routes() {
 return (
   <Switch>
    <Route path="/" component={Feed} exact />
    <Route path="/new" component={New} />
   </Switch>
 )
}