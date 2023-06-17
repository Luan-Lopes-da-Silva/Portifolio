import './styles/home.css'
import { Avatar } from "../../../Utils/Avatar";
import { Logout } from "../../../Utils/Logout";
import { controlActions } from "./Modules/controlActions";
import { controlBalance } from "./Modules/controlBalance";
import { controlCardBalance } from "./Modules/controlBalanceCard";
import { operationsFunc } from "./Modules/operations";
import { warningBalance } from "./Modules/verifyBalance";
import { helloMsg } from "./Modules/helloMsg";
import { scorePerson } from "./Modules/scorePerson";
import { controlOperation } from "./Modules/controlOperation";



controlBalance()
Avatar()
Logout()
helloMsg()
scorePerson()
controlActions()
controlCardBalance()
operationsFunc()
warningBalance()
controlOperation()



