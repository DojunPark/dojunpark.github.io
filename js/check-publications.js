document.querySelector('iframe').addEventListener('load', function () {
  try {
    const d = this.contentDocument;
    const check = (value, label) => { if (!value) throw new Error(label); console.log('PASS: ' + label); };
    const visible = () => [...d.querySelectorAll('.publication-entry')].filter(p => !p.hidden);
    check(d.querySelectorAll('[data-publication-filter]').length === 4, 'Four filter buttons');
    for (const [filter, total, label] of [['all', 8, '8 publications'], ['conference', 4, '4 conference papers'], ['journal', 2, '2 journal articles'], ['preprint', 2, '2 preprints'], ['all', 8, '8 publications']]) {
      const button = d.querySelector('[data-publication-filter="' + filter + '"]');
      button.click();
      check(visible().length === total, filter + ' count');
      check(d.getElementById('publication-count').textContent === label, filter + ' status');
      check(button.getAttribute('aria-pressed') === 'true' && d.querySelectorAll('.publication-filters [aria-pressed="true"]').length === 1, filter + ' selection state');
      if (filter !== 'all') check(visible().every(p => p.dataset.publicationType === filter || (filter === 'conference' && p.dataset.publicationType === 'workshop')), filter + ' correct category');
      if (filter === 'conference') check(visible().some(p => p.textContent.includes('MultiPragEval') && p.textContent.includes('Workshop')), 'Workshop included and correctly labelled');
    }
    check(!d.body.textContent.includes('Publication status as listed in my CV'), 'No CV disclaimer');
    document.getElementById('result').textContent = 'Complete';
  } catch (e) { console.error('FAIL: ' + e.message); }
});
