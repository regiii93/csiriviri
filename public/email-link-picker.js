(() => {
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  if (!emailLinks.length || !("HTMLDialogElement" in window)) return;

  const style = document.createElement('style');
  style.textContent = `
    .email-app-picker{width:min(440px,calc(100% - 32px));max-width:none;padding:0;border:0;background:transparent;color:#463937}
    .email-app-picker::backdrop{background:rgba(48,38,35,.48);backdrop-filter:blur(3px)}
    .email-app-picker__panel{position:relative;padding:34px;background:#fff;box-shadow:8px 8px 0 #D6C0AD}
    .email-app-picker__close{position:absolute;top:12px;right:14px;width:36px;height:36px;border:0;background:transparent;color:#463937;font-size:26px;line-height:1;cursor:pointer}
    .email-app-picker__eyebrow{margin:0 0 8px;color:#A88023;font-weight:700}
    .email-app-picker h2{margin:0 0 10px;font:400 30px/1.15 'DM Serif Display',Georgia,serif}
    .email-app-picker__copy{margin:0 0 22px;line-height:1.55}
    .email-app-picker__choices{display:grid;gap:10px}
    .email-app-picker__choices a{display:flex;justify-content:center;align-items:center;min-height:46px;padding:10px 16px;background:#463937;color:#fff;text-align:center;font-weight:700;text-decoration:none;box-shadow:4px 4px 0 #D6C0AD}
    .email-app-picker__choices a:hover,.email-app-picker__choices a:focus-visible{background:#5A4845}
    .email-app-picker__choices a[data-mail-app="default"]{background:#F5EFED;color:#463937;box-shadow:none}
    @media(max-width:500px){.email-app-picker__panel{padding:30px 22px 24px}.email-app-picker h2{font-size:27px}}
  `;
  document.head.append(style);

  const dialog = document.createElement('dialog');
  dialog.className = 'email-app-picker';
  dialog.setAttribute('aria-labelledby', 'email-app-picker-title');
  dialog.innerHTML = `
    <div class="email-app-picker__panel">
      <button class="email-app-picker__close" type="button" aria-label="Bezárás">×</button>
      <p class="email-app-picker__eyebrow">Kapcsolat</p>
      <h2 id="email-app-picker-title">Mivel nyissuk meg?</h2>
      <p class="email-app-picker__copy">Válassz levelezőprogramot az üzenet megírásához.</p>
      <div class="email-app-picker__choices">
        <a data-mail-app="gmail" target="_blank" rel="noopener">Gmail</a>
        <a data-mail-app="outlook" target="_blank" rel="noopener">Outlook</a>
        <a data-mail-app="default">Alapértelmezett levelező</a>
      </div>
    </div>`;
  document.body.append(dialog);

  const closeButton = dialog.querySelector('.email-app-picker__close');
  const gmailLink = dialog.querySelector('[data-mail-app="gmail"]');
  const outlookLink = dialog.querySelector('[data-mail-app="outlook"]');
  const defaultLink = dialog.querySelector('[data-mail-app="default"]');
  let activeLink = null;

  const closeDialog = () => {
    if (dialog.open) dialog.close();
  };

  emailLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      activeLink = link;
      const mailto = new URL(link.href);
      const address = mailto.pathname || mailto.href.replace(/^mailto:/i, '').split('?')[0];
      const recipient = encodeURIComponent(decodeURIComponent(address));
      gmailLink.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}`;
      outlookLink.href = `https://outlook.live.com/mail/0/deeplink/compose?to=${recipient}`;
      defaultLink.href = link.getAttribute('href');
      dialog.showModal();
    });
  });

  closeButton.addEventListener('click', closeDialog);
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeDialog();
  });
  dialog.addEventListener('close', () => activeLink?.focus());
  [gmailLink, outlookLink].forEach((link) => link.addEventListener('click', closeDialog));
  defaultLink.addEventListener('click', closeDialog);
})();
