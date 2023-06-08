import { Avatar } from '../../../Scripts/Avatar';
import './styles/home.css'


const { controlActions } = require("./Modules/controlActions");
const { helloMsg } = require("./Modules/helloMsg");
const { default: logout } = require("./Modules/logout");
const { operations } = require("./Modules/operations");
const { scorePerson } = require("./Modules/scorePerson");
const { warningBalance } = require("./Modules/verifyBalance");


warningBalance()
scorePerson()
helloMsg()
logout();
operations();
controlActions();
Avatar()
