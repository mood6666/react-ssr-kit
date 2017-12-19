/**
 * Created at 16/5/20.
 * @Author Ling.
 * @Email i@zeroling.com
 */

import React from 'react'
import { RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import configureStore from '../../client/store/configureStore'
const store = configureStore()

export default async (ctx, next, renderProps) => {
  const route = renderProps.routes[renderProps.routes.length - 1]
  let prefetchTasks = []
  for (let component of renderProps.components) {
    if (component && component.WrappedComponent && component.WrappedComponent.fetch) {

      const _tasks = component.WrappedComponent.fetch(store.getState(), store.dispatch, ctx.request.header.cookie)
      if (Array.isArray(_tasks)) {
        prefetchTasks = prefetchTasks.concat(_tasks)
      } else if (_tasks.then) {
        prefetchTasks.push(_tasks)
      }
    }
  }

  await Promise.all(prefetchTasks)
  await ctx.render('index', {
    state: store.getState(),
    root: renderToString(<Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>)
  })
}
