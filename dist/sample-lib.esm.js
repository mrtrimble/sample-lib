import { defineComponent, pushScopeId, popScopeId, openBlock, createBlock, renderSlot, withScopeId } from 'vue';

var script = /*#__PURE__*/defineComponent({
  name: 'SampleButton' // vue component name

});

const _withId = /*#__PURE__*/withScopeId("data-v-450a2b20");

pushScopeId("data-v-450a2b20");

const _hoisted_1 = {
  class: "button"
};

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("button", _hoisted_1, [renderSlot(_ctx.$slots, "default")]);
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.button[data-v-450a2b20]{\n    background:blue;\n    color:white;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-450a2b20";

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SampleButton: script
});

// Import vue components

const install = function installSampleLib(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script as SampleButton };
