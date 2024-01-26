import React, { useEffect, useRef } from "react";
import CommonLoader from "../CommonLoader/CommonLoader";

interface CommonInfiniteScrollProp {
  setPage: any;
  loading?: any;
  onChangeVisibility?: any;
  isDone?: any;
  isEmptyData?: any;
  dependencyList?: any;
}

const CommonInfiniteScroll: React.FC<CommonInfiniteScrollProp> = (props) => {
  const myRef = useRef<any>(null);
  const handleScroll = (entries: any) => {
    const target = entries[0];
    props?.onChangeVisibility(target);
  };
  // using IntersectionObserver to check if we have reached the end, with a threshold of 0.8
  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    });

    if (myRef.current) {
      observer.observe(myRef.current);
    }

    return () => {
      if (myRef.current) {
        observer.unobserve(myRef.current);
      }
    };
  }, [myRef]);

  return (
    <div>
      <div className="" ref={myRef}>
        {!props?.isDone && !props?.isEmptyData && <CommonLoader />}
        {props?.isDone && <div className="">No more data to show</div>}
      </div>
    </div>
  );
};

export default CommonInfiniteScroll;
