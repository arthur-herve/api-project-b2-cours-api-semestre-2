import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserApp from '../UserApp'
import Notfound from '../Notfound'
import ChangePassword from '../ChangePassword'
import { accountService } from '../../_services/account.service';
import ReproDashboard from './ReproDashboard'
import AdminAbsence from '../AdminAbsence'
import AdminEduc from '../AdminEduc'

export default function RouteurAp() {

  const idUser = accountService.getUserId(); 

  return (
    <Routes>
        <Route element={<UserApp userType = 'repro'/>}>
            <Route index element={<ReproDashboard idUser = {idUser}/>} />
            <Route path="dashboard" element={<ReproDashboard idUser = {idUser}/>} />
            <Route path="educ" element={<AdminEduc idUser = {idUser}/>} />
            <Route path="absence" element={<AdminAbsence idUser = {idUser}/>} />
            <Route path="change-password" element={<ChangePassword idUser = {idUser}/>} />
            <Route path="*" element={<Notfound/>} />
        </Route>
    </Routes>
    )
}