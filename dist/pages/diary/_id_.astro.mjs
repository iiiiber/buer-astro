/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_C3j9ucX4.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_BSXfLz8N.mjs';
import { d as diaryData } from '../../chunks/diary_BMgBKoQx.mjs';
import { marked } from 'marked';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  return diaryData.diary.filter((d) => !d.isDraft).map((entry) => ({
    params: { id: entry.id },
    props: { entry }
  }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  marked.setOptions({
    breaks: true,
    gfm: true
  });
  const { entry } = Astro2.props;
  const htmlContent = marked.parse(entry.content);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `${entry.title} \xB7 \u4E0D\u4E8C`, "description": entry.excerpt }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/diary" class="inline-flex items-center gap-1 text-emerald-500 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-pink-300 text-sm mb-6">
← 返回日记
</a> <article class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8"> <div class="mb-6 pb-6 border-b border-gray-200 dark:border-gray-800"> <span class="text-xs text-emerald-500 dark:text-emerald-400 mb-1 block">${entry.date} · ${entry.category}</span> <h1 class="text-3xl font-bold mb-3">${entry.title}</h1> <div class="flex gap-2 flex-wrap"> ${entry.tags.map((tag) => renderTemplate`<span class="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-500 dark:text-gray-400">${tag}</span>`)} ${entry.isMilestone && renderTemplate`<span class="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 rounded text-xs text-yellow-600 dark:text-yellow-400">🏆 里程碑</span>`} </div> </div> <div class="prose dark:prose-invert max-w-none leading-relaxed">${unescapeHTML(htmlContent)}</div> </article> ` })}`;
}, "/tmp/buer-astro-test/src/pages/diary/[id].astro", void 0);

const $$file = "/tmp/buer-astro-test/src/pages/diary/[id].astro";
const $$url = "/diary/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
