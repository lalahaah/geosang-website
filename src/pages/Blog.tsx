import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const allPosts = [
  {
    category: '지속가능성',
    date: '2026년 3월 15일',
    title: '투명한 자원순환 시스템을 구축하는 방법',
    excerpt: '데이터 기반의 자원순환 프로세스가 기업의 비용을 절감하고 ESG 목표 달성에 어떻게 기여하는지 살펴봅니다.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800',
  },
  {
    category: '기술',
    date: '2026년 3월 10일',
    title: 'AI가 폐기물 관리와 경로 최적화에 미치는 영향',
    excerpt: '인공지능 알고리즘이 수거 차량의 경로를 최적화하고 물류 비용을 20% 이상 절감하는 실제 사례를 소개합니다.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  },
  {
    category: '비즈니스',
    date: '2026년 3월 5일',
    title: '재활용 자원의 경제적 가치를 극대화하는 전략',
    excerpt: '글로벌 원자재 시세와 연동된 스마트 매입 시스템이 어떻게 수익성을 높이는지 분석합니다.',
    image: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=800',
  },
  {
    category: 'ESG',
    date: '2026년 2월 28일',
    title: '2026 ESG 공시 의무화, 기업이 지금 준비해야 할 것',
    excerpt: 'GRI·SASB 기준에 맞는 ESG 보고서 작성을 위해 자원순환 데이터를 어떻게 활용할 수 있는지 안내합니다.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    category: '자원순환',
    date: '2026년 2월 20일',
    title: '폐지 한 톤을 재활용하면 얼마나 많은 나무를 살릴 수 있을까',
    excerpt: '1톤의 폐지를 재생 원료로 전환했을 때 발생하는 환경적 이익을 수치로 계산해 드립니다.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
  },
  {
    category: '회사소식',
    date: '2026년 2월 10일',
    title: '거상자원, IoT 기반 스마트 계근 시스템 전국 도입 완료',
    excerpt: '전국 12개 거점에 IoT 계근 시스템을 성공적으로 구축하며 실시간 데이터 기반 자원관리 시대를 열었습니다.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
  },
  {
    category: '기술',
    date: '2026년 1월 30일',
    title: '블록체인으로 자원 이력을 추적하는 시대',
    excerpt: '폐기물 발생부터 최종 재활용까지 모든 단계를 블록체인에 기록하면 어떤 변화가 일어나는지 설명합니다.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
  },
  {
    category: 'ESG',
    date: '2026년 1월 22일',
    title: '탄소 배출권 시장과 자원순환 기업의 기회',
    excerpt: '탄소 중립 목표가 강화되는 가운데, 자원순환 기업이 탄소 배출권 시장에서 어떤 역할을 할 수 있는지 살펴봅니다.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
  },
  {
    category: '비즈니스',
    date: '2026년 1월 15일',
    title: '중소 제조업체를 위한 폐기물 관리 비용 절감 가이드',
    excerpt: '연간 수백만 원의 폐기물 처리 비용을 절감하고 오히려 수익으로 전환하는 실전 전략을 공개합니다.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
  },
];

const categories = ['전체', '지속가능성', '기술', '비즈니스', 'ESG', '자원순환', '회사소식'];
const PAGE_SIZE = 6;

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = selectedCategory === '전체'
    ? allPosts
    : allPosts.filter(p => p.category === selectedCategory);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div className="flex flex-col w-full font-display bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 bg-[#093944] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] flex items-center pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(0,194,181,0.3),transparent_60%)]" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-geosang-teal text-sm font-medium uppercase tracking-[0.25em] mb-6"
          >
            Insights & Stories
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-light text-white leading-[1.1] mb-6"
          >
            거상자원 블로그
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 font-light max-w-xl"
          >
            자원순환, 기술, ESG — 업계의 인사이트를 전합니다.
          </motion.p>
        </div>
      </section>

      {/* ── Category Filter ── */}
      <div className="sticky top-[72px] z-30 bg-white border-b border-slate-100 shadow-sm">
        <div className="container-custom">
          <div className="flex items-center gap-2 py-4 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-geosang-deep text-white'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
            {selectedCategory !== '전체' && (
              <button
                onClick={() => handleCategoryChange('전체')}
                className="shrink-0 px-4 py-2 rounded-full text-sm text-geosang-teal border border-geosang-teal/30 hover:bg-geosang-teal/10 transition-all"
              >
                초기화
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Post Grid ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {visible.length === 0 ? (
            <div className="text-center py-24 text-slate-400 font-light text-lg">
              해당 카테고리의 포스트가 없습니다.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {visible.map((post, i) => (
                <motion.div
                  key={`${post.title}-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i % PAGE_SIZE) * 0.07 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-geosang-deep">
                      {post.category}
                    </div>
                  </div>
                  <div className="text-slate-400 text-xs font-medium mb-3 tracking-widest uppercase">{post.date}</div>
                  <h3 className="text-xl font-light text-geosang-deep mb-4 group-hover:text-geosang-teal transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed mb-5 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium border-b-2 border-slate-200 group-hover:border-geosang-teal transition-all pb-1 text-geosang-deep group-hover:text-geosang-teal">
                    읽어보기 <ExternalLink size={13} />
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* More stories */}
          {hasMore && (
            <div className="text-center mt-16">
              <button
                onClick={() => setVisibleCount(v => v + PAGE_SIZE)}
                className="px-10 py-4 border border-geosang-deep text-geosang-deep hover:bg-geosang-deep hover:text-white rounded-full text-base font-medium transition-all flex items-center gap-2 mx-auto group"
              >
                더 많은 포스트 보기
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="section-padding bg-[#093944] relative overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[700px] rounded-full bg-geosang-teal/5 blur-3xl" />
        </div>
        <div className="container-custom relative z-10 text-center py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-10 leading-tight">
              함께 <span className="text-geosang-teal italic">미래</span>로<br />
              나아갈 준비가 되셨나요?
            </h2>
            <p className="text-xl text-white/60 font-light mb-12">
              거상자원의 자원순환 전문 팀이 귀사의 문제를 해결합니다.
            </p>
            <button
              onClick={() => window.location.hash = 'get-started'}
              className="px-12 py-5 bg-geosang-teal hover:bg-[#008f84] text-white font-bold rounded-full text-xl transition-all shadow-2xl shadow-geosang-teal/20 active:scale-95 flex items-center gap-3 mx-auto"
            >
              문의하기 <ArrowRight size={24} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
