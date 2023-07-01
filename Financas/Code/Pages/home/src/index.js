import './css/style.css'
import { Avatar } from "../../../Utils/Avatar";
import { Logout } from "../../../Utils/Logout";
import { controlActions } from "./modules/actions";
import { controlBalance } from "./modules/balance";
import { operationsFunc } from "./modules/operations";
import { warningBalance } from "./modules/verifyBalance";
import { helloMsg } from "./modules/helloMsg";
import { scorePerson } from "./modules/scorePerson";
import { operationsControl } from './modules/controlOperation';
import showMenu from './modules/showMenu';
import creditCardContainer from './modules/creditCardContainers';



controlBalance()
Avatar()
Logout()
helloMsg()
scorePerson()
controlActions()
operationsFunc()
warningBalance()
operationsControl()
showMenu()
creditCardContainer()




