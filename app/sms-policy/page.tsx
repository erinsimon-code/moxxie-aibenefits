import { redirect } from 'next/navigation';

export default function SmsPolicyRedirect() {
  redirect('/sms-terms');
}
