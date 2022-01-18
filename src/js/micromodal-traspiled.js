"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).MicroModal = t();
}(void 0, function () {
  "use strict";

  return function () {
    var e = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'];

    var t =
    /*#__PURE__*/
    function () {
      function t(_ref) {
        var e = _ref.targetModal,
            _ref$triggers = _ref.triggers,
            _t = _ref$triggers === void 0 ? [] : _ref$triggers,
            _ref$onShow = _ref.onShow,
            o = _ref$onShow === void 0 ? function () {} : _ref$onShow,
            _ref$onClose = _ref.onClose,
            i = _ref$onClose === void 0 ? function () {} : _ref$onClose,
            _ref$openTrigger = _ref.openTrigger,
            n = _ref$openTrigger === void 0 ? "data-micromodal-trigger" : _ref$openTrigger,
            _ref$closeTrigger = _ref.closeTrigger,
            s = _ref$closeTrigger === void 0 ? "data-micromodal-close" : _ref$closeTrigger,
            _ref$disableScroll = _ref.disableScroll,
            a = _ref$disableScroll === void 0 ? !1 : _ref$disableScroll,
            _ref$disableFocus = _ref.disableFocus,
            l = _ref$disableFocus === void 0 ? !1 : _ref$disableFocus,
            _ref$awaitCloseAnimat = _ref.awaitCloseAnimation,
            d = _ref$awaitCloseAnimat === void 0 ? !1 : _ref$awaitCloseAnimat,
            _ref$awaitOpenAnimati = _ref.awaitOpenAnimation,
            r = _ref$awaitOpenAnimati === void 0 ? !1 : _ref$awaitOpenAnimati,
            _ref$debugMode = _ref.debugMode,
            c = _ref$debugMode === void 0 ? !1 : _ref$debugMode;

        _classCallCheck(this, t);

        this.modal = document.getElementById(e), this.config = {
          debugMode: c,
          disableScroll: a,
          openTrigger: n,
          closeTrigger: s,
          onShow: o,
          onClose: i,
          awaitCloseAnimation: d,
          awaitOpenAnimation: r,
          disableFocus: l
        }, _t.length > 0 && this.registerTriggers.apply(this, _toConsumableArray(_t)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this);
      }

      _createClass(t, [{
        key: "registerTriggers",
        value: function registerTriggers() {
          var _this = this;

          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          e.filter(Boolean).forEach(function (e) {
            e.addEventListener("click", function (e) {
              return _this.showModal(e);
            });
          });
        }
      }, {
        key: "showModal",
        value: function showModal() {
          var _this2 = this;

          if (this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add("is-open"), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.awaitOpenAnimation) {
            var _e = function _e() {
              _this2.modal.removeEventListener("animationend", _e, !1), _this2.setFocusToFirstNode();
            };

            this.modal.addEventListener("animationend", _e, !1);
          } else this.setFocusToFirstNode();

          this.config.onShow(this.modal, this.activeElement);
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          var e = this.modal;
          this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.scrollBehaviour("enable"), this.activeElement && this.activeElement.focus(), this.config.onClose(this.modal), this.config.awaitCloseAnimation ? this.modal.addEventListener("animationend", function t() {
            e.classList.remove("is-open"), e.removeEventListener("animationend", t, !1);
          }, !1) : e.classList.remove("is-open");
        }
      }, {
        key: "closeModalById",
        value: function closeModalById(e) {
          this.modal = document.getElementById(e), this.modal && this.closeModal();
        }
      }, {
        key: "scrollBehaviour",
        value: function scrollBehaviour(e) {
          if (!this.config.disableScroll) return;
          var t = document.querySelector("body");

          switch (e) {
            case "enable":
              Object.assign(t.style, {
                overflow: "",
                height: ""
              });
              break;

            case "disable":
              Object.assign(t.style, {
                overflow: "hidden",
                height: "100vh"
              });
          }
        }
      }, {
        key: "addEventListeners",
        value: function addEventListeners() {
          this.modal.addEventListener("touchstart", this.onClick), this.modal.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onKeydown);
        }
      }, {
        key: "removeEventListeners",
        value: function removeEventListeners() {
          this.modal.removeEventListener("touchstart", this.onClick), this.modal.removeEventListener("click", this.onClick), document.removeEventListener("keydown", this.onKeydown);
        }
      }, {
        key: "onClick",
        value: function onClick(e) {
          e.target.hasAttribute(this.config.closeTrigger) && (this.closeModal(), e.preventDefault());
        }
      }, {
        key: "onKeydown",
        value: function onKeydown(e) {
          27 === e.keyCode && this.closeModal(e), 9 === e.keyCode && this.maintainFocus(e);
        }
      }, {
        key: "getFocusableNodes",
        value: function getFocusableNodes() {
          var t = this.modal.querySelectorAll(e);
          return Array.apply(void 0, _toConsumableArray(t));
        }
      }, {
        key: "setFocusToFirstNode",
        value: function setFocusToFirstNode() {
          if (this.config.disableFocus) return;
          var e = this.getFocusableNodes();
          e.length && e[0].focus();
        }
      }, {
        key: "maintainFocus",
        value: function maintainFocus(e) {
          var t = this.getFocusableNodes();

          if (this.modal.contains(document.activeElement)) {
            var _o = t.indexOf(document.activeElement);

            e.shiftKey && 0 === _o && (t[t.length - 1].focus(), e.preventDefault()), e.shiftKey || _o !== t.length - 1 || (t[0].focus(), e.preventDefault());
          } else t[0].focus();
        }
      }]);

      return t;
    }();

    var o = null;

    var i = function i(e) {
      if (!document.getElementById(e)) return console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(e, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "<div class=\"modal\" id=\"".concat(e, "\"></div>")), !1;
    },
        n = function n(e, t) {
      if (function (e) {
        if (e.length <= 0) console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>');
      }(e), !t) return !0;

      for (var o in t) {
        i(o);
      }

      return !0;
    };

    return {
      init: function init(e) {
        var i = Object.assign({}, {
          openTrigger: "data-micromodal-trigger"
        }, e),
            s = _toConsumableArray(document.querySelectorAll("[".concat(i.openTrigger, "]"))),
            a = function (e, t) {
          var o = [];
          return e.forEach(function (e) {
            var i = e.attributes[t].value;
            void 0 === o[i] && (o[i] = []), o[i].push(e);
          }), o;
        }(s, i.openTrigger);

        if (!0 !== i.debugMode || !1 !== n(s, a)) for (var l in a) {
          var _e2 = a[l];
          i.targetModal = l, i.triggers = _toConsumableArray(_e2), o = new t(i);
        }
      },
      show: function show(e, n) {
        var s = n || {};
        s.targetModal = e, !0 === s.debugMode && !1 === i(e) || (o = new t(s)).showModal();
      },
      close: function close(e) {
        e ? o.closeModalById(e) : o.closeModal();
      }
    };
  }();
});