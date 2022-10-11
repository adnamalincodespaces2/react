import { useCallback, useMemo, useEffect } from 'react';

/**
 * Calls all handlers in reverse order
 * @param event The KeyboardEvent generated by the Escape keydown.
 */

function handleEscape(event) {
  if (!event.defaultPrevented) {
    for (const handler of Object.values(registry).reverse()) {
      handler(event); // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition

      if (event.defaultPrevented) break;
    }
  }
}

const registry = {};

function register(id, handler) {
  registry[id] = handler;
}

function deregister(id) {
  delete registry[id];
} // For auto-incrementing unique identifiers for registered handlers.


let handlerId = 0;
/**
 * Sets up a `keydown` listener on `window.document`. If
 * 1) The pressed key is "Escape", and
 * 2) The event has not had `.preventDefault()` called
 * The given callback will be executed.
 *
 * Note: If multiple `useOnEscapePress` hooks are active simultaneously, the
 * callbacks will occur in reverse order. In other words, if a parent component
 * and a child component both call `useOnEscapePress`, when the user presses
 * Escape, the child component's callback will execute, followed by the parent's
 * callback. Each callback has the chance to call `.preventDefault()` on the
 * event to prevent further callbacks.
 *
 * @param callback {(e: KeyboardEvent) => void} The callback that gets executed
 * when the Escape key is pressed. The KeyboardEvent generated by the Escape
 * keypress is passed as the only argument.
 *
 * @param callbackDependencies {React.DependencyList} The dependencies of the given
 * `onEscape` callback for memoization. Omit this param if the callback is already
 * memoized. See `React.useCallback` for more info on memoization.
 */

const useOnEscapePress = (onEscape, callbackDependencies = [onEscape]) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const escapeCallback = useCallback(onEscape, callbackDependencies);
  const handler = useCallback(event => {
    if (event.key === 'Escape') escapeCallback(event);
  }, [escapeCallback]);
  const id = useMemo(() => handlerId++, []);
  useEffect(() => {
    if (Object.keys(registry).length === 0) {
      document.addEventListener('keydown', handleEscape);
    }

    register(id, handler);
    return () => {
      deregister(id);

      if (Object.keys(registry).length === 0) {
        document.removeEventListener('keydown', handleEscape);
      }
    };
  }, [id, handler]);
};

export { useOnEscapePress };
