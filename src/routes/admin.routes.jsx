import { Routes, Route } from"react-router-dom"

import { CreateDish } from "../pages/CreateDish"
import { EditDish} from "../pages/EditDish"
import { Home} from "../pages/Home"
import { PreviewDish } from "../pages/PreviewDish"

export function AdminRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/CreateDish" element={<CreateDish/>}/>
            <Route path="/EditDish/:id" element={<EditDish/>}/>
            <Route path="/PreviewDish/:id" element={<PreviewDish/>}/>
        </Routes>
    )
}