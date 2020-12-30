import compHome from './Components/Home'
import compCustomer from './Components/Customer/Customer'
export const routes =[
    {
        path:'',
        component: compHome
    },
    {
        path:'/customer',
        component: compCustomer
    }
];