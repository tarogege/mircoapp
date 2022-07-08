import React, { useEffect, useRef, useContext } from 'react'
import {mount} from 'marketing/marketApp'
// 使用useNavigator，useLocation代替了useHistory
import { useNavigate, useLocation, UNSAFE_NavigationContext } from 'react-router-dom'

const MarketingApp = (props) => {
    const marketingRef = useRef()
    const navigate = useNavigate()
    const location = useLocation()
    // useLocation,useNavigate,useParams,useMatch,useRef
    console.log(navigate, 'navigate')
    console.log(props, 'props')
    const navigator = useContext(UNSAFE_NavigationContext).navigator;
    useEffect(() => {
        // 通过ref拿到真实dom元素，在组件挂载的时候进行挂载
        const { onParentNavigator } = mount(marketingRef.current, { onNavigator({ pathname: nextPathname }) {
            if (nextPathname !== location?.pathname) {
                navigate(nextPathname)
            }
        } })
        // 在v6中调用history.listen方法////// 或者直接通过useLocation去监听location的变化，执行这个操作
        navigator.listen(onParentNavigator)
    }, [])
    return (
        <div ref={marketingRef}></div>
    )
}

export default MarketingApp