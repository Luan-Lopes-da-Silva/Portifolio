import { Avatar } from '../../../Utils/Avatar';
import { Logout } from '../../../Utils/Logout';
import { controlBalance } from './Modules/controlBalance';

import './styles/home.css'


const { controlActions } = require("./Modules/controlActions");
const { helloMsg } = require("./Modules/helloMsg");
const { operations } = require("./Modules/operations");
const { scorePerson } = require("./Modules/scorePerson");
const { warningBalance } = require("./Modules/verifyBalance");

controlBalance()
warningBalance();
scorePerson();
helloMsg();
Logout();
operations();
controlActions();
Avatar();
