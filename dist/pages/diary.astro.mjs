/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C3j9ucX4.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BSXfLz8N.mjs';
import { d as diaryData } from '../chunks/diary_BMgBKoQx.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const allDiary = diaryData.diary.filter((d) => !d.isDraft).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const categories = [...new Set(allDiary.map((d) => d.category))];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "\u65E5\u8BB0 \xB7 \u4E0D\u4E8C", "description": "\u4E0D\u4E8C\u7684\u6210\u957F\u65E5\u8BB0" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl font-bold mb-8">✍️ 日记</h1> <div class="flex gap-3 flex-wrap mb-8"> <span class="px-4 py-1.5 rounded-full bg-emerald-500 dark:bg-emerald-600 text-white dark:text-white text-sm">全部</span> ${categories.map((cat) => renderTemplate`<span class="px-4 py-1.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm hover:bg-pink-100 dark:hover:bg-pink-900/50 transition cursor-pointer">${cat}</span>`)} </div> <div class="grid gap-4"> ${allDiary.map((entry) => renderTemplate`<a${addAttribute(`/diary/${entry.id}`, "href")} class="block p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-emerald-400 dark:hover:border-emerald-500 transition group"> <div class="flex items-start justify-between gap-4"> <div class="flex-1"> <span class="text-xs text-emerald-500 dark:text-emerald-400 mb-1 block">${entry.date} · ${entry.category}</span> <h3 class="font-semibold group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition">${entry.title}</h3> <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">${entry.excerpt}</p> </div> ${entry.isMilestone && renderTemplate`<span class="text-yellow-500 text-xl">🏆</span>`} </div> </a>`)} </div> ` })}`;
}, "/tmp/buer-astro-test/src/pages/diary/index.astro", void 0);

const $$file = "/tmp/buer-astro-test/src/pages/diary/index.astro";
const $$url = "/diary";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
