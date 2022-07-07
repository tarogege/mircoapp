import React, { useEffect, useRef } from 'react'
import {mount} from 'marketing/marketApp'

const MarketingApp = () => {
    const marketingRef = useRef()
    useEffect(() => {
        console.log(mount, 'mount')
        // 通过ref拿到真实dom元素，在组件挂载的时候进行挂载
        mount(marketingRef.current)
    }, [])
    return (
        <div ref={marketingRef}></div>
    )
}

export default MarketingApp