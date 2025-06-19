'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { usePlausible } from 'next-plausible';

const PlausibleAnalytics = () => {
  const plausible = usePlausible();
  const pathname = usePathname();

  useEffect(() => {
    plausible('pageview', { props: { path: pathname } });
  }, [pathname, plausible]);

  return null; // This component doesn't render anything
};

export default PlausibleAnalytics;