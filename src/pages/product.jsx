import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ChevronRight,
  Search,
  ShieldCheck,
  Truck,
  LifeBuoy,
  ArrowUpRight,
  Layers,
  PackageSearch,
  X,
  HelpCircle,
} from 'lucide-react';
import products from '../productData.js';
import AnimatedText from '../components/animatedText';
import '../index.css';

const deriveCategory = (name = '') => {
  const n = name.toLowerCase();
  if (n.includes('centrifuge')) return 'Centrifugation';
  if (
    n.includes('freezer') ||
    n.includes('refrigerator') ||
    n.includes('chiller')
  )
    return 'Cold Storage';
  if (n.includes('autoclave') || n.includes('sterilizer'))
    return 'Sterilization';
  if (n.includes('spectrophotometer')) return 'Spectroscopy';
  if (n.includes('ph') || n.includes('meter')) return 'Measurement';
  if (n.includes('nitrogen')) return 'Cryogenics';
  if (n.includes('incubator')) return 'Incubation';
  return 'Lab Equipment';
};

const slugify = (s) => s.replace(/\s+/g, '-').toLowerCase();

const trustItems = [
  {
    icon: <ShieldCheck size={22} />,
    title: 'Certified Quality',
    text: 'ISO-certified, fully documented, audit-ready.',
  },
  {
    icon: <Truck size={22} />,
    title: 'Fast US Delivery',
    text: 'Regional warehouses with 48h emergency dispatch.',
  },
  {
    icon: <LifeBuoy size={22} />,
    title: '24/7 Technical Support',
    text: 'US-based engineers — never an auto-reply.',
  },
];

const Products = () => {
  const navigate = useNavigate();
  const [activeCat, setActiveCat] = useState('All');
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const categoryCounts = useMemo(() => {
    const counts = { All: products.length };
    for (const p of products) {
      const c = deriveCategory(p.name);
      counts[c] = (counts[c] || 0) + 1;
    }
    return counts;
  }, []);

  const categories = useMemo(
    () => ['All', ...Object.keys(categoryCounts).filter((c) => c !== 'All')],
    [categoryCounts]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = products.filter((p) => {
      const matchCat =
        activeCat === 'All' || deriveCategory(p.name) === activeCat;
      const matchQuery = !q || p.name.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });

    if (sortBy === 'name-asc') {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      list = [...list].sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'category') {
      list = [...list].sort((a, b) =>
        deriveCategory(a.name).localeCompare(deriveCategory(b.name))
      );
    }
    return list;
  }, [activeCat, query, sortBy]);

  const resetFilters = () => {
    setActiveCat('All');
    setQuery('');
    setSortBy('default');
  };

  const isFiltered =
    activeCat !== 'All' || query.trim() !== '' || sortBy !== 'default';

  return (
    <>
      <section className='it-page-hero'>
        <div className='container'>
          <AnimatedText>
            <nav className='it-breadcrumb mb-3'>
              <Link to='/'>Home</Link>
              <ChevronRight size={14} className='it-breadcrumb-sep' />
              <span className='current'>Products</span>
            </nav>
          </AnimatedText>

          <div className='row align-items-end g-4'>
            <div className='col-lg-7'>
              <AnimatedText delay={0.05}>
                <span className='it-eyebrow dark mb-3'>Product Catalog</span>
              </AnimatedText>
              <AnimatedText delay={0.1}>
                <h1 className='display-4 mb-3'>
                  Precision <span className='accent'>Lab Equipment</span>
                  <br />
                  for Modern Research
                </h1>
              </AnimatedText>
              <AnimatedText delay={0.18}>
                <p className='lead mb-0' style={{ maxWidth: '620px' }}>
                  Browse our full catalog of certified instruments — every
                  unit backed by US-based technical support, full
                  documentation, and rapid logistics.
                </p>
              </AnimatedText>
            </div>

            <div className='col-lg-5'>
              <div className='row g-3'>
                <div className='col-6'>
                  <AnimatedText>
                    <div
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.14)',
                        borderRadius: '12px',
                        padding: '1rem',
                      }}
                    >
                      <div
                        style={{
                          color: '#fff',
                          fontWeight: 800,
                          fontSize: '1.6rem',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {products.length}+
                      </div>
                      <div
                        style={{
                          color: 'rgba(255,255,255,0.7)',
                          fontSize: '0.78rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          marginTop: '0.25rem',
                        }}
                      >
                        Products in Catalog
                      </div>
                    </div>
                  </AnimatedText>
                </div>
                <div className='col-6'>
                  <AnimatedText delay={0.05}>
                    <div
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.14)',
                        borderRadius: '12px',
                        padding: '1rem',
                      }}
                    >
                      <div
                        style={{
                          color: '#fff',
                          fontWeight: 800,
                          fontSize: '1.6rem',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {Object.keys(categoryCounts).length - 1}
                      </div>
                      <div
                        style={{
                          color: 'rgba(255,255,255,0.7)',
                          fontSize: '0.78rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          marginTop: '0.25rem',
                        }}
                      >
                        Categories
                      </div>
                    </div>
                  </AnimatedText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className='py-4 bg-white'
        style={{ borderBottom: '1px solid var(--it-border)' }}
      >
        <div className='container'>
          <div className='row g-3'>
            {trustItems.map((t, i) => (
              <div key={i} className='col-md-4'>
                <AnimatedText delay={0.05 * i}>
                  <div className='d-flex align-items-center gap-3'>
                    <div
                      className='rounded-3 d-flex align-items-center justify-content-center flex-shrink-0'
                      style={{
                        width: '46px',
                        height: '46px',
                        background: 'var(--it-blue-soft)',
                        color: 'var(--it-blue)',
                      }}
                    >
                      {t.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          color: 'var(--it-ink)',
                          fontSize: '0.98rem',
                        }}
                      >
                        {t.title}
                      </div>
                      <div
                        style={{
                          color: 'var(--it-muted)',
                          fontSize: '0.85rem',
                        }}
                      >
                        {t.text}
                      </div>
                    </div>
                  </div>
                </AnimatedText>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='it-section-pad it-section-soft'>
        <div className='container'>
          <div className='row align-items-center g-3 mb-4'>
            <div className='col-lg-6'>
              <AnimatedText>
                <span className='it-eyebrow mb-3'>
                  <Layers size={13} /> Browse by Category
                </span>
              </AnimatedText>
              <AnimatedText delay={0.08}>
                <h2 className='display-6 it-heading mb-0'>
                  Find the right{' '}
                  <span className='it-heading-grad'>instrument</span>
                </h2>
              </AnimatedText>
            </div>
            <div className='col-lg-6'>
              <AnimatedText delay={0.1}>
                <div className='it-search-wrap ms-lg-auto'>
                  <Search size={16} />
                  <input
                    type='text'
                    placeholder='Search by name or model...'
                    className='it-search-input'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
              </AnimatedText>
            </div>
          </div>

          <AnimatedText delay={0.1}>
            <div className='it-filter-bar mb-4'>
              {categories.map((c) => (
                <button
                  key={c}
                  className={`it-filter-pill ${
                    activeCat === c ? 'active' : ''
                  }`}
                  onClick={() => setActiveCat(c)}
                  type='button'
                >
                  {c}
                  <span className='count'>{categoryCounts[c]}</span>
                </button>
              ))}
            </div>
          </AnimatedText>

          <div className='d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4'>
            <div className='it-result-count'>
              Showing <strong>{filtered.length}</strong> of{' '}
              <strong>{products.length}</strong>{' '}
              {filtered.length === 1 ? 'product' : 'products'}
              {activeCat !== 'All' ? (
                <>
                  {' '}
                  in <strong>{activeCat}</strong>
                </>
              ) : null}
              {query ? (
                <>
                  {' '}
                  matching <strong>&ldquo;{query}&rdquo;</strong>
                </>
              ) : null}
            </div>
            <div className='d-flex align-items-center gap-2'>
              {isFiltered && (
                <button
                  type='button'
                  className='btn-it-secondary'
                  onClick={resetFilters}
                >
                  <X size={14} />
                  Clear filters
                </button>
              )}
              <label
                htmlFor='sort'
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--it-muted)',
                  fontWeight: 600,
                }}
              >
                Sort:
              </label>
              <select
                id='sort'
                className='it-sort-select'
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value='default'>Featured</option>
                <option value='name-asc'>Name (A → Z)</option>
                <option value='name-desc'>Name (Z → A)</option>
                <option value='category'>Category</option>
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className='it-empty-state'>
              <div className='it-empty-state-icon'>
                <PackageSearch size={28} />
              </div>
              <h3
                style={{
                  fontWeight: 700,
                  color: 'var(--it-ink)',
                  fontSize: '1.2rem',
                  marginBottom: '0.5rem',
                }}
              >
                No products match your filters
              </h3>
              <p
                style={{
                  color: 'var(--it-muted)',
                  marginBottom: '1.5rem',
                }}
              >
                Try a different search term or category — or contact our team
                for sourcing.
              </p>
              <div className='d-flex justify-content-center gap-2 flex-wrap'>
                <button
                  type='button'
                  className='btn-it-secondary'
                  onClick={resetFilters}
                >
                  <X size={14} />
                  Reset filters
                </button>
                <button
                  type='button'
                  className='btn-it-primary'
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Contact our team
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ) : (
            <div className='row g-4'>
              {filtered.map((product, i) => (
                <div key={product.id} className='col-xl-3 col-lg-4 col-md-6'>
                  <AnimatedText delay={0.03 * (i % 8)}>
                    <div
                      className='it-product-card'
                      onClick={() =>
                        navigate(`/products/${slugify(product.name)}`)
                      }
                      role='button'
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter')
                          navigate(`/products/${slugify(product.name)}`);
                      }}
                    >
                      <div className='it-product-media'>
                        <span className='it-product-badge'>
                          {deriveCategory(product.name)}
                        </span>
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className='it-product-body'>
                        <div className='it-product-title'>{product.name}</div>
                        <div className='it-product-meta'>
                          {product.specs?.Model || 'View specifications'}
                        </div>
                        <span className='it-product-cta'>
                          View Details
                          <ArrowUpRight size={15} />
                        </span>
                      </div>
                    </div>
                  </AnimatedText>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className='py-5 bg-white'>
        <div className='container'>
          <AnimatedText>
            <div
              className='rounded-4 p-4 p-lg-5 d-flex flex-column flex-lg-row align-items-lg-center gap-4'
              style={{
                background:
                  'linear-gradient(135deg, var(--it-blue-soft) 0%, #fff 100%)',
                border: '1px solid var(--it-border)',
              }}
            >
              <div
                className='rounded-3 d-flex align-items-center justify-content-center flex-shrink-0'
                style={{
                  width: '64px',
                  height: '64px',
                  background:
                    'linear-gradient(135deg, #0066cc 0%, #0a1f44 100%)',
                  color: '#fff',
                }}
              >
                <HelpCircle size={28} />
              </div>
              <div className='flex-grow-1'>
                <div
                  style={{
                    fontWeight: 800,
                    color: 'var(--it-ink)',
                    fontSize: '1.25rem',
                    letterSpacing: '-0.01em',
                    marginBottom: '0.35rem',
                  }}
                >
                  Don&apos;t see what you need?
                </div>
                <div
                  style={{
                    color: 'var(--it-muted)',
                    fontSize: '0.98rem',
                    lineHeight: 1.6,
                  }}
                >
                  Our team can source virtually any lab instrument with full
                  technical and warranty backing. Tell us what your lab needs
                  — we&apos;ll come back within 24 hours.
                </div>
              </div>
              <button
                className='btn-it-primary flex-shrink-0'
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Request Custom Quote
                <ArrowUpRight size={16} />
              </button>
            </div>
          </AnimatedText>
        </div>
      </section>
    </>
  );
};

export default Products;
