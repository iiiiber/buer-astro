/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C3j9ucX4.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BSXfLz8N.mjs';
import { d as documentsData } from '../chunks/documents_BoBwmgND.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const allDocs = documentsData.documents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const categories = [...new Set(allDocs.map((d) => d.category))];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "\u6587\u6863 \xB7 \u4E0D\u4E8C", "description": "\u4E0D\u4E8C\u7684\u6587\u6863\u4E0E\u77E5\u8BC6\u5E93" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl font-bold mb-8">📖 文档</h1> <div class="flex gap-3 flex-wrap mb-8" id="category-filters"> <button data-category="" class="cat-btn px-4 py-1.5 rounded-full bg-zinc-500 dark:bg-zinc-600 text-white text-sm transition">全部</button> ${categories.map((cat) => renderTemplate`<button${addAttribute(cat, "data-category")} class="cat-btn px-4 py-1.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700/50 transition cursor-pointer">${cat}</button>`)} </div> <div class="grid gap-4" id="doc-list"> ${allDocs.map((doc) => renderTemplate`<a${addAttribute(`/documents/${doc.id}`, "href")}${addAttribute(doc.category, "data-category")} class="doc-card block p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-zinc-400 dark:hover:border-zinc-500 transition group"> <span class="text-xs text-zinc-500 dark:text-zinc-400 mb-1 block">${doc.category} · ${doc.date}</span> <h3 class="font-semibold group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition">${doc.title}</h3> <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">${doc.excerpt}</p> </a>`)} </div>  ` })}`;
}, "/tmp/buer-astro-test/src/pages/documents/index.astro", void 0);

const $$file = "/tmp/buer-astro-test/src/pages/documents/index.astro";
const $$url = "/documents";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
