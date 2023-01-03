
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import {
CheckIcon,
UserIcon,
LockClosedIcon ,
} from '@heroicons/react/outline'
import {
Switch,
Route,
withRouter , Redirect
} from "react-router-dom";
import {Helmet} from "react-helmet";
import { observable, makeObservable, } from 'mobx'

import { observer, inject } from 'mobx-react'
import { withAuthenticator, Button, Heading, AmplifySignOut } from '@aws-amplify/ui-react';
function Login() {
    return(
      <> 
         <header className="App-header">
            <AmplifySignOut />
            <h2>My App Content</h2>
         </header>
      </> 
    )
}




export default withAuthenticator(Login);