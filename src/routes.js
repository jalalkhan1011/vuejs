import compHome from './Components/Home'
import compCustomer from './Components/Customer/Customer'
import CustomerStart from './Components/Customer/CustomerStart'
import CustomerDetail from './Components/Customer/CustomerDetail'
import CustomerEdit from './Components/Customer/CustomerEdit'
export const routes =[
    {
        path:'',
        component: compHome
    },
    {
        // path:'/customer/:id',
        path:'/customer',
        component: compCustomer,
        children:[
            {
                path:'',
                component: CustomerStart,
                name:'home'
            },
            {
                path:':id',
                component: CustomerDetail
            },
            {
                path:':id/edit',
                component: CustomerEdit,
                name: 'customerEdit'
            }
        ]
    }
];