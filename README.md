redux-plus
==========
> **ADVERTISING:** I'm actively looking for work, see [www.ashtonwar.com](http://ashtonwar.com/) for details.

The core of Redux is simple. But it comes with a big ecosystem, middleware, action creators, selectors and other things attached that slow down development - a single change in specs shouldn't require changes in 5+ locations to implement. redux-plus makes developers more productive by finding one place for all state-related code: the reducer.

redux-plus makes four non-breaking changes to redux:

**dispatchEnhancer**: When using redux-plus you should dispatch actions directly to the store using `store.dispatch`. The API is nicer now: `store.dispatch('INCREMENT', 5)` & `store.dispatch({type: 'INCREMENT', payload: 5})` are equivalent.

**effectEnhancer**: Running side-effects inside the reducer is bad because it makes your state hard to predict & test. With redux-plus you can return effects from the reducer which run in a different context. Effects can optionally return actions that are dispatched to the store.

**selectorEnhancer**: Selectors are like formulas in a spreadsheet. They compute derived data and only update when the data they depend on does.

**dynamicReducerEnhancer**: Some (mostly performance-related) problems are impossible to solve statically. redux-plus allows you to generate reducers on the fly. *This feature is very powerful and should be used with caution and you probably won't need it.*

### Usage
```js
import {
  createStore, combineReducers, createReducer,
  createEffect, createSelector} from 'redux-plus'

const reducer = combineReducers({
  counter: createReducer({
    INCREMENT: state => state + 1
    INCREMENT_IN_5_SECONDS: state => createEffect(
      state,
      () => new Promise(resolve => setTimeout(() =>
        resolve('INCREMENT'),
        5000))
    )
  }, 0),
  counterDoubled: createSelector(
    'counter',
    (state, counter) => counter * 2),
})

const store = createStore(reducer)

store.getState() // {counter: 0, counterDoubled: 0}
store.dispatch('INCREMENT')
store.getState() // {counter: 1, counterDoubled: 2}
store.dispatch('INCREMENT_IN_5_SECONDS')
store.getState() // {counter: 1, counterDoubled: 2}
setTimeout(() =>
  store.getState(), // {counter: 2, counterDoubled: 4}
  5000)
```

### API
##### `createStore(reducer, [initialState], [storeEnhancer] = plus)`
Drop-in replacement for `redux.createStore` storeEnhancer. `plus` by default.

```js
import {createStore, plus, compose} from 'redux-plus'

const store = createStore(reducer) // use it like this
const store = createStore(
  reducer,
  compose(plus, window.devToolsExtension ? window.devToolsExtension() : f => f)
) // works with other store enhancers, apply plus first
```

##### `plus`
The composite store-enhancer, you can import individual enhancers from `redux-plus/enhancers`

```js
import {dispatchEnhancer, selectorEnhancer, effectEnhancer} from 'redux-plus/enhancers'

export const plus = compose(
  dispatchEnhancer,
  selectorEnhancer, // doubles up as dynamicReducerEnhancer
  effectEnhancer,
)
```

##### `createReducer(reducerMap)`

##### `combineReducers(reducerMap)`

##### `createEffect(reducer, ...generators)`

##### `createSelector(...dependencies, reducer)`

##### `createArraySelector(arrayPointer, itemResolver, [dependencies], reducer)`

##### `createDynamicReducer(reducer)`

##### `applyMiddleware(middleware)`
Identical to `redux.applyMiddleware`

##### `compose(...storeEnhancers)`
Identical to `redux.compose`

##### `getModel(effect)` / `getGenerators(effect)`

### Tell Me More
* emulating middleware
* reducer creators
* efficient lists
* using immutable.js
* rendering in the reducer
* reducer metadata

### Thanks
Others did the real legwork. This library was inspired by:

* [redux-loop](https://github.com/raisemarketplace/redux-loop) for side-effects in the reducer
* [reselect](https://github.com/reactjs/reselect) for the ideal memoizer
* [MobX](https://github.com/mobxjs/mobx) for the selector graph (great alternative that removes architectural constraints)
* and of course.. [redux](https://github.com/reactjs/redux)
