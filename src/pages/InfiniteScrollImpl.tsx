import React, { useState, useEffect } from "react";
import { getUserData } from "../utils/api";
import { Each } from "../utils/EachLoop";
import InfiniteScroll from "../components/InfiniteScroll/InfiniteScroll";
import styles from "./css/InfiniteScrollImpl.module.css";

interface InfiniteScrollImplProp {}

const InfiniteScrollImpl: React.FC<InfiniteScrollImplProp> = () => {
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [endPage, setEndPage] = useState<any>(100);

  const { containerStyle, listContainer, cardStyle, cardContainer } = styles;

  // using dummy api for infinite scoll data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
      await getUserData({ page: page })
        .then((res) => {
          setData((prev: any) => [...prev, ...res?.results]);
          setLoading(true);
        })
        .catch((err) => {
          setData([]);
          setLoading(true);
        });
    };

    fetchData();
  }, [page]);

  // function to concat the name
  const getFullName = ({ title, first, last }: any) =>
    title.concat(first).concat(last);

  // render child method
  const renderChild = (person: any, index: number) => {
    return (
      <div key={`${index}_${person?.id?.value}`} className={cardStyle}>
        <img src={person?.picture.large} />
        <div className={cardContainer}>
          <p>Name: {getFullName(person?.name)}</p>
          <p>gender: {person?.gender}</p>
          <p>Email: {person?.email}</p>
          <p>Phone No: {person?.phone}</p>
        </div>
      </div>
    );
  };

  return (
    <div className={containerStyle}>
      <div className={listContainer}>
        {loading && <Each data={data}>{renderChild}</Each>}
      </div>
      <InfiniteScroll
        setPage={setPage}
        data={data}
        loading={loading}
        page={page}
        endPage={endPage}
      />
    </div>
  );
};

export default InfiniteScrollImpl;
