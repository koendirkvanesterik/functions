'use strict'
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k]
          },
        })
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.Label = exports.LabelContextProvider = exports.LabelContext = exports.parseReplacements = exports.normalizeLabelData = exports.createPrefixKey = void 0
var react_1 = __importStar(require('react'))
var createPrefixKey = function (prefix, key) {
  return [prefix, key]
    .filter(function (_) {
      return _
    })
    .join('.')
}
exports.createPrefixKey = createPrefixKey
var normalizeLabelData = function (labelData, prefix) {
  if (prefix === void 0) {
    prefix = ''
  }
  return Object.keys(labelData).reduce(function (labels, key) {
    var _a
    var prefixKey = exports.createPrefixKey(prefix, key)
    var labelValue = labelData[key]
    return typeof labelValue === 'string'
      ? __assign(
          __assign({}, labels),
          ((_a = {}), (_a[prefixKey] = labelValue), _a),
        )
      : __assign(
          __assign({}, labels),
          exports.normalizeLabelData(labelValue, prefixKey),
        )
  }, {})
}
exports.normalizeLabelData = normalizeLabelData
var parseReplacements = function (source, replacements) {
  if (replacements === void 0) {
    replacements = {}
  }
  if (Object.keys(replacements).length === 0) {
    return source.replace(/ {.*}/g, '')
  }
  return Object.keys(replacements).reduce(function (replacement, key) {
    return replacement.replace(
      new RegExp('{' + key + '}', 'g'),
      '' + replacements[key],
    )
  }, source)
}
exports.parseReplacements = parseReplacements
exports.LabelContext = react_1.createContext({})
var LabelContextProvider = function (_a) {
  var children = _a.children,
    data = _a.data
  return react_1.default.createElement(
    exports.LabelContext.Provider,
    { value: exports.normalizeLabelData(data) },
    children,
  )
}
exports.LabelContextProvider = LabelContextProvider
exports.LabelContextProvider.displayName = 'LabelContextProvider'
var Label = function (_a) {
  var _b
  var id = _a.id,
    replacements = _a.replacements
  var labels = react_1.useContext(exports.LabelContext)
  var label = (_b = labels[id]) !== null && _b !== void 0 ? _b : id
  if (replacements) {
    return react_1.default.createElement(
      react_1.default.Fragment,
      null,
      exports.parseReplacements(label, replacements),
    )
  }
  return react_1.default.createElement(react_1.default.Fragment, null, label)
}
exports.Label = Label
exports.Label.displayName = 'Label'
