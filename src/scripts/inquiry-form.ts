function setStatus(form: HTMLFormElement, message: string, isError = false): void {
  const status = form.querySelector<HTMLElement>('[data-form-status]');
  if (!status) return;
  status.textContent = message;
  status.classList.toggle('text-cta', isError);
  status.classList.toggle('text-text-primary', !isError);
}

function payloadFromForm(form: HTMLFormElement): Record<string, string> {
  const data = new FormData(form);
  const payload: Record<string, string> = {};

  for (const [key, value] of data.entries()) {
    if (key === 'company') continue;
    const next = String(value);
    payload[key] = payload[key] ? `${payload[key]}; ${next}` : next;
  }

  return payload;
}

function formcarryAccepted(response: Response, payload: unknown): boolean {
  if (!response.ok) return false;
  if (!payload || typeof payload !== 'object') return true;
  const status = (payload as { status?: unknown }).status;
  if (typeof status !== 'string') return true;
  return status.toLowerCase() === 'success';
}

function showSuccess(form: HTMLFormElement): void {
  const inline = form.parentElement?.querySelector<HTMLElement>('[data-intake-success]');
  if (form.dataset.successMode === 'inline' && inline) {
    form.classList.add('hidden');
    inline.classList.remove('hidden');
    inline.focus();
    return;
  }

  const success = document.getElementById('inquiry-success');
  form.classList.add('hidden');
  success?.classList.remove('hidden');
  success?.focus();
}

function bindInquiryForm(form: HTMLFormElement): void {
  if (form.dataset.bound === 'true') return;
  form.dataset.bound = 'true';

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (String(new FormData(form).get('company') ?? '').trim()) {
      showSuccess(form);
      return;
    }
    if (!form.reportValidity()) {
      setStatus(form, 'Complete the required fields before sending.', true);
      return;
    }

    const endpoint = form.dataset.endpoint?.trim() ?? '';
    const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (submit) submit.disabled = true;
    setStatus(form, 'Sending your inquiry.', false);

    const body = payloadFromForm(form);

    try {
      if (!endpoint) {
        throw new Error('missing-endpoint');
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      let parsed: unknown = null;
      try {
        parsed = await response.json();
      } catch {
        parsed = null;
      }

      if (!formcarryAccepted(response, parsed)) {
        throw new Error('request-failed');
      }

      showSuccess(form);
    } catch {
      setStatus(
        form,
        endpoint
          ? 'The inquiry could not be sent. Try again, or write through your existing advisory channel.'
          : 'Inquiry delivery is not configured on this site yet. Set PUBLIC_INQUIRY_ENDPOINT, then rebuild.',
        true,
      );
    } finally {
      if (submit) submit.disabled = false;
    }
  });
}

export function initInquiryForm(): void {
  document.querySelectorAll<HTMLFormElement>('[data-inquiry-form]').forEach(bindInquiryForm);
}

initInquiryForm();
document.addEventListener('astro:page-load', initInquiryForm);
