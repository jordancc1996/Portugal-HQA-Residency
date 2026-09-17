function setStatus(form: HTMLFormElement, message: string, isError = false): void {
  const status = form.querySelector<HTMLElement>('[data-form-status]');
  if (!status) return;
  status.textContent = message;
  status.classList.toggle('text-cta', isError);
  status.classList.toggle('text-text-primary', !isError);
}

function payloadFromForm(form: HTMLFormElement): Record<string, string> {
  const data = new FormData(form);
  return {
    question: String(data.get('question') ?? ''),
    firstName: String(data.get('firstName') ?? ''),
    lastName: String(data.get('lastName') ?? ''),
    email: String(data.get('email') ?? ''),
    phone: String(data.get('phone') ?? ''),
    country: String(data.get('country') ?? ''),
    linkedin: String(data.get('linkedin') ?? ''),
    goals: data.getAll('goals').map(String).join('; '),
    residencyOption: String(data.get('residencyOption') ?? ''),
    timeline: String(data.get('timeline') ?? ''),
    additional: String(data.get('additional') ?? ''),
  };
}

function formcarryAccepted(response: Response, payload: unknown): boolean {
  if (!response.ok) return false;
  if (!payload || typeof payload !== 'object') return true;
  const status = (payload as { status?: unknown }).status;
  if (typeof status !== 'string') return true;
  return status.toLowerCase() === 'success';
}

export function initInquiryForm(): void {
  const form = document.getElementById('inquiry-form') as HTMLFormElement | null;
  const success = document.getElementById('inquiry-success');
  if (!form || form.dataset.bound === 'true') return;
  form.dataset.bound = 'true';

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (String(new FormData(form).get('company') ?? '').trim()) {
      form.classList.add('hidden');
      success?.classList.remove('hidden');
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

      form.classList.add('hidden');
      success?.classList.remove('hidden');
      success?.focus();
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

initInquiryForm();
document.addEventListener('astro:page-load', initInquiryForm);
