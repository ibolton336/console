import * as React from 'react';
import { usePlansQuery } from './plans';

const ExtensionConsumerChild: React.FC = () => {
  const plansQuery = usePlansQuery();
  console.log('plansQuery', plansQuery);
  return (
    <div>
      response.data
      {/* <div>The WebSocket is currently {connectionStatus}</div>
      {lastJsonMessage ? <span>Last message: {lastJsonMessage?.data?.kind}</span> : null}
      <ul></ul> */}
    </div>
  );
};

export default ExtensionConsumerChild;
