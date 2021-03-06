import { wellKnownSymbols } from '../value.mjs';
import { BootstrapPrototype } from './Bootstrap.mjs';

function AsyncIteratorPrototype_asyncIterator(args, { thisValue }) {
  return thisValue;
}

export function CreateAsyncIteratorPrototype(realmRec) {
  const proto = BootstrapPrototype(realmRec, [
    [wellKnownSymbols.asyncIterator, AsyncIteratorPrototype_asyncIterator, 0],
  ], realmRec.Intrinsics['%ObjectPrototype%']);

  realmRec.Intrinsics['%AsyncIteratorPrototype%'] = proto;
}
