import React from "react";
import {Switch, Route, Redirect} from "react-router";
/*
* routes: 传入的各级路由参数
* authed: 鉴权标志
* authPath: 鉴权的路径
* */
interface IRoutes {
  [props: string]: any
}

function renderRoutes(routes: IRoutes[], authed?: string, authPath = '/login') {
    return routes ? (
        <Switch>
            {routes.map((route, i) => (
                <Route
                    key={route.key || i}
                    path={route.path}
                    exact={route.exact}
                    render={props => {
                        //不需要鉴权
                        if (!route.requiresAuth || authed || route.path === authPath) {
                            return route.render ? ( //优先处理传入的render里面的逻辑并传入参数
                                route.render({...props, route: route})
                            ) : ( //否则直接返回组件并传入参数
                                <route.component {...props} route={route} />
                            )
                        }
                        //跳转鉴权页面并传入参数
                        return <Redirect to={{pathname: authPath, state: {from: props.location}}}/>}
                    }
                />
            ))}
        </Switch>
    ) : null;
}

export default renderRoutes;
