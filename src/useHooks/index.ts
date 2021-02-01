import {useEffect} from "react";
import {useLocation} from 'react-router-dom'

const useScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

const useReStoreScrollTop = (pathname: string) => {
  useEffect(() => {
    let scrollY = Number(sessionStorage.getItem(pathname))
    scrollY && window.scrollTo(0, scrollY)
    sessionStorage.removeItem(pathname)
    // return () => {
    //
    //   console.log(window.scrollY);
    //   sessionStorage.setItem(pathname, `${window.scrollY}`)
    //
    //
    // };
  }, [pathname])
}

export {
  useScrollToTop, useReStoreScrollTop
}
