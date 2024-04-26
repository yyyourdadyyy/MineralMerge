import{NavLink} from "react-router-dom"
import { DoughnutChartMain as Doughnut } from "./components/Chart.jsx"
import { LineChart as Line } from "./components/Chart.jsx"
import { BarChart as Bar } from "./components/Chart.jsx"
import React from 'react';
import{Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls} from "@react-three/drei";

function Model(props){
  const{scene} = useGLTF("/qquit.glb");
  return <primitive object={scene} scale={1} {...props}/>;
  
}
export const MainPage = () => {
    return (
    <div className="wrapper">
    <div className="sidenav">
      <div className="logos">
        <NavLink href="/"><div className="logo1 l-img"></div></NavLink>
        <a href="https://www.erg.kz/kk"><div className="logo2 l-img"></div></a>
      </div>
    <div className="side-title">ORE COMPOSITION</div>
    <div className="chart-block">
      <div className="label-box">
        <div className="l-place">
          <div id="s-pl" className="c-number">3</div>
          <div className="l-description">Place</div>
        </div>
        <div className="l-title ct">Sulfur</div>
        <div className="l-place">
          <div id="s-pl" className="c-number">15%</div>
          <div className="l-description">Content</div>
        </div>
      </div>
      <div className="chart">
        <div className="chart-box">
          <div className="c-label">
            <div id="fe-con" className="c-number">51%</div>
            <div className="c-title ct">Fe</div>
          </div>
          <Doughnut />
          {/* <canvas id="myChart" ></canvas> */}
        </div>
      </div>
      <div className="label-box">
        <div className="l-place">
          <div id="s-pl" className="c-number">3</div>
          <div className="l-description">Place</div>
        </div>
        <div className="l-title ct">Sulfur</div>
        <div className="l-place">
          <div id="s-pl" className="c-number">15%</div>
          <div className="l-description">Content</div>
        </div>
      </div>
    </div>
    </div>
    <div className="parent">
      <div className="div1 glass">
     {/* <!-- Unity --> */}
     <div id="unity-container" className="unity-desktop">
      <Canvas
      style={{ touchAction: 'none' }}
      className="unity-canvas"
      id="unity-canvas"
      dpr={[1, 2]} shadows
      camera={{fov: 45, position: [-5, 15, 15], zoom: 4}}
      gl={{ alpha: true }}
      >
      <color attach="background" args={["#303d45"]} />
      <PresentationControls speed= {1.5} global zoom= {2} polar={[-0.1, Math.PI / 4]}>
        <Stage environment={"sunset"}>
        {/* <ambientLight intensity={20} />
        <pointLight position={[10, 10, 10]} intensity={10} castShadow={true} /> */}
        <Model scale={1} />
        </Stage>
      </PresentationControls>
    </Canvas>
    </div>
    {/* <!-- Unity End --> */}


      </div>
      <div className="div3 glass">
        <div>
          <div className="h-[140px] w-[600px]">
            <div className="l-title ct light-text">Ore saturation</div>
            <Bar className='w-[600px]'></Bar>
            <canvas id="barchart"></canvas>
        </div>
        </div>
      </div>
      <div className="div4 glass flex flex-col justify-start">
          <div className="l-title grid-title">Personal</div>
          <div id="s-pl" className="c-number grid-num">2380</div>
          <div className="l-description grid-disc">people</div>
      </div>
      <div className="div5 glass flex flex-col justify-start">
        <div className="l-title grid-title">Remaind</div>
        <div id="s-pl" className="c-number grid-num">90+</div>
        <div className="l-description">years</div>
      </div>
      <div className="div6 glass">
        <div className="line-chart-block">
          <div className="l-title line-chart-title">Years report</div>
          <Line className='line-chart'></Line>
        </div>
      </div>
      </div>
  </div>
  )
}
