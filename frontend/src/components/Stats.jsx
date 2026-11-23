import { useI18n } from '../i18n/index.jsx';

export default function Stats() {
  const { t } = useI18n();
  return (
    <section aria-label={t.stats.label} className="stats">
      <div className="container stats__grid">
        {t.stats.items.map((s) => (
          <div key={s.value}>
            <div className="stats__value">{s.value}</div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
