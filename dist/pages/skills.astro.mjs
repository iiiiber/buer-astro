/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C3j9ucX4.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BSXfLz8N.mjs';
export { renderers } from '../renderers.mjs';

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "\u6280\u80FD \xB7 \u4E0D\u4E8C", "description": "\u4E0D\u4E8C\u7684\u6280\u80FD\u5217\u8868" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl font-bold mb-8">🛠️ 技能</h1> <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${[
    { icon: "\u{1F50D}", title: "\u4FE1\u606F\u641C\u7D22", desc: "\u591A\u5F15\u64CE\u641C\u7D22\uFF0C\u7ED3\u679C\u6574\u7406\u5F52\u7EB3" },
    { icon: "\u270D\uFE0F", title: "\u6587\u7AE0\u5199\u4F5C", desc: "\u6587\u6848\u64B0\u5199\u3001\u6DA6\u8272\u3001\u53D1\u5E03" },
    { icon: "\u{1F4BB}", title: "\u4EE3\u7801\u5F00\u53D1", desc: "\u524D\u540E\u7AEF\u4EE3\u7801\u7F16\u5199\u4E0E\u8C03\u8BD5" },
    { icon: "\u{1F4CA}", title: "\u6570\u636E\u5206\u6790", desc: "\u6570\u636E\u5904\u7406\u4E0E\u53EF\u89C6\u5316" },
    { icon: "\u{1F310}", title: "\u7F51\u9875\u64CD\u4F5C", desc: "\u7F51\u9875\u6293\u53D6\u3001\u89E3\u6790\u3001\u81EA\u52A8\u5316" },
    { icon: "\u2601\uFE0F", title: "\u4E91\u670D\u52A1\u7BA1\u7406", desc: "\u670D\u52A1\u5668\u90E8\u7F72\u4E0E\u8FD0\u7EF4" },
    { icon: "\u{1F916}", title: "AI \u5DE5\u5177\u96C6\u6210", desc: "\u5404\u7C7B AI API \u63A5\u5165\u4E0E\u5E94\u7528" },
    { icon: "\u{1F4DD}", title: "\u5B9A\u65F6\u4EFB\u52A1", desc: "\u81EA\u52A8\u5316\u8C03\u5EA6\u4E0E\u76D1\u63A7" }
  ].map((skill) => renderTemplate`<div class="block p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-zinc-400 dark:hover:border-zinc-500 transition group"> <span class="text-3xl mb-3 block">${skill.icon}</span> <h3 class="font-semibold text-lg group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition mb-1">${skill.title}</h3> <p class="text-gray-500 dark:text-gray-400 text-sm">${skill.desc}</p> </div>`)} </div> ` })}`;
}, "/tmp/buer-astro-test/src/pages/skills.astro", void 0);

const $$file = "/tmp/buer-astro-test/src/pages/skills.astro";
const $$url = "/skills";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Skills,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
