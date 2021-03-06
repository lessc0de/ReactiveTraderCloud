import autobahn from 'autobahn';

/**
 * AutobahnSessionProxy: makes the autobahn session api more explicit, aids testing
 */
export default class AutobahnSessionProxy {
  _session:autobahn.Session;

  constructor(session:autobahn.Session) {
    this._session = session;
  }

  subscribe<TRequest, TResults>(topic:string, onResults:(r:TResults) => void):Promise {
    return this._session.subscribe(topic, onResults);
  }

  unsubscribe<TRequest, TResults>(subscription:autobahn.Subscription):Promise {
    return this._session.unsubscribe(subscription);
  }

  call<TRequest, TResults>(operationName:string, payload:TRequest):Promise {
    return this._session.call(operationName, payload);
  }
}
