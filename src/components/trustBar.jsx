import {
  ShieldCheck,
  BadgeCheck,
  FileCheck2,
  Truck,
  Headphones,
  Globe2,
} from 'lucide-react';

const trustItems = [
  { icon: <ShieldCheck size={18} />, label: 'ISO 9001 Certified' },
  { icon: <BadgeCheck size={18} />, label: 'CE Marked' },
  { icon: <FileCheck2 size={18} />, label: 'FDA Compliant' },
  { icon: <Truck size={18} />, label: '48h Emergency Dispatch' },
  { icon: <Headphones size={18} />, label: 'US-Based Support' },
  { icon: <Globe2 size={18} />, label: 'Worldwide Shipping' },
];

const TrustBar = () => {
  return (
    <section className='trust-bar' aria-label='Certifications and guarantees'>
      <div className='container'>
        <div className='d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center gap-2 gap-md-3'>
          {trustItems.map((item, i) => (
            <div key={i} className='trust-pill'>
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
