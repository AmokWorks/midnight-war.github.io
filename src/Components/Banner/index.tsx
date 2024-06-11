import React from 'react'
import './banner.css'
import { Application } from '@splinetool/runtime'

const splineLink = 'https://prod.spline.design/2q3tJzSrpKSCMRpl/scene.splinecode'
export const Banner = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const wrapperRef = React.useRef<HTMLDivElement>(null)

    function preventScroll(e: any) {
        e.preventDefault();
        e.stopPropagation();

        return false;
    }

    function disable() {
        canvasRef?.current?.addEventListener('wheel', preventScroll, { passive: false });
    }

    function enable() {
        canvasRef?.current?.removeEventListener('wheel', preventScroll);
    }

    // const canvas = document.getElementById('canvas3d')
    React.useEffect(() => {
        const canvas = document.getElementById('canvas3d')

        const spline = new Application(canvas as any)
        spline.load(splineLink)

    }, [])



    return <div ref={wrapperRef}>
        <canvas id='canvas3d' ref={canvasRef} onMouseEnter={() => disable()} onMouseLeave={() => enable()} />
    </div>
}