import React from 'react';

function useActiveDescendant({
  containerRef
}) {
  const [activeDescendant, setActiveDescendant] = React.useState(''); // Initialize value of active descendant

  React.useEffect(() => {
    if (containerRef.current && !activeDescendant) {
      const currentItem = containerRef.current.querySelector('[role="treeitem"][aria-current="true"]');
      const firstItem = containerRef.current.querySelector('[role="treeitem"]'); // If current item exists, use it as the initial value for active descendant

      if (currentItem) {
        setActiveDescendant(currentItem.id);
      } // Otherwise, initialize the active descendant to the first item in the tree
      else if (firstItem) {
        setActiveDescendant(firstItem.id);
      }
    }
  }, [containerRef, activeDescendant]);
  const handleKeyDown = React.useCallback(event => {
    const activeElement = document.getElementById(activeDescendant);
    if (!activeElement) return;
    const nextElement = getNextFocusableElement(activeElement, event);

    if (nextElement) {
      // Move active descendant if necessary
      setActiveDescendant(nextElement.id);
      event.preventDefault();
    } else {
      // If the active descendant didn't change,
      // forward the event to the active descendant
      activeElement.dispatchEvent(new KeyboardEvent(event.type, event));
    }
  }, [activeDescendant]);
  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  }, [containerRef, handleKeyDown]);
  return [activeDescendant, setActiveDescendant];
} // DOM utilities used for focus management

function getNextFocusableElement(activeElement, event) {
  const elementState = getElementState(activeElement); // Reference: https://www.w3.org/WAI/ARIA/apg/patterns/treeview/#keyboard-interaction-24

  switch (`${elementState} ${event.key}`) {
    case 'open ArrowRight':
      // Focus first child node
      return getFirstChildElement(activeElement);

    case 'open ArrowLeft':
      // Close node; don't change focus
      return;

    case 'closed ArrowRight':
      // Open node; don't change focus
      return;

    case 'closed ArrowLeft':
      // Focus parent element
      return getParentElement(activeElement);

    case 'end ArrowRight':
      // Do nothing
      return;

    case 'end ArrowLeft':
      // Focus parent element
      return getParentElement(activeElement);
  } // ArrowUp, ArrowDown, Home, and End behavior are the same regarless of element state


  switch (event.key) {
    case 'ArrowUp':
      // Focus previous visible element
      return getVisibleElement(activeElement, 'previous');

    case 'ArrowDown':
      // Focus next visible element
      return getVisibleElement(activeElement, 'next');

    case 'Home':
      // Focus first visible element
      return getFirstElement(activeElement);

    case 'End':
      // Focus last visible element
      return getLastElement(activeElement);
  }
}

function getElementState(element) {
  if (element.getAttribute('role') !== 'treeitem') {
    throw new Error('Element is not a treeitem');
  }

  switch (element.getAttribute('aria-expanded')) {
    case 'true':
      return 'open';

    case 'false':
      return 'closed';

    default:
      return 'end';
  }
}

function getVisibleElement(element, direction) {
  const root = element.closest('[role=tree]');
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, node => {
    if (!(node instanceof HTMLElement)) return NodeFilter.FILTER_SKIP;
    return node.getAttribute('role') === 'treeitem' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  });
  let current = walker.firstChild();

  while (current !== element) {
    current = walker.nextNode();
  }

  let next = direction === 'next' ? walker.nextNode() : walker.previousNode(); // If next element is nested inside a collapsed subtree, continue iterating

  while (next instanceof HTMLElement && (_next$parentElement = next.parentElement) !== null && _next$parentElement !== void 0 && _next$parentElement.closest('[role=treeitem][aria-expanded=false]')) {
    var _next$parentElement;

    next = direction === 'next' ? walker.nextNode() : walker.previousNode();
  }

  return next instanceof HTMLElement ? next : undefined;
}

function getFirstChildElement(element) {
  const firstChild = element.querySelector('[role=treeitem]');
  return firstChild instanceof HTMLElement ? firstChild : undefined;
}

function getParentElement(element) {
  const group = element.closest('[role=group]');
  const parent = group === null || group === void 0 ? void 0 : group.closest('[role=treeitem]');
  return parent instanceof HTMLElement ? parent : undefined;
}

function getFirstElement(element) {
  const root = element.closest('[role=tree]');
  const first = root === null || root === void 0 ? void 0 : root.querySelector('[role=treeitem]');
  return first instanceof HTMLElement ? first : undefined;
}

function getLastElement(element) {
  const root = element.closest('[role=tree]');
  const items = Array.from((root === null || root === void 0 ? void 0 : root.querySelectorAll('[role=treeitem]')) || []); // If there are no items, return undefined

  if (items.length === 0) return;
  let index = items.length - 1;
  let last = items[index]; // If last element is nested inside a collapsed subtree, continue iterating

  while (index > 0 && last instanceof HTMLElement && (_last$parentElement = last.parentElement) !== null && _last$parentElement !== void 0 && _last$parentElement.closest('[role=treeitem][aria-expanded=false]')) {
    var _last$parentElement;

    index -= 1;
    last = items[index];
  }

  return last instanceof HTMLElement ? last : undefined;
}

export { getNextFocusableElement, useActiveDescendant };
