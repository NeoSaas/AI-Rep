import React from 'react';
import AnalyticsGraph from './AnalyticsGraph';
import TagStatistics from './TagStatistics'; 

function AnalyticsPage() {
  return (
    <div>
      <AnalyticsGraph />
      <TagStatistics /> 
    </div>
  );
}

export default AnalyticsPage;
