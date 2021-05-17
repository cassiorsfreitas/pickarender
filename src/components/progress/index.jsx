import React from 'react';
import { useParams } from 'react-router-dom';
import ProgressBar from '@ramonak/react-progress-bar';

const Progress = () => {
  let { id } = useParams();
  let loading = id * 10;

  return (
    <div className="bar">
      <ProgressBar completed={loading} bgColor="#F16101" height="20px" baseBgColor="#91BED5" />
    </div>
  );
};

export default Progress;
