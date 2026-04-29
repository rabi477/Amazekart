import Login from "./Login";
import Signup from "./Signup";
import Routing from "./Routing";
import Products from "./Products";
import Parent,{Child1,Child2,Child3} from "./Parent";
import ProtectedRoute from "./ProtectedRoute";
import UserCart from "./UserCart";
import Orders from "./Orders";

const routes =[
    {
        path:'',
        element:<Products/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<Signup/>
    },
    {
        path:'/routing/:productId',
        element:<Routing/>
    },
    {
        path:'/parent',
        element:<Parent/>,
        children:[
            {
                path:'child1',
                element:<Child1/>
            },
            {
                path:'child2',
                element:<Child2/>
            },
            {
                path:'child3',
                element:<Child3/>
            }
        ]
    },
    {
        path:'user',
        element:<ProtectedRoute/>,
        children:[
            {
                path:'cart', element:<UserCart/>
            },
            {
                path:'order', element:<Orders/>
            }
        ]
    }
];

export default routes;