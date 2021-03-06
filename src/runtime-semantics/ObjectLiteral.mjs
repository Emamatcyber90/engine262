import {
  ObjectCreate,
} from '../abstract-ops/all.mjs';
import {
  PropertyDefinitionEvaluation_PropertyDefinitionList,
} from './all.mjs';
import { surroundingAgent } from '../engine.mjs';
import { Q } from '../completion.mjs';

// 12.2.6.7 #sec-object-initializer-runtime-semantics-evaluation
//   ObjectLiteral :
//     `{` `}`
//     `{` PropertyDefintionList `}`
//     `{` PropertyDefintionList `,` `}`
export function* Evaluate_ObjectLiteral(ObjectLiteral) {
  if (ObjectLiteral.properties.length === 0) {
    return ObjectCreate(surroundingAgent.intrinsic('%ObjectPrototype%'));
  }

  const PropertyDefintionList = ObjectLiteral.properties;

  const obj = ObjectCreate(surroundingAgent.intrinsic('%ObjectPrototype%'));
  Q(yield* PropertyDefinitionEvaluation_PropertyDefinitionList(PropertyDefintionList, obj, true));
  return obj;
}
