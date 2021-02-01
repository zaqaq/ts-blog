import React, {
  FC,
  MouseEvent, useEffect, useMemo,
  useState
} from 'react';
import { IPager } from '@/types'
import { Pagination } from './style'

const Pager: FC<IPager> = (props) => {
  let {total, pageNum, handlePageNum, pageSize} = props;
  pageSize = pageSize || 10
  const totalCount = Math.ceil(total / pageSize)
  const [countArray] = useMemo(() => {
    const countArray = Array.from(new Array(totalCount), (item, index: number) => index + 1)
    return [countArray]
  }, [totalCount])

  let [currentPage, setcurrentPage] = useState(1);
  const [firstOmit, setFirstOmit] = useState(false)
  const [lastOmit, setLastOmit] = useState(false)
  const [btList, setBtList] = useState<number[]>([])

  useEffect(() =>{
    setcurrentPage(pageNum)
  }, [pageNum])

  useEffect(() => {
    if (totalCount <= 9) {
      setFirstOmit(false)
      setLastOmit(false)
      setBtList(countArray)
    } else {
      if (currentPage <= 5) {
        setBtList(countArray.slice(0, 8))
        setLastOmit(true)
        setFirstOmit(false)
      } else {
        if (currentPage > totalCount - 5) {
          setFirstOmit(true)
          setLastOmit(false)
          setBtList(countArray.slice(countArray.length - 8, countArray.length))
        } else {
          setFirstOmit(true)
          setLastOmit(true)
          const c = countArray.slice(currentPage - 4, currentPage - 1)
          const d = countArray.slice(currentPage, currentPage + 3)
          setBtList([...c, currentPage, ...d])
        }
      }
    }
  }, [currentPage,totalCount,countArray])

  const handleNum = (event: MouseEvent) => {
    const val = Number(event.currentTarget.innerHTML)
    setcurrentPage(val)
    handlePageNum(val)
    window.scrollTo(0, 0);
  }

  const handlePrev = () => {
    if(currentPage !== 1){
      setcurrentPage(--currentPage)
      handlePageNum(currentPage)
      window.scrollTo(0, 0);
    }
  }

  const handleNext = () => {
    if(currentPage !== totalCount){
      setcurrentPage(++currentPage)
      handlePageNum(currentPage)
      window.scrollTo(0, 0);
    }
  }

  return (
    <>
      {
        totalCount > 1 && (
          <Pagination>
            <span
              className={1 === currentPage ? 'page-prev page-disabled' : 'page-prev'}
              onClick={handlePrev}
            >
              <i className='iconfont iconarrow-left'></i>
            </span>
            {firstOmit &&
            <span
                onClick={handleNum}
                className={1 === currentPage ? 'page-current' : ''}
            >1</span>}
            {firstOmit && <strong className='omit'>...</strong>}
            {
              btList.map((item: number) =>
                <span
                  key={item}
                  className={item === currentPage ? 'page-current' : ''}
                  onClick={handleNum}
                >
                  {item}
                </span>
              )
            }
            {lastOmit && <strong className='omit'>...</strong>}
            {lastOmit &&
            <span
                onClick={handleNum}
                className={totalCount === currentPage ? 'page-current' : ''}
            >{totalCount}</span>}
            <span
              className={totalCount === currentPage ? 'page-next page-disabled' : 'page-next'}
              onClick={handleNext}
            >
              下一页 <i className='iconfont iconarrow-right'></i>
            </span>
            {
              totalCount > 20 && (
                <div className="page-jump">
                  <p className="page-jump-txt">到第：</p>
                  <input type="text" className="page-input" />
                  <p className="page-jump-txt2">页</p>
                  <p className="page-jump-btn">确定</p>
                </div>
              )
            }
          </Pagination>
        )
      }
    </>
  )
};

export default Pager;
