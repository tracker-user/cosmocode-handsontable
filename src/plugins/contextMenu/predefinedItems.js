import {objectEach} from './../../helpers/object';
import columnLeftItem, {KEY as COLUMN_LEFT} from './predefinedItems/columnLeft';
import columnRightItem, {KEY as COLUMN_RIGHT} from './predefinedItems/columnRight';
import removeColumnItem, {KEY as REMOVE_COLUMN} from './predefinedItems/removeColumn';
import removeRowItem, {KEY as REMOVE_ROW} from './predefinedItems/removeRow';
import rowAboveItem, {KEY as ROW_ABOVE} from './predefinedItems/rowAbove';
import rowBelowItem, {KEY as ROW_BELOW} from './predefinedItems/rowBelow';
import separatorItem, {KEY as SEPARATOR} from './predefinedItems/separator';

export {KEY as COLUMN_LEFT} from './predefinedItems/columnLeft';
export {KEY as COLUMN_RIGHT} from './predefinedItems/columnRight';
export {KEY as REMOVE_COLUMN} from './predefinedItems/removeColumn';
export {KEY as REMOVE_ROW} from './predefinedItems/removeRow';
export {KEY as ROW_ABOVE} from './predefinedItems/rowAbove';
export {KEY as ROW_BELOW} from './predefinedItems/rowBelow';
export {KEY as SEPARATOR} from './predefinedItems/separator';

export const ITEMS = [
  ROW_ABOVE, ROW_BELOW, COLUMN_LEFT, COLUMN_RIGHT, REMOVE_ROW, REMOVE_COLUMN, SEPARATOR
];

const _predefinedItems = {
  [SEPARATOR]: separatorItem,
  [ROW_ABOVE]: rowAboveItem,
  [ROW_BELOW]: rowBelowItem,
  [COLUMN_LEFT]: columnLeftItem,
  [COLUMN_RIGHT]: columnRightItem,
  [REMOVE_ROW]: removeRowItem,
  [REMOVE_COLUMN]: removeColumnItem,
};

/**
 * Gets new object with all predefined menu items.
 *
 * @returns {Object}
 */
export function predefinedItems() {
  const items = {};

  objectEach(_predefinedItems, (itemFactory, key) => {
    items[key] = itemFactory();
  });

  return items;
}

/**
 * Add new predefined menu item to the collection.
 *
 * @param {String} key Menu command id.
 * @param {Object} item Object command descriptor.
 */
export function addItem(key, item) {
  if (ITEMS.indexOf(key) === -1) {
    _predefinedItems[key] = item;
  }
}
