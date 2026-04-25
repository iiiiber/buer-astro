/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_C3j9ucX4.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_BSXfLz8N.mjs';
import { d as documentsData } from '../../chunks/documents_BoBwmgND.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  return documentsData.documents.map((doc) => ({
    params: { id: doc.id },
    props: { doc }
  }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { doc } = Astro2.props;
  if (doc.externalUrl) {
    return Astro2.redirect(doc.externalUrl);
  }
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `${doc.title} \xB7 \u4E0D\u4E8C`, "description": doc.excerpt }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/documents" class="inline-flex items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 text-sm mb-6">
← 返回文档
</a> <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8"> <span class="text-xs text-zinc-500 dark:text-zinc-400 mb-2 block">${doc.category} · ${doc.date}</span> <h1 class="text-3xl font-bold mb-4">${doc.title}</h1> <p class="text-gray-500 dark:text-gray-400 mb-6">${doc.excerpt}</p> ${doc.feishuUrl && renderTemplate`<a${addAttribute(doc.feishuUrl, "href")} target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-zinc-500 dark:bg-zinc-600 hover:bg-zinc-600 dark:hover:bg-zinc-500 rounded-lg text-sm transition text-white mb-6">
📄 查看飞书原文
</a>`} ${doc.content && renderTemplate`<div class="prose-docs mt-6">${unescapeHTML(doc.content)}</div>`} </div> ` })} `;
}, "/tmp/buer-astro-test/src/pages/documents/[id].astro", void 0);

const $$file = "/tmp/buer-astro-test/src/pages/documents/[id].astro";
const $$url = "/documents/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
