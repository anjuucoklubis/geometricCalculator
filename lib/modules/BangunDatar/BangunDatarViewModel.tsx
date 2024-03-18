import {useEffect, useState} from 'react';
import {BangunDatarInterface} from './BangunDatarInterface';
import dataBangunDatar from './BangunDatarData';

const BJPSKesehatanViewModel = () => {
  const [data, setData] = useState<BangunDatarInterface[]>([]);
  const getData = async () => {
    setData(dataBangunDatar);
  };

  useEffect(() => {
    getData();
  }, []);
  return {
    data,
  };
};
export default BJPSKesehatanViewModel;
