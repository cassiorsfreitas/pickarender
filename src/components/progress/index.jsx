/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import ProgressBar from '@ramonak/react-progress-bar';

const Progress = (props) => {
  let { id } = useParams();
  let loading = id * (100 / props.potato);

  return (
    <div className="bar">
      <ProgressBar completed={loading} bgColor="#F16101" height="20px" baseBgColor="#91BED5" />
    </div>
  );
};

export default Progress;
