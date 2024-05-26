import React from 'react'
import './banner.css'
import { Application } from '@splinetool/runtime'

const splineLink = 'https://prod.spline.design/2q3tJzSrpKSCMRpl/scene.splinecode'
export const Banner = () => {
    // const canvas = document.getElementById('canvas3d')
    React.useEffect(() => {
        const canvas = document.getElementById('canvas3d')

        const spline = new Application(canvas as any)
        spline.load(splineLink)
    }, [])

    return <div>
        <canvas id='canvas3d' />
    </div>
}