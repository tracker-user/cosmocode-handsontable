import staticRegister from './../utils/staticRegister';
import {hasEditor, registerEditor} from './../editors';
import {hasRenderer, registerRenderer} from './../renderers';
import {hasValidator, registerValidator} from './../validators';

import textCellType from './textType';

const {
  register,
  getItem,
  hasItem,
  getNames,
  getValues,
} = staticRegister('cellTypes');

_register('text', textCellType);

/**
 * Retrieve cell type object.
 *
 * @param {String} name Cell type identification.
 * @returns {Object} Returns cell type object.
 */
function _getItem(name) {
  if (!hasItem(name)) {
    throw Error(`You declared cell type "${name}" as a string that is not mapped to a known object.
                 Cell type must be an object or a string mapped to an object registered by "Handsontable.cellTypes.registerCellType" method`);
  }

  return getItem(name);
}

/**
 * Register cell type under specified name.
 *
 * @param {String} name Cell type identification.
 * @param {Object} type An object with contains keys (eq: `editor`, `renderer`, `validator`) which describes specified behaviour of the cell.
 */
function _register(name, type) {
  const {editor, renderer, validator} = type;

  if (editor) {
    registerEditor(name, editor);
  }
  if (renderer) {
    registerRenderer(name, renderer);
  }
  if (validator) {
    registerValidator(name, validator);
  }

  register(name, type);
}

export {
  _register as registerCellType,
  _getItem as getCellType,
  hasItem as hasCellType,
  getNames as getRegisteredCellTypeNames,
  getValues as getRegisteredCellTypes,
};
