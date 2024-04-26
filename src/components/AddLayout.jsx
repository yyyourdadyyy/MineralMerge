import React from 'react'
import{AddPostPage}  from "../pages/AddPostPage"
import {Routes, Route,} from "react-router-dom"

import{Model3d} from "../pages/addPostPages/Model3d.jsx"
import{OreComposition} from "../pages/addPostPages/OreComposition.jsx"
import{Personal} from "../pages/addPostPages/Personal.jsx"
import{Remainder} from "../pages/addPostPages/Remainder.jsx"
import{Saturation} from "../pages/addPostPages/Saturation.jsx"
import{Techniq} from "../pages/addPostPages/Techniq.jsx"
import{YearsReport} from "../pages/addPostPages/YearsReport.jsx"

export const AddLayout = ({children}) => {
  return (
    <>
      <AddPostPage /> {/* Ваш компонент меню */}
      <Routes>
      <Route index element={<Model3d />} />
        <Route path="/ore-composition" element={<OreComposition />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/remainder" element={<Remainder />} />
        <Route path="/saturation" element={<Saturation />} />
        <Route path="/techniq" element={<Techniq />} />
        <Route path="/years-report" element={<YearsReport />} />
      </Routes>
    </>
  )
}
