import React, { useEffect, useRef } from "react";
import CommonInfiniteScroll from "../../common/components/CommonInfiniteScroll/CommonInfiniteScroll";

interface InfiniteScrollProp {
  setPage: any;
  data: any;
  loading?: any;
  endPage?: any;
  page?: any;
}

const InfiniteScroll: React.FC<InfiniteScrollProp> = (props) => {
  return (
    <>
      {parseInt(props?.page) + 1 >= parseInt(props?.endPage) ? (
        <div className="">No more data to show</div>
      ) : (
        <div className="">
          <CommonInfiniteScroll
            onChangeVisibility={(target: any) => {
              if (target.isIntersecting) {
                if (props?.page + 1 < props?.endPage) {
                  props?.setPage((prev: any) => prev + 1);
                }
              }
            }}
            isDone={parseInt(props?.page) + 1 >= parseInt(props?.endPage)}
            isEmptyData={props?.data?.length === 0}
            dependencyList={[props?.endPage]}
            setPage={props?.setPage}
          />
        </div>
      )}
    </>
  );
};

export default InfiniteScroll;
